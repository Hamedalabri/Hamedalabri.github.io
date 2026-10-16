/* ============================================================
   ALL SITE CONTENT LIVES HERE.
   - T: interface text per language
   - TIMELINE: About section timeline
   - CATS: the 4 competencies
   - P: projects (one page each, URL = #p-<id>)
   - STIHLE: apprenticeship section
   To add screenshots to a project: put images in assets/img/
   and add  imgs:["assets/img/file.png"]  to that project.
   ============================================================ */

const T={
en:{
 "nav.about":"About","nav.skills":"Competencies","nav.projects":"Projects","nav.experience":"Experience","nav.contact":"Contact","look.coast":"Omani coast theme","sky.day":"Day","sky.sunset":"Sunset",
 "hero.eyebrow":"Hi, I'm",
 "hero.title":"Hamed <span>Al-Abri</span>",
 "hero.lede":"Master's student in cybersecurity at Epitech and R&D cybersecurity engineering apprentice at Neverhack. I develop offensive tools and simulate attacks to help companies strengthen their defences.",
 "hero.r1":"Network & Systems","hero.r2":"Cybersecurity","hero.r3":"Master's student","hero.cta1":"See my projects","hero.cv":"Download CV",
 "about.h":"About me","about.edu":"Education","about.work":"Professional experience","about.now":"Now",
 "about.p1":"I'm from Oman and have been studying in France since 2021. I hold a B.U.T in Networks & Telecommunications (cybersecurity track) from IUT Colmar, and I'm now doing a master's degree in cybersecurity at Epitech (2026–2028).",
 "about.p2":"My master's is a work-study programme: for two years I'm an R&D cybersecurity engineering apprentice at Neverhack in Rennes, working on offensive security development. Before that, I spent two years as a network & systems apprentice at Groupe Stihlé, handling user support, Active Directory, servers and IP telephony, and leading security projects such as an internal phishing campaign, LAPS and a high-availability DHCP cluster.",
 "about.p3":"My goal: to specialise in offensive security and purple teaming, from pentesting to attack simulation to strengthen detection. Outside work I play volleyball, train at the gym and travel.",
 "facts.ar.l":"Arabic","facts.ar.v":"Native",
 "facts.en.l":"English","facts.en.v":"Fluent",
 "facts.fr.l":"French","facts.fr.v":"B2",
 "skills.h":"Competencies","skills.see":"See projects →","skills.n":"projects","comp.list":"Projects in this competency","comp.others":"Other competencies","comp.all":"All competencies",
 "stack.h":"Technology stack","stack.p":"Tools and technologies I use across networks, security, systems, development and IoT.","stack.n":"technologies","stack.all":"All","projects.h":"Projects","filter.all":"All","proj.open":"Open project →",
 "proj.back":"All projects","proj.ctx":"Context","proj.did":"What I did","proj.learn":"What I learned","proj.gallery":"Screenshots",
 "proj.comp":"Competency","proj.year":"Year","proj.team":"Team","proj.stack":"Stack","proj.code":"Source code",
 "proj.prev":"← Previous","proj.next":"Next →",
 "exp.h":"Experience","exp.nh.role":"R&D Cybersecurity Engineering Apprentice","exp.nh.p":"Two-year apprenticeship in Neverhack's R&D cybersecurity team in Rennes, alongside my master's in cybersecurity at Epitech.",
 "exp.stihle.role":"Network & Systems Apprentice",
 "exp.stihle.poster":"My apprenticeship poster (click to enlarge)",
 "exp.stihle.p":"Groupe Stihlé is a family-owned HVAC and plumbing company in Alsace with 550+ employees. I worked across support, infrastructure and security.",
 "contact.h":"Contact",
 "contact.p":"Open to opportunities in network, systems and cybersecurity, in France or the Gulf.",
 "contact.copy":"Copy email","contact.copied":"Copied",
 "footer":"Back to top"
},
fr:{
 "nav.about":"À propos","nav.skills":"Compétences","nav.projects":"Projets","nav.experience":"Expérience","nav.contact":"Contact","look.coast":"Thème côte omanaise","sky.day":"Jour","sky.sunset":"Coucher de soleil",
 "hero.eyebrow":"Bonjour, je suis",
 "hero.title":"Hamed <span>Al-Abri</span>",
 "hero.lede":"Étudiant en master cybersécurité à Epitech et apprenti ingénieur R&D cyber chez Neverhack. Je développe des outils offensifs et simule des attaques pour aider les entreprises à renforcer leur défense.",
 "hero.r1":"Réseaux & Systèmes","hero.r2":"Cybersécurité","hero.r3":"Étudiant en master","hero.cta1":"Voir mes projets","hero.cv":"Télécharger le CV",
 "about.h":"À propos de moi","about.edu":"Formation","about.work":"Expérience professionnelle","about.now":"En cours",
 "about.p1":"Je viens d'Oman et j'étudie en France depuis 2021. Je suis diplômé d'un B.U.T Réseaux & Télécommunications (parcours cybersécurité) à l'IUT de Colmar et je suis aujourd'hui en master cybersécurité à Epitech (2026–2028).",
 "about.p2":"Mon master se déroule en alternance : pendant deux ans, je suis apprenti ingénieur R&D cyber chez Neverhack à Rennes, sur la partie développement cyber offensif. Auparavant, j'ai été apprenti réseaux & systèmes pendant deux ans au Groupe Stihlé : support utilisateurs, Active Directory, serveurs, téléphonie IP, et pilotage de projets sécurité comme une campagne de phishing interne, LAPS et un cluster DHCP haute disponibilité.",
 "about.p3":"Mon objectif : me spécialiser en sécurité offensive et purple team, du pentest à la simulation d’attaques pour renforcer la détection. En dehors du travail, je joue au volley, je fais de la musculation et je voyage.",
 "facts.ar.l":"Arabe","facts.ar.v":"Langue maternelle",
 "facts.en.l":"Anglais","facts.en.v":"Courant",
 "facts.fr.l":"Français","facts.fr.v":"B2",
 "skills.h":"Compétences","skills.see":"Voir les projets →","skills.n":"projets","comp.list":"Projets de cette compétence","comp.others":"Autres compétences","comp.all":"Toutes les compétences",
 "stack.h":"Stack technique","stack.p":"Outils et technologies que j'utilise en réseaux, sécurité, systèmes, développement et IoT.","stack.n":"technologies","stack.all":"Tout","projects.h":"Projets","filter.all":"Tous","proj.open":"Voir le projet →",
 "proj.back":"Tous les projets","proj.ctx":"Contexte","proj.did":"Ce que j'ai fait","proj.learn":"Ce que j'ai appris","proj.gallery":"Captures",
 "proj.comp":"Compétence","proj.year":"Année","proj.team":"Équipe","proj.stack":"Outils","proj.code":"Code source",
 "proj.prev":"← Précédent","proj.next":"Suivant →",
 "exp.h":"Expérience","exp.nh.role":"Apprenti Ingénieur R&D Cyber","exp.nh.p":"Alternance de deux ans au sein de l'équipe R&D cybersécurité de Neverhack à Rennes, en parallèle de mon master cybersécurité à Epitech.",
 "exp.stihle.role":"Apprenti Réseaux & Systèmes",
 "exp.stihle.poster":"Mon poster d'alternance (cliquez pour agrandir)",
 "exp.stihle.p":"Le Groupe Stihlé est une entreprise familiale alsacienne de chauffage, climatisation et sanitaire (+550 collaborateurs). J'y ai travaillé sur le support, l'infrastructure et la sécurité.",
 "contact.h":"Contact",
 "contact.p":"Ouvert aux opportunités en réseaux, systèmes et cybersécurité, en France ou dans le Golfe.",
 "contact.copy":"Copier l'e-mail","contact.copied":"Copié",
 "footer":"Retour en haut"
},
ar:{
 "nav.about":"نبذة عني","nav.skills":"الكفاءات","nav.projects":"المشاريع","nav.experience":"الخبرة","nav.contact":"تواصل","look.coast":"ثيم الساحل العُماني","sky.day":"نهار","sky.sunset":"غروب",
 "hero.eyebrow":"مرحبًا، أنا",
 "hero.title":"حمد <span>العبري</span>",
 "hero.lede":"طالب ماجستير في الأمن السيبراني في Epitech ومتدرب مهندس بحث وتطوير في الأمن السيبراني لدى Neverhack. أطوّر أدوات هجومية وأحاكي الهجمات لمساعدة الشركات على تعزيز دفاعاتها.",
 "hero.r1":"الشبكات والأنظمة","hero.r2":"الأمن السيبراني","hero.r3":"طالب ماجستير","hero.cta1":"شاهد مشاريعي","hero.cv":"تحميل السيرة الذاتية",
 "about.h":"نبذة عني","about.edu":"التعليم","about.work":"الخبرة المهنية","about.now":"حاليًا",
 "about.p1":"أنا من سلطنة عُمان وأدرس في فرنسا منذ عام 2021. حصلت على شهادة B.U.T في الشبكات والاتصالات (مسار الأمن السيبراني) من IUT كولمار، وأدرس حاليًا الماجستير في الأمن السيبراني في Epitech ‏(2026–2028).",
 "about.p2":"أتابع الماجستير بنظام التناوب بين الدراسة والعمل: لمدة سنتين أعمل متدربًا مهندسًا في البحث والتطوير في الأمن السيبراني لدى Neverhack في مدينة رين، في مجال تطوير الأدوات الهجومية. وقبل ذلك عملت سنتين متدربًا في الشبكات والأنظمة لدى مجموعة Stihlé، حيث توليت الدعم الفني وإدارة Active Directory والخوادم والاتصالات عبر IP، وقدت مشاريع أمنية مثل حملة تصيّد احتيالي داخلية ونشر LAPS وعنقود DHCP عالي التوفر.",
 "about.p3":"هدفي: التخصص في الأمن الهجومي والفريق البنفسجي (Purple Team)، من اختبار الاختراق إلى محاكاة الهجمات لتعزيز قدرات الكشف. خارج العمل ألعب الكرة الطائرة وأمارس رياضة كمال الأجسام وأحب السفر.",
 "facts.ar.l":"العربية","facts.ar.v":"اللغة الأم",
 "facts.en.l":"الإنجليزية","facts.en.v":"بطلاقة",
 "facts.fr.l":"الفرنسية","facts.fr.v":"مستوى B2",
 "skills.h":"الكفاءات","skills.see":"← عرض المشاريع","skills.n":"مشاريع","comp.list":"مشاريع هذه الكفاءة","comp.others":"كفاءات أخرى","comp.all":"كل الكفاءات",
 "stack.h":"التقنيات والأدوات","stack.p":"الأدوات والتقنيات التي أستخدمها في الشبكات والأمن والأنظمة والبرمجة وإنترنت الأشياء.","stack.n":"تقنية","stack.all":"الكل","projects.h":"المشاريع","filter.all":"الكل","proj.open":"← فتح المشروع",
 "proj.back":"كل المشاريع","proj.ctx":"السياق","proj.did":"ما قمت به","proj.learn":"ما تعلمته","proj.gallery":"صور",
 "proj.comp":"الكفاءة","proj.year":"السنة","proj.team":"الفريق","proj.stack":"الأدوات","proj.code":"الشيفرة المصدرية",
 "proj.prev":"→ السابق","proj.next":"التالي ←",
 "exp.h":"الخبرة","exp.nh.role":"متدرب مهندس بحث وتطوير في الأمن السيبراني","exp.nh.p":"تدريب مهني لمدة سنتين ضمن فريق البحث والتطوير في الأمن السيبراني لدى Neverhack في مدينة رين، بالتوازي مع دراسة الماجستير في الأمن السيبراني في Epitech.",
 "exp.stihle.role":"متدرب في الشبكات والأنظمة",
 "exp.stihle.poster":"ملصق فترة التدريب بالتناوب (انقر للتكبير)",
 "exp.stihle.p":"مجموعة Stihlé شركة عائلية في منطقة الألزاس متخصصة في التدفئة والتكييف والسباكة، ويعمل بها أكثر من 550 موظفًا. عملت فيها على الدعم الفني والبنية التحتية والأمن.",
 "contact.h":"تواصل معي",
 "contact.p":"منفتح على الفرص في مجالات الشبكات والأنظمة والأمن السيبراني، في فرنسا أو في دول الخليج.",
 "contact.copy":"نسخ البريد","contact.copied":"تم النسخ",
 "footer":"العودة إلى الأعلى"
}};

/* About section: two separate timelines. cur:true = ongoing (shows a "Now" badge). */
const EDU=[
 {y:"2026 – 2028",cur:true,w:{en:"Master in Cybersecurity",fr:"Master Cybersécurité",ar:"ماجستير في الأمن السيبراني"},p:{en:"Epitech · work-study",fr:"Epitech · en alternance",ar:"Epitech · بنظام التناوب"}},
 {y:"2023 – 2026",w:{en:"B.U.T Networks & Telecom",fr:"B.U.T Réseaux & Télécoms",ar:"B.U.T الشبكات والاتصالات"},p:{en:"Cybersecurity track · IUT Colmar",fr:"Parcours cybersécurité · IUT Colmar",ar:"مسار الأمن السيبراني · IUT كولمار"}},
 {y:"2021 – 2023",w:{en:"DU PLUS",fr:"DU PLUS",ar:"دبلوم DU PLUS"},p:{en:"IUT du Limousin, Limoges",fr:"IUT du Limousin, Limoges",ar:"IUT ليموزان، ليموج"}},
 {y:"2020 – 2021",w:{en:"Scientific baccalaureate",fr:"Baccalauréat scientifique",ar:"شهادة الدبلوم العام (علمي)"},p:{en:"Azzan Bin Qais International School, Oman",fr:"Lycée international Azzan Bin Qais, Oman",ar:"مدرسة عزان بن قيس الدولية، عُمان"}}
];
const WORK=[
 {y:"2026 – 2028",cur:true,w:{en:"R&D Cybersecurity Engineering Apprentice",fr:"Apprenti Ingénieur R&D Cyber",ar:"متدرب مهندس بحث وتطوير في الأمن السيبراني"},p:{en:"Neverhack · Rennes, France",fr:"Neverhack · Rennes, France",ar:"Neverhack · رين، فرنسا"}},
 {y:"2024 – 2026",w:{en:"Network & Systems Apprentice",fr:"Apprenti Réseaux & Systèmes",ar:"متدرب في الشبكات والأنظمة"},p:{en:"Groupe Stihlé · Turckheim, France",fr:"Groupe Stihlé · Turckheim, France",ar:"مجموعة Stihlé · تيركهايم، فرنسا"}}
];

