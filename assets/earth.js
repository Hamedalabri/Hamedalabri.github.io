/* 3D Earth in the hero (three.js r128, loaded from cdnjs in index.html).
   - continents drawn from assets/land.js onto a texture
   - lighting, atmosphere glow, 23.4° axial tilt, orbit rings and a textured Moon
   - pins on Colmar and Muscat with an animated link between them
   - drag to spin; auto-rotates; still image if the visitor prefers reduced motion
   If three.js fails to load, fx.js falls back to the 2D wireframe globe. */
(function(){
  if(!window.THREE||typeof LAND==="undefined")return;
  const wrap=document.querySelector(".globe-wrap");
  if(!wrap)return;
  const still=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  const D=Math.PI/180;

  /* ---------- palette ---------- */
  const PAL={
    default:{ocean:["#0b2238","#0d3557","#0b2238"],land:["#e8f3ef","#b9dcc6","#5fae7f","#3f9d6c","#5fae7f","#b9dcc6","#f2f7f5"],
             coast:"rgba(141,236,174,.55)",grid:"rgba(141,236,174,.10)",atmo:[0.42,0.92,0.75],rim:0x45d4e6,pin:0xf2c26b,arc:0xf2c26b,rings:[0x45d4e6,0x8decae]}
  };
  const modeName=()=>"default";

  /* ---------- texture ---------- */
  function makeTexture(p){
    const W=2048,H=1024,c=document.createElement("canvas");c.width=W;c.height=H;
    const g=c.getContext("2d");
    const ocean=g.createLinearGradient(0,0,0,H);
    ocean.addColorStop(0,p.ocean[0]);ocean.addColorStop(.5,p.ocean[1]);ocean.addColorStop(1,p.ocean[2]);
    g.fillStyle=ocean;g.fillRect(0,0,W,H);
    /* land, coloured by latitude */
    const land=g.createLinearGradient(0,0,0,H);
    [0,.14,.3,.5,.7,.86,1].forEach((o,i)=>land.addColorStop(o,p.land[i]));
    g.fillStyle=land;
    const X=lon=>(lon+180)/360*W, Y=lat=>(90-lat)/180*H;
    const trace=(r,off)=>{g.beginPath();g.moveTo(X(r[0]+off),Y(r[1]));for(let i=2;i<r.length;i+=2)g.lineTo(X(r[i]+off),Y(r[i+1]));g.closePath();};
    for(const r of LAND)for(const off of [-360,0,360]){trace(r,off);g.fill();}
    /* coastline glow */
    g.strokeStyle=p.coast;g.lineWidth=1.5;
    for(const r of LAND)for(const off of [-360,0,360]){trace(r,off);g.stroke();}
    /* faint graticule every 15° */
    g.strokeStyle=p.grid;g.lineWidth=1;
    for(let lo=-180;lo<=180;lo+=15){g.beginPath();g.moveTo(X(lo),0);g.lineTo(X(lo),H);g.stroke();}
    for(let la=-75;la<=75;la+=15){g.beginPath();g.moveTo(0,Y(la));g.lineTo(W,Y(la));g.stroke();}
    const t=new THREE.CanvasTexture(c);t.anisotropy=4;return t;
  }

  /* ---------- scene ---------- */
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
  renderer.domElement.className="earth-canvas";
  const old=document.getElementById("globe");if(old)old.hidden=true;
  wrap.appendChild(renderer.domElement);
  wrap.classList.add("is-3d");

  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(32,1,.1,100);camera.position.set(0,0,6.47); /* canvas is 22% bigger than the globe box so the Moon never gets clipped; Earth keeps the same size */

  scene.add(new THREE.AmbientLight(0x6688aa,.55));
  const sun=new THREE.DirectionalLight(0xffffff,1.15);sun.position.set(-3,1.6,3);scene.add(sun);
  const rim=new THREE.DirectionalLight(PAL[modeName()].rim,.45);rim.position.set(3,-1,-2);scene.add(rim);

  const tilt=new THREE.Group();tilt.rotation.z=23.4*D;tilt.rotation.x=.12;scene.add(tilt);
  const earth=new THREE.Group();tilt.add(earth);

  let cur=modeName(), P0=PAL[cur];
  const globeMat=new THREE.MeshPhongMaterial({map:makeTexture(P0),shininess:10,specular:new THREE.Color(0x0e2233)});
  earth.add(new THREE.Mesh(new THREE.SphereGeometry(1,96,64),globeMat));

  /* atmosphere: fresnel glow on a slightly larger back-facing sphere */
  const atmoMat=new THREE.ShaderMaterial({
    uniforms:{uC:{value:new THREE.Vector3(...P0.atmo)}},
    vertexShader:"varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
    fragmentShader:"uniform vec3 uC;varying vec3 vN;void main(){float i=pow(0.72-dot(vN,vec3(0.0,0.0,1.0)),2.6);gl_FragColor=vec4(uC,1.0)*i;}",
    side:THREE.BackSide,blending:THREE.AdditiveBlending,transparent:true,depthWrite:false
  });
  const atmo=new THREE.Mesh(new THREE.SphereGeometry(1.14,64,48),atmoMat);
  scene.add(atmo);

  /* lat/lon -> point on the sphere, matching SphereGeometry's UV layout */
  function pos(lat,lon,r){
    const phi=(lon+180)*D, th=(90-lat)*D;
    return new THREE.Vector3(-Math.cos(phi)*Math.sin(th)*r,Math.cos(th)*r,Math.sin(phi)*Math.sin(th)*r);
  }

  /* pins: Colmar and Muscat, plus a link arc */
  const PLACES=[[48.08,7.36],[23.59,58.41]];
  const pinMat=new THREE.MeshBasicMaterial({color:P0.pin});
  const haloMat=new THREE.MeshBasicMaterial({color:P0.pin,transparent:true,opacity:.35});
  const halos=[];
  PLACES.forEach(([la,lo])=>{
    const p=pos(la,lo,1.005);
    const pin=new THREE.Mesh(new THREE.SphereGeometry(.022,16,12),pinMat);pin.position.copy(p);earth.add(pin);
    const h=new THREE.Mesh(new THREE.RingGeometry(.03,.045,32),haloMat.clone());h.position.copy(p);h.lookAt(p.clone().multiplyScalar(2));earth.add(h);halos.push(h);
  });
  const a=pos(...PLACES[0],1.005), b=pos(...PLACES[1],1.005);
  const mid=a.clone().add(b).multiplyScalar(.5).normalize().multiplyScalar(1.38);
  const curve=new THREE.QuadraticBezierCurve3(a,mid,b);
  const arcMat=new THREE.LineBasicMaterial({color:P0.arc,transparent:true,opacity:.75});
  earth.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(64)),arcMat));
  const packet=new THREE.Mesh(new THREE.SphereGeometry(.016,12,10),new THREE.MeshBasicMaterial({color:0xffffff}));earth.add(packet);

  /* moon texture: grey regolith, dark "seas" and craters, drawn procedurally */
  function moonTexture(){
    const W=512,H=256,c=document.createElement("canvas");c.width=W;c.height=H;const g=c.getContext("2d");
    g.fillStyle="#a9adb3";g.fillRect(0,0,W,H);
    const img=g.getImageData(0,0,W,H),d=img.data;
    for(let i=0;i<d.length;i+=4){const n=(Math.random()-.5)*22;d[i]+=n;d[i+1]+=n;d[i+2]+=n;}
    g.putImageData(img,0,0);
    let seed=7;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
    g.fillStyle="rgba(70,74,82,.45)";
    [[.22,.38,.13],[.3,.55,.09],[.42,.42,.1],[.62,.6,.12],[.7,.35,.07],[.85,.5,.08]].forEach(([x,y,r])=>{g.beginPath();g.ellipse(x*W,y*H,r*W,r*H*1.6,0,0,6.283);g.fill();});
    for(let i=0;i<140;i++){
      const x=rnd()*W,y=H*.08+rnd()*H*.84,r=1.5+Math.pow(rnd(),3)*16;
      g.fillStyle="rgba(60,62,68,.35)";g.beginPath();g.arc(x,y,r,0,6.283);g.fill();
      g.strokeStyle="rgba(235,238,242,.35)";g.lineWidth=Math.max(1,r*.18);g.beginPath();g.arc(x-r*.15,y-r*.15,r,3.4,5.6);g.stroke();
    }
    return new THREE.CanvasTexture(c);
  }

  /* orbit rings; the outer one carries the Moon (not tied to the Earth's spin) */
  const rings=[],ringMats=[];
  [[1.3,P0.rings[0],1.25,.25,false],[1.48,P0.rings[1],1.05,-.5,true]].forEach(([r,col,rx,rz,hasMoon],i)=>{
    const grp=new THREE.Group();grp.rotation.x=rx;grp.rotation.z=rz;scene.add(grp);
    const pts=new THREE.EllipseCurve(0,0,r,r).getPoints(160).map(p=>new THREE.Vector3(p.x,p.y,0));
    const rm=new THREE.LineBasicMaterial({color:col,transparent:true,opacity:hasMoon?.28:.18});ringMats.push(rm);
    grp.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts),rm));
    if(hasMoon){
      const moon=new THREE.Mesh(new THREE.SphereGeometry(.13,48,32),new THREE.MeshPhongMaterial({map:moonTexture(),shininess:2,specular:new THREE.Color(0x111111)}));
      grp.add(moon);rings.push({node:moon,r,speed:.00018,off:1.8});
    }
  });

  /* start with Europe / Middle East facing the viewer */
  earth.rotation.y=Math.PI/2-(33+180)*D;

  /* ---------- drag to spin ---------- */
  let drag=false,lastX=0,vel=0;
  const el=renderer.domElement;
  el.addEventListener("pointerdown",e=>{drag=true;lastX=e.clientX;el.setPointerCapture(e.pointerId);});
  el.addEventListener("pointermove",e=>{if(!drag)return;const dx=e.clientX-lastX;lastX=e.clientX;earth.rotation.y+=dx*.008;vel=dx*.0006;if(still)render(performance.now());});
  const stop=()=>{drag=false;};el.addEventListener("pointerup",stop);el.addEventListener("pointercancel",stop);

  /* ---------- sizing & loop ---------- */
  function size(){
    const w=renderer.domElement.clientWidth,h=renderer.domElement.clientHeight;if(!w||!h)return false;
    renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();return true;
  }
  function render(t){
    rings.forEach(o=>{const k=t*o.speed+o.off;o.node.position.set(Math.cos(k)*o.r,Math.sin(k)*o.r,0);o.node.rotation.y=k;});
    const f=(t/2600)%1;packet.position.copy(curve.getPoint(f<.5?f*2:2-f*2));
    halos.forEach((h,i)=>{const s=1+.6*((t/1400+i*.5)%1);h.scale.set(s,s,s);h.material.opacity=.45*(1-((t/1400+i*.5)%1));});
    renderer.render(scene,camera);
  }
  function loop(t){
    if(wrap.offsetParent!==null){
      if(!drag){earth.rotation.y+=.0018+vel;vel*=.95;}
      render(t);
    }
    requestAnimationFrame(loop);
  }
  if(window.ResizeObserver)new ResizeObserver(()=>{if(size()&&still)render(0);}).observe(wrap);
  addEventListener("resize",()=>{if(size()&&still)render(0);});
  size();
  if(still){render(0);addEventListener("hashchange",()=>setTimeout(()=>{if(size())render(0);},0));}
  else requestAnimationFrame(loop);
})();
