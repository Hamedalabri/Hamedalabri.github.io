/* Portfolio assistant: answers questions from the site's own content (data.js).
   No AI, no server, no API key: it matches keywords in EN / FR / AR.
   To teach it a new topic, add an entry to INTENTS and a matching answer in ANSWER. */
(function(){
  const L=()=>document.documentElement.lang||"en";
  const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g,"").replace(/[\u0625\u0623\u0622]/g,"\u0627").replace(/\u0629/g,"\u0647");

  const UI={
    en:{title:"Portfolio Assistant",status:"Online · ask me anything",ph:"Ask a question…",send:"Send",open:"Open the portfolio assistant",close:"Close",
        note:"Automatic answers based on this website.",
        hi:"Hi! Ask me about Hamed's skills, projects, experience, studies, availability or contact details.",
        chips:["What are your skills?","Tell me about projects","Are you available?"]},
    fr:{title:"Assistant du portfolio",status:"En ligne · posez vos questions",ph:"Posez une question…",send:"Envoyer",open:"Ouvrir l'assistant du portfolio",close:"Fermer",
        note:"Réponses automatiques basées sur ce site.",
        hi:"Bonjour ! Posez-moi vos questions sur les compétences, projets, expérience, études, disponibilité ou coordonnées de Hamed.",
        chips:["Quelles sont tes compétences ?","Parle-moi des projets","Es-tu disponible ?"]},
    ar:{title:"المساعد الشخصي",status:"متصل · اسألني أي شيء",ph:"اكتب سؤالك…",send:"إرسال",open:"فتح المساعد",close:"إغلاق",
        note:"إجابات تلقائية مبنية على محتوى هذا الموقع.",
        hi:"مرحبًا! اسألني عن مهارات حمد أو مشاريعه أو خبرته أو دراسته أو مدى توفره أو طرق التواصل معه.",
        chips:["ما هي مهاراتك؟","حدثني عن المشاريع","هل أنت متاح؟"]}
  };

  /* keywords per intent (already accent-free, lower case) */
  const INTENTS=[
    ["greet",["hello","hi ","hey","bonjour","salut","coucou","مرحبا","السلام","اهلا","هلا"]],
    ["avail",["availab","open to","opportun","hire","hiring","job offer","recrut","disponib","embauch","poste","متاح","متوفر","فرص","توظيف","وظيف"]],
    ["contact",["contact","email","e-mail","mail","reach","linkedin","joindre","coordonn","تواصل","بريد","ايميل","اتصل"]],
    ["cv",["cv","resume","curriculum","سيره"]],
    ["exp",["experience","apprentic","intern","stihle","neverhack","company","alternance","stage","entreprise","rennes","خبره","تدريب","شركه","عمل"]],
    ["edu",["study","studies","educat","degree","master","school","universit","iut","epitech","b.u.t","diplom","etud","formation","ecole","دراس","تعليم","شهاده","ماجستير","جامعه"]],
    ["langs",["language","speak","langue","parle","لغه","لغات","تتكلم","يتكلم"]],
    ["loc",["where","from","based","live","country","nationalit","d'ou","vient","habite","pays","oman","اين","بلد","تعيش","يعيش","عمان"]],
    ["projects",["project","portfolio","sae","work","projet","realis","مشروع","مشاريع","اعمال"]],
    ["skills",["skill","stack","tool","technolog","know","competen","outil","savoir","مهار","ادوات","تقني","كفاء","تعرف"]],
    ["about",["who","about","yourself","introduce","background","journey","parcours","مسيره","qui es","presente","toi","من انت","من هو","عرفني","نبذه"]]
  ];

  const hello=()=>(UI[L()]||UI.en).hi;
  const list=a=>"<ul>"+a.map(x=>"<li>"+x+"</li>").join("")+"</ul>";
  const plink=p=>`<a href="#p-${p.id}">${esc(p.t[L()])}</a>`;
  const clink=k=>`<a href="#c-${k}">${CATS[k].c} · ${esc(CATS[k].t[L()])}</a>`;
  const go=(href,txt)=>`<a href="${href}">${esc(txt)}</a>`;

  const ANSWER={
    greet:()=>hello(),
    about:()=>({en:"Hamed Al-Abri is from Oman and studies in France. After a B.U.T in Networks & Telecom (cybersecurity track) and two years as a network & systems apprentice at Groupe Stihlé, he is now doing a master's in cybersecurity at Epitech, as an R&D cybersecurity engineering apprentice at Neverhack in Rennes. ",
                fr:"Hamed Al-Abri vient d'Oman et étudie en France. Après un B.U.T Réseaux & Télécoms (parcours cybersécurité) et deux ans d'alternance réseaux & systèmes au Groupe Stihlé, il est aujourd'hui en master cybersécurité à Epitech, en alternance comme apprenti ingénieur R&D cyber chez Neverhack à Rennes. ",
                ar:"حمد العبري من سلطنة عُمان ويدرس في فرنسا. بعد شهادة B.U.T في الشبكات والاتصالات (مسار الأمن السيبراني) وسنتين من التدريب المهني في الشبكات والأنظمة لدى مجموعة Stihlé، يدرس حاليًا الماجستير في الأمن السيبراني في Epitech بنظام التناوب، كمتدرب مهندس بحث وتطوير في الأمن السيبراني لدى Neverhack في مدينة رين. "}[L()])+go("#about",{en:"More about him →",fr:"En savoir plus →",ar:"المزيد ←"}[L()]),
    skills:()=>{
      const head={en:"Hamed works across four competencies:",fr:"Hamed travaille sur quatre compétences :",ar:"يعمل حمد في أربع كفاءات:"}[L()];
      const tail={en:`He uses ${STACK.length} tools, including FortiGate, pfSense, Active Directory, Python and Docker. `,fr:`Il utilise ${STACK.length} outils, dont FortiGate, pfSense, Active Directory, Python et Docker. `,ar:`يستخدم ${STACK.length} أداة، منها FortiGate وpfSense وActive Directory وPython وDocker. `}[L()];
      return head+list(Object.keys(CATS).map(clink))+tail+go("#stack",{en:"See the full stack →",fr:"Voir tout le stack →",ar:"عرض كل الأدوات ←"}[L()]);
    },
    projects:()=>{
      const head={en:`Hamed has ${P.length} projects on this site. A few highlights:`,fr:`Hamed présente ${P.length} projets sur ce site. Quelques exemples :`,ar:`لدى حمد ${P.length} مشروعًا في هذا الموقع. أبرزها:`}[L()];
      const pick=["sae401","sae303","sae501","sae502"].map(id=>P.find(p=>p.id===id)).filter(Boolean);
      return head+list(pick.map(plink))+go("#projects",{en:"All projects →",fr:"Tous les projets →",ar:"كل المشاريع ←"}[L()]);
    },
    exp:()=>{
      const now={en:"<b>Now:</b> R&D Cybersecurity Engineering Apprentice at Neverhack, Rennes (2026–2028), alongside his master's at Epitech.",fr:"<b>Actuellement :</b> apprenti ingénieur R&D cyber chez Neverhack, Rennes (2026–2028), en parallèle de son master à Epitech.",ar:"<b>حاليًا:</b> متدرب مهندس بحث وتطوير في الأمن السيبراني لدى Neverhack في رين (2026–2028)، بالتوازي مع الماجستير في Epitech."}[L()];
      const before={en:"<br><b>Before:</b> Network & Systems Apprentice at Groupe Stihlé (2024–2026). Key projects:",fr:"<br><b>Avant :</b> apprenti réseaux & systèmes au Groupe Stihlé (2024–2026). Projets clés :",ar:"<br><b>سابقًا:</b> متدرب في الشبكات والأنظمة لدى مجموعة Stihlé ‏(2024–2026). أبرز المشاريع:"}[L()];
      return now+before+list(STIHLE.w.map(w=>esc(w.t[L()])))+go("#experience",{en:"Details →",fr:"Détails →",ar:"التفاصيل ←"}[L()]);
    },
    edu:()=>({en:"Education:",fr:"Formation :",ar:"التعليم:"}[L()])+list(EDU.map(x=>`<b>${x.y}</b> · ${esc(x.w[L()])}, ${esc(x.p[L()])}`)),
    langs:()=>({en:"Arabic (native), English (fluent), French (B2).",fr:"Arabe (langue maternelle), anglais (courant), français (B2).",ar:"العربية (اللغة الأم)، الإنجليزية (بطلاقة)، الفرنسية (مستوى B2)."}[L()]),
    loc:()=>({en:"Hamed is from Oman and currently lives and studies in France.",fr:"Hamed vient d'Oman et vit et étudie actuellement en France.",ar:"حمد من سلطنة عُمان ويعيش ويدرس حاليًا في فرنسا."}[L()]),
    avail:()=>esc(T[L()]["contact.p"])+" "+go("#contact",{en:"Contact him →",fr:"Le contacter →",ar:"تواصل معه ←"}[L()]),
    contact:()=>{
      const mail=(document.getElementById("email")||{}).textContent||"";
      return ({en:"Email: ",fr:"E-mail : ",ar:"البريد: "}[L()])+`<span class="sel">${esc(mail)}</span><br>GitHub: <a href="https://github.com/Hamedalabri" target="_blank" rel="noopener">github.com/Hamedalabri</a><br>LinkedIn: <a href="https://www.linkedin.com/in/hamed-alabri-3b36472b1/" target="_blank" rel="noopener">hamed-alabri ↗</a>`;
    },
    cv:()=>{const href=(document.getElementById("cv-link")||{}).href||"#";return ({en:"You can download the CV here: ",fr:"Le CV est disponible ici : ",ar:"يمكنك تحميل السيرة الذاتية من هنا: "}[L()])+`<a href="${esc(href)}" target="_blank" rel="noopener">CV ↗</a>`;},
    none:()=>({en:"I'm not sure about that one. I can answer about skills, projects, experience, studies, languages, availability or contact.",fr:"Je ne suis pas sûr. Je peux répondre sur les compétences, projets, expérience, études, langues, disponibilité ou contact.",ar:"لست متأكدًا من ذلك. يمكنني الإجابة عن المهارات والمشاريع والخبرة والدراسة واللغات والتوفر وطرق التواصل."}[L()])
  };

  /* a tool or topic named in the question -> matching projects */
  function techAnswer(q){
    const words=" "+q.replace(/[^a-z0-9؀-ۿ+.#-]+/g," ")+" ";
    const has=t=>{t=norm(t).trim();if(t.length<2)return false;return t.length<=3?words.includes(" "+t+" "):q.includes(t);};
    const tools=STACK.filter(s=>s.n.split("/").some(has));
    const projs=P.filter(p=>p.tags.some(has)||tools.some(s=>p.tags.some(t=>s.n.split("/").some(x=>norm(x).trim()===norm(t))))||(q.length>3&&norm(p.t[L()]).includes(q.trim())));
    if(!tools.length&&!projs.length)return null;
    let out="";
    if(tools.length){
      const names=tools.map(s=>`<b>${esc(s.n)}</b>`).join(", ");
      out+={en:`Yes, Hamed works with ${names}.`,fr:`Oui, Hamed utilise ${names}.`,ar:`نعم، يستخدم حمد ${names}.`}[L()]+" ";
    }
    if(projs.length) out+={en:"Related projects:",fr:"Projets liés :",ar:"مشاريع مرتبطة:"}[L()]+list(projs.slice(0,5).map(plink));
    return out;
  }

  /* a competency named in the question */
  const CAT_KEYS={
    cyber:["cyber","secur","pentest","hack","firewall","pare-feu","امن","اختراق","حمايه"],
    net:["network","reseau","routing","routage","switch","router","شبك","توجيه"],
    conn:["iot","wifi","wi-fi","transmission","telecom","embedded","embarque","اتصال","انترنت الاشياء"],
    dev:["develop","programm","coding","code","script","app","برمج","تطوير","تطبيق"]
  };
  function catAnswer(k){
    const ps=P.filter(p=>p.cat===k);
    return ({en:"Projects in ",fr:"Projets en ",ar:"مشاريع "}[L()])+clink(k)+":"+list(ps.map(plink));
  }

  function answer(raw){
    const q=" "+norm(raw)+" ";
    const hit=k=>INTENTS.find(x=>x[0]===k)[1].some(w=>q.includes(w));
    for(const k of ["avail","contact","cv","edu","langs","loc"]) if(hit(k)) return ANSWER[k]();
    const t=techAnswer(q);
    if(hit("exp")&&!t) return ANSWER.exp();
    for(const k in CAT_KEYS) if(CAT_KEYS[k].some(w=>q.includes(w))) return catAnswer(k);
    if(t) return t;
    for(const k of ["projects","skills","about"]) if(hit(k)) return ANSWER[k]();
    if(hit("greet")) return ANSWER.greet();
    return ANSWER.none();
  }

  /* ---------- UI ---------- */
  const root=document.createElement("div");root.className="bot-root";
  root.innerHTML=`
    <button type="button" class="bot-fab" id="bot-fab" aria-expanded="false" aria-controls="bot-panel">
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><rect x="4" y="7" width="16" height="12" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="9.5" cy="13" r="1.4" fill="currentColor"/><circle cx="14.5" cy="13" r="1.4" fill="currentColor"/><path d="M12 7V4M10 4h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
    </button>
    <section class="bot-panel" id="bot-panel" hidden aria-labelledby="bot-title">
      <header class="bot-head">
        <span class="bot-ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20"><rect x="4" y="7" width="16" height="12" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="9.5" cy="13" r="1.4" fill="currentColor"/><circle cx="14.5" cy="13" r="1.4" fill="currentColor"/><path d="M12 7V4M10 4h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>
        <div><div class="bot-title" id="bot-title"></div><div class="bot-status"><i></i><span id="bot-status"></span></div></div>
        <button type="button" class="bot-x" id="bot-x">×</button>
      </header>
      <div class="bot-log" id="bot-log" aria-live="polite"></div>
      <div class="bot-chips" id="bot-chips"></div>
      <form class="bot-form" id="bot-form" autocomplete="off">
        <input id="bot-in" type="text" maxlength="200">
        <button type="submit" class="bot-send" id="bot-send"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 12l16-8-6 16-2.5-6.5L4 12z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg></button>
      </form>
      <div class="bot-note" id="bot-note"></div>
    </section>`;
  document.body.appendChild(root);
  const $=id=>document.getElementById(id), log=$("bot-log");
  let started=false, shownLang="";

  function add(html,who){
    const m=document.createElement("div");m.className="msg "+who;m.innerHTML=html;log.appendChild(m);log.scrollTop=log.scrollHeight;return m;
  }
  function labels(){
    const u=UI[L()]||UI.en;
    $("bot-title").textContent=u.title;$("bot-status").textContent=u.status;$("bot-in").placeholder=u.ph;
    $("bot-in").setAttribute("aria-label",u.ph);$("bot-send").setAttribute("aria-label",u.send);
    $("bot-fab").setAttribute("aria-label",u.open);$("bot-x").setAttribute("aria-label",u.close);$("bot-note").textContent=u.note;
    $("bot-chips").innerHTML=u.chips.map(c=>`<button type="button">${esc(c)}</button>`).join("");
    if(started&&shownLang!==L()){log.innerHTML="";add(hello(),"bot");shownLang=L();}
  }
  function ask(text){
    text=text.trim();if(!text)return;
    add(esc(text),"me");
    const typing=add('<span class="dots"><i></i><i></i><i></i></span>',"bot");
    setTimeout(()=>{typing.innerHTML=answer(text);log.scrollTop=log.scrollHeight;},450);
  }
  function toggle(open){
    $("bot-panel").hidden=!open;$("bot-fab").setAttribute("aria-expanded",String(open));root.classList.toggle("open",open);
    if(open){if(!started){started=true;labels();}setTimeout(()=>$("bot-in").focus(),50);}
  }
  $("bot-fab").addEventListener("click",()=>toggle($("bot-panel").hidden));
  $("bot-x").addEventListener("click",()=>toggle(false));
  $("bot-form").addEventListener("submit",e=>{e.preventDefault();ask($("bot-in").value);$("bot-in").value="";});
  $("bot-chips").addEventListener("click",e=>{const b=e.target.closest("button");if(b)ask(b.textContent);});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("bot-panel").hidden)toggle(false);});
  /* follow the site's language switch */
  new MutationObserver(labels).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
  labels();
})();