const CATS={
 net:{c:"C1",t:{en:"Administer networks",fr:"Administrer les réseaux et l'Internet",ar:"إدارة الشبكات والإنترنت"},
  d:{en:"Design, build and run LANs and WANs: VLANs, routing, high availability, core services.",fr:"Concevoir, déployer et exploiter des réseaux LAN et WAN : VLAN, routage, haute disponibilité, services.",ar:"تصميم الشبكات المحلية والواسعة وتشغيلها: الشبكات الافتراضية والتوجيه والتوفر العالي والخدمات الأساسية."},
  s:["VLAN","OSPF","BGP/MPLS","VRRP","DNS","DHCP","GNS3","EVE-NG"]},
 conn:{c:"C2",t:{en:"Connect businesses & users",fr:"Connecter les entreprises et les usagers",ar:"ربط المؤسسات والمستخدمين"},
  d:{en:"Transmission systems, Wi-Fi, IoT and VoIP, from signal measurement to a working product.",fr:"Systèmes de transmission, Wi-Fi, IoT et ToIP, de la mesure du signal au produit fonctionnel.",ar:"أنظمة الإرسال والواي فاي وإنترنت الأشياء والاتصال الصوتي عبر IP، من قياس الإشارة إلى منتج يعمل."},
  s:["Wi-Fi","LoRaWAN","MQTT","ESP8266","Arduino","SIP"]},
 dev:{c:"C3",t:{en:"Build IT tools & applications",fr:"Créer des outils et applications informatiques",ar:"تطوير الأدوات والتطبيقات"},
  d:{en:"Scripts and applications for networks: Python, sockets, web apps and team projects with Git.",fr:"Scripts et applications pour les réseaux : Python, sockets, applications web et projets d'équipe avec Git.",ar:"برمجيات وتطبيقات للشبكات: بايثون والمقابس وتطبيقات الويب ومشاريع جماعية باستخدام Git."},
  s:["Python","Scapy","PyQt6","Django","MySQL","Git"]},
 cyber:{c:"C4",t:{en:"Administer a secure information system",fr:"Administrer un système d'information sécurisé",ar:"إدارة نظام معلومات آمن"},
  d:{en:"Harden and protect infrastructure: firewalls, VPN, centralised authentication, pentesting.",fr:"Durcir et protéger l'infrastructure : pare-feu, VPN, authentification centralisée, pentest.",ar:"تقوية البنية التحتية وحمايتها: الجدران النارية والشبكات الافتراضية الخاصة والمصادقة المركزية واختبار الاختراق."},
  s:["pfSense","OpenVPN","LDAPS","Nmap","Burp Suite","Metasploit"]}
};

/* Team labels reused by projects */
const TEAM={
 pair:{en:"Pair",fr:"Binôme",ar:"فريق ثنائي"},
 group:{en:"Group",fr:"Groupe",ar:"مجموعة"},
 four:{en:"4 students",fr:"4 étudiants",ar:"4 طلاب"},
 seven:{en:"7 students",fr:"7 étudiants",ar:"7 طلاب"},
 solo:{en:"Individual",fr:"Individuel",ar:"فردي"}
};

