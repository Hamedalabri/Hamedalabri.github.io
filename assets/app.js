/* Router:
   #p-<id>   -> project page      (e.g. #p-sae401)
   #c-<cat>  -> competency page   (e.g. #c-cyber)
   anything else -> home page, scrolled to that section (#about, #projects...) */
let lang="en", filter="all", sfilter="all", look="default", sky="sunset";
try{if(localStorage.getItem("look")==="coast")look="coast";if(localStorage.getItem("sky")==="day")sky="day";}catch(_){}
/* Omani coast theme + day/sunset sky (html[data-look], html[data-sky]) */
function applyLook(){
  const r=document.documentElement;
  if(look==="coast")r.dataset.look="coast";else delete r.dataset.look;
  r.dataset.sky=sky;
  const b=document.getElementById("look-btn");if(b)b.setAttribute("aria-pressed",String(look==="coast"));
  window.dispatchEvent(new CustomEvent("themechange",{detail:look}));
}
applyLook();
try{localStorage.removeItem("mode")}catch(_){}
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const SITE="Hamed Al-Abri";
const VIEWS=["home","project","comp"];

function show(v){VIEWS.forEach(x=>$("#"+x).hidden=x!==v);}

function applyStatic(){
  const d=T[lang];
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-i]").forEach(el=>{const v=d[el.dataset.i];if(v==null)return;el.hasAttribute("data-html")?el.innerHTML=v:el.textContent=v;});
  document.querySelectorAll(".langs button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===lang));
  document.querySelectorAll(".cv-link").forEach(x=>{x.href=lang==="fr"?"cv-fr.pdf":"cv-en.pdf";x.setAttribute("download",lang==="fr"?"Hamed_Al-Abri_CV_FR.pdf":"Hamed_Al-Abri_CV_EN.pdf");});
  $("#look-btn").title=d["look.coast"];$("#look-btn").setAttribute("aria-label",d["look.coast"]);
  $("#sky-label").textContent=sky==="day"?d["sky.sunset"]:d["sky.day"];
  $("#dd-menu").innerHTML=`<div class="dd-inner">${Object.entries(CATS).map(([k,c])=>
    `<a href="#c-${k}"><span class="c">${c.c}</span><span>${esc(c.t[lang])}</span><span class="n">${P.filter(p=>p.cat===k).length}</span></a>`).join("")}
    <hr><a class="all" href="#skills">${esc(d["comp.all"])}</a></div>`;
}

const card=p=>`<a class="card" href="#p-${p.id}">
  <div class="meta"><span class="sae">${esc(p.sae)}</span><span>${p.y}</span><span>${CATS[p.cat].c}</span></div>
  <h3>${esc(p.t[lang])}</h3>
  <p class="sum">${esc(p.s[lang])}</p>
  <div class="stack">${p.tags.slice(0,4).map(t=>`<span class="chip">${esc(t)}</span>`).join("")}</div>
  <span class="go">${esc(T[lang]["proj.open"])}</span></a>`;

function renderHome(){
  const d=T[lang];
  const tl=list=>list.map(x=>`<li${x.cur?' class="now"':''}><div class="yr"><bdi dir="ltr">${x.y}</bdi>${x.cur?`<span class="badge">${esc(d["about.now"])}</span>`:""}</div><div class="what">${esc(x.w[lang])}</div><div class="where">${esc(x.p[lang])}</div></li>`).join("");
  $("#tl-edu").innerHTML=tl(EDU);
  $("#tl-work").innerHTML=tl(WORK);
  $("#comps").innerHTML=Object.entries(CATS).map(([k,c])=>{
    const n=P.filter(p=>p.cat===k).length;
    return `<div class="comp"><div class="code">${c.c} · ${n} ${esc(d["skills.n"])}</div><h3>${esc(c.t[lang])}</h3><p>${esc(c.d[lang])}</p><div class="stack">${c.s.map(s=>`<span class="chip">${esc(s)}</span>`).join("")}</div><a class="see" href="#c-${k}">${esc(d["skills.see"])}</a></div>`;
  }).join("");
  const fl=[["all",d["filter.all"]],...Object.entries(CATS).map(([k,c])=>[k,c.c+" · "+c.t[lang]])];
  $("#filters").innerHTML=fl.map(([k,l])=>`<button type="button" data-f="${k}" aria-pressed="${filter===k}">${esc(l)}</button>`).join("");
  $("#grid").innerHTML=P.filter(p=>filter==="all"||p.cat===filter).map(card).join("");
  renderStack();
  $("#stihle-missions").innerHTML=STIHLE.m[lang].map(x=>`<li>${esc(x)}</li>`).join("");
  $("#stihle-wins").innerHTML=STIHLE.w.map(w=>`<div class="win"><b>${esc(w.t[lang])}</b><span>${esc(w.d[lang])}</span></div>`).join("");
}

function renderStack(){
  const d=T[lang];
  $("#stack-count").textContent=STACK.length+" "+d["stack.n"];
  $("#tiles").innerHTML=STACK.map((s,i)=>{
    const c=STACK_CATS[s.k].c, off=sfilter!=="all"&&s.k!==sfilter;
    return `<div class="tile${off?" off":""}" style="--c:${c};--i:${i}" title="${esc(s.n)}"><span class="mono">${esc(s.a)}</span><span class="nm">${esc(s.n)}</span></div>`;
  }).join("");
  const fl=[["all",d["stack.all"],"#f2f4ff"],...Object.entries(STACK_CATS).map(([k,c])=>[k,c.t[lang],c.c])];
  $("#sfilters").innerHTML=fl.map(([k,l,c])=>`<button type="button" data-sf="${k}" aria-pressed="${sfilter===k}" style="--c:${c}"><i></i>${esc(l)}</button>`).join("");
}

function renderComp(k){
  const d=T[lang], c=CATS[k], list=P.filter(p=>p.cat===k);
  $("#comp").innerHTML=`<div class="wrap pv">
    <div class="crumb"><a href="#skills">← ${esc(d["comp.all"])}</a></div>
    <div class="cv-head">
      <div>
        <h1>${esc(c.t[lang])}</h1>
        <p class="cv-desc">${esc(c.d[lang])}</p>
        <div class="stack">${c.s.map(s=>`<span class="chip">${esc(s)}</span>`).join("")}</div>
      </div>
      <div class="cv-code" aria-hidden="true">${c.c}</div>
    </div>
    <h2 class="cv-sub">${esc(d["comp.list"])} · ${list.length}</h2>
    <div class="grid">${list.map(card).join("")}</div>
    <div style="margin-top:56px">
      <h2 class="cv-sub">${esc(d["comp.others"])}</h2>
      <div class="others">${Object.entries(CATS).filter(([x])=>x!==k).map(([x,o])=>`<a href="#c-${x}"><span class="c">${o.c} · ${P.filter(p=>p.cat===x).length} ${esc(d["skills.n"])}</span><span>${esc(o.t[lang])}</span></a>`).join("")}</div>
    </div>
  </div>`;
}

