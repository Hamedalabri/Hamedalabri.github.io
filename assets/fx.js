/* Visual effects: starfield background + rotating wireframe globe in the hero.
   Purely decorative; safe to delete this file if you want a calmer page. */
(function(){
  const still=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  const DPR=Math.min(window.devicePixelRatio||1,2);

  /* ---------- stars ---------- */
  const sc=document.getElementById("stars");
  let stars=[];
  function sizeStars(){
    if(!sc)return;
    sc.width=innerWidth*DPR; sc.height=innerHeight*DPR;
    const n=Math.round(innerWidth*innerHeight/6500);
    stars=Array.from({length:n},()=>({x:Math.random()*sc.width,y:Math.random()*sc.height,r:(Math.random()*1.1+.3)*DPR,p:Math.random()*Math.PI*2}));
  }
  /* mouse: nearby stars light up and link to the cursor and to each other */
  const mouse={x:-9999,y:-9999,on:false};
  let C1="141,236,174",C2="69,212,230",CS="220,235,255";
  function readColors(){const cs=getComputedStyle(document.documentElement);C1=cs.getPropertyValue("--mint-rgb").trim()||C1;C2=cs.getPropertyValue("--cyan-rgb").trim()||C2;CS=cs.getPropertyValue("--star-rgb").trim()||CS;}
  readColors();addEventListener("themechange",readColors);
  const spot=document.createElement("div");spot.className="spot";document.body.appendChild(spot);
  if(!still){
    addEventListener("pointermove",e=>{
      if(e.pointerType!=="mouse")return;
      mouse.x=e.clientX*DPR;mouse.y=e.clientY*DPR;mouse.on=true;
      spot.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;spot.classList.add("on");
      if(document.documentElement.dataset.look==="coast")parallax(e.clientX,e.clientY);
    },{passive:true});
    document.addEventListener("mouseleave",()=>{mouse.on=false;spot.classList.remove("on");parallax(innerWidth/2,innerHeight/2);});
  }
  /* ---------- coast theme: the hero scene shifts in depth with the mouse ---------- */
  const scene=document.querySelector(".om-scene");
  function parallax(x,y){
    if(!scene)return;
    scene.style.setProperty("--px",((x/innerWidth)*2-1).toFixed(3));
    scene.style.setProperty("--py",((y/innerHeight)*2-1).toFixed(3));
  }

  function drawStars(t){
    if(!sc)return;
    if(document.documentElement.dataset.look==="coast"){sc.getContext("2d").clearRect(0,0,sc.width,sc.height);return;}
    const c=sc.getContext("2d"); c.clearRect(0,0,sc.width,sc.height);
    const R=170*DPR, near=[];
    /* slight parallax: stars drift away from the cursor */
    const px=mouse.on?(mouse.x-sc.width/2)*-.012:0, py=mouse.on?(mouse.y-sc.height/2)*-.012:0;
    for(const s of stars){
      const x=s.x+px*s.r, y=s.y+py*s.r;
      let a=.25+.35*(.5+.5*Math.sin(t/1400+s.p));
      if(mouse.on){const d=Math.hypot(x-mouse.x,y-mouse.y);if(d<R){const k=1-d/R;a=Math.min(1,a+k*.8);near.push([x,y,k]);}}
      c.fillStyle=`rgba(${CS},${a})`; c.beginPath(); c.arc(x,y,s.r*(1+(a>.7?.4:0)),0,6.283); c.fill();
    }
    if(near.length){
      c.lineWidth=1*DPR;
      for(const [x,y,k] of near){c.strokeStyle=`rgba(${C1},${k*.55})`;c.beginPath();c.moveTo(x,y);c.lineTo(mouse.x,mouse.y);c.stroke();}
      for(let i=0;i<near.length;i++)for(let j=i+1;j<near.length;j++){
        const [x1,y1,k1]=near[i],[x2,y2,k2]=near[j],d=Math.hypot(x1-x2,y1-y2);
        if(d<110*DPR){c.strokeStyle=`rgba(${C2},${Math.min(k1,k2)*.45*(1-d/(110*DPR))})`;c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();}
      }
      c.fillStyle=`rgba(${C1},.9)`;c.beginPath();c.arc(mouse.x,mouse.y,2.5*DPR,0,6.283);c.fill();
    }
  }

  /* ---------- globe ---------- */
  const gc=document.getElementById("globe");
  const MINT=[141,236,174], CYAN=[69,212,230];
  function sizeGlobe(){ if(!gc)return; const r=gc.getBoundingClientRect(); gc.width=r.width*DPR; gc.height=r.height*DPR; }
  function proj(lat,lon,rot,tilt,R,cx,cy){
    let x=Math.cos(lat)*Math.sin(lon+rot), y=Math.sin(lat), z=Math.cos(lat)*Math.cos(lon+rot);
    const y2=y*Math.cos(tilt)-z*Math.sin(tilt), z2=y*Math.sin(tilt)+z*Math.cos(tilt);
    return [cx+x*R, cy-y2*R, z2];
  }
  function line(c,pts,col){
    for(let i=1;i<pts.length;i++){
      const a=pts[i-1],b=pts[i],z=(a[2]+b[2])/2;
      c.strokeStyle=`rgba(${col},${z>0?.55+.35*z:.08+.1*(1+z)})`;
      c.beginPath(); c.moveTo(a[0],a[1]); c.lineTo(b[0],b[1]); c.stroke();
    }
  }
  function drawGlobe(t){
    if(!gc||!gc.width||document.querySelector(".globe-wrap.is-3d"))return;
    const c=gc.getContext("2d"), W=gc.width, H=gc.height, cx=W/2, cy=H/2, R=Math.min(W,H)*.34;
    const rot=t/9000, tilt=.35, col=MINT.join(",");
    c.clearRect(0,0,W,H); c.lineWidth=1*DPR;
    for(let la=-75;la<=75;la+=15){const lat=la*Math.PI/180,p=[];for(let lo=0;lo<=360;lo+=6)p.push(proj(lat,lo*Math.PI/180,rot,tilt,R,cx,cy));line(c,p,col);}
    for(let lo=0;lo<180;lo+=15){const lon=lo*Math.PI/180,p=[];for(let la=0;la<=360;la+=6)p.push(proj(la*Math.PI/180,lon,rot,tilt,R,cx,cy));line(c,p,col);}
    /* orbit rings */
    c.lineWidth=1.2*DPR;
    [[1.32,.28,-.25,CYAN],[1.18,.95,.6,MINT]].forEach(([k,flat,ang,rgb],i)=>{
      c.save(); c.translate(cx,cy); c.rotate(ang+(still?0:Math.sin(t/7000+i)*.05));
      c.strokeStyle=`rgba(${rgb.join(",")},.35)`; c.beginPath(); c.ellipse(0,0,R*k,R*k*flat,0,0,6.283); c.stroke();
      /* node travelling on the ring */
      const a=t/(2600+i*900)+i*2; const nx=Math.cos(a)*R*k, ny=Math.sin(a)*R*k*flat;
      c.fillStyle=`rgba(${rgb.join(",")},.95)`; c.shadowColor=`rgba(${rgb.join(",")},.9)`; c.shadowBlur=12*DPR;
      c.beginPath(); c.arc(nx,ny,3.2*DPR,0,6.283); c.fill(); c.restore();
    });
    /* fixed diamond markers */
    c.fillStyle="rgba(230,240,255,.55)";
    [[.08,.12],[.86,.18],[.92,.55],[.12,.62],[.7,.86]].forEach(([fx,fy])=>{
      const x=W*fx,y=H*fy,s=5*DPR; c.beginPath(); c.moveTo(x,y-s); c.lineTo(x+s,y); c.lineTo(x,y+s); c.lineTo(x-s,y); c.closePath(); c.fill();
    });
  }

  function frame(t){ drawStars(t); drawGlobe(t); if(!still) requestAnimationFrame(frame); }
  function resize(){ sizeStars(); sizeGlobe(); if(still) frame(0); }
  addEventListener("resize",resize);
  /* globe canvas is inside the home view; re-measure when it becomes visible */
  addEventListener("hashchange",()=>setTimeout(sizeGlobe,0));
  resize();
  if(!still) requestAnimationFrame(frame);
})();