const P=[
 {id:"sae502",sae:"SAÉ 5.02",y:"2025–26",cat:"dev",team:"seven",gh:"https://github.com/SAE502RT2025/Travelog",tags:["Web app","Tests","Docs","Git"],
  t:{en:"Travelog: leading an IT project",fr:"Travelog : piloter un projet informatique",ar:"Travelog: إدارة مشروع برمجي"},
  s:{en:"A travel social network with interactive trip maps, built by a team of seven under real project conditions.",fr:"Un réseau social de voyage avec cartes d'itinéraires interactives, réalisé en équipe de sept en conditions réelles.",ar:"شبكة اجتماعية للسفر مع خرائط تفاعلية للرحلات، أنجزها فريق من سبعة طلاب في ظروف مشروع حقيقي."},
  ctx:{en:"A third-year project that simulates a professional software project, from the client's need to production readiness. The product, Travelog, works like Instagram for itineraries: users plan trips on an interactive map, make them public or private, and share them with friends.",
       fr:"Un projet de troisième année qui simule un projet logiciel professionnel, du besoin client à la mise en production. Le produit, Travelog, fonctionne comme un Instagram des itinéraires : on planifie ses voyages sur une carte interactive, on les rend publics ou privés et on les partage avec ses amis.",
       ar:"مشروع السنة الثالثة يحاكي مشروعًا برمجيًا احترافيًا، من احتياجات العميل حتى الجاهزية للإطلاق. المنتج Travelog يشبه إنستغرام للرحلات: يخطط المستخدم رحلاته على خريطة تفاعلية، ويجعلها عامة أو خاصة، ويشاركها مع أصدقائه."},
  b:{en:["Analysed the client's needs and wrote the specification","Split roles across the team and tracked progress","Set up a shared development environment","Wrote unit tests, technical and user documentation","Studied deployment strategies and security basics"],
     fr:["Analyse du besoin client et rédaction du cahier des charges","Répartition des rôles et suivi de l'avancement","Mise en place d'un environnement de développement commun","Tests unitaires, documentation technique et utilisateur","Étude des stratégies de déploiement et des bases de sécurité"],
     ar:["تحليل احتياجات العميل وكتابة دفتر الشروط","توزيع الأدوار داخل الفريق ومتابعة التقدم","إعداد بيئة تطوير مشتركة","كتابة اختبارات الوحدات والتوثيق التقني وتوثيق المستخدم","دراسة استراتيجيات النشر وأساسيات الأمن"]},
  l:{en:["Running a project end to end","Working in a seven-person team with clear roles","Software quality through tests and documentation"],
     fr:["Piloter un projet de bout en bout","Travailler à sept avec des rôles définis","La qualité logicielle par les tests et la documentation"],
     ar:["إدارة مشروع من البداية إلى النهاية","العمل ضمن فريق من سبعة بأدوار واضحة","جودة البرمجيات عبر الاختبارات والتوثيق"]}},

 {id:"sae501",topo:"sae501",sae:"SAÉ 5.01",y:"2025–26",cat:"conn",team:"group",tags:["LoRaWAN","TTN","GNSS","MQTT","Node-RED","Pycom"],
  t:{en:"GNSS vehicle tracker over LoRaWAN",fr:"Traçage de véhicule GNSS via LoRaWAN",ar:"تتبع المركبات عبر GNSS وLoRaWAN"},
  s:{en:"A low-power IoT tracker that sends a vehicle's position over The Things Network and shows it live on a map.",fr:"Un traceur IoT basse consommation qui envoie la position d'un véhicule via The Things Network et l'affiche en direct sur une carte.",ar:"جهاز تتبع منخفض الاستهلاك يرسل موقع المركبة عبر شبكة The Things Network ويعرضه مباشرة على خريطة."},
  ctx:{en:"Design and present a complete technical solution: an embedded, autonomous, battery-friendly device that reports a vehicle's location to a server and displays it on a web map.",
       fr:"Concevoir et présenter une solution technique complète : un équipement embarqué, autonome et économe, qui envoie la position d'un véhicule à un serveur et l'affiche sur une carte web.",
       ar:"تصميم حل تقني متكامل وتقديمه: جهاز مدمج مستقل وموفر للطاقة يرسل موقع المركبة إلى خادم ويعرضه على خريطة ويب."},
  b:{en:["Read GNSS coordinates with a Pycom FiPy/LoPy on a Pytrack board","Packed positions into compact payloads for LoRaWAN","Configured a TTN application with payload formatters to JSON","Pulled messages over MQTT into Node-RED and plotted them on a live map","Kept the device in deep sleep, woken by the accelerometer when the vehicle moves","Added a remote stop command and movement notifications"],
     fr:["Lecture des coordonnées GNSS avec un Pycom FiPy/LoPy sur carte Pytrack","Messages compacts pour limiter la taille sur LoRaWAN","Application TTN avec payload formatters vers JSON","Récupération MQTT dans Node-RED et affichage sur carte en temps réel","Veille profonde, réveil par l'accéléromètre quand le véhicule bouge","Commande d'arrêt à distance et notifications de mouvement"],
     ar:["قراءة إحداثيات GNSS بوحدة Pycom FiPy/LoPy على لوحة Pytrack","ضغط البيانات في رسائل صغيرة لشبكة LoRaWAN","إعداد تطبيق على TTN مع محولات للبيانات إلى JSON","استقبال الرسائل عبر MQTT في Node-RED وعرضها على خريطة مباشرة","إبقاء الجهاز في سبات عميق وإيقاظه بمقياس التسارع عند تحرك المركبة","إضافة أمر إيقاف عن بُعد وتنبيهات عند الحركة"]},
  l:{en:["LoRaWAN and The Things Network","Embedded systems and power management","Designing a complete IoT architecture"],
     fr:["LoRaWAN et The Things Network","Systèmes embarqués et gestion de l'énergie","Concevoir une architecture IoT complète"],
     ar:["شبكة LoRaWAN ومنصة The Things Network","الأنظمة المدمجة وإدارة الطاقة","تصميم بنية متكاملة لإنترنت الأشياء"]}},

 {id:"sae401",sae:"SAÉ 4.01",y:"2024–25",cat:"cyber",team:"pair",tags:["OpenVPN","LDAPS","NFS","pfSense","Squid","BIND9","Postfix"],
  t:{en:"Securing an enterprise information system",fr:"Sécuriser un système d'information",ar:"تأمين نظام معلومات مؤسسي"},
  s:{en:"A complete secure company network: remote access, central authentication, firewalling and hardened services.",fr:"Une infrastructure d'entreprise sécurisée complète : accès distant, authentification centralisée, pare-feu et services durcis.",ar:"بنية شبكة مؤسسية آمنة متكاملة: وصول عن بُعد ومصادقة مركزية وجدار ناري وخدمات محصنة."},
  ctx:{en:"Build a secure enterprise infrastructure from a specification, with wide technical freedom. My main parts were the VPN, LDAP integration, NFS shares and the proxy.",
       fr:"Construire une infrastructure d'entreprise sécurisée à partir d'un cahier des charges, avec une grande liberté technique. Mes parties principales : le VPN, l'intégration LDAP, les partages NFS et le proxy.",
       ar:"بناء بنية تحتية مؤسسية آمنة انطلاقًا من دفتر شروط مع حرية تقنية واسعة. تمثلت مسؤولياتي الرئيسية في الشبكة الافتراضية الخاصة وتكامل LDAP ومشاركات NFS والوكيل."},
  b:{en:["Deployed OpenVPN with certificate authentication, routing and filtering to LDAP and NFS","Installed LDAPS over TLS (port 636), created users from LDIF files, tested with ldapsearch","Integrated LDAP login on a remote client through PAM, validated over the VPN","Shared /home over NFS with root_squash and LDAP-based access","Set up pfSense WAN/LAN/DMZ rules and a Squid proxy requiring LDAP auth","Deployed BIND9, Apache with HTTPS and Postfix/Dovecot with TLS"],
     fr:["OpenVPN avec certificats, routage et filtrage vers LDAP et NFS","LDAPS en TLS (port 636), utilisateurs créés en LDIF, tests avec ldapsearch","Authentification LDAP sur un client distant via PAM, validée à travers le VPN","Partage /home en NFS avec root_squash et accès via LDAP","Règles pfSense WAN/LAN/DMZ et proxy Squid avec authentification LDAP","BIND9, Apache en HTTPS et Postfix/Dovecot en TLS"],
     ar:["نشر OpenVPN بمصادقة الشهادات مع التوجيه والتصفية نحو LDAP وNFS","تثبيت LDAPS عبر TLS على المنفذ 636 وإنشاء المستخدمين بملفات LDIF واختبارها بـ ldapsearch","دمج تسجيل الدخول عبر LDAP على جهاز بعيد باستخدام PAM والتحقق منه عبر VPN","مشاركة /home عبر NFS مع root_squash ووصول مبني على LDAP","إعداد قواعد pfSense لواجهات WAN/LAN/DMZ ووكيل Squid بمصادقة LDAP","نشر BIND9 وApache مع HTTPS وPostfix/Dovecot مع TLS"]},
  l:{en:["Designing a secure network architecture","Integrating VPN, LDAP and NFS","Writing firewall policy with pfSense"],
     fr:["Concevoir une architecture réseau sécurisée","Intégrer VPN, LDAP et NFS","Écrire une politique de filtrage avec pfSense"],
     ar:["تصميم بنية شبكة آمنة","دمج VPN وLDAP وNFS","كتابة سياسات الجدار الناري على pfSense"]}},

 {id:"pentest",imgs:["assets/img/sae3cyber04-rootme.png"],sae:"SAÉ 3.Cyber.04",y:"2024–25",cat:"cyber",tags:["Kali","Nmap","Burp Suite","Metasploit","Root Me"],
  t:{en:"Introduction to pentesting",fr:"Découvrir le pentesting",ar:"مدخل إلى اختبار الاختراق"},
  s:{en:"Ethical hacking methodology (PTES, OWASP) applied through CTF challenges on Root Me.",fr:"Méthodologie de test d'intrusion éthique (PTES, OWASP) appliquée sur des CTF Root Me.",ar:"منهجية الاختراق الأخلاقي (PTES وOWASP) مطبقة عبر تحديات CTF على منصة Root Me."},
  ctx:{en:"A semester-3 module to discover ethical penetration testing: how to find, analyse and exploit vulnerabilities in a safe environment, scored by points earned on Root Me.",
       fr:"Un module du semestre 3 pour découvrir le test d'intrusion éthique : identifier, analyser et exploiter des vulnérabilités dans un environnement sûr, évalué aux points gagnés sur Root Me.",
       ar:"وحدة في الفصل الثالث لاكتشاف اختبار الاختراق الأخلاقي: إيجاد الثغرات وتحليلها واستغلالها في بيئة آمنة، مع تقييم بالنقاط على منصة Root Me."},
  b:{en:["Studied PTES and OWASP to structure a test: recon, scanning, exploitation","Used Nmap for recon, Burp Suite for web testing, Metasploit for exploitation on Kali","Solved web challenges: SQLi, XSS, LFI/RFI, header and cookie flaws","Solved cryptography, reverse engineering and network-analysis challenges","Wrote Python, Bash and C scripts to automate solving"],
     fr:["Étude de PTES et OWASP : reconnaissance, scan, exploitation","Nmap pour la reconnaissance, Burp Suite pour le web, Metasploit pour l'exploitation, sous Kali","Défis web : SQLi, XSS, LFI/RFI, failles d'en-têtes et de cookies","Défis de cryptographie, reverse engineering et analyse réseau","Scripts Python, Bash et C pour automatiser la résolution"],
     ar:["دراسة منهجيتي PTES وOWASP: الاستطلاع والمسح والاستغلال","استخدام Nmap للاستطلاع وBurp Suite للويب وMetasploit للاستغلال على Kali","حل تحديات الويب: SQLi وXSS وLFI/RFI وثغرات الترويسات وملفات تعريف الارتباط","حل تحديات التشفير والهندسة العكسية وتحليل الشبكات","كتابة برمجيات Python وBash وC لأتمتة الحلول"]},
  l:{en:["A structured pentest methodology","How common web vulnerabilities work","Solving problems under time pressure"],
     fr:["Une méthodologie de pentest structurée","Le fonctionnement des vulnérabilités web courantes","Résoudre des problèmes sous pression"],
     ar:["منهجية منظمة لاختبار الاختراق","آلية عمل ثغرات الويب الشائعة","حل المشكلات تحت ضغط الوقت"]}},

 {id:"sae303",topo:"sae303",sae:"SAÉ 3.03",y:"2024–25",cat:"net",team:"group",tags:["MPLS-VPN","BGP","OSPF","VRRP","MSTP","DNSSEC","AD"],
  t:{en:"Secure multi-site network",fr:"Réseau multi-sites sécurisé",ar:"شبكة آمنة متعددة المواقع"},
  s:{en:"Two fictional companies across Strasbourg, Nancy and Metz, interconnected by a simulated ISP backbone.",fr:"Deux entreprises fictives réparties entre Strasbourg, Nancy et Metz, interconnectées par un FAI simulé.",ar:"شركتان افتراضيتان موزعتان بين ستراسبورغ ونانسي وميتز، مترابطتان عبر شبكة مزود خدمة محاكاة."},
  ctx:{en:"Design, configure and secure the networks of UC Exchange and ABC Conseil, each spread over several cities, with DNS, web and mail, high availability, and interconnection through an ISP we also had to build.",
       fr:"Concevoir, configurer et sécuriser les réseaux d'UC Exchange et d'ABC Conseil, répartis sur plusieurs villes, avec DNS, web et messagerie, haute disponibilité et interconnexion via un FAI que nous devions aussi construire.",
       ar:"تصميم شبكتي UC Exchange وABC Conseil الموزعتين على عدة مدن وإعدادهما وتأمينهما، مع خدمات DNS والويب والبريد والتوفر العالي، والربط عبر مزود خدمة قمنا ببنائه أيضًا."},
  b:{en:["Built a hierarchical LAN (access, distribution, core) with a VLAN per service","Used MSTP over redundant links and VRRP for gateway high availability","Set up inter-VLAN routing and NAT/PAT for Internet access","Ran primary DNS on Windows Server and a DNSSEC secondary on Linux","Deployed intranet and public sites on Apache, SMTP/IMAP mail and an AD domain","Built 3 autonomous systems running OSPF inside and BGP/MP-BGP between them, with a route reflector and per-customer VRFs (static for UC Exchange, RIP for ABC Conseil)"],
     fr:["LAN hiérarchique (accès, distribution, cœur) avec un VLAN par service","MSTP sur liens redondants et VRRP pour la haute disponibilité","Routage inter-VLAN et NAT/PAT pour l'accès Internet","DNS primaire sous Windows Server, secondaire Linux avec DNSSEC","Sites intranet et public sur Apache, messagerie SMTP/IMAP, domaine AD","3 AS avec OSPF en interne et BGP/MP-BGP entre eux, route reflector et VRF par client (statique pour UC Exchange, RIP pour ABC Conseil)"],
     ar:["بناء شبكة محلية هرمية (وصول وتوزيع ونواة) مع VLAN لكل خدمة","استخدام MSTP على الروابط الاحتياطية وVRRP للتوفر العالي للبوابة","إعداد التوجيه بين الشبكات وترجمة NAT/PAT للوصول إلى الإنترنت","تشغيل DNS رئيسي على Windows Server وثانوي على Linux مع DNSSEC","نشر موقعي الشبكة الداخلية والعام على Apache وبريد SMTP/IMAP ونطاق Active Directory","بناء ثلاثة أنظمة مستقلة تعمل بـ OSPF داخليًا وBGP/MP-BGP فيما بينها، مع عاكس مسارات وVRF لكل عميل (توجيه ثابت لـ UC Exchange وRIP لـ ABC Conseil)"]},
  l:{en:["Hierarchical design and redundancy","Service-provider routing: MPLS, BGP, VRF","Running mixed Windows and Linux services"],
     fr:["Conception hiérarchique et redondance","Routage opérateur : MPLS, BGP, VRF","Services mixtes Windows et Linux"],
     ar:["التصميم الهرمي والتكرار الاحتياطي","توجيه مزودي الخدمة: MPLS وBGP وVRF","تشغيل خدمات مختلطة بين Windows وLinux"]}},

 {id:"sae302",sae:"SAÉ 3.02",y:"2024–25",cat:"dev",gh:"https://github.com/Hamedalabri/SAE3.02",tags:["Python","PyQt6","TCP sockets","Multithreading"],
  t:{en:"Distributed code-execution service",fr:"Service distribué d'exécution de code",ar:"خدمة موزعة لتنفيذ الشيفرات"},
  s:{en:"A client–server app that receives programs, compiles and runs them, and balances load across servers.",fr:"Une application client-serveur qui reçoit des programmes, les compile, les exécute et répartit la charge entre serveurs.",ar:"تطبيق عميل-خادم يستقبل البرامج ويترجمها وينفذها ويوزع الحمل بين عدة خوادم."},
  ctx:{en:"Develop a distributed client–server application that accepts source code, compiles and runs it, and hands work to other servers when one is busy. Server built in November, client in December, then tests, docs and a demo video.",
       fr:"Développer une application client-serveur distribuée qui reçoit du code, le compile, l'exécute et délègue le travail à d'autres serveurs en cas de surcharge. Serveur en novembre, client en décembre, puis tests, documentation et vidéo de démonstration.",
       ar:"تطوير تطبيق عميل-خادم موزع يستقبل الشيفرات ويترجمها وينفذها ويحيل العمل إلى خوادم أخرى عند الانشغال. بُني الخادم في نوفمبر والعميل في ديسمبر، ثم الاختبارات والتوثيق وفيديو العرض."},
  b:{en:["Built a PyQt6 client: enter IP and port, upload Python/C/C++/Java, see results or errors","Server detects the language, compiles, runs and returns output","Handled connections in threads and rejected new ones when busy","Added master/worker load balancing that forwards jobs to secondary servers","Used TCP sockets with error handling and reconnection"],
     fr:["Client PyQt6 : saisie IP/port, envoi de code Python/C/C++/Java, affichage du résultat ou des erreurs","Serveur : détection du langage, compilation, exécution, renvoi du résultat","Connexions gérées par threads, rejet automatique si occupé","Répartition maître/esclave vers des serveurs secondaires","Sockets TCP avec gestion des erreurs et reconnexion"],
     ar:["واجهة PyQt6: إدخال العنوان والمنفذ ورفع شيفرات Python/C/C++/Java وعرض النتائج أو الأخطاء","الخادم يكتشف اللغة ويترجم وينفذ ويعيد النتيجة","معالجة الاتصالات بخيوط متعددة ورفض الجديد عند الانشغال","موازنة الحمل بنظام رئيسي/تابع تحيل المهام إلى خوادم ثانوية","مقابس TCP مع معالجة الأخطاء وإعادة الاتصال"]},
  l:{en:["Socket programming and multithreading","Distributed architecture and load balancing","Building a desktop GUI"],
     fr:["Programmation socket et multithreading","Architecture distribuée et répartition de charge","Développer une interface graphique"],
     ar:["برمجة المقابس والخيوط المتعددة","البنية الموزعة وموازنة الحمل","بناء واجهة رسومية لسطح المكتب"]}},

 {id:"sae301",app301:1,imgs:["assets/img/sae301-circuit.png"],sae:"SAÉ 3.01",y:"2024–25",cat:"conn",team:"four",tags:["ESP8266","MQTT","Raspberry Pi","Android"],
  t:{en:"Connected Wi-Fi power socket",fr:"Prise électrique Wi-Fi connectée",ar:"مقبس كهربائي ذكي عبر الواي فاي"},
  s:{en:"Smart sockets controlled from a web page, an Android app or a physical button.",fr:"Des prises pilotées depuis une page web, une application Android ou un bouton physique.",ar:"مقابس ذكية يُتحكم بها من صفحة ويب أو تطبيق أندرويد أو زر فعلي."},
  ctx:{en:"Design a connected socket comparable to commercial products such as Chacon's: switch several sockets on and off remotely and always show their real state.",
       fr:"Concevoir une prise connectée comparable aux produits du commerce comme ceux de Chacon : allumer et éteindre plusieurs prises à distance en affichant toujours leur état réel.",
       ar:"تصميم مقبس متصل يضاهي المنتجات التجارية مثل منتجات Chacon: تشغيل عدة مقابس وإطفاؤها عن بُعد مع عرض حالتها الفعلية دائمًا."},
  b:{en:["Compared commercial sockets and chose components (size, power, price, built-in Wi-Fi)","Programmed the ESP8266: relay, status LEDs, network connection","Started in access-point mode to pick the Wi-Fi network, then switched to station mode","Built a login-protected web page on a Raspberry Pi and a matching Android app","Ran a private MQTT broker, added a global ON/OFF and synced manual and remote actions"],
     fr:["Étude des prises du commerce et choix des composants (taille, consommation, prix, Wi-Fi)","Programmation de l'ESP8266 : relais, LED d'état, connexion réseau","Démarrage en point d'accès pour choisir le Wi-Fi, puis passage en mode station","Page web sur Raspberry Pi protégée par login et application Android équivalente","Broker MQTT privé, ON/OFF global, synchronisation actions manuelles et distantes"],
     ar:["دراسة المقابس التجارية واختيار المكونات (الحجم والاستهلاك والسعر والواي فاي)","برمجة ESP8266: المرحّل ومصابيح الحالة والاتصال بالشبكة","البدء بوضع نقطة الوصول لاختيار الشبكة ثم التحول إلى وضع المحطة","صفحة ويب على Raspberry Pi محمية بتسجيل الدخول وتطبيق أندرويد مماثل","وسيط MQTT خاص وزر تشغيل/إيقاف شامل ومزامنة بين التحكم اليدوي والبعيد"]},
  l:{en:["Embedded programming on ESP8266","Publish/subscribe messaging with MQTT","Keeping web, mobile and hardware in sync"],
     fr:["Programmation embarquée sur ESP8266","Messagerie publish/subscribe avec MQTT","Synchroniser web, mobile et matériel"],
     ar:["البرمجة المدمجة على ESP8266","المراسلة بنمط النشر/الاشتراك عبر MQTT","مزامنة الويب والهاتف والجهاز"]}},

 {id:"sae24",sae:"SAÉ 24",y:"2023–24",cat:"net",team:"group",gh:"https://github.com/Hamedalabri/SAE-24-django-",tags:["VLAN","SIP","Linphone","MQTT","MySQL","Django","Plotly"],
  t:{en:"Integrative project: sensors to dashboard",fr:"Projet intégratif : des capteurs au tableau de bord",ar:"مشروع تكاملي: من المستشعرات إلى لوحة البيانات"},
  s:{en:"An end-to-end system on Linux: network, IP telephony, sensor data collection, database and web.",fr:"Un système complet sous Linux : réseau, téléphonie IP, collecte de données capteurs, base de données et web.",ar:"نظام متكامل على Linux: الشبكة والاتصال عبر IP وجمع بيانات المستشعرات وقاعدة البيانات والويب."},
  ctx:{en:"The first-year capstone: one system that collects sensor data and presents it, split into five parts: network, telephony, collection, database and web.",
       fr:"Le projet de fin de première année : un système qui collecte et présente des données de capteurs, découpé en cinq parties : réseau, téléphonie, collecte, base de données et web.",
       ar:"مشروع ختام السنة الأولى: نظام واحد يجمع بيانات المستشعرات ويعرضها، مقسم إلى خمسة أجزاء: الشبكة والاتصال الهاتفي والجمع وقاعدة البيانات والويب."},
  b:{en:["Network: VLANs for voice, users, servers and admin; inter-VLAN routing, ACLs, NAT; DNS, FTP, web and DHCP servers","Telephony: hardware and Linphone SIP phones, calls, messaging, file transfer and three-way conferences","Collection: Python MQTT client writing to MySQL, with a local cache replayed after a database outage","Web: Django app behind Apache and Gunicorn with filters, CSV export and live Plotly charts"],
     fr:["Réseau : VLAN voix, utilisateurs, serveurs, admin ; routage inter-VLAN, ACL, NAT ; serveurs DNS, FTP, web, DHCP","Téléphonie : téléphones SIP matériels et Linphone, appels, messages, fichiers, conférences à trois","Collecte : client MQTT Python vers MySQL, avec cache local rejoué après une coupure","Web : application Django sous Apache et Gunicorn, filtres, export CSV, graphiques Plotly en direct"],
     ar:["الشبكة: VLAN للصوت والمستخدمين والخوادم والإدارة، مع التوجيه وقوائم ACL وNAT وخوادم DNS وFTP والويب وDHCP","الاتصال: هواتف SIP فعلية وLinphone، مكالمات ورسائل ونقل ملفات ومؤتمرات ثلاثية","الجمع: عميل MQTT ببايثون يكتب في MySQL مع ذاكرة مؤقتة تُعاد بعد انقطاع القاعدة","الويب: تطبيق Django عبر Apache وGunicorn مع مرشحات وتصدير CSV ورسوم Plotly مباشرة"]},
  l:{en:["Bringing several technical fields together","Building a reliable IoT data pipeline","Web development with Django"],
     fr:["Faire travailler plusieurs domaines ensemble","Construire une chaîne de données IoT fiable","Développement web avec Django"],
     ar:["دمج عدة مجالات تقنية معًا","بناء مسار موثوق لبيانات إنترنت الأشياء","تطوير الويب باستخدام Django"]}},

 {id:"sae203",sae:"SAÉ 2.03",y:"2023–24",cat:"dev",team:"group",gh:"https://github.com/Hamedalabri/ludotheque",tags:["Apache2","MySQL","Linux","Windows","Gantt"],
  t:{en:"Game library web application",fr:"Application web de ludothèque",ar:"تطبيق ويب لمكتبة الألعاب"},
  s:{en:"A web app where users comment on games and build personal lists, hosted on Linux with a remote MySQL database.",fr:"Un site où les utilisateurs commentent des jeux et gèrent leur liste, hébergé sous Linux avec une base MySQL distante.",ar:"موقع يعلّق فيه المستخدمون على الألعاب ويديرون قوائمهم، مستضاف على Linux مع قاعدة بيانات MySQL بعيدة."},
  ctx:{en:"Design and deploy a data-access website for a game library: browse, add and manage data, with new users, comments and game import from a file.",
       fr:"Concevoir et déployer un site d'accès aux données pour une ludothèque : consultation, ajout et gestion, avec inscription, commentaires et import de jeux depuis un fichier.",
       ar:"تصميم موقع للوصول إلى بيانات مكتبة ألعاب ونشره: التصفح والإضافة والإدارة، مع تسجيل المستخدمين والتعليقات واستيراد الألعاب من ملف."},
  b:{en:["Hosted the site on Apache2 under Linux, reachable remotely by IP","Ran MySQL on a separate Windows VM and linked it to the web server","Built sign-up, comments, personal lists and file import","Wrote a Gantt plan, an install and deployment guide and an English project sheet","Tracked the code on GitHub"],
     fr:["Site hébergé sur Apache2 sous Linux, accessible à distance par IP","MySQL sur une VM Windows séparée, reliée au serveur web","Inscription, commentaires, listes personnelles et import depuis un fichier","Planning Gantt, procédure d'installation et fiche projet en anglais","Suivi du code sur GitHub"],
     ar:["استضافة الموقع على Apache2 في Linux مع إمكانية الوصول عن بُعد","تشغيل MySQL على جهاز Windows افتراضي منفصل وربطه بخادم الويب","بناء التسجيل والتعليقات والقوائم الشخصية والاستيراد من ملف","إعداد مخطط Gantt ودليل التثبيت والنشر وبطاقة مشروع بالإنجليزية","متابعة الشيفرة على GitHub"]},
  l:{en:["How a web application is structured","Setting up and linking a database","Documenting a project"],
     fr:["L'architecture d'une application web","Mettre en place et relier une base de données","Documenter un projet"],
     ar:["بنية تطبيق الويب","إعداد قاعدة بيانات وربطها","توثيق المشاريع"]}},

 {id:"sae202",topo:"sae202",piano:1,imgs:["assets/img/sae202-tinkercad.png"],sae:"SAÉ 2.02",y:"2023–24",cat:"conn",team:"pair",tags:["Arduino UNO","arduinoFFT","Tinkercad"],
  t:{en:"Music note recognition on Arduino",fr:"Reconnaissance de notes sur Arduino",ar:"التعرف على النغمات الموسيقية بـ Arduino"},
  s:{en:"Sampling audio signals on an Arduino UNO and using an FFT to identify piano notes.",fr:"Acquisition de signaux audio sur Arduino UNO et FFT pour reconnaître les notes de piano.",ar:"التقاط إشارات صوتية على Arduino UNO واستخدام تحويل فورييه السريع للتعرف على نغمات البيانو."},
  ctx:{en:"Pair work in Tinkercad: acquire audio signals on an Arduino UNO and recognise musical notes from the frequencies of piano keys.",
       fr:"Travail en binôme sous Tinkercad : acquérir des signaux audio sur Arduino UNO et reconnaître les notes à partir des fréquences des touches de piano.",
       ar:"عمل ثنائي على Tinkercad: التقاط إشارات صوتية على Arduino UNO والتعرف على النغمات من ترددات مفاتيح البيانو."},
  b:{en:["Mapped piano key frequencies, starting from A4 at 440 Hz","Built circuits on the analog inputs and checked signals with a function generator and oscilloscope","Compared sampling rates and their effect on accuracy","Used arduinoFFT to find the dominant frequency","Lit an LED for each detected note and generated notes back"],
     fr:["Fréquences des touches de piano, à partir du LA à 440 Hz","Circuits sur les entrées analogiques, vérification au GBF et à l'oscilloscope","Comparaison des fréquences d'échantillonnage et de leur effet sur la précision","arduinoFFT pour trouver la fréquence dominante","Une LED par note détectée et génération de notes"],
     ar:["تحديد ترددات مفاتيح البيانو بدءًا من نغمة لا عند 440 هرتز","بناء دوائر على المداخل التناظرية والتحقق بمولد الإشارات وراسم الذبذبات","مقارنة ترددات أخذ العينات وتأثيرها على الدقة","استخدام arduinoFFT لإيجاد التردد الغالب","إضاءة مصباح لكل نغمة مكتشفة وتوليد النغمات"]},
  l:{en:["Signal processing basics","Arduino programming","Why sampling rate matters"],
     fr:["Les bases du traitement du signal","La programmation Arduino","L'importance de la fréquence d'échantillonnage"],
     ar:["أساسيات معالجة الإشارات","برمجة Arduino","أهمية تردد أخذ العينات"]}},

 {id:"sae21",topo:"sae21",sae:"SAÉ 21",y:"2023–24",cat:"net",tags:["GNS3","VLAN","VLSM","RIPv2","ACL","STP","rsync"],
  t:{en:"Building a network",fr:"Construire un réseau",ar:"بناء شبكة"},
  s:{en:"A segmented LAN in GNS3 with inter-VLAN routing, security and services, interconnected with classmates' labs.",fr:"Un LAN segmenté sous GNS3 avec routage inter-VLAN, sécurité et services, interconnecté aux maquettes des autres étudiants.",ar:"شبكة محلية مقسمة على GNS3 مع توجيه بين الشبكات الافتراضية وأمن وخدمات، مترابطة مع مختبرات الزملاء."},
  ctx:{en:"Consolidate layer 2 and layer 3 skills by building a LAN in GNS3, splitting it into VLANs, routing between them and securing it.",
       fr:"Consolider les compétences de niveau 2 et 3 en construisant un LAN sous GNS3, en le segmentant en VLAN, en routant entre eux et en le sécurisant.",
       ar:"ترسيخ مهارات الطبقتين الثانية والثالثة ببناء شبكة محلية على GNS3 وتقسيمها إلى VLAN والتوجيه بينها وتأمينها."},
  b:{en:["Created VLANs for admin, developers and administrators with VLSM addressing","Balanced load between switches with Spanning-Tree","Routed with RIPv2 over /30 links and NAT overload for the admin VLAN","Locked switch ports to the first device and filtered traffic with ACLs","Ran FTP and Apache servers, syncing dev and prod with rsync"],
     fr:["VLAN administration, développeurs, administrateurs, adressage VLSM","Équilibrage de charge entre commutateurs avec Spanning-Tree","RIPv2 sur liaisons /30, surcharge NAT pour le VLAN administration","Sécurité des ports et filtrage par ACL","Serveurs FTP et Apache, synchronisation dev/prod avec rsync"],
     ar:["إنشاء VLAN للإدارة والمطورين والمسؤولين مع عنونة VLSM","موازنة الحمل بين المبدلات باستخدام Spanning-Tree","التوجيه بـ RIPv2 على روابط /30 وترجمة NAT لشبكة الإدارة","تأمين منافذ المبدلات وتصفية الحركة بقوائم ACL","تشغيل خوادم FTP وApache ومزامنة بيئتي التطوير والإنتاج بـ rsync"]},
  l:{en:["Network segmentation","Routing and NAT","Layer 2 and 3 security"],
     fr:["Segmentation réseau","Routage et NAT","Sécurité de niveau 2 et 3"],
     ar:["تقسيم الشبكات","التوجيه وترجمة العناوين","الأمن في الطبقتين الثانية والثالثة"]}},

 {id:"sae105",sae:"SAÉ 1.05",y:"2023–24",cat:"dev",gh:"https://github.com/Hamedalabri/SAE-1.05",tags:["Python","Scapy","ARP","ipaddress"],
  t:{en:"Network programming with Scapy",fr:"Programmation réseau avec Scapy",ar:"برمجة الشبكات باستخدام Scapy"},
  s:{en:"Python tools that discover hosts on a network and demonstrate a man-in-the-middle attack.",fr:"Des outils Python pour découvrir les hôtes d'un réseau et démontrer une attaque de l'homme du milieu.",ar:"أدوات بايثون لاكتشاف الأجهزة على الشبكة وإثبات هجوم الرجل في المنتصف."},
  ctx:{en:"A network programming module assessed through two projects, a live demo and the source code.",
       fr:"Un module de programmation réseau évalué par deux projets, une démonstration et le dépôt du code source.",
       ar:"وحدة في برمجة الشبكات قُيّمت عبر مشروعين وعرض مباشر وتسليم الشيفرة المصدرية."},
  b:{en:["Wrote a Scapy tool that discovers live hosts on a network","Wrote a man-in-the-middle tool based on ARP spoofing","Handled IPv4 addressing with the ipaddress module","Parsed command-line options with sys and getopt"],
     fr:["Outil Scapy de découverte des hôtes d'un réseau","Outil d'homme du milieu par empoisonnement ARP","Adressage IPv4 avec le module ipaddress","Options en ligne de commande avec sys et getopt"],
     ar:["أداة Scapy لاكتشاف الأجهزة النشطة على الشبكة","أداة هجوم الرجل في المنتصف عبر تسميم ARP","عنونة IPv4 بوحدة ipaddress","قراءة خيارات سطر الأوامر بـ sys وgetopt"]},
  l:{en:["The protocol stack layer by layer","Network programming in Python","How ARP attacks work"],
     fr:["La pile protocolaire couche par couche","La programmation réseau en Python","Le fonctionnement des attaques ARP"],
     ar:["مكدس البروتوكولات طبقة بطبقة","برمجة الشبكات ببايثون","آلية هجمات ARP"]}},

 {id:"sae103",topo:"sae103",imgs:["assets/img/sae103-heatmap.png"],sae:"SAÉ 1.03",y:"2023–24",cat:"conn",team:"group",tags:["Wi-Fi","Cisco","Heatmap","Packet Tracer"],
  t:{en:"Transmission systems and Wi-Fi",fr:"Dispositifs de transmission et Wi-Fi",ar:"أنظمة الإرسال والواي فاي"},
  s:{en:"Cabling, access-point deployment and Wi-Fi coverage measurements, mirrored in Packet Tracer.",fr:"Câblage, déploiement de points d'accès et mesures de couverture Wi-Fi, reproduits sous Packet Tracer.",ar:"التمديدات وتركيب نقاط الوصول وقياس تغطية الواي فاي، مع محاكاتها على Packet Tracer."},
  ctx:{en:"Understand how transmission devices work, how they are installed and where their limits are, by cabling and deploying Wi-Fi access points.",
       fr:"Comprendre le fonctionnement des dispositifs de transmission, leur installation et leurs limites, en câblant et en déployant des points d'accès Wi-Fi.",
       ar:"فهم آلية عمل أجهزة الإرسال وطريقة تركيبها وحدودها، عبر تمديد الكابلات ونشر نقاط وصول الواي فاي."},
  b:{en:["Crimped cables and configured Cisco switches and routers","Installed Wi-Fi access points","Measured range and signal strength with heatmap and speedtest","Compared 802.11g and 802.11a performance","Reproduced the setup in Packet Tracer with DNS and DHCP"],
     fr:["Sertissage de câbles, configuration de commutateurs et routeurs Cisco","Installation de points d'accès Wi-Fi","Mesures de portée et de puissance avec heatmap et speedtest","Comparaison 802.11g et 802.11a","Reproduction sous Packet Tracer avec DNS et DHCP"],
     ar:["تركيب الكابلات وإعداد مبدلات وموجهات Cisco","تركيب نقاط وصول الواي فاي","قياس المدى وقوة الإشارة بأداتي heatmap وspeedtest","مقارنة أداء 802.11g و802.11a","محاكاة التركيب على Packet Tracer مع DNS وDHCP"]},
  l:{en:["Cabling and Wi-Fi setup","Measuring network performance","Organising group work"],
     fr:["Câblage et mise en place du Wi-Fi","Mesurer les performances réseau","Organiser le travail en groupe"],
     ar:["التمديدات وإعداد الواي فاي","قياس أداء الشبكة","تنظيم العمل الجماعي"]}},

 {id:"sae102",topo:"branch",sae:"SAÉ 1.02",y:"2023–24",cat:"net",tags:["EVE-NG","VLAN","DHCP","Linux"],
  t:{en:"Introduction to computer networks",fr:"S'initier aux réseaux informatiques",ar:"مدخل إلى شبكات الحاسوب"},
  s:{en:"A branch-office network built in EVE-NG, from addressing plan to services.",fr:"Le réseau d'une succursale construit sous EVE-NG, du plan d'adressage aux services.",ar:"شبكة فرع مؤسسة مبنية على EVE-NG، من خطة العناوين إلى الخدمات."},
  ctx:{en:"Simulate setting up and running the network of a company branch, from the physical design to the services.",
       fr:"Simuler la mise en place et la gestion du réseau d'une succursale d'entreprise, de la structure physique aux services.",
       ar:"محاكاة إنشاء شبكة فرع مؤسسة وإدارتها، من التصميم المادي إلى الخدمات."},
  b:{en:["Designed the physical and logical structure, IP plan and VLANs","Built and tested the lab in EVE-NG","Configured inter-VLAN routing and DHCP on a switch","Migrated DHCP to a Linux server","Applied access rights and basic monitoring"],
     fr:["Structure physique et logique, plan IP et VLAN","Maquette construite et testée sous EVE-NG","Routage inter-VLAN et DHCP sur commutateur","Migration du DHCP vers un serveur Linux","Gestion des droits et surveillance de base"],
     ar:["تصميم البنية المادية والمنطقية وخطة العناوين وشبكات VLAN","بناء المختبر واختباره على EVE-NG","إعداد التوجيه بين الشبكات وDHCP على المبدل","نقل خدمة DHCP إلى خادم Linux","تطبيق الصلاحيات والمراقبة الأساسية"]},
  l:{en:["IP addressing and VLANs","Network services on Linux","A methodical approach to configuration"],
     fr:["Adressage IP et VLAN","Services réseau sous Linux","Une approche méthodique de la configuration"],
     ar:["عنونة IP وشبكات VLAN","خدمات الشبكة على Linux","منهجية منظمة في الإعداد"]}},

 {id:"sae101",sae:"SAÉ 1.01",y:"2023–24",cat:"cyber",tags:["Cyber hygiene","MFA","GDPR"],
  t:{en:"Cyber hygiene",fr:"Hygiène informatique",ar:"النظافة السيبرانية"},
  s:{en:"Threats, protections and responsible practices for everyday IT use.",fr:"Menaces, protections et bonnes pratiques pour un usage quotidien du numérique.",ar:"التهديدات وطرق الحماية والممارسات المسؤولة في الاستخدام اليومي للتقنية."},
  ctx:{en:"An introductory module on securing information systems and understanding everyday digital risks.",
       fr:"Un module d'introduction à la sécurisation des systèmes d'information et aux risques numériques du quotidien.",
       ar:"وحدة تمهيدية حول تأمين أنظمة المعلومات وفهم المخاطر الرقمية اليومية."},
  b:{en:["Identified threats: viruses, trojans, ransomware, social engineering","Applied protections: antivirus, strong passwords, MFA, URL and attachment checks","Covered GDPR and responsible digital behaviour"],
     fr:["Identification des menaces : virus, chevaux de Troie, rançongiciels, ingénierie sociale","Protections : antivirus, mots de passe robustes, double authentification, vérification des liens","RGPD et comportement numérique responsable"],
     ar:["التعرف على التهديدات: الفيروسات وأحصنة طروادة وبرامج الفدية والهندسة الاجتماعية","تطبيق الحماية: مضاد الفيروسات وكلمات المرور القوية والمصادقة الثنائية وفحص الروابط والمرفقات","اللائحة العامة لحماية البيانات والسلوك الرقمي المسؤول"]},
  l:{en:["Recognising common threats","Everyday protection habits","Regulatory basics"],
     fr:["Reconnaître les menaces courantes","Les bons réflexes de protection","Les bases réglementaires"],
     ar:["التعرف على التهديدات الشائعة","عادات الحماية اليومية","أساسيات الأنظمة واللوائح"]}},

 {id:"sae104",sae:"SAÉ 1.04",y:"2023–24",cat:"dev",gh:"https://github.com/Hamedalabri/SAE-14",tags:["HTML","CSS","E-reputation"],
  t:{en:"Presenting yourself online",fr:"Se présenter sur Internet",ar:"التعريف بالنفس على الإنترنت"},
  s:{en:"Digital identity and e-reputation, with a personal web page partly in English.",fr:"Identité numérique et e-réputation, avec une page web personnelle en partie en anglais.",ar:"الهوية الرقمية والسمعة الإلكترونية، مع صفحة ويب شخصية جزء منها بالإنجليزية."},
  ctx:{en:"Reflect on digital identity and e-reputation in a professional context, then build a personal web page presenting a project or interest.",
       fr:"Réfléchir à l'identité numérique et à l'e-réputation dans un contexte professionnel, puis créer une page web personnelle présentant un projet ou un centre d'intérêt.",
       ar:"التفكير في الهوية الرقمية والسمعة الإلكترونية في سياق مهني، ثم إنشاء صفحة ويب شخصية تعرض مشروعًا أو اهتمامًا."},
  b:{en:["Reviewed my online traces and privacy settings","Studied how e-reputation affects hiring and services","Built a personal web page with English sections"],
     fr:["Analyse de mes traces en ligne et paramètres de confidentialité","Étude de l'impact de l'e-réputation sur le recrutement","Création d'une page web personnelle avec des parties en anglais"],
     ar:["مراجعة آثاري الرقمية وإعدادات الخصوصية","دراسة أثر السمعة الإلكترونية على التوظيف والخدمات","إنشاء صفحة ويب شخصية بأقسام باللغة الإنجليزية"]},
  l:{en:["Managing a professional digital identity","HTML and CSS basics","Writing for an international audience"],
     fr:["Gérer une identité numérique professionnelle","Les bases de HTML et CSS","Écrire pour un public international"],
     ar:["إدارة هوية رقمية مهنية","أساسيات HTML وCSS","الكتابة لجمهور دولي"]}}
];