/* ---------- network lab diagrams (data in TOPOS, data.js) ---------- */
const topoStep={};
function topoHTML(key){
  const T0=TOPOS[key], L=o=>o==null?"":(typeof o==="string"?o:(o[lang]??o.en));
  const si=topoStep[key]??(T0.defStep||0), st=(T0.steps&&T0.steps[si])||{};
  const N=T0.nodes, P=k=>[N[k].x,N[k].y], hi=new Set(st.hi||[]);
  let s=`<svg class="topo" viewBox="${T0.view}" role="img" aria-label="${esc(L(T0.title))}">`;
  (T0.zones||[]).forEach(z=>{if(z.shape==="ellipse")s+=`<ellipse class="tp-zone" cx="${z.cx}" cy="${z.cy}" rx="${z.rx}" ry="${z.ry}" style="fill:${z.c};stroke:${z.c}"/><text class="tp-zl" x="${z.cx}" y="${z.lb?z.cy+z.ry-14:z.cy-z.ry+26}" style="text-anchor:middle">${esc(L(z.label))}</text>`;else s+=`<rect class="tp-zone${z.site?" tp-site":""}" x="${z.x}" y="${z.y}" width="${z.w}" height="${z.h}" rx="10" style="fill:${z.c};stroke:${z.c}"/><text class="tp-zl" x="${z.x+12}" y="${z.y+22}">${esc(L(z.label))}</text>`;});
  T0.links.forEach(l=>{
    const[x1,y1]=P(l.a),[x2,y2]=P(l.b),dx=x2-x1,dy=y2-y1,len=Math.hypot(dx,dy)||1,nx=-dy/len,ny=dx/len;
    const cls="tp-l tp-"+l.kind+(hi.has(l.kind)?" tp-hi":"");
    if(l.multi) l.multi.forEach((c,k)=>{const o=(k-(l.multi.length-1)/2)*7;s+=`<line class="${cls}" x1="${x1+nx*o}" y1="${y1+ny*o}" x2="${x2+nx*o}" y2="${y2+ny*o}" style="stroke:${c}"/>`;});
    else s+=`<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"${l.c?` style="stroke:${l.c}"`:""}/>`;
    if(l.label&&l.above){s+=`<text class="tp-ll" x="${x1+dx*(l.t??.5)}" y="${y1+dy*(l.t??.5)-12}" style="text-anchor:middle">${esc(L(l.label))}</text>`;}
    else if(l.label){const t=l.t??.5,sd=l.side??1;s+=`<text class="tp-ll" x="${x1+dx*t+sd*16}" y="${y1+dy*t+4}" style="text-anchor:${sd>0?"start":"end"}">${esc(L(l.label))}</text>`;}
    if(l.ports)[[.24,l.ports[0]],[.78,l.ports[1]]].forEach(([t,txt])=>{if(txt)s+=`<text class="tp-port" x="${x1+dx*t+nx*12}" y="${y1+dy*t+ny*12+4}">${esc(txt)}</text>`;});
  });
  (st.flows||[]).forEach(f=>{const pts=f.path||f;s+=`<path class="tp-flow" d="${pts.map((k,n)=>(n?"L":"M")+P(k).join(",")).join(" ")}"${f.c?` style="stroke:${f.c}"`:""}/>`;});
  const icon={
    cloud:(x,y)=>`<path d="M${x-46},${y+14} a18,18 0 0,1 8,-30 a24,24 0 0,1 42,-8 a20,20 0 0,1 36,10 a16,16 0 0,1 -4,28 z"/>`,
    router:(x,y)=>`<circle cx="${x}" cy="${y}" r="24"/><path class="tp-i" d="M${x-12},${y} h24 M${x},${y-12} v24 M${x+12},${y} l-5,-4 m5,4 l-5,4 M${x-12},${y} l5,-4 m-5,4 l5,4"/>`,
    switch:(x,y)=>`<rect x="${x-40}" y="${y-18}" width="80" height="36" rx="7"/><path class="tp-i" d="M${x-24},${y-5} h40 m-6,-5 l6,5 l-6,5 M${x+24},${y+6} h-40 m6,-5 l-6,5 l6,5"/>`,
    pc:(x,y)=>`<rect x="${x-22}" y="${y-20}" width="44" height="30" rx="3"/><path class="tp-i" d="M${x-8},${y+16} h16 M${x},${y+10} v6"/>`,
    server:(x,y)=>`<rect x="${x-18}" y="${y-24}" width="36" height="46" rx="4"/><path class="tp-i" d="M${x-10},${y-12} h20 M${x-10},${y-2} h20 M${x-10},${y+8} h20"/>`
  };
  icon.device=(x,y)=>`<rect x="${x-28}" y="${y-22}" width="56" height="44" rx="6"/><rect class="tp-i" x="${x-10}" y="${y-10}" width="20" height="20" rx="2"/><path class="tp-i" d="M${x-16},${y-6} h-6 M${x-16},${y+6} h-6 M${x+16},${y-6} h6 M${x+16},${y+6} h6 M${x-4},${y-16} v-4 M${x+4},${y-16} v-4"/>`;
  icon.gateway=(x,y)=>`<rect x="${x-20}" y="${y+6}" width="40" height="20" rx="4"/><path class="tp-i" d="M${x},${y+6} v-30 M${x-10},${y-30} a14,14 0 0,0 0,16 M${x+10},${y-30} a14,14 0 0,1 0,16 M${x-18},${y-36} a24,24 0 0,0 0,28 M${x+18},${y-36} a24,24 0 0,1 0,28"/>`;
  icon.sat=(x,y)=>`<rect x="${x-10}" y="${y-10}" width="20" height="20" rx="3" transform="rotate(45 ${x} ${y})"/><rect x="${x-38}" y="${y-7}" width="22" height="14" rx="2"/><rect x="${x+16}" y="${y-7}" width="22" height="14" rx="2"/><path class="tp-i" d="M${x-16},${y} h-0 M${x-31},${y-7} v14 M${x-24},${y-7} v14 M${x+23},${y-7} v14 M${x+30},${y-7} v14"/>`;
  icon.map=(x,y)=>`<path d="M${x-30},${y-18} l18,-6 l20,6 l20,-6 v40 l-20,6 l-20,-6 l-18,6 z"/><path class="tp-i" d="M${x-12},${y-24} v40 M${x+8},${y-18} v40"/><path class="tp-pin" d="M${x+2},${y+6} c-8,-9 -8,-18 0,-18 c8,0 8,9 0,18 z"/>`;
  icon.ap=(x,y)=>`<rect x="${x-30}" y="${y-12}" width="60" height="24" rx="12"/><path class="tp-i" d="M${x-14},${y} h0.1 M${x-5},${y} h0.1 M${x+4},${y} h0.1 M${x+13},${y} h0.1" style="stroke-width:4"/>`;
  icon.wlc=(x,y)=>`<rect x="${x-34}" y="${y-14}" width="68" height="28" rx="6"/><path class="tp-i" d="M${x-20},${y} h0.1 M${x-10},${y} h0.1 M${x},${y} h0.1 M${x+10},${y} h0.1 M${x+20},${y} h0.1" style="stroke-width:4"/><path class="tp-i" d="M${x-18},${y-14} v-12 M${x+18},${y-14} v-12"/>`;
  icon.phone=(x,y)=>`<rect x="${x-13}" y="${y-22}" width="26" height="44" rx="5"/><path class="tp-i" d="M${x-4},${y+15} h8"/>`;
  icon.laptop=(x,y)=>`<rect x="${x-22}" y="${y-18}" width="44" height="28" rx="3"/><path d="M${x-30},${y+12} h60 l-5,7 h-50 z"/>`;
  icon.arduino=(x,y)=>`<rect x="${x-40}" y="${y-28}" width="80" height="56" rx="6"/><rect class="tp-i" x="${x-46}" y="${y-12}" width="12" height="14" rx="2"/><path class="tp-i" d="M${x-26},${y-20} h52 M${x-10},${y+20} h36"/><rect class="tp-i" x="${x-6}" y="${y-8}" width="26" height="14" rx="2"/>`;
  icon.keys=(x,y)=>[-36,-12,12,36].map(dx=>`<rect x="${x+dx-10}" y="${y-10}" width="20" height="20" rx="3"/><circle class="tp-i" cx="${x+dx}" cy="${y}" r="5"/>`).join("");
  icon.ladder=(x,y)=>`<rect x="${x-46}" y="${y-22}" width="92" height="44" rx="6"/><path class="tp-i" d="M${x-38},${y} l5,-8 l6,16 l6,-16 l6,16 l6,-16 l6,16 l3,-8 M${x+2},${y} l5,-8 l6,16 l6,-16 l6,16 l6,-16 l3,8"/>`;
  icon.chip=(x,y)=>`<rect x="${x-20}" y="${y-24}" width="40" height="48" rx="4"/><path class="tp-i" d="M${x-20},${y-14} h-8 M${x-20},${y-4} h-8 M${x-20},${y+6} h-8 M${x-20},${y+16} h-8 M${x+20},${y-14} h8 M${x+20},${y-4} h8 M${x+20},${y+6} h8 M${x+20},${y+16} h8"/><circle class="tp-i" cx="${x}" cy="${y-16}" r="3"/>`;
  icon.buzzer=(x,y)=>`<circle cx="${x}" cy="${y}" r="22"/><circle class="tp-i" cx="${x}" cy="${y}" r="5"/><path class="tp-i" d="M${x+28},${y-10} a14,14 0 0,1 0,20 M${x+34},${y-16} a22,22 0 0,1 0,32"/>`;
  icon.scope=(x,y)=>`<rect x="${x-38}" y="${y-28}" width="76" height="56" rx="5"/><path class="tp-i" d="M${x-28},${y} q7,-18 14,0 t14,0 t14,0 t14,0"/>`;
  icon.leds=(x,y)=>[-30,-10,10,30].map(dx=>`<circle class="tp-led" cx="${x+dx}" cy="${y}" r="7"/>`).join("")+`<path class="tp-i" d="M${x-30},${y+9} v10 M${x-10},${y+9} v10 M${x+10},${y+9} v10 M${x+30},${y+9} v10"/>`;
  icon.l3=(x,y)=>icon.switch(x,y)+`<rect class="tp-l3" x="${x-40}" y="${y-18}" width="80" height="36" rx="7"/>`;
  const subs=st.subs||{};
  Object.entries(N).forEach(([k,n])=>{
    const x=n.x,y=n.y,d=n.d||40,t1=esc(L(n.label)),t2=esc(subs[k]??L(n.sub));
    s+=`<g class="tp-n">${icon[n.type](x,y)}</g>`;
    const pos=n.pos||"b";
    const T=(cx,cy,anc,cl,tx)=>tx?`<text class="${cl}" x="${cx}" y="${cy}" style="text-anchor:${anc}">${tx}</text>`:"";
    if(n.lp){const a2=n.lp.a||"middle";s+=T(x+n.lp.dx,y+n.lp.dy,a2,"tp-t",t1)+T(x+n.lp.dx,y+n.lp.dy+17,a2,"tp-s",t2);}
    else if(pos==="b") s+=T(x,y+d,"middle","tp-t",t1)+T(x,y+d+17,"middle","tp-s",t2);
    else if(pos==="t") s+=T(x,y-d-14,"middle","tp-t",t1)+T(x,y-d+3,"middle","tp-s",t2);
    else if(pos==="r") s+=T(x+d,y-3,"start","tp-t",t1)+T(x+d,y+15,"start","tp-s",t2);
    else if(pos==="l") s+=T(x-d,y-3,"end","tp-t",t1)+T(x-d,y+15,"end","tp-s",t2);
    else if(pos==="tl") s+=T(x-d,y-30,"end","tp-t",t1)+T(x-d,y-13,"end","tp-s",t2);
  });
  (st.badges||[]).forEach(b=>{const bt=L(b.text);const[x0,y]=P(b.n),x=x0+(b.dx||0),w=Math.max(46,bt.length*7.6+18),by=y-(b.bd??N[b.n].bd??44);
    s+=`<g class="tp-dhcp"><rect x="${x-w/2}" y="${by-14}" width="${w}" height="20" rx="10"/><text x="${x}" y="${by}">${esc(bt)}</text></g>`;});
  s+=`</svg>`;
  const steps=T0.steps?`<div class="tp-steps" role="group">${T0.steps.map((x,n)=>`<button type="button" data-topo="${key}:${n}" aria-pressed="${n===si}">${esc(L(x.t))}</button>`).join("")}</div><p class="tp-cap">${esc(L(st.cap))}</p>`:"";
  const leg=(T0.legend||[]).map(k=>`<span><i class="tp-lg-${k}"></i>${esc(k==="flow"&&T0.flowLabel?L(T0.flowLabel):L(TOPO_UI[k]))}</span>`).join("")+(T0.vlans||[]).map(v=>`<span><i style="background:${v.c}"></i>VLAN ${v.id}</span>`).join("")+(T0.extraLegend||[]).map(v=>`<span><i style="background:${v.c}"></i>${esc(L(v.label))}</span>`).join("");
  const tb=T0.table;
  const table=tb?`<h3 class="tp-h3">${esc(L(tb.title))} <small>· ${esc(L(tb.note||TOPO_UI.note))}</small></h3><div class="tp-tablewrap"><table class="tp-table"><thead><tr>${L(tb.head).map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${tb.rows.map(r=>`<tr>${r.cells.map((c,n)=>{const v=esc(L(c));const ip=/^[\d./]+$/.test(L(c))&&L(c).includes(".");return `<td${ip?' dir="ltr"':""}>${n===0&&r.c?`<span class="tp-sw" style="background:${r.c}"></span>`:""}${v}</td>`;}).join("")}</tr>`).join("")}</tbody></table></div>`:"";
  return `${steps}<div class="tp-box" dir="ltr">${s}</div><div class="tp-legend">${leg}</div>${table}`;
}