const STIHLE={
 m:{en:["Level 1–3 IT support: PCs, printers, smartphones","Windows/Linux servers, network and IP telephony","Active Directory account management","Mobile fleet with Ivanti MobileIron; Microsoft Dynamics NAV support"],
    fr:["Support informatique N1 à N3 : PC, imprimantes, smartphones","Serveurs Windows/Linux, réseau et téléphonie IP","Gestion des comptes Active Directory","Flotte mobile avec Ivanti MobileIron ; support Microsoft Dynamics NAV"],
    ar:["الدعم الفني من المستوى 1 إلى 3: الحواسيب والطابعات والهواتف","خوادم Windows وLinux والشبكة والاتصال عبر IP","إدارة حسابات Active Directory","إدارة الأجهزة المحمولة عبر Ivanti MobileIron ودعم Microsoft Dynamics NAV"]},
 w:[
  {t:{en:"Phishing campaign",fr:"Campagne de phishing",ar:"حملة تصيّد احتيالي"},d:{en:"Gophish simulation, click analysis, staff awareness",fr:"Simulation Gophish, analyse des clics, sensibilisation",ar:"محاكاة عبر Gophish وتحليل النقرات وتوعية الموظفين"}},
  {t:{en:"LAPS deployment",fr:"Déploiement de LAPS",ar:"نشر LAPS"},d:{en:"Rotating local admin passwords stored in AD",fr:"Rotation des mots de passe admin locaux stockés dans l'AD",ar:"تدوير كلمات مرور المسؤول المحلي وتخزينها في AD"}},
  {t:{en:"HA DHCP cluster",fr:"Cluster DHCP HA",ar:"عنقود DHCP عالي التوفر"},d:{en:"Two redundant servers with automatic failover",fr:"Deux serveurs redondants avec basculement automatique",ar:"خادمان احتياطيان مع تحويل تلقائي عند العطل"}},
  {t:{en:"GLPI upgrade + SSO",fr:"Mise à jour GLPI + SSO",ar:"ترقية GLPI مع SSO"},d:{en:"New version, HTTPS, single sign-on with Azure AD",fr:"Nouvelle version, HTTPS, SSO avec Azure AD",ar:"إصدار جديد وHTTPS وتسجيل دخول موحد عبر Azure AD"}}
 ]
};

/* ---------- Technology stack ----------
   a = short label shown in the tile, k = category key below.
   To add a tool: {n:"Wireshark",a:"Ws",k:"sec"}                     */
const STACK_CATS={
 net:{c:"#45d4e6",t:{en:"Networking",fr:"Réseaux",ar:"الشبكات"}},
 sec:{c:"#ff7a8a",t:{en:"Security",fr:"Sécurité",ar:"الأمن"}},
 sys:{c:"#8decae",t:{en:"Systems",fr:"Systèmes",ar:"الأنظمة"}},
 dev:{c:"#f2c26b",t:{en:"Development",fr:"Développement",ar:"البرمجة"}},
 iot:{c:"#b39dff",t:{en:"IoT & Telecom",fr:"IoT & Télécoms",ar:"إنترنت الأشياء والاتصالات"}}
};
const STACK=[
 {n:"Cisco IOS",a:"IOS",k:"net"},{n:"GNS3",a:"G3",k:"net"},{n:"EVE-NG",a:"EV",k:"net"},{n:"Packet Tracer",a:"PT",k:"net"},
 {n:"OSPF / BGP",a:"RT",k:"net"},{n:"MPLS-VPN",a:"MP",k:"net"},{n:"VLAN / STP",a:"L2",k:"net"},{n:"VRRP",a:"HA",k:"net"},
 {n:"FortiGate",a:"FG",k:"sec"},{n:"pfSense",a:"pf",k:"sec"},{n:"Stormshield",a:"SN",k:"sec"},{n:"OpenVPN",a:"VPN",k:"sec"},
 {n:"Nmap",a:"Nm",k:"sec"},{n:"Burp Suite",a:"Bp",k:"sec"},{n:"Metasploit",a:"Ms",k:"sec"},{n:"Kali Linux",a:"Ka",k:"sec"},
 {n:"Hashcat",a:"Hc",k:"sec"},{n:"Gophish",a:"Gp",k:"sec"},{n:"LAPS",a:"LA",k:"sec"},{n:"Squid",a:"Sq",k:"sec"},
 {n:"Active Directory",a:"AD",k:"sys"},{n:"Windows Server",a:"WS",k:"sys"},{n:"Linux",a:"Lx",k:"sys"},{n:"LDAP / LDAPS",a:"LD",k:"sys"},
 {n:"DNS / BIND9",a:"DNS",k:"sys"},{n:"DHCP",a:"DH",k:"sys"},{n:"Apache",a:"Ap",k:"sys"},{n:"Postfix",a:"Pf",k:"sys"},
 {n:"GLPI",a:"GL",k:"sys"},{n:"VMware",a:"VM",k:"sys"},{n:"Docker",a:"Dk",k:"sys"},{n:"Azure AD",a:"Az",k:"sys"},
 {n:"Microsoft 365",a:"365",k:"sys"},{n:"Ivanti MobileIron",a:"Iv",k:"sys"},
 {n:"Python",a:"Py",k:"dev"},{n:"Bash",a:"$_",k:"dev"},{n:"C",a:"C",k:"dev"},{n:"HTML / CSS",a:"</>",k:"dev"},
 {n:"SQL / MySQL",a:"SQL",k:"dev"},{n:"Django",a:"Dj",k:"dev"},{n:"PyQt6",a:"Qt",k:"dev"},{n:"Scapy",a:"Sc",k:"dev"},{n:"Git",a:"Git",k:"dev"},
 {n:"Arduino",a:"Ar",k:"iot"},{n:"ESP8266",a:"ESP",k:"iot"},{n:"Raspberry Pi",a:"RPi",k:"iot"},{n:"LoRaWAN",a:"LoRa",k:"iot"},
 {n:"MQTT",a:"MQ",k:"iot"},{n:"Node-RED",a:"NR",k:"iot"},{n:"Asterisk",a:"*",k:"iot"},{n:"Avaya",a:"Av",k:"iot"},{n:"SIP / ToIP",a:"SIP",k:"iot"}
];

/* ---------- Network lab diagrams (projects with topo:"<key>") ----------
   Coordinates are in the SVG's own units. Addressing in the tables is EXAMPLE data:
   replace it with your real plan. Text can be a plain string or {en,fr,ar}. */
const C100="#3fb07a", C200="#3b9ae1", C300="#e0b33a";
const TOPOS={
 branch:{
  view:"60 0 800 640", defStep:1,
  title:{en:"Lab topology (EVE-NG)",fr:"Maquette réseau (EVE-NG)",ar:"مخطط الشبكة (EVE-NG)"},
  nodes:{
   cloud:{x:460,y:50,type:"cloud",label:"Internet (NAT)",d:34},
   r1:{x:460,y:165,type:"router",label:"R1",sub:"NAT · 10.0.0.1/30",pos:"r",d:36},
   sw1:{x:460,y:305,type:"l3",label:"SW1 · L3",sub:"SVI .254 · DHCP server",pos:"r",d:52},
   sw2:{x:250,y:440,type:"switch",label:"SW2",sub:"access",pos:"l",d:52},
   sw3:{x:670,y:440,type:"switch",label:"SW3",sub:"access",pos:"r",d:52},
   pca:{x:150,y:560,type:"pc",label:"PC-Admin",sub:"VLAN 10 · DHCP",d:34},
   pcu:{x:340,y:560,type:"pc",label:"PC-User",sub:"VLAN 20 · DHCP",d:34},
   lnx:{x:600,y:560,type:"server",label:"Linux",sub:"192.168.30.10",d:38},
   web:{x:750,y:560,type:"server",label:"Web",sub:"192.168.30.20",d:38}
  },
  links:[
   {a:"cloud",b:"r1",kind:"eth"},
   {a:"r1",b:"sw1",kind:"eth",label:"10.0.0.0/30",t:.42,side:-1},
   {a:"sw1",b:"sw2",kind:"trunk",label:"trunk 10,20,30",t:.62,side:-1},
   {a:"sw1",b:"sw3",kind:"trunk",label:"trunk 10,20,30",t:.62,side:1},
   {a:"sw2",b:"pca",kind:"access",c:"#3b9ae1"},{a:"sw2",b:"pcu",kind:"access",c:"#e0913a"},
   {a:"sw3",b:"lnx",kind:"access",c:"#3fb07a"},{a:"sw3",b:"web",kind:"access",c:"#3fb07a"}
  ],
  legend:["trunk","flow"], flowLabel:{en:"DHCP traffic",fr:"Flux DHCP",ar:"حركة DHCP"},
  vlans:[{id:"10",c:"#3b9ae1"},{id:"20",c:"#e0913a"},{id:"30",c:"#3fb07a"}],
  steps:[
   {t:{en:"1 · DHCP on the L3 switch",fr:"1 · DHCP sur le switch L3",ar:"١ · DHCP على مبدل الطبقة الثالثة"},
    cap:{en:"The L3 switch routes between the VLANs and hands out the IP addresses itself.",fr:"Le switch L3 route entre les VLAN et distribue lui-même les adresses IP.",ar:"يقوم مبدل الطبقة الثالثة بالتوجيه بين شبكات VLAN ويوزع عناوين IP بنفسه."},
    flows:[["sw1","sw2","pca"],["sw1","sw2","pcu"]],badges:[{n:"sw1",text:"DHCP"}]},
   {t:{en:"2 · DHCP migrated to Linux",fr:"2 · DHCP migré sur Linux",ar:"٢ · نقل DHCP إلى خادم Linux"},
    cap:{en:"DHCP now runs on the Linux server; the L3 switch relays each request to it with ip helper-address.",fr:"Le DHCP tourne maintenant sur le serveur Linux ; le switch L3 relaie chaque requête avec ip helper-address.",ar:"أصبح DHCP يعمل على خادم Linux، ويقوم المبدل بتمرير كل طلب إليه عبر ip helper-address."},
    flows:[["pca","sw2","sw1","sw3","lnx"],["pcu","sw2","sw1","sw3","lnx"]],badges:[{n:"lnx",text:"DHCP"}],subs:{sw1:"ip helper-address 192.168.30.10"}}
  ],
  table:{
   title:{en:"IP plan",fr:"Plan d'adressage",ar:"خطة العناوين"},
   head:{en:["VLAN","Name","Network","Gateway","Addressing"],fr:["VLAN","Nom","Réseau","Passerelle","Adressage"],ar:["VLAN","الاسم","الشبكة","البوابة","العنونة"]},
   rows:[
    {c:"#3b9ae1",cells:["10",{en:"Admin",fr:"Administration",ar:"الإدارة"},"192.168.10.0/24","192.168.10.254","DHCP"]},
    {c:"#e0913a",cells:["20",{en:"Users",fr:"Utilisateurs",ar:"المستخدمون"},"192.168.20.0/24","192.168.20.254","DHCP"]},
    {c:"#3fb07a",cells:["30",{en:"Servers",fr:"Serveurs",ar:"الخوادم"},"192.168.30.0/24","192.168.30.254",{en:"Static",fr:"Statique",ar:"ثابتة"}]},
    {cells:["—",{en:"R1 ↔ SW1 link",fr:"Lien R1 ↔ SW1",ar:"رابط R1 ↔ SW1"},"10.0.0.0/30","—",{en:"Static",fr:"Statique",ar:"ثابتة"}]}
   ]}
 },

 sae21:{
  view:"20 0 900 730", defStep:0,
  title:{en:"Lab topology (GNS3)",fr:"Maquette réseau (GNS3)",ar:"مخطط الشبكة (GNS3)"},
  zones:[
   {x:50,y:400,w:220,h:240,c:C100,label:"VLAN 100 · Administration"},
   {x:285,y:590,w:250,h:130,c:C200,label:"VLAN 200 · Dev"},
   {x:550,y:400,w:240,h:240,c:C300,label:{en:"VLAN 300 · Administrators",fr:"VLAN 300 · Administrateurs",ar:"VLAN 300 · المسؤولون"}}
  ],
  nodes:{
   cloud:{x:800,y:62,type:"cloud",label:{en:"External network",fr:"Réseau externe",ar:"الشبكة الخارجية"},d:34},
   bord:{x:560,y:72,type:"router",label:"Bordure",sub:"edge",pos:"l",d:36},
   r1:{x:400,y:200,type:"router",label:"R1",sub:"RIPv2",pos:"l",d:36},
   r2:{x:700,y:200,type:"router",label:"R2",sub:"RIPv2",d:42},
   prod:{x:840,y:200,type:"server",label:"Server-Production",sub:"Apache (prod)",d:40},
   sw2:{x:400,y:320,type:"l3",label:"Switch-2 · L3",sub:"inter-VLAN · DHCP",pos:"r",d:52},
   sw1:{x:400,y:470,type:"switch",label:"Switch-1",pos:"tl",d:50},
   dir:{x:160,y:470,type:"pc",label:"Direction",sub:"VLAN 100",d:34},
   sec:{x:160,y:580,type:"pc",label:{en:"Secretary",fr:"Secrétaire",ar:"السكرتارية"},sub:"VLAN 100",d:34},
   dev:{x:340,y:655,type:"pc",label:{en:"Developer",fr:"Développeur",ar:"المطوّر"},sub:"VLAN 200",d:34},
   sdev:{x:480,y:655,type:"server",label:"Serveur-dev",sub:"Apache (dev)",d:38},
   adm:{x:660,y:470,type:"pc",label:{en:"Administrator",fr:"Administrateur",ar:"المسؤول"},sub:"VLAN 300",d:34},
   bak:{x:660,y:580,type:"server",label:{en:"Backup server",fr:"Serveur-sauvegarde",ar:"خادم النسخ الاحتياطي"},sub:"VLAN 300",d:38}
  },
  links:[
   {a:"bord",b:"cloud",kind:"eth",ports:["f0/0",""]},
   {a:"r1",b:"bord",kind:"serial",ports:["s1/0","s1/0"]},
   {a:"bord",b:"r2",kind:"serial",ports:["s1/1","s1/1"]},
   {a:"r1",b:"r2",kind:"serial",ports:["s1/1","s1/2"]},
   {a:"r2",b:"prod",kind:"eth",ports:["f0/0","ens4"]},
   {a:"r1",b:"sw2",kind:"eth",ports:["f0/0","Gi0/0"]},
   {a:"sw2",b:"sw1",kind:"trunk",multi:[C100,C200,C300],label:"3 × trunk · STP",t:.5,side:1},
   {a:"sw1",b:"dir",kind:"access",c:C100,ports:["Gi0/3","e0"]},
   {a:"sw1",b:"sec",kind:"access",c:C100,ports:["Gi0/0","e0"]},
   {a:"sw1",b:"dev",kind:"access",c:C200,ports:["Gi0/2","e0"]},
   {a:"sw1",b:"sdev",kind:"access",c:C200,ports:["Gi1/0","ens4"]},
   {a:"sw1",b:"adm",kind:"access",c:C300,ports:["Gi0/1","e0"]},
   {a:"sw1",b:"bak",kind:"access",c:C300,ports:["Gi1/1","ens4"]}
  ],
  legend:["eth","serial","trunk","flow"],
  vlans:[{id:"100",c:C100},{id:"200",c:C200},{id:"300",c:C300}],
  steps:[
   {t:{en:"1 · VLANs & STP",fr:"1 · VLAN & STP",ar:"١ · VLAN و STP"},
    cap:{en:"Three VLANs on Switch-1, with port security on the access ports. Switch-2 routes between them and hands out addresses by DHCP. The three trunks share the load: Spanning-Tree forwards each VLAN on its own link.",
         fr:"Trois VLAN sur Switch-1, avec la sécurité des ports sur les ports d'accès. Switch-2 route entre eux et distribue les adresses en DHCP. Les trois trunks se partagent la charge : le Spanning-Tree fait passer chaque VLAN sur son propre lien.",
         ar:"ثلاث شبكات VLAN على Switch-1 مع تأمين منافذ الوصول. يقوم Switch-2 بالتوجيه بينها وتوزيع العناوين عبر DHCP. تتقاسم روابط الـ trunk الثلاثة الحمل: يمرر Spanning-Tree كل VLAN على رابطه الخاص."},
    hi:["trunk"],badges:[{n:"sw2",text:"DHCP"},{n:"sw1",text:"port-security",dx:46}]},
   {t:{en:"2 · RIPv2 routing & NAT",fr:"2 · Routage RIPv2 & NAT",ar:"٢ · توجيه RIPv2 و NAT"},
    cap:{en:"R1, R2 and Bordure exchange routes with RIPv2 over /30 serial links. Bordure connects the lab to the external network and translates the Administration VLAN with NAT overload.",
         fr:"R1, R2 et Bordure échangent leurs routes en RIPv2 sur des liaisons série en /30. Bordure relie la maquette au réseau externe et traduit le VLAN Administration avec une surcharge NAT.",
         ar:"تتبادل الموجهات R1 وR2 وBordure المسارات عبر RIPv2 على روابط تسلسلية /30. يربط Bordure المختبر بالشبكة الخارجية ويترجم عناوين VLAN الإدارة عبر NAT overload."},
    hi:["serial"],flows:[{path:["dir","sw1","sw2","r1","bord","cloud"],c:C100}],
    badges:[{n:"r1",text:"RIPv2"},{n:"r2",text:"RIPv2"},{n:"bord",text:"NAT"}]},
   {t:{en:"3 · Services & ACLs",fr:"3 · Services & ACL",ar:"٣ · الخدمات وقوائم ACL"},
    cap:{en:"Serveur-dev publishes the website to Server-Production with rsync (port 873). ACLs on the routers only let HTTP, SSH (22), rsync (873) and ICMP through.",
         fr:"Serveur-dev publie le site sur Server-Production avec rsync (port 873). Les ACL des routeurs ne laissent passer que HTTP, SSH (22), rsync (873) et ICMP.",
         ar:"ينشر Serveur-dev الموقع على Server-Production باستخدام rsync (المنفذ 873). تسمح قوائم ACL على الموجهات فقط بـ HTTP وSSH (22) وrsync (873) وICMP."},
    flows:[{path:["sdev","sw1","sw2","r1","r2","prod"],c:C200}],
    badges:[{n:"r1",text:"ACL"},{n:"r2",text:"ACL"},{n:"sdev",text:"rsync"},{n:"prod",text:"Apache"}]}
  ],
  table:{
   title:{en:"IP plan (VLSM)",fr:"Plan d'adressage (VLSM)",ar:"خطة العناوين (VLSM)"},
   head:{en:["VLAN / link","Name","Network","Gateway","Hosts"],fr:["VLAN / lien","Nom","Réseau","Passerelle","Machines"],ar:["VLAN / رابط","الاسم","الشبكة","البوابة","الأجهزة"]},
   rows:[
    {c:C100,cells:["100","Administration","192.168.1.0/26","192.168.1.1",{en:"Direction, Secretary",fr:"Direction, Secrétaire",ar:"الإدارة، السكرتارية"}]},
    {c:C200,cells:["200","Dev","192.168.1.64/27","192.168.1.65",{en:"Developer, Serveur-dev",fr:"Développeur, Serveur-dev",ar:"المطوّر، Serveur-dev"}]},
    {c:C300,cells:["300",{en:"Administrators",fr:"Administrateurs",ar:"المسؤولون"},"192.168.1.96/28","192.168.1.97",{en:"Administrator, Backup server",fr:"Administrateur, Serveur-sauvegarde",ar:"المسؤول، خادم النسخ الاحتياطي"}]},
    {cells:["/30","R1 ↔ Switch-2","10.0.0.0/30","—","—"]},
    {cells:["/30","R1 ↔ Bordure","10.0.0.4/30","—","—"]},
    {cells:["/30","Bordure ↔ R2","10.0.0.8/30","—","—"]},
    {cells:["/30","R1 ↔ R2","10.0.0.12/30","—","—"]},
    {cells:["—",{en:"Production LAN",fr:"LAN production",ar:"شبكة الإنتاج"},"192.168.2.0/24","192.168.2.1","Server-Production"]}
   ]}
 }
};
 