/* ---------- animated tracker demo (SAÉ 5.01) ---------- */
const DM_ROAD="M60,282 C170,282 190,170 300,170 S450,262 545,182 S600,74 470,72";
let demoRAF=null;
function demoHTML(D){
  const L=o=>typeof o==="string"?o:(o[lang]??o.en);
  const bld=[[90,90,70,60],[200,70,60,50],[360,40,80,80],[90,190,60,50],[380,210,70,60],[220,230,50,45],[590,230,40,70]].map(([x,y,w,h])=>`<rect class="dm-bld" x="${x}" y="${y}" width="${w}" height="${h}" rx="6"/>`).join("");
  return `<div class="topo-sec demo-sec"><h2>${esc(L(D.title))}</h2><p class="tp-cap">${esc(L(D.cap))}</p>
  <div class="tp-box" dir="ltr"><svg id="demo-svg" class="demo" viewBox="0 0 1000 340" role="img" aria-label="${esc(L(D.title))}">
   <rect class="dm-ground" x="10" y="10" width="640" height="320" rx="14"/>${bld}
   <path class="dm-road" d="${DM_ROAD}"/><path class="dm-mid" d="${DM_ROAD}"/>
   <rect class="dm-park" x="452" y="56" width="38" height="32" rx="4"/><text class="dm-p" x="471" y="78">P</text>
   <g transform="translate(400,62)"><rect class="dm-gwb" x="-16" y="8" width="32" height="16" rx="3"/><path class="dm-gwi" d="M0,8 v-26 M-8,-22 a12,12 0 0,0 0,14 M8,-22 a12,12 0 0,1 0,14 M-15,-27 a20,20 0 0,0 0,24 M15,-27 a20,20 0 0,1 0,24"/><text class="dm-gwt" x="0" y="44">${esc(L(D.gw))}</text></g>
   <line id="dm-wave" class="dm-wave" x1="0" y1="0" x2="400" y2="52" style="opacity:0"/>
   <circle id="dm-ring" class="dm-ring" r="0" cx="0" cy="0" style="opacity:0"/>
   <g id="dm-car"><g transform="translate(-26,-14)"><rect class="dm-body" x="0" y="0" width="52" height="28" rx="9"/><rect class="dm-win" x="30" y="5" width="12" height="18" rx="3"/><rect class="dm-win" x="8" y="5" width="9" height="18" rx="3"/><rect id="dm-chip" class="dm-chip" x="19" y="9" width="10" height="10" rx="2"/><rect class="dm-wheel" x="6" y="-4" width="12" height="5" rx="2"/><rect class="dm-wheel" x="34" y="-4" width="12" height="5" rx="2"/><rect class="dm-wheel" x="6" y="27" width="12" height="5" rx="2"/><rect class="dm-wheel" x="34" y="27" width="12" height="5" rx="2"/></g></g>
   <text id="dm-zzz" class="dm-zzz" x="0" y="0">z z</text>
   <g transform="translate(26,44)"><rect id="dm-stbg" class="dm-stbg" x="0" y="-18" width="290" height="28" rx="14"/><circle id="dm-dot" class="dm-dot" cx="16" cy="-4" r="5"/><text id="dm-st" class="dm-st" x="30" y="1"></text></g>
   <rect class="dm-panel" x="670" y="10" width="320" height="320" rx="14"/>
   <text class="dm-pt" x="690" y="40">${esc(L(D.panel))}</text>
   <g transform="translate(690,58) scale(.5)"><rect class="dm-mbg" x="40" y="40" width="560" height="270" rx="16"/><path class="dm-mroad" d="${DM_ROAD}"/><g id="dm-trail"></g><path id="dm-pin" class="dm-pin" d="M0,0 c-11,-13 -11,-26 0,-26 c11,0 11,13 0,26 z" style="opacity:0"/></g>
   <text id="dm-alert" class="dm-alert" x="830" y="232" style="opacity:0">${esc(L(D.alert))}</text>
   <text class="dm-k" x="690" y="266">${esc(L(D.uplinks))}</text><text id="dm-n" class="dm-v" x="970" y="266">0</text>
   <text class="dm-k" x="690" y="292">${esc(L(D.last))}</text><text id="dm-ll" class="dm-v" x="970" y="292">—</text>
   <text class="dm-ex" x="970" y="314">${esc(L(D.ex))}</text>
  </svg></div></div>`;
}
function startDemo(){
  cancelAnimationFrame(demoRAF);
  const svg=document.getElementById("demo-svg"); if(!svg)return;
  const D=TOPOS.sae501.demo, L=o=>typeof o==="string"?o:(o[lang]??o.en);
  const road=svg.querySelector(".dm-road"), len=road.getTotalLength();
  const $s=id=>svg.querySelector("#"+id);
  const car=$s("dm-car"),wave=$s("dm-wave"),ring=$s("dm-ring"),zzz=$s("dm-zzz"),st=$s("dm-st"),dot=$s("dm-dot"),chip=$s("dm-chip"),trail=$s("dm-trail"),pin=$s("dm-pin"),nEl=$s("dm-n"),ll=$s("dm-ll"),alertEl=$s("dm-alert");
  const T=19000, A=1500, B=2400, C=12400, STOP=13400, E=14600;
  const ease=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;
  const place=s=>{const p=road.getPointAtLength(s*len),q=road.getPointAtLength(Math.min(len,s*len+2)),r=road.getPointAtLength(Math.max(0,s*len-2));
    const ang=Math.atan2(q.y-r.y,q.x-r.x)*180/Math.PI;car.setAttribute("transform",`translate(${p.x},${p.y}) rotate(${ang})`);return p;};
  const fmt=p=>`${(48.112+(300-p.y)*0.00012).toFixed(4)}, ${(-1.684+p.x*0.00015).toFixed(4)}`;
  const status=(txt,mode)=>{if(st.textContent!==txt)st.textContent=txt;dot.setAttribute("class","dm-dot "+mode);};
  let lastCycle=-1,sent=0,lastSend=0;
  const still=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  function frame(now){
    if(!svg.isConnected)return;
    const t=now%T, cyc=Math.floor(now/T);
    if(cyc!==lastCycle){lastCycle=cyc;sent=0;lastSend=0;trail.innerHTML="";nEl.textContent="0";ll.textContent="—";pin.style.opacity=0;}
    let s=0,p;
    if(t<B){s=0;}else if(t<C){s=ease((t-B)/(C-B));}else s=1;
    p=place(s);
    zzz.setAttribute("x",p.x+18);zzz.setAttribute("y",p.y-22);
    const asleep=t<A||t>=E;
    zzz.style.opacity=asleep?(.5+.5*Math.sin(now/300)):0;
    chip.setAttribute("class","dm-chip"+(asleep?" off":""));
    alertEl.style.opacity=(t>=A&&t<A+2600)?1:0;
    if(t<A) status(L(D.sleep),"sleep");
    else if(t<B) status(L(D.wake),"wake");
    else if(t<C) status(L(D.moving),"on");
    else if(t<STOP) status(L(D.parked),"on");
    else if(t<E) status(L(D.stop),"stop");
    else status(L(D.sleep),"sleep");
    /* uplinks while driving (and one last fix when parked) */
    if(t>=B&&t<STOP&&t-lastSend>1300){lastSend=t;sent++;nEl.textContent=String(sent);ll.textContent=fmt(p);
      trail.insertAdjacentHTML("beforeend",`<circle class="dm-tdot" cx="${p.x}" cy="${p.y}" r="7"/>`);
      pin.setAttribute("transform",`translate(${p.x},${p.y-4})`);pin.style.opacity=1;wave.dataset.t=String(t);wave.dataset.c="up";}
    if(t>=STOP&&t<STOP+60&&wave.dataset.c!=="down"){wave.dataset.t=String(t);wave.dataset.c="down";}
    const wt=t-(+wave.dataset.t||-9999);
    if(wt>=0&&wt<700){const k=wt/700;wave.setAttribute("x1",p.x);wave.setAttribute("y1",p.y);wave.style.opacity=1-k;
      wave.setAttribute("class","dm-wave"+(wave.dataset.c==="down"?" down":""));wave.style.strokeDashoffset=(wave.dataset.c==="down"?1:-1)*wt/12;
      ring.setAttribute("cx",p.x);ring.setAttribute("cy",p.y);ring.setAttribute("r",14+k*36);ring.style.opacity=(1-k)*.8;ring.setAttribute("class","dm-ring"+(wave.dataset.c==="down"?" down":""));}
    else{wave.style.opacity=0;ring.style.opacity=0;}
    if(!still) demoRAF=requestAnimationFrame(frame);
  }
  frame(still?7000:performance.now());
}