TOPOS.sae303={
  view:"0 0 1160 610", defStep:0,
  title:{en:"Lab topology (GNS3)",fr:"Maquette réseau (GNS3)",ar:"مخطط الشبكة (GNS3)"},
  zones:[
   {shape:"ellipse",cx:395,cy:250,rx:160,ry:145,c:"#3fb07a",label:"AS 10 · FAI 1"},
   {shape:"ellipse",cx:755,cy:230,rx:155,ry:128,c:"#3b9ae1",label:"AS 20"},
   {shape:"ellipse",cx:668,cy:478,rx:190,ry:122,c:"#b06ce0",label:"AS 30",lb:1},
   {site:1,x:15,y:140,w:200,h:115,c:"#8a94a8",label:"UC Exchange · Strasbourg"},
   {site:1,x:15,y:385,w:200,h:115,c:"#8a94a8",label:"ABC Conseil · Strasbourg"},
   {site:1,x:945,y:95,w:200,h:115,c:"#8a94a8",label:"ABC Conseil · Nancy"},
   {site:1,x:945,y:270,w:200,h:115,c:"#8a94a8",label:"UC Exchange · Metz"},
   {site:1,x:945,y:420,w:200,h:115,c:"#8a94a8",label:"ABC Conseil · Metz"}
  ],
  nodes:{
   vpc:{x:557,y:40,type:"pc",label:"VPC_Public",lp:{dx:32,dy:2,a:"start"}},
   pe1:{x:280,y:205,type:"router",label:"PE1",lp:{dx:0,dy:-34},bd:66},
   p10:{x:390,y:240,type:"router",label:"P1-AS10",lp:{dx:-30,dy:44,a:"end"}},
   asbr1:{x:500,y:180,type:"router",label:"ASBR1",lp:{dx:0,dy:-34},bd:66},
   asbr2:{x:440,y:325,type:"router",label:"PE-ASBR2",lp:{dx:30,dy:8,a:"start"}},
   asbr3:{x:625,y:182,type:"router",label:"ASBR3",lp:{dx:30,dy:-24,a:"start"}},
   p20:{x:718,y:225,type:"router",label:"P1-AS20",lp:{dx:-28,dy:42,a:"end"}},
   p2:{x:808,y:220,type:"router",label:"P2",lp:{dx:0,dy:42}},
   pe3:{x:865,y:160,type:"router",label:"PE3",lp:{dx:0,dy:-34},bd:66},
   asbr4:{x:752,y:315,type:"router",label:"ASBR4",lp:{dx:30,dy:5,a:"start"}},
   asbr5:{x:645,y:372,type:"router",label:"ASBR5",lp:{dx:-30,dy:-20,a:"end"}},
   asbr7:{x:522,y:425,type:"router",label:"ASBR7",lp:{dx:-30,dy:5,a:"end"}},
   p30:{x:645,y:490,type:"router",label:"P1-AS30",lp:{dx:0,dy:44}},
   pe6:{x:778,y:465,type:"router",label:"P6-ASBR6",lp:{dx:0,dy:44}},
   ce11:{x:115,y:205,type:"router",label:"CE1-1",lp:{dx:0,dy:42}},
   ce21:{x:115,y:450,type:"router",label:"CE2-1",lp:{dx:0,dy:42}},
   ce22:{x:1045,y:160,type:"router",label:"CE2-2",lp:{dx:0,dy:42}},
   ce12:{x:1045,y:335,type:"router",label:"CE1-2",lp:{dx:0,dy:42}},
   ce23:{x:1045,y:485,type:"router",label:"CE2-3",lp:{dx:0,dy:42}}
  },
  links:[
   {a:"ce11",b:"pe1",kind:"eth"},
   {a:"pe1",b:"p10",kind:"eth"},
   {a:"p10",b:"asbr1",kind:"eth"},
   {a:"p10",b:"asbr2",kind:"eth"},
   {a:"ce21",b:"asbr2",kind:"eth"},
   {a:"asbr1",b:"asbr3",kind:"ebgp"},
   {a:"vpc",b:"asbr3",kind:"eth"},
   {a:"asbr3",b:"p20",kind:"eth"},{a:"p20",b:"p2",kind:"eth"},{a:"p2",b:"pe3",kind:"eth"},{a:"p20",b:"asbr4",kind:"eth"},
   {a:"pe3",b:"ce22",kind:"eth"},
   {a:"asbr4",b:"asbr5",kind:"ebgp"},
   {a:"asbr2",b:"asbr7",kind:"ebgp"},
   {a:"asbr5",b:"p30",kind:"eth"},{a:"asbr7",b:"p30",kind:"eth"},{a:"p30",b:"pe6",kind:"eth"},
   {a:"pe6",b:"ce12",kind:"eth"},{a:"pe6",b:"ce23",kind:"eth"}
  ],
  legend:["eth","ebgp","flow"],
  extraLegend:[{c:"#3b9ae1",label:"UC Exchange"},{c:"#e0913a",label:"ABC Conseil"}],
  steps:[
   {t:{en:"1 · Three AS backbone",fr:"1 · Cœur de 3 AS",ar:"١ · شبكة من ثلاثة أنظمة مستقلة"},
    cap:{en:"I built the ISP backbone as three autonomous systems. Inside each AS, OSPF carries the internal routes; the ASBRs exchange routes between AS with BGP, using a route reflector, and MP-BGP carries the client VPN routes.",
         fr:"J'ai construit le cœur opérateur avec trois systèmes autonomes. Dans chaque AS, OSPF transporte les routes internes ; les ASBR échangent les routes entre AS en BGP, avec un route reflector, et MP-BGP transporte les routes VPN des clients.",
         ar:"بنيت شبكة مزود الخدمة من ثلاثة أنظمة مستقلة. داخل كل نظام ينقل بروتوكول OSPF المسارات الداخلية، وتتبادل موجهات ASBR المسارات بين الأنظمة عبر BGP مع route reflector، وينقل MP-BGP مسارات VPN للعملاء."},
    hi:["ebgp"],badges:[{n:"asbr1",text:"eBGP"},{n:"asbr3",text:"eBGP",dx:-12},{n:"asbr2",text:"eBGP",dx:-6},{n:"asbr7",text:"eBGP"},{n:"asbr4",text:"eBGP"},{n:"asbr5",text:"eBGP",dx:-20}]},
   {t:{en:"2 · VPN UC Exchange",fr:"2 · VPN UC Exchange",ar:"٢ · VPN لشركة UC Exchange"},
    cap:{en:"UC Exchange gets its own VRF on the PE routers, with static routes between its CEs and PEs. Its Strasbourg and Metz sites reach each other across the backbone without seeing the other client.",
         fr:"UC Exchange a sa propre VRF sur les routeurs PE, avec du routage statique entre ses CE et les PE. Ses sites de Strasbourg et de Metz communiquent à travers le cœur sans voir l'autre client.",
         ar:"تحصل UC Exchange على VRF خاص بها على موجهات PE مع توجيه ثابت بين CE وPE. يتواصل موقعا ستراسبورغ وميتز عبر الشبكة دون رؤية العميل الآخر."},
    flows:[{path:["ce11","pe1","p10","asbr2","asbr7","p30","pe6","ce12"],c:"#3b9ae1"}],
    badges:[{n:"pe1",text:"VRF UC",dx:0},{n:"pe6",text:"VRF UC"}]},
   {t:{en:"3 · VPN ABC Conseil",fr:"3 · VPN ABC Conseil",ar:"٣ · VPN لشركة ABC Conseil"},
    cap:{en:"ABC Conseil has three sites (Strasbourg, Nancy, Metz) in a separate VRF and runs RIP with the PE routers. VPC_Public was used to test public access and resilience.",
         fr:"ABC Conseil a trois sites (Strasbourg, Nancy, Metz) dans une VRF séparée et utilise RIP avec les routeurs PE. VPC_Public a servi à tester l'accès public et la résilience.",
         ar:"لدى ABC Conseil ثلاثة مواقع (ستراسبورغ ونانسي وميتز) في VRF منفصل وتستخدم RIP مع موجهات PE. استُخدم VPC_Public لاختبار الوصول العام والقدرة على الصمود."},
    flows:[{path:["ce21","asbr2","asbr7","p30","pe6","ce23"],c:"#e0913a"},{path:["ce21","asbr2","p10","asbr1","asbr3","p20","p2","pe3","ce22"],c:"#e0913a"}],
    badges:[{n:"asbr2",text:"VRF ABC",dx:-6},{n:"pe3",text:"VRF ABC"},{n:"pe6",text:"VRF ABC"}]}
  ],
  table:{
   title:{en:"Addressing in AS 10",fr:"Adressage de l'AS 10",ar:"عناوين النظام AS 10"},
   note:{en:"From the GNS3 lab",fr:"Relevé sur la maquette GNS3",ar:"من مختبر GNS3"},
   head:{en:["Link","Network","Addresses"],fr:["Lien","Réseau","Adresses"],ar:["الرابط","الشبكة","العناوين"]},
   rows:[
    {cells:["P1-AS10 ↔ ASBR1","10.10.10.0/30",".2 ↔ .1"]},
    {cells:["PE1 ↔ P1-AS10","10.10.10.4/30",".5 ↔ .6"]},
    {cells:["P1-AS10 ↔ PE-ASBR2","10.10.10.8/30",".10 ↔ .9"]},
    {cells:["CE1-1 ↔ PE1","172.16.20.8","—"]}
   ]}
};

TOPOS.sae501={
  view:"0 0 1100 520", defStep:0,
  demo:{
   title:{en:"Live demo",fr:"Démo animée",ar:"عرض حي"},
   cap:{en:"Example run: the FiPy in a car sends its position over LoRaWAN while the car moves, then sleeps when it parks.",fr:"Exemple : la FiPy dans une voiture envoie sa position en LoRaWAN pendant que la voiture roule, puis se met en veille quand elle se gare.",ar:"مثال: ترسل لوحة FiPy داخل سيارة موقعها عبر LoRaWAN أثناء الحركة، ثم تدخل في السبات عند التوقف."},
   gw:{en:"LoRaWAN gateway",fr:"Passerelle LoRaWAN",ar:"بوابة LoRaWAN"},
   panel:{en:"Web map · Node-RED",fr:"Carte web · Node-RED",ar:"خريطة الويب · Node-RED"},
   sleep:{en:"Deep sleep",fr:"Veille profonde",ar:"سبات عميق"},
   wake:{en:"Movement detected · waking up",fr:"Mouvement détecté · réveil",ar:"تم رصد حركة · استيقاظ"},
   moving:{en:"Moving · sending position",fr:"En route · envoi de la position",ar:"في الطريق · إرسال الموقع"},
   parked:{en:"Parked",fr:"Garée",ar:"متوقفة"},
   stop:{en:"Stop command received",fr:"Commande d'arrêt reçue",ar:"تم استلام أمر الإيقاف"},
   alert:{en:"Alert: vehicle is moving",fr:"Alerte : le véhicule roule",ar:"تنبيه: المركبة تتحرك"},
   uplinks:{en:"Uplinks",fr:"Messages",ar:"الرسائل"},
   last:{en:"Last fix",fr:"Dernière position",ar:"آخر موقع"},
   ex:{en:"example coordinates",fr:"coordonnées d'exemple",ar:"إحداثيات توضيحية"}
  },
  title:{en:"System architecture",fr:"Architecture du système",ar:"بنية النظام"},
  zones:[{x:30,y:150,w:180,h:200,c:"#3fb07a",label:{en:"Vehicle",fr:"Véhicule",ar:"المركبة"}}],
  nodes:{
   sat:{x:120,y:60,type:"sat",label:{en:"GNSS satellites",fr:"Satellites GNSS",ar:"أقمار GNSS"},lp:{dx:50,dy:5,a:"start"}},
   dev:{x:120,y:250,type:"device",label:"Pycom FiPy + Pytrack",sub:{en:"GNSS · accelerometer",fr:"GNSS · accéléromètre",ar:"GNSS · مقياس التسارع"},d:42,bd:42},
   gw:{x:345,y:250,type:"gateway",label:{en:"LoRaWAN gateway",fr:"Passerelle LoRaWAN",ar:"بوابة LoRaWAN"},d:46,bd:50},
   ttn:{x:565,y:250,type:"cloud",label:"The Things Network",sub:{en:"payload formatter → JSON",fr:"payload formatter → JSON",ar:"payload formatter → JSON"},d:38,bd:40},
   nr:{x:780,y:250,type:"server",label:"Node-RED",sub:{en:"MQTT client",fr:"client MQTT",ar:"عميل MQTT"},d:40},
   map:{x:985,y:250,type:"map",label:{en:"Web map",fr:"Carte web",ar:"خريطة ويب"},sub:{en:"live position",fr:"position en direct",ar:"الموقع المباشر"},d:42},
   user:{x:985,y:420,type:"pc",label:{en:"User",fr:"Utilisateur",ar:"المستخدم"},sub:{en:"alerts · stop command",fr:"alertes · commande d'arrêt",ar:"تنبيهات · أمر الإيقاف"},d:34}
  },
  links:[
   {a:"sat",b:"dev",kind:"radio"},
   {a:"dev",b:"gw",kind:"radio",label:"LoRaWAN",t:.55,above:1},
   {a:"gw",b:"ttn",kind:"eth",label:"Internet",t:.5,above:1},
   {a:"ttn",b:"nr",kind:"mqtt",label:"MQTT",t:.5,above:1},
   {a:"nr",b:"map",kind:"eth"},
   {a:"nr",b:"user",kind:"eth"}
  ],
  legend:["radio","eth","mqtt","flow"],
  steps:[
   {t:{en:"1 · Position uplink",fr:"1 · Remontée de position",ar:"١ · إرسال الموقع"},
    cap:{en:"The Pycom board reads its GNSS position and packs it into a small payload sent over LoRaWAN. The Things Network decodes it to JSON with a payload formatter, Node-RED receives it over MQTT and moves the marker on the web map.",
         fr:"La carte Pycom lit sa position GNSS et l'envoie en LoRaWAN dans un message compact. The Things Network le décode en JSON avec un payload formatter, Node-RED le reçoit en MQTT et déplace le marqueur sur la carte web.",
         ar:"تقرأ لوحة Pycom موقعها عبر GNSS وترسله عبر LoRaWAN في رسالة مضغوطة. تحوّل The Things Network الرسالة إلى JSON باستخدام payload formatter، ويستقبلها Node-RED عبر MQTT ويحرك العلامة على خريطة الويب."},
    flows:[{path:["sat","dev"],c:"#45d4e6"},["dev","gw","ttn","nr","map"]],
    badges:[{n:"dev",text:"GNSS fix"},{n:"ttn",text:"JSON"},{n:"map",text:"live"}]},
   {t:{en:"2 · Low power",fr:"2 · Basse consommation",ar:"٢ · استهلاك منخفض"},
    cap:{en:"To last on battery, the board stays in deep sleep most of the time. The accelerometer wakes it only when the vehicle moves; then GNSS and LoRaWAN switch on, and the user gets a movement alert.",
         fr:"Pour tenir sur batterie, la carte reste en veille profonde la plupart du temps. L'accéléromètre la réveille seulement quand le véhicule bouge ; le GNSS et le LoRaWAN s'activent alors et l'utilisateur reçoit une alerte de mouvement.",
         ar:"لتدوم البطارية، تبقى اللوحة في سبات عميق معظم الوقت. يوقظها مقياس التسارع فقط عند تحرك المركبة، فيعمل GNSS وLoRaWAN ويتلقى المستخدم تنبيهًا بالحركة."},
    hi:["radio"],flows:[["dev","gw","ttn","nr","user"]],
    badges:[{n:"dev",text:"deep sleep",dx:-44},{n:"dev",text:"wake on move",dx:70},{n:"user",text:"alert"}]},
   {t:{en:"3 · Remote stop",fr:"3 · Arrêt à distance",ar:"٣ · الإيقاف عن بُعد"},
    cap:{en:"The user can stop tracking from a distance: the command goes back down through Node-RED and The Things Network as a LoRaWAN downlink, and the board returns to sleep.",
         fr:"L'utilisateur peut arrêter le suivi à distance : la commande redescend par Node-RED et The Things Network sous forme de downlink LoRaWAN, et la carte se remet en veille.",
         ar:"يمكن للمستخدم إيقاف التتبع عن بُعد: يعود الأمر عبر Node-RED وThe Things Network كرسالة downlink عبر LoRaWAN، فتعود اللوحة إلى السبات."},
    flows:[{path:["user","nr","ttn","gw","dev"],c:"#e0913a"}],
    badges:[{n:"user",text:"stop"},{n:"ttn",text:"downlink"},{n:"dev",text:"sleep"}]}
  ],
  table:{
   title:{en:"Data path",fr:"Chemin des données",ar:"مسار البيانات"},
   note:{en:"Example values",fr:"Valeurs d'exemple",ar:"قيم توضيحية"},
   head:{en:["Stage","Format","Example"],fr:["Étape","Format","Exemple"],ar:["المرحلة","الصيغة","مثال"]},
   rows:[
    {cells:["Pycom → LoRaWAN",{en:"Compact binary payload",fr:"Message binaire compact",ar:"رسالة ثنائية مضغوطة"},{en:"a few bytes: lat, lon",fr:"quelques octets : lat, lon",ar:"بضعة بايتات: خط العرض والطول"}]},
    {cells:["TTN payload formatter","JSON",'{"lat":48.11,"lon":-1.68}']},
    {cells:["TTN → Node-RED","MQTT",{en:"uplink topic v3/…/devices/…/up",fr:"topic d'uplink v3/…/devices/…/up",ar:"موضوع uplink v3/…/devices/…/up"}]},
    {cells:["Node-RED → web",{en:"Map marker",fr:"Marqueur sur la carte",ar:"علامة على الخريطة"},{en:"position + time",fr:"position + heure",ar:"الموقع + الوقت"}]}
   ]}
};

TOPOS.sae103={
  view:"0 0 1000 450", defStep:0,
  title:{en:"Lab topology (Packet Tracer)",fr:"Maquette réseau (Packet Tracer)",ar:"مخطط الشبكة (Packet Tracer)"},
  zones:[
   {x:15,y:15,w:300,h:420,c:"#8a94a8",label:{en:"IUT Colmar · server room",fr:"IUT Colmar · salle serveur RDC",ar:"IUT كولمار · غرفة الخوادم"}},
   {x:335,y:15,w:310,h:420,c:"#3b9ae1",label:{en:"Room C102",fr:"Salle C102",ar:"القاعة C102"}},
   {x:665,y:15,w:320,h:420,c:"#3fb07a",label:{en:"Room C100",fr:"Salle C100",ar:"القاعة C100"}}
  ],
  nodes:{
   web:{x:95,y:105,type:"server",label:"Serveur Web UHA",d:40},
   dns:{x:95,y:300,type:"server",label:"DNS-IUT",d:40},
   rtr:{x:235,y:200,type:"router",label:"Router 2811",pos:"t",d:28},
   swp:{x:470,y:110,type:"switch",label:{en:"Main switch",fr:"Switch principal",ar:"المبدل الرئيسي"},sub:"2960-24TT",pos:"r",d:52},
   pc:{x:585,y:205,type:"pc",label:"PC C102",pos:"r",d:32},
   sw2:{x:470,y:260,type:"switch",label:{en:"Switch 2",fr:"Switch 2",ar:"المبدل 2"},sub:"2960-24TT",pos:"l",d:52,bd:72},
   wlc:{x:470,y:375,type:"wlc",label:"WLC 5500",d:36},
   ap:{x:770,y:260,type:"ap",label:{en:"Access point",fr:"Point d'accès",ar:"نقطة الوصول"},sub:"LAP",d:34},
   phone:{x:905,y:120,type:"phone",label:"Smartphone",d:40},
   lap:{x:905,y:370,type:"laptop",label:"Laptop",d:38}
  },
  links:[
   {a:"web",b:"rtr",kind:"eth",ports:["","Fa0/1"]},
   {a:"dns",b:"rtr",kind:"eth",ports:["","Fa0/0"]},
   {a:"rtr",b:"swp",kind:"eth",ports:["Eth1/0","Fa0/1"]},
   {a:"swp",b:"pc",kind:"eth",ports:["Fa0/2","Fa0"]},
   {a:"swp",b:"sw2",kind:"eth",ports:["Fa0/1","Fa0/4"]},
   {a:"sw2",b:"wlc",kind:"eth",ports:["Fa0/2","Gig0"]},
   {a:"sw2",b:"ap",kind:"sftp",ports:["Fa0/3","Gig0"],label:{en:"S/FTP 4 pairs",fr:"S/FTP 4 paires",ar:"S/FTP 4 أزواج"},t:.5,above:1},
   {a:"ap",b:"phone",kind:"radio"},
   {a:"ap",b:"lap",kind:"radio"}
  ],
  legend:["eth","sftp","radio","flow"],
  steps:[
   {t:{en:"1 · Cabling",fr:"1 · Câblage",ar:"١ · التمديدات"},
    cap:{en:"I crimped the cables and ran a 4-pair S/FTP cable between the patch panels of the C102 and C100 racks. The access point in C100 connects through it to the switch and the Wi-Fi controller in C102.",
         fr:"J'ai serti les câbles et tiré un câble S/FTP 4 paires entre les panneaux de brassage des baies C102 et C100. Le point d'accès de la salle C100 est relié par ce câble au switch et au contrôleur Wi-Fi de la C102.",
         ar:"قمت بتركيب الكابلات ومددت كابل S/FTP بأربعة أزواج بين لوحات التوصيل في خزانتي C102 وC100. تتصل نقطة الوصول في C100 عبره بالمبدل ووحدة التحكم في الواي فاي في C102."},
    hi:["sftp"],badges:[{n:"sw2",text:{en:"patch panel C102",fr:"panneau C102",ar:"لوحة C102"},dx:-10},{n:"ap",text:{en:"patch panel C100",fr:"panneau C100",ar:"لوحة C100"}}]},
   {t:{en:"2 · Wi-Fi",fr:"2 · Wi-Fi",ar:"٢ · الواي فاي"},
    cap:{en:"The access point is managed by the Cisco WLC 5500 controller. Phones and laptops join over Wi-Fi; I measured range and signal strength with a heatmap and speedtest, and compared 802.11g with 802.11a.",
         fr:"Le point d'accès est géré par le contrôleur Cisco WLC 5500. Smartphones et portables se connectent en Wi-Fi ; j'ai mesuré la portée et la puissance du signal avec une heatmap et speedtest, et comparé 802.11g et 802.11a.",
         ar:"تُدار نقطة الوصول بواسطة وحدة التحكم Cisco WLC 5500. تتصل الهواتف والحواسيب عبر الواي فاي، وقست المدى وقوة الإشارة باستخدام heatmap وspeedtest وقارنت بين 802.11g و802.11a."},
    hi:["radio"],flows:[{path:["ap","sw2","wlc"],c:"#45d4e6"}],badges:[{n:"wlc",text:"WLC"},{n:"ap",text:"802.11g / a"}]},
   {t:{en:"3 · Services",fr:"3 · Services",ar:"٣ · الخدمات"},
    cap:{en:"A laptop on Wi-Fi reaches the UHA web server through the C102 switches and the 2811 router, with names resolved by the DNS-IUT server.",
         fr:"Un portable en Wi-Fi atteint le serveur web UHA à travers les switchs de la C102 et le routeur 2811, avec la résolution de noms par le serveur DNS-IUT.",
         ar:"يصل حاسوب محمول متصل بالواي فاي إلى خادم الويب UHA عبر مبدلات C102 والموجه 2811، مع ترجمة الأسماء بواسطة خادم DNS-IUT."},
    flows:[["lap","ap","sw2","swp","rtr","web"],{path:["rtr","dns"],c:"#e0913a"}],badges:[{n:"web",text:"HTTP"},{n:"dns",text:"DNS"}]}
  ],
  table:{
   title:{en:"Equipment by room",fr:"Équipements par salle",ar:"المعدات حسب القاعة"},
   note:{en:"From the Packet Tracer lab",fr:"Relevé sur la maquette Packet Tracer",ar:"من مختبر Packet Tracer"},
   head:{en:["Room","Equipment"],fr:["Salle","Équipements"],ar:["القاعة","المعدات"]},
   rows:[
    {c:"#8a94a8",cells:[{en:"Server room",fr:"Salle serveur RDC",ar:"غرفة الخوادم"},"Router 2811 · Serveur Web UHA · DNS-IUT"]},
    {c:"#3b9ae1",cells:["C102",{en:"2 × switch 2960-24TT · WLC 5500 · PC · patch panel",fr:"2 × switch 2960-24TT · WLC 5500 · PC · panneau de brassage",ar:"مبدلان 2960-24TT · WLC 5500 · حاسوب · لوحة توصيل"}]},
    {c:"#3fb07a",cells:["C100",{en:"Access point · patch panel · Wi-Fi clients",fr:"Point d'accès · panneau de brassage · clients Wi-Fi",ar:"نقطة وصول · لوحة توصيل · أجهزة الواي فاي"}]}
   ]}
};