/* ---------- interactive piano with live scope + FFT (SAÉ 2.02) ---------- */
let pianoRAF=null, AC=null, analyser=null, master=null, songTimer=null, playing={};
function pianoHTML(){
  const tt=PIANO.t[lang], L=o=>typeof o==="string"?o:(o[lang]??o.en);
  return `<div class="topo-sec piano-sec" id="piano-sec"><h2>${esc(tt.h)}</h2><p class="tp-cap">${esc(tt.cap)}</p>
   <div class="pn-top">
    <div class="pn-panel"><div class="pn-lbl">${esc(tt.scope)}</div><canvas id="pn-scope" class="pn-scope" width="560" height="150"></canvas></div>
    <div class="pn-panel"><div class="pn-lbl">${esc(tt.fft)}</div>
      <div class="pn-leds" dir="ltr">${PIANO.notes.map((n,i)=>`<span class="pn-led" data-led="${i}"></span>`).join("")}</div>
      <div class="pn-read" id="pn-read" dir="ltr">${esc(tt.none)}</div></div>
   </div>
   <div class="pn-keys" dir="ltr" role="group" aria-label="Piano">${PIANO.notes.map((n,i)=>`<button type="button" class="pn-key" data-note="${i}"><span class="pn-n">${esc(L(n.n))}</span><span class="pn-f">${n.f.toFixed(0)} Hz</span><kbd>${n.k.toUpperCase()}</kbd></button>`).join("")}</div>
   <div class="pn-songs"><span class="pn-sl">${esc(tt.songs)}</span>${PIANO.songs.map(s=>`<button type="button" class="pn-song" data-song="${s.id}">▶ ${esc(L(s.t))}</button>`).join("")}<button type="button" class="pn-song pn-stop" data-song="stop">■ ${esc(tt.stop)}</button></div>
   <p class="pn-hint">${esc(tt.hint)}</p></div>`;
}
function audio(){
  if(!AC){const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;AC=new C();
    master=AC.createGain();master.gain.value=.22;analyser=AC.createAnalyser();analyser.fftSize=8192;analyser.smoothingTimeConstant=.2;
    master.connect(analyser);analyser.connect(AC.destination);}
  if(AC.state==="suspended")AC.resume();
  return AC;
}
function noteOn(i,dur){
  const ac=audio(); if(!ac)return;
  noteOff(i,true);
  const o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
  o.type="sine";o.frequency.value=PIANO.notes[i].f;
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(1,t+.012);
  o.connect(g);g.connect(master);o.start();
  playing[i]={o,g};
  document.querySelectorAll(`.pn-key[data-note="${i}"]`).forEach(k=>k.classList.add("on"));
  if(dur)setTimeout(()=>noteOff(i),dur);
}
function noteOff(i,fast){
  const p=playing[i]; if(!p)return; delete playing[i];
  const t=AC.currentTime;p.g.gain.cancelScheduledValues(t);p.g.gain.setValueAtTime(p.g.gain.value,t);p.g.gain.linearRampToValueAtTime(0,t+(fast?.01:.18));p.o.stop(t+(fast?.02:.2));
  document.querySelectorAll(`.pn-key[data-note="${i}"]`).forEach(k=>k.classList.remove("on"));
}
function stopSong(){clearTimeout(songTimer);songTimer=null;Object.keys(playing).forEach(k=>noteOff(+k));document.querySelectorAll(".pn-song").forEach(b=>b.classList.remove("on"));}
function playSong(id){
  stopSong(); const s=PIANO.songs.find(x=>x.id===id); if(!s)return;
  document.querySelector(`.pn-song[data-song="${id}"]`)?.classList.add("on");
  const beat=60000/s.bpm; let k=0;
  const step=()=>{ if(k>=s.seq.length||!document.getElementById("piano-sec")){stopSong();return;}
    const [n,b]=s.seq[k++]; noteOn(n,b*beat*.85); songTimer=setTimeout(step,b*beat); };
  step();
}
function startPiano(){
  cancelAnimationFrame(pianoRAF);
  const cv=document.getElementById("pn-scope"); if(!cv)return;
  const ctx=cv.getContext("2d"), td=new Float32Array(2048), fd=new Float32Array(4096);
  const read=document.getElementById("pn-read"), leds=[...document.querySelectorAll(".pn-led")];
  const L=o=>typeof o==="string"?o:(o[lang]??o.en);
  let lastTxt="";
  function frame(){
    if(!cv.isConnected){stopSong();return;}
    const cs=getComputedStyle(document.documentElement),mint=cs.getPropertyValue("--mint").trim()||"#8decae",line=cs.getPropertyValue("--line").trim();
    const W=cv.width,H=cv.height; ctx.clearRect(0,0,W,H);
    ctx.strokeStyle=line;ctx.lineWidth=1;
    for(let x=0;x<=W;x+=W/10){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=0;y<=H;y+=H/4){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    let freq=0;
    if(analyser&&Object.keys(playing).length){
      analyser.getFloatTimeDomainData(td);
      /* start the trace on a rising zero-crossing so the wave stands still */
      let s0=0;for(let i=1;i<td.length/2;i++){if(td[i-1]<0&&td[i]>=0){s0=i;break;}}
      ctx.strokeStyle=mint;ctx.lineWidth=2.5;ctx.beginPath();
      const span=Math.min(td.length-s0,Math.round(AC.sampleRate*0.012));
      for(let i=0;i<span;i++){const x=i/span*W,y=H/2-td[s0+i]*H*1.6;i?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.stroke();
      /* FFT: strongest bin, refined with parabolic interpolation */
      analyser.getFloatFrequencyData(fd);let bi=1;for(let i=2;i<fd.length-1;i++)if(fd[i]>fd[bi])bi=i;
      if(fd[bi]>-80){const a=fd[bi-1],b=fd[bi],c=fd[bi+1],p=.5*(a-c)/(a-2*b+c||1);freq=(bi+p)*AC.sampleRate/analyser.fftSize;}
    }else{ctx.strokeStyle=mint;ctx.globalAlpha=.35;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,H/2);ctx.lineTo(W,H/2);ctx.stroke();ctx.globalAlpha=1;}
    let best=-1;
    if(freq){let d=1e9;PIANO.notes.forEach((n,i)=>{const e=Math.abs(1200*Math.log2(freq/n.f));if(e<d){d=e;best=i;}});}
    leds.forEach((l,i)=>l.classList.toggle("on",i===best));
    const txt=best>=0?`${L(PIANO.notes[best].n)} · ${freq.toFixed(1)} Hz`:PIANO.t[lang].none;
    if(txt!==lastTxt){read.textContent=txt;lastTxt=txt;}
    pianoRAF=requestAnimationFrame(frame);
  }
  frame();
}
document.addEventListener("keydown",e=>{
  if(e.repeat||e.ctrlKey||e.metaKey||e.altKey||!document.getElementById("piano-sec"))return;
  if(e.target.closest&&e.target.closest("input,textarea,[contenteditable]"))return;
  const i=PIANO.notes.findIndex(n=>n.k===e.key.toLowerCase()); if(i<0)return;
  e.preventDefault();noteOn(i);
});
document.addEventListener("keyup",e=>{const i=PIANO.notes.findIndex(n=>n.k===e.key.toLowerCase());if(i>=0&&playing[i])noteOff(i);});
document.addEventListener("pointerdown",e=>{const k=e.target.closest(".pn-key");if(!k)return;e.preventDefault();const i=+k.dataset.note;noteOn(i);
  const up=()=>{noteOff(i);removeEventListener("pointerup",up);removeEventListener("pointercancel",up);};addEventListener("pointerup",up);addEventListener("pointercancel",up);});
document.addEventListener("click",e=>{const s=e.target.closest(".pn-song");if(!s)return;audio();s.dataset.song==="stop"?stopSong():playSong(s.dataset.song);});

/* ---------- SAÉ 3.01: phone app + MQTT broker + smart sockets with lamps ---------- */
const A3={gen:0,timers:[],st:null};
const A3_PATH={pb:[[74,198],[150,198]],b1:[[300,198],[330,198],[330,100],[360,100]],b2:[[300,198],[330,198],[330,300],[360,300]]};
function a3Bulb(){return `<svg class="a3-bulb" viewBox="0 0 40 44" aria-hidden="true"><g class="a3-rays"><path d="M20 2v5M6 8l4 4M34 8l-4 4M1 21h5M39 21h-5"/></g><path class="a3-glass" d="M20 11a10 10 0 0 0-6 18c1.5 1.3 2 2.6 2 4h8c0-1.4.5-2.7 2-4a10 10 0 0 0-6-18z"/><path class="a3-base" d="M16 36h8M16 39h8M18 42h4"/></svg>`;}
function app301HTML(){
  const tt=APP301.t[lang], [bk1,bk2]=tt.broker.split(" · ");
  const sock=(i,y)=>`<g class="a3-sock" data-s="${i}">
      <rect class="a3-box" x="360" y="${y}" width="150" height="120" rx="10"/>
      <text class="a3-t" x="435" y="${y+22}" style="text-anchor:middle">Prise ${i+1}</text>
      <text class="a3-s" x="435" y="${y+39}" style="text-anchor:middle">${esc(tt.sock)}</text>
      <circle class="a3-led" cx="380" cy="${y+62}" r="6"/><text class="a3-s" x="392" y="${y+66}">LED</text>
      <text class="a3-s a3-relay" x="490" y="${y+66}" style="text-anchor:end">OFF</text>
      <text class="a3-s a3-temp" x="435" y="${y+80}" style="text-anchor:middle">DS18B20 · —</text>
      <g class="a3-pbtn" data-a3="hw${i}" role="button" tabindex="0" aria-label="${esc(tt.btn)} ${i+1}"><rect x="372" y="${y+88}" width="126" height="24" rx="12"/><text x="435" y="${y+104}" style="text-anchor:middle">${esc(tt.btn)}</text></g>
    </g>
    <path class="a3-cord" d="M510 ${y+60}H572V${y+40}"/>
    <g class="a3-lamp" data-l="${i}"><circle class="a3-glow" cx="572" cy="${y+8}" r="40"/>
      <g class="a3-lr">${[0,40,80,100,140,180].map(a=>{const r=a*Math.PI/180,c=Math.cos(r),s=Math.sin(r);return `<line x1="${(572-c*25).toFixed(1)}" y1="${(y+8-s*25).toFixed(1)}" x2="${(572-c*33).toFixed(1)}" y2="${(y+8-s*33).toFixed(1)}"/>`;}).join("")}</g>
      <path class="a3-bulbc" d="M572 ${y-12}a20 20 0 0 0-11 36.5c1.6 1.3 2.5 2.8 2.5 4.5h17c0-1.7.9-3.2 2.5-4.5A20 20 0 0 0 572 ${y-12}z"/><path class="a3-fil" d="M566 ${y+22}l3-10 3 6 3-6 3 10"/><rect class="a3-cap" x="563" y="${y+30}" width="18" height="10" rx="2"/>
      <text class="a3-s" x="572" y="${y+76}" style="text-anchor:middle">${esc(tt.lamp)} ${i+1}</text></g>`;
  const ln=a=>`<path class="a3-ln" d="M${a.map(p=>p.join(" ")).join("L")}"/>`;
  return `<div class="topo-sec a3-sec" id="a3-sec"><h2>${esc(tt.h)}</h2><p class="tp-cap">${esc(tt.cap)}</p>
   <div class="a3-ctl"><button type="button" class="pn-song" data-a3="play">${esc(tt.play)}</button><button type="button" class="pn-song" data-a3="reset">↺ ${esc(tt.reset)}</button></div>
   <div class="a3-grid">
    <div class="a3-phone" dir="ltr"><div class="a3-cam"></div><div class="a3-scr">
      <div class="a3-sb"><span>▾ ◢ ▮</span><span>12:30</span></div>
      <div class="a3-v a3-v1">
        <div class="a3-bar">Screen1<span>⋮</span></div>
        <div class="a3-wifi"><svg viewBox="0 0 120 60" aria-label="WiFi"><g fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"><path d="M22 10a32 32 0 0 0 0 40M12 4a42 42 0 0 0 0 52M98 10a32 32 0 0 1 0 40M108 4a42 42 0 0 1 0 52"/></g><rect x="30" y="15" width="60" height="30" rx="15" fill="#111"/><text x="60" y="37" fill="#fff" font-size="19" font-weight="800" font-family="Arial" style="text-anchor:middle">WiFi</text></svg></div>
        <div class="a3-form"><input readonly aria-label="user" value=""><input readonly aria-label="password" value="••••••••••"><button type="button" class="a3-b" data-a3="login">Login</button><button type="button" class="a3-b" data-a3="signup">Signup</button></div>
      </div>
      <div class="a3-v a3-v2">
        <div class="a3-bar">Screen2<span>⋮</span></div>
        <div class="a3-list">
          <div class="a3-row a3-r0"><span>SAE finito</span><button type="button" class="a3-b a3-conn" data-a3="connect">Connect</button></div>
          <button type="button" class="a3-row" data-a3="p0">${a3Bulb()}<span>Prise 1</span></button>
          <button type="button" class="a3-row" data-a3="p1">${a3Bulb()}<span>Prise 2</span></button>
          <button type="button" class="a3-row" data-a3="both">${a3Bulb()}<span>Les deux prises</span></button>
          <div class="a3-row a3-data"><svg class="a3-thermo" viewBox="0 0 30 44" aria-hidden="true"><path d="M11 4h6v24a8 8 0 1 1-6 0z" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="14" cy="34" r="5" fill="currentColor"/><path d="M14 33V14M21 8h6M21 13h4M21 18h6M21 23h4" stroke="currentColor" stroke-width="2.5"/></svg><span>Data: <b class="a3-dv"></b></span></div>
        </div>
      </div>
      <div class="a3-toast" role="status"></div>
      <div class="a3-nav"><span data-a3="back" role="button" aria-label="Back">◁</span><span>○</span><span>□</span></div>
    </div></div>
    <div class="a3-right">
     <svg class="a3-dia" dir="ltr" viewBox="0 0 620 400" role="img" aria-label="${esc(tt.h)}">
      ${ln(A3_PATH.pb)}${ln(A3_PATH.b1)}${ln(A3_PATH.b2)}
      <text class="a3-s" x="112" y="190" style="text-anchor:middle">${esc(tt.wifi)}</text>
      <g class="a3-ph"><rect class="a3-box" x="20" y="150" width="54" height="96" rx="9"/><rect class="a3-phs" x="26" y="162" width="42" height="68" rx="3"/><text class="a3-s" x="47" y="266" style="text-anchor:middle">App</text></g>
      <g><rect class="a3-box a3-bk" x="150" y="160" width="150" height="76" rx="10"/><text class="a3-t" x="225" y="192" style="text-anchor:middle">${esc(bk1)}</text><text class="a3-s" x="225" y="212" style="text-anchor:middle">${esc(bk2||"")}</text></g>
      ${sock(0,40)}${sock(1,240)}
      <defs><radialGradient id="a3g"><stop offset="0" stop-color="#ffd23f" stop-opacity=".9"/><stop offset="1" stop-color="#ffd23f" stop-opacity="0"/></radialGradient></defs>
      <g class="a3-pks"></g>
     </svg>
     <div class="a3-log"><div class="pn-lbl">${esc(tt.log)} <span class="a3-ex">(${esc(tt.ex)})</span></div><ol class="a3-ol" dir="ltr"></ol></div>
    </div>
   </div></div>`;
}
function a3Stop(){A3.gen++;A3.timers.forEach(clearTimeout);A3.timers=[];}
function a3Later(fn,ms){const g=A3.gen;A3.timers.push(setTimeout(()=>{if(g===A3.gen&&document.getElementById("a3-sec"))fn();},ms));}
function startApp301(){
  a3Stop();
  if(!document.getElementById("a3-sec"))return;
  A3.st={scr:1,conn:false,s:[false,false],app:[false,false],temp:[23.5,22.8]};
  a3Paint();
  const tick=()=>{ if(!A3.st)return; const i=Math.random()<.5?0:1;
    A3.st.temp[i]=Math.round((A3.st.temp[i]+(Math.random()-.5)*.4)*10)/10;
    a3Paint(); if(A3.st.conn)a3Send([...A3_PATH["b"+(i+1)]].reverse().concat([[150,198],[74,198]]),"temp",`sae/prise${i+1}/temp`,A3.st.temp[i].toFixed(1)+" °C",`Prise ${i+1} → App`);
    a3Later(tick,7000);};
  a3Later(tick,7000);
}
function a3Paint(){
  const r=document.getElementById("a3-sec"), s=A3.st; if(!r||!s)return;
  r.querySelector(".a3-v1").hidden=s.scr!==1; r.querySelector(".a3-v2").hidden=s.scr!==2;
  r.querySelector(".a3-conn").classList.toggle("on",s.conn);
  r.querySelector(".a3-conn").textContent=s.conn?"Connected":"Connect";
  [0,1].forEach(i=>{
    r.querySelector(`[data-a3="p${i}"]`).classList.toggle("on",s.app[i]);
    const g=r.querySelector(`.a3-sock[data-s="${i}"]`);g.classList.toggle("on",s.s[i]);
    g.querySelector(".a3-relay").textContent="relay "+(s.s[i]?"ON":"OFF");
    g.querySelector(".a3-temp").textContent="DS18B20 · "+s.temp[i].toFixed(1)+" °C";
    r.querySelector(`.a3-lamp[data-l="${i}"]`).classList.toggle("on",s.s[i]);
  });
  r.querySelector('[data-a3="both"]').classList.toggle("on",s.app[0]&&s.app[1]);
  r.querySelector(".a3-dv").textContent=s.conn?`${s.temp[0].toFixed(1)} °C · ${s.temp[1].toFixed(1)} °C`:"";
  r.querySelector(".a3-ph").classList.toggle("on",s.conn);
}
function a3Log(dir,topic,pl){
  const ol=document.querySelector("#a3-sec .a3-ol"); if(!ol)return;
  const li=document.createElement("li");li.innerHTML=`<span class="a3-d">${esc(dir)}</span><code>${esc(topic)}</code><b>${esc(pl)}</b>`;
  ol.prepend(li); while(ol.children.length>6)ol.lastChild.remove();
}
/* move a dot along a polyline, then call done */
function a3Send(pts,kind,topic,pl,dir,done){
  if(topic)a3Log(dir,topic,pl);
  const g=document.querySelector("#a3-sec .a3-pks"); if(!g){done&&done();return;}
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const seg=[];let tot=0;for(let k=1;k<pts.length;k++){const d=Math.hypot(pts[k][0]-pts[k-1][0],pts[k][1]-pts[k-1][1]);seg.push(d);tot+=d;}
  const dur=reduce?0:tot/0.32, gen=A3.gen;
  if(!dur){done&&done();return;}
  const c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("r","6");c.setAttribute("class","a3-pk "+kind);g.appendChild(c);
  const t0=performance.now();
  (function f(now){
    if(gen!==A3.gen||!c.isConnected){c.remove();return;}
    let d=Math.min(1,(now-t0)/dur)*tot,k=0;while(k<seg.length-1&&d>seg[k]){d-=seg[k];k++;}
    const q=seg[k]?Math.min(1,d/seg[k]):1,x=pts[k][0]+(pts[k+1][0]-pts[k][0])*q,y=pts[k][1]+(pts[k+1][1]-pts[k][1])*q;
    c.setAttribute("cx",x);c.setAttribute("cy",y);
    if(now-t0<dur)requestAnimationFrame(f);else{c.remove();done&&done();}
  })(t0);
}
const A3_UP=i=>[...A3_PATH["b"+(i+1)]].reverse().concat([[150,198],[74,198]]);
const A3_DOWN=i=>[[74,198],[150,198]].concat(A3_PATH["b"+(i+1)]);
function a3Toast(msg){const t=document.querySelector("#a3-sec .a3-toast");if(!t)return;t.textContent=msg;t.classList.add("on");clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove("on"),1800);}
function a3Tap(key){const el=document.querySelector(`#a3-sec [data-a3="${key}"]`);if(!el)return;el.classList.add("tap");setTimeout(()=>el.classList.remove("tap"),260);}
/* socket i gets a new relay state, then reports it back */
function a3Set(i,on){
  const s=A3.st; s.s[i]=on; a3Paint();
  a3Send(A3_UP(i),"state",`sae/prise${i+1}/state`,on?"ON":"OFF",`Prise ${i+1} → App`,()=>{if(s.conn){s.app[i]=on;a3Paint();}});
}
function a3Act(key){
  const s=A3.st; if(!s)return; a3Tap(key);
  if(key==="login"){s.scr=2;a3Paint();return;}
  if(key==="signup"){a3Toast("Signup");return;}
  if(key==="back"){if(s.scr===2){s.scr=1;s.conn=false;a3Paint();}return;}
  if(key==="connect"){ if(s.conn)return;
    a3Send([[74,198],[150,198]],"cmd","CONNECT","client app","App → Pi",()=>a3Send([[150,198],[74,198]],"state","CONNACK","OK","Pi → App",()=>{s.conn=true;s.app=[...s.s];a3Paint();}));return;}
  if(key==="hw0"||key==="hw1"){const i=+key[2];a3Set(i,!s.s[i]);return;}
  if(!s.conn){a3Toast(APP301.t[lang].need);return;}
  if(key==="p0"||key==="p1"){const i=+key[1],on=!s.app[i];
    a3Send(A3_DOWN(i),"cmd",`sae/prise${i+1}/set`,on?"ON":"OFF",`App → Prise ${i+1}`,()=>a3Set(i,on));return;}
  if(key==="both"){const on=!(s.app[0]&&s.app[1]);
    a3Log("App → Prise 1+2","sae/all/set",on?"ON":"OFF");
    [0,1].forEach(i=>a3Send(A3_DOWN(i),"cmd",null,null,null,()=>a3Set(i,on)));}
}
function a3Play(){
  startApp301(); const ol=document.querySelector("#a3-sec .a3-ol"); if(ol)ol.innerHTML="";
  document.querySelector('#a3-sec [data-a3="play"]')?.classList.add("on");
  [[700,"login"],[1900,"connect"],[3700,"p0"],[6300,"p1"],[8900,"hw0"],[11500,"both"],[14300,"both"]].forEach(([t,k])=>a3Later(()=>a3Act(k),t));
  a3Later(()=>document.querySelector('#a3-sec [data-a3="play"]')?.classList.remove("on"),16000);
}
document.addEventListener("click",e=>{const b=e.target.closest&&e.target.closest("#a3-sec [data-a3]");if(!b)return;const k=b.dataset.a3;
  if(k==="play")a3Play();else if(k==="reset"){startApp301();const ol=document.querySelector("#a3-sec .a3-ol");if(ol)ol.innerHTML="";document.querySelector('#a3-sec [data-a3="play"]')?.classList.remove("on");}else a3Act(k);});
document.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.closest&&e.target.closest("#a3-sec g[data-a3]")){e.preventDefault();a3Act(e.target.closest("g[data-a3]").dataset.a3);}});

const L2=o=>typeof o==="string"?o:(o[lang]??o.en);
function renderProject(p){
  const d=T[lang], c=CATS[p.cat], siblings=P.filter(x=>x.cat===p.cat), i=siblings.indexOf(p), prev=siblings[i-1], next=siblings[i+1];
  const sec=(n,h,body)=>`<div><h2><span class="n">0${n}</span>${esc(h)}</h2>${body}</div>`;
  const list=a=>`<ul>${a.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;
  let n=1;
  let topoBlock="";
  const blocks=[sec(n++,d["proj.ctx"],`<p>${esc(p.ctx[lang])}</p>`),sec(n++,d["proj.did"],list(p.b[lang]))];
  blocks.push(sec(n++,d["proj.learn"],list(p.l[lang])));
  if(p.imgs&&p.imgs.length) blocks.push(sec(n++,d["proj.gallery"],`<div class="gallery">${p.imgs.map(s=>`<img src="${esc(s)}" alt="${esc(p.t[lang])}" loading="lazy">`).join("")}</div>`));
  const pg=(x,cls,label)=>x?`<a class="${cls}" href="#p-${x.id}"><span class="d">${esc(label)} · ${esc(x.sae)}</span><span>${esc(x.t[lang])}</span></a>`:`<span class="empty"></span>`;
  $("#project").innerHTML=`<div class="wrap pv">
    <div class="crumb"><a href="#c-${p.cat}">← ${c.c} · ${esc(c.t[lang])}</a><span>/</span><span style="direction:ltr;unicode-bidi:isolate">${esc(p.sae)}</span></div>
    <h1>${esc(p.t[lang])}</h1>
    <p class="lead">${esc(p.s[lang])}</p>
    <div class="pv-grid">
      <div class="pv-main">${blocks.join("")}</div>
      <aside class="side">
        <div><div class="l">${esc(d["proj.comp"])}</div><a class="v" href="#c-${p.cat}">${c.c} · ${esc(c.t[lang])}</a></div>
        <div><div class="l">${esc(d["proj.year"])}</div><div class="v" style="direction:ltr;unicode-bidi:isolate">${p.y}</div></div>
        ${p.team?`<div><div class="l">${esc(d["proj.team"])}</div><div class="v">${esc(TEAM[p.team][lang])}</div></div>`:""}
        <div><div class="l">${esc(d["proj.stack"])}</div><div class="stack">${p.tags.map(t=>`<span class="chip">${esc(t)}</span>`).join("")}</div></div>
        ${p.gh?`<div><div class="l">${esc(d["proj.code"])}</div><a class="v" href="${p.gh}" target="_blank" rel="noopener" style="direction:ltr;unicode-bidi:isolate;word-break:break-all">${esc(p.gh.replace("https://",""))} ↗</a></div>`:""}
      </aside>
    </div>
    ${(p.topo&&typeof TOPOS!=="undefined"&&TOPOS[p.topo])?`<div class="topo-sec" id="topo-sec" data-key="${p.topo}"><h2><span class="n">0${n}</span>${esc(L2(TOPOS[p.topo].title))}</h2>${topoHTML(p.topo)}</div>`:""}
    ${(p.topo&&typeof TOPOS!=="undefined"&&TOPOS[p.topo]&&TOPOS[p.topo].demo)?demoHTML(TOPOS[p.topo].demo):""}
    ${p.piano&&typeof PIANO!=="undefined"?pianoHTML():""}
    ${p.app301&&typeof APP301!=="undefined"?app301HTML():""}
    <nav class="pager" aria-label="Projects">${pg(prev,"prev",d["proj.prev"])}${pg(next,"next",d["proj.next"])}</nav>
  </div>`;
}

function route(scroll){
  applyStatic();
  closeMenu();
  const h=decodeURIComponent(location.hash.slice(1));
  const p=h.startsWith("p-")&&P.find(x=>x.id===h.slice(2));
  const k=h.startsWith("c-")&&CATS[h.slice(2)]&&h.slice(2);
  $("#dd-btn").classList.toggle("on",!!(p||k));
  if(p){show("project");stopSong();renderProject(p);startDemo();startPiano();startApp301();document.title=p.t[lang]+" · "+SITE;if(scroll)window.scrollTo(0,0);}
  else if(k){show("comp");renderComp(k);document.title=CATS[k].t[lang]+" · "+SITE;if(scroll)window.scrollTo(0,0);}
  else{
    show("home");renderHome();document.title=SITE+" · Portfolio";
    if(scroll){const el=h&&document.getElementById(h);el?el.scrollIntoView():window.scrollTo(0,0);}
  }
}

/* dropdown: hover on desktop (CSS), click/tap toggles for touch and keyboard */
function closeMenu(){$("#dd").classList.remove("open");$("#dd-btn").setAttribute("aria-expanded","false");}

window.addEventListener("hashchange",()=>route(true));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMenu();});

document.addEventListener("click",e=>{
  if(e.target.closest("#dd-btn")){const o=!$("#dd").classList.contains("open");$("#dd").classList.toggle("open",o);$("#dd-btn").setAttribute("aria-expanded",String(o));return;}
  if(!e.target.closest("#dd"))closeMenu();
  if(e.target.closest("#look-btn")){look=look==="coast"?"default":"coast";try{localStorage.setItem("look",look)}catch(_){}applyLook();if(look==="coast")window.scrollTo(0,0);return;}
  if(e.target.closest("#sky-btn")){sky=sky==="day"?"sunset":"day";try{localStorage.setItem("sky",sky)}catch(_){}applyLook();$("#sky-label").textContent=sky==="day"?T[lang]["sky.sunset"]:T[lang]["sky.day"];return;}
  const l=e.target.closest("[data-lang]");
  if(l){lang=l.dataset.lang;try{localStorage.setItem("lang",lang)}catch(_){}route(false);return;}
  const tp=e.target.closest("[data-topo]");
  if(tp){const[k,n]=tp.dataset.topo.split(":");topoStep[k]=+n;const box=document.getElementById("topo-sec");if(box){const h=box.querySelector("h2").outerHTML;box.innerHTML=h+topoHTML(k);}return;}
  const sf=e.target.closest("[data-sf]");
  if(sf){sfilter=sfilter===sf.dataset.sf?"all":sf.dataset.sf;renderStack();return;}
  const f=e.target.closest("[data-f]");
  if(f){filter=f.dataset.f;renderHome();return;}
  if(e.target.closest("#copy")){
    const btn=$("#copy"),txt=$("#email").textContent;
    const done=()=>{btn.textContent=T[lang]["contact.copied"];setTimeout(()=>btn.textContent=T[lang]["contact.copy"],1500)};
    try{navigator.clipboard.writeText(txt).then(done,selectEmail)}catch(_){selectEmail()}
  }
});
function selectEmail(){const r=document.createRange();r.selectNodeContents($("#email"));const s=getSelection();s.removeAllRanges();s.addRange(r);}

try{const s=localStorage.getItem("lang");if(s&&T[s])lang=s;else{const n=(navigator.language||"en").slice(0,2);if(T[n])lang=n;}}catch(_){}
route(true);

/* back to top: a rocket (an Arabian eagle in the Oman theme) lifts off from the footer button and flies out of the top of the screen while the page scrolls up */
let rkBusy=false;
document.addEventListener("click",e=>{
  const btn=e.target.closest&&e.target.closest("#to-top"); if(!btn||rkBusy)return;
  if(matchMedia("(prefers-reduced-motion: reduce)").matches){window.scrollTo(0,0);return;}
  rkBusy=true;
  const bird=document.documentElement.dataset.look==="coast", ico=btn.querySelector(bird?".eg":".rk"), r=ico.getBoundingClientRect(), y0=scrollY;
  const fly=document.createElement("div");fly.className="rk-fly"+(bird?" is-eg":"");fly.innerHTML=ico.outerHTML;
  const hs=bird?28:18;fly.style.left=(r.left+r.width/2-hs)+"px";fly.style.top=(r.top+r.height/2-hs)+"px";
  document.body.appendChild(fly);btn.classList.add("launched");
  /* smoke puffs at the launch pad (loose feathers for the eagle) */
  for(let i=0;i<(bird?4:7);i++){const s=document.createElement("i");s.className=bird?"eg-feather":"rk-smoke";
    s.style.left=(r.left+r.width/2-7+(Math.random()-.5)*10)+"px";s.style.top=(r.top+r.height-4)+"px";
    s.style.setProperty("--dx",((i-3)*9+(Math.random()-.5)*8)+"px");s.style.animationDelay=(i*35)+"ms";
    document.body.appendChild(s);setTimeout(()=>s.remove(),1300);}
  const H=r.top+120, T0=performance.now(), WAIT=260, DUR=1100;
  const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
  (function step(now){
    const t=Math.max(0,Math.min(1,(now-T0-WAIT)/DUR));
    const shake=t===0?(bird?0:Math.sin(now/18)*1.4):(bird?Math.sin(t*9)*10*(1-t):0);
    fly.style.transform=`translate(${shake}px,${-ease(t)*H}px)`;
    fly.style.setProperty("--burn",t===0?.6:1);
    window.scrollTo({top:y0*(1-ease(t)),behavior:"instant"});
    if(t<1)requestAnimationFrame(step);
    else{fly.remove();setTimeout(()=>{btn.classList.remove("launched");rkBusy=false;},350);}
  })(T0);
});