TOPOS.sae202={
  view:"0 0 1080 500", defStep:0,
  title:{en:"Circuit (Tinkercad)",fr:"Circuit (Tinkercad)",ar:"الدائرة (Tinkercad)"},
  zones:[
   {x:20,y:110,w:560,h:370,c:"#3b9ae1",label:{en:"Note generator",fr:"Générateur de notes",ar:"مولّد النغمات"}},
   {x:700,y:110,w:360,h:370,c:"#3fb07a",label:{en:"Note recognition",fr:"Reconnaissance des notes",ar:"التعرف على النغمات"}}
  ],
  nodes:{
   scope1:{x:200,y:55,type:"scope",label:{en:"Oscilloscope 1",fr:"Oscilloscope 1",ar:"راسم الذبذبات 1"},pos:"l",d:48},
   buzzer:{x:420,y:55,type:"buzzer",label:{en:"Buzzer",fr:"Buzzer",ar:"الطنان"},pos:"r",d:44},
   scope2:{x:640,y:55,type:"scope",label:{en:"Oscilloscope 2",fr:"Oscilloscope 2",ar:"راسم الذبذبات 2"},pos:"r",d:48},
   keys:{x:120,y:390,type:"keys",label:{en:"9 push buttons",fr:"9 boutons poussoirs",ar:"9 أزرار ضغط"},sub:{en:"piano keys",fr:"touches de piano",ar:"مفاتيح البيانو"},d:30},
   ard1:{x:330,y:390,type:"arduino",label:"Arduino UNO 1",sub:{en:"plays the note",fr:"joue la note",ar:"يعزف النغمة"},d:46},
   dac:{x:330,y:205,type:"ladder",label:{en:"R-2R ladder",fr:"Échelle R-2R",ar:"سلم R-2R"},sub:{en:"8-bit DAC",fr:"CNA 8 bits",ar:"محول رقمي-تناظري 8 بت"},pos:"l",d:58},
   amp:{x:500,y:205,type:"chip",label:{en:"Amplifier IC",fr:"CI amplificateur",ar:"دارة تضخيم"},pos:"r",d:38},
   ard2:{x:820,y:300,type:"arduino",label:"Arduino UNO 2",sub:{en:"ADC + arduinoFFT",fr:"CAN + arduinoFFT",ar:"ADC + arduinoFFT"},d:46},
   leds:{x:985,y:300,type:"leds",label:{en:"9 LEDs",fr:"9 LED",ar:"9 مصابيح LED"},sub:{en:"detected note",fr:"note détectée",ar:"النغمة المكتشفة"},d:44}
  },
  links:[
   {a:"keys",b:"ard1",kind:"eth",label:{en:"inputs",fr:"entrées",ar:"المداخل"},above:1},
   {a:"ard1",b:"dac",kind:"bus",label:"D0–D7",t:.5,side:1},
   {a:"dac",b:"amp",kind:"analog"},
   {a:"amp",b:"buzzer",kind:"analog"},
   {a:"dac",b:"scope1",kind:"probe"},
   {a:"amp",b:"scope2",kind:"probe"},
   {a:"amp",b:"ard2",kind:"analog",label:"A0",t:.55,side:1},
   {a:"ard2",b:"leds",kind:"bus"}
  ],
  legend:["eth","bus","analog","probe","flow"],
  steps:[
   {t:{en:"1 · Play a note",fr:"1 · Jouer une note",ar:"١ · عزف نغمة"},
    cap:{en:"Each push button is a piano key. Arduino 1 writes the samples of a sine wave at that key's frequency on 8 digital pins; the R-2R resistor ladder turns them into an analog signal that plays on the buzzer. Oscilloscope 1 checks the waveform.",
         fr:"Chaque bouton poussoir est une touche de piano. L'Arduino 1 écrit les échantillons d'une sinusoïde à la fréquence de la touche sur 8 broches numériques ; l'échelle de résistances R-2R les transforme en signal analogique joué sur le buzzer. L'oscilloscope 1 vérifie la forme d'onde.",
         ar:"كل زر ضغط يمثل مفتاح بيانو. يكتب Arduino 1 عينات موجة جيبية بتردد المفتاح على 8 منافذ رقمية، ويحولها سلم المقاومات R-2R إلى إشارة تناظرية تُعزف على الطنان. يتحقق راسم الذبذبات 1 من شكل الموجة."},
    flows:[["keys","ard1","dac","amp","buzzer"],{path:["dac","scope1"],c:"#45d4e6"}],badges:[{n:"ard1",text:"sine samples"}]},
   {t:{en:"2 · Acquire the signal",fr:"2 · Acquérir le signal",ar:"٢ · التقاط الإشارة"},
    cap:{en:"Arduino 2 samples the analog signal on its A0 input through the ADC. The sampling rate decides how accurately the frequency can be measured; oscilloscope 2 shows the signal it receives.",
         fr:"L'Arduino 2 échantillonne le signal analogique sur son entrée A0 via le CAN. La fréquence d'échantillonnage détermine la précision de la mesure ; l'oscilloscope 2 affiche le signal reçu.",
         ar:"يأخذ Arduino 2 عينات من الإشارة التناظرية على المدخل A0 عبر المحول التناظري-الرقمي. يحدد تردد أخذ العينات دقة قياس التردد، ويعرض راسم الذبذبات 2 الإشارة المستقبلة."},
    hi:["analog"],flows:[["amp","ard2"],{path:["amp","scope2"],c:"#45d4e6"}],badges:[{n:"ard2",text:"ADC · A0"}]},
   {t:{en:"3 · Recognise the note",fr:"3 · Reconnaître la note",ar:"٣ · التعرف على النغمة"},
    cap:{en:"arduinoFFT computes the spectrum of the samples and finds the dominant frequency. Arduino 2 matches it to the nearest piano note and lights the matching LED.",
         fr:"arduinoFFT calcule le spectre des échantillons et trouve la fréquence dominante. L'Arduino 2 l'associe à la note de piano la plus proche et allume la LED correspondante.",
         ar:"تحسب arduinoFFT طيف العينات وتجد التردد الغالب. يطابقه Arduino 2 مع أقرب نغمة بيانو ويضيء المصباح المقابل."},
    flows:[["ard2","leds"]],badges:[{n:"ard2",text:"FFT"},{n:"leds",text:"LA · 440 Hz",bd:30}]}
  ],
  table:{
   title:{en:"Note frequencies",fr:"Fréquences des notes",ar:"ترددات النغمات"},
   note:{en:"Standard tuning, A4 = 440 Hz",fr:"Accord standard, LA3 = 440 Hz",ar:"الضبط القياسي، لا = 440 هرتز"},
   head:{en:["LED","Note","Frequency (Hz)"],fr:["LED","Note","Fréquence (Hz)"],ar:["المصباح","النغمة","التردد (هرتز)"]},
   rows:[
    {cells:["1",{en:"C4 · Do",fr:"Do",ar:"دو"},"261.6"]},{cells:["2",{en:"D4 · Ré",fr:"Ré",ar:"ري"},"293.7"]},{cells:["3",{en:"E4 · Mi",fr:"Mi",ar:"مي"},"329.6"]},
    {cells:["4",{en:"F4 · Fa",fr:"Fa",ar:"فا"},"349.2"]},{cells:["5",{en:"G4 · Sol",fr:"Sol",ar:"صول"},"392.0"]},{cells:["6",{en:"A4 · La",fr:"La",ar:"لا"},"440.0"]},
    {cells:["7",{en:"B4 · Si",fr:"Si",ar:"سي"},"493.9"]},{cells:["8",{en:"C5 · Do",fr:"Do (octave)",ar:"دو (الأوكتاف)"},"523.3"]},{cells:["9",{en:"D5 · Ré",fr:"Ré (octave)",ar:"ري (الأوكتاف)"},"587.3"]}
   ]}
};
/* ---------- Interactive piano (SAÉ 2.02) ---------- */
const PIANO={
 notes:[{n:{en:"C4",fr:"Do",ar:"دو"},f:261.63,k:"a"},{n:{en:"D4",fr:"Ré",ar:"ري"},f:293.66,k:"s"},{n:{en:"E4",fr:"Mi",ar:"مي"},f:329.63,k:"d"},
  {n:{en:"F4",fr:"Fa",ar:"فا"},f:349.23,k:"f"},{n:{en:"G4",fr:"Sol",ar:"صول"},f:392.00,k:"g"},{n:{en:"A4",fr:"La",ar:"لا"},f:440.00,k:"h"},
  {n:{en:"B4",fr:"Si",ar:"سي"},f:493.88,k:"j"},{n:{en:"C5",fr:"Do",ar:"دو"},f:523.25,k:"k"},{n:{en:"D5",fr:"Ré",ar:"ري"},f:587.33,k:"l"}],
 /* songs: [note index, beats]; traditional / public-domain melodies */
 songs:[
  {id:"ode",t:{en:"Ode to Joy",fr:"Hymne à la joie",ar:"نشيد الفرح"},bpm:150,seq:[[2,1],[2,1],[3,1],[4,1],[4,1],[3,1],[2,1],[1,1],[0,1],[0,1],[1,1],[2,1],[2,1.5],[1,.5],[1,2],[2,1],[2,1],[3,1],[4,1],[4,1],[3,1],[2,1],[1,1],[0,1],[0,1],[1,1],[2,1],[1,1.5],[0,.5],[0,2]]},
  {id:"jacques",t:{en:"Frère Jacques",fr:"Frère Jacques",ar:"فرير جاك"},bpm:140,seq:[[0,1],[1,1],[2,1],[0,1],[0,1],[1,1],[2,1],[0,1],[2,1],[3,1],[4,2],[2,1],[3,1],[4,2]]},
  {id:"lune",t:{en:"Au clair de la lune",fr:"Au clair de la lune",ar:"في ضوء القمر"},bpm:130,seq:[[0,1],[0,1],[0,1],[1,1],[2,2],[1,2],[0,1],[2,1],[1,1],[1,1],[0,4]]}
 ],
 t:{
  en:{h:"Try it: the piano",cap:"Play the same 9 notes as the project. Your browser generates a sine wave, draws it on the oscilloscope, and runs an FFT to find the frequency and light the matching LED, just like Arduino 2.",
      hint:"Click or tap a key, or use your keyboard: A S D F G H J K L",scope:"Oscilloscope",fft:"FFT · detected note",none:"Play a note",songs:"Play a song",stop:"Stop"},
  fr:{h:"À vous de jouer : le piano",cap:"Jouez les 9 mêmes notes que dans le projet. Le navigateur génère une sinusoïde, l'affiche sur l'oscilloscope et lance une FFT pour trouver la fréquence et allumer la LED correspondante, comme l'Arduino 2.",
      hint:"Cliquez ou touchez une touche, ou utilisez le clavier : A S D F G H J K L",scope:"Oscilloscope",fft:"FFT · note détectée",none:"Jouez une note",songs:"Jouer une mélodie",stop:"Arrêter"},
  ar:{h:"جرّبها بنفسك: البيانو",cap:"اعزف النغمات التسع نفسها كما في المشروع. يولّد المتصفح موجة جيبية ويرسمها على راسم الذبذبات، ثم يحسب FFT لإيجاد التردد وإضاءة المصباح المقابل، تمامًا مثل Arduino 2.",
      hint:"انقر أو المس مفتاحًا، أو استخدم لوحة المفاتيح: A S D F G H J K L",scope:"راسم الذبذبات",fft:"FFT · النغمة المكتشفة",none:"اعزف نغمة",songs:"تشغيل لحن",stop:"إيقاف"}
 }
};
/* ---------- SAÉ 3.01 live demo: phone app + MQTT + smart sockets ---------- */
const APP301={t:{
 en:{h:"Live demo: app + smart sockets",cap:"Log in, press Connect, then switch the sockets from the phone. Each tap sends an MQTT message through the Raspberry Pi broker to the ESP8266, whose relay switches the lamp. The physical button on a socket works too, and the app stays in sync.",
     play:"▶ Play demo",reset:"Reset",btn:"Socket button",log:"MQTT messages",ex:"example topics and temperature",need:"Press Connect first",broker:"Raspberry Pi · MQTT broker",sock:"ESP8266 + relay",lamp:"Lamp",wifi:"Wi-Fi"},
 fr:{h:"Démo : application + prises connectées",cap:"Connectez-vous, appuyez sur Connect, puis pilotez les prises depuis le téléphone. Chaque appui envoie un message MQTT via le broker du Raspberry Pi vers l'ESP8266, dont le relais allume la lampe. Le bouton physique de la prise fonctionne aussi et l'application reste synchronisée.",
     play:"▶ Lancer la démo",reset:"Réinitialiser",btn:"Bouton de la prise",log:"Messages MQTT",ex:"topics et température d'exemple",need:"Appuyez d'abord sur Connect",broker:"Raspberry Pi · broker MQTT",sock:"ESP8266 + relais",lamp:"Lampe",wifi:"Wi-Fi"},
 ar:{h:"عرض حي: التطبيق والمقابس الذكية",cap:"سجّل الدخول واضغط Connect، ثم تحكم في المقابس من الهاتف. كل نقرة ترسل رسالة MQTT عبر وسيط Raspberry Pi إلى ESP8266، الذي يشغّل المرحّل فيضيء المصباح. يعمل الزر الفعلي على المقبس أيضًا ويبقى التطبيق متزامنًا.",
     play:"▶ تشغيل العرض",reset:"إعادة",btn:"زر المقبس",log:"رسائل MQTT",ex:"مواضيع ودرجة حرارة توضيحية",need:"اضغط Connect أولًا",broker:"Raspberry Pi · وسيط MQTT",sock:"ESP8266 + مرحّل",lamp:"مصباح",wifi:"واي فاي"}
}};
const TOPO_UI={
 note:{en:"Example addressing",fr:"Adressage d'exemple",ar:"عناوين توضيحية"},
 eth:{en:"Ethernet",fr:"Ethernet",ar:"إيثرنت"},serial:{en:"Serial link",fr:"Liaison série",ar:"رابط تسلسلي"},
 trunk:{en:"802.1Q trunk",fr:"Trunk 802.1Q",ar:"Trunk 802.1Q"},bus:{en:"Digital pins (bus)",fr:"Broches numériques (bus)",ar:"منافذ رقمية"},analog:{en:"Analog signal",fr:"Signal analogique",ar:"إشارة تناظرية"},probe:{en:"Probe",fr:"Sonde",ar:"مسبار"},sftp:{en:"S/FTP cable",fr:"Câble S/FTP",ar:"كابل S/FTP"},radio:{en:"Radio / Wi-Fi",fr:"Radio / Wi-Fi",ar:"راديو / واي فاي"},radio_old:{en:"Radio (GNSS / LoRaWAN)",fr:"Radio (GNSS / LoRaWAN)",ar:"راديو (GNSS / LoRaWAN)"},mqtt:{en:"MQTT",fr:"MQTT",ar:"MQTT"},ebgp:{en:"eBGP link between AS",fr:"Lien eBGP entre AS",ar:"رابط eBGP بين الأنظمة"},flow:{en:"Traffic",fr:"Flux",ar:"حركة البيانات"}
};
