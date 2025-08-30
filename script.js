const PLANTS = [
  {
    "name": "પડદા વેલ",
    "category": "વેલ",
    "count": 1,
    "benefits": "શેડિંગ માટે ઉપયોગી, પરિસરમાં હરિયાળી અને ઠંડક આપે.",
    "image": "images/vines/padadavel.webp"
  },
  {
    "name": "બોગન વેલ (ગુલાબી)",
    "category": "વેલ",
    "count": 4,
    "benefits": "કાંટાદાર પણ ખૂબ ખીલતું વેલ; બાઉન્ડરી/આર્ચ માટે સુંદર દેખાવ.",
    "image": "images/vines/boganvelgulabi.webp"
  },
  {
    "name": "બોગન વેલ (સફેદ)",
    "category": "વેલ",
    "count": 1,
    "benefits": "ઓછા પાણીમાં ચાલે; લાંબા સમય સુધી પુષ્પિત રહે.",
    "image": "images/vines/boganvelsafed.webp"
  },
  {
    "name": "મધુમાલતી",
    "category": "વેલ",
    "count": 3,
    "benefits": "સાંજે સુગંધિત ફૂલો; આરકીટ/પરગોલા માટે સરસ કવર.",
    "image": "images/vines/madhumalti.webp"
  },
  {
    "name": "દમવેલ",
    "category": "વેલ",
    "count": 2,
    "benefits": "ઝડપથી ફેલાય; દીવાલ/વાડને હરિયાળી કવર આપે.",
    "image": "images/vines/damvel.webp"
  },
  {
    "name": "નાગર વેલ",
    "category": "વેલ",
    "count": 2,
    "benefits": "આભૂષણાત્મક પાંદડા; બાલ્કની/ટ્રેલિસ ડેકોર માટે.",
    "image": "images/vines/nagarvel.webp"
  },
  {
    "name": "કમાનવાળી વેલ",
    "category": "વેલ",
    "count": 1,
    "benefits": "વાડ/દરવાજા ઉપર તિરપા કમાન આકારમાં ચઢાવવામાં સરળ.",
    "image": "images/vines/kamanvalivel.webp"
  },
  {
    "name": "ધનવેલ",
    "category": "વેલ",
    "count": 1,
    "benefits": "ઝડપી વૃદ્ધિ; લીલું કવર અને પક્ષીઓને આશ્રય.",
    "image": "images/vines/dhanvel.webp"
  },
  {
    "name": "અપરાજિતા",
    "category": "વેલ",
    "count": 1,
    "benefits": "નીલા/સફેદ ફૂલ ચા માટે વપરાય; સજાવટી અને ઔષધીય ઉપયોગ.",
    "image": "images/vines/aprajita.webp"
  },
  {
    "name": "સ્વિસ ચીઝ પ્લાન્ટ",
    "category": "ફૂલ છોડ",
    "count": 1,
    "benefits": "ઇન્ડોર ડેકોર માટે લોકપ્રિય; મોટા છિદ્રવાળા પાંદડા હવામાં ભેજ વધારવામાં મદદ કરે.",
    "image": "images/flowers/swichchisplant.webp"
  },
  {
    "name": "એરો હેડ પ્લાન્ટ",
    "category": "ફૂલ છોડ",
    "count": 1,
    "benefits": "ઇન્ડોર શેડ-ટોલરન્ટ; હવા શુદ્ધીકરણમાં મદદ.",
    "image": "images/flowers/arohedplant.webp"
  },
  {
    "name": "સ્નેક પ્લાન્ટ",
    "category": "ફૂલ છોડ",
    "count": 6,
    "benefits": "લો-માંટેનન્સ; રાત્રે ઓક્સિજન છોડે—ઇન્ડોર એર ક્વાલિટી સુધારે.",
    "image": "images/flowers/snekplant.webp"
  },
  {
    "name": "સ્લીવિયા પ્લાન્ટ",
    "category": "ફૂલ છોડ",
    "count": 5,
    "benefits": "રંગીન ફૂલોથી બગીચાને આકર્ષક બનાવે; તિતલીઓને આકર્ષે.",
    "image": "images/flowers/sliviyaplant.webp"
  },
  {
    "name": "એરિકા પામ",
    "category": "ફૂલ છોડ",
    "count": 1,
    "benefits": "ઇન્ડોર પામ; વાતાવરણને તાજગી અને હ્યુમિડિટી આપે.",
    "image": "images/flowers/arimapam.webp"
  },
  {
    "name": "પોઈ",
    "category": "ફૂલ છોડ",
    "count": 1,
    "benefits": "લીલા પાંદડાવાળો શાક; પોષક તત્વોથી ભરપૂર.",
    "image": "images/flowers/poi.webp"
  },
  {
    "name": "મેદી",
    "category": "ફૂલ છોડ",
    "count": 19,
    "benefits": "પાન અને કોપરાંમાં રંગ; પરંપરાગત રીતે સૌંદર્ય અને ઠંડક માટે વપરાય.",
    "image": "images/flowers/medi.webp"
  },
  {
    "name": "પર્પલ હાર્ટ",
    "category": "ફૂલ છોડ",
    "count": 7,
    "benefits": "જામણી પાંદડા; બોર્ડર/હેંગિંગ માટે सुंदर ગ્રાઉન્ડ કવર.",
    "image": "images/flowers/parpalhart.webp"
  },
  {
    "name": "અડુલસા",
    "category": "ફૂલ છોડ",
    "count": 12,
    "benefits": "પરંપરાગત રીતે કફ-ખાંસીમાં ઘરગથ્થું ઉપયોગ; બગીચામાં ઔષધીય મૂલ્ય.",
    "image": "images/flowers/adulasa.webp"
  },
  {
    "name": "લીમડો",
    "category": "વૃક્ષ-અન્ય",
    "count": 4,
    "benefits": "કુદરતી જીવાણુનાશક; છાયો આપે, પાન/નિંબોલી પરંપરાગત ઉપયોગ.",
    "image": "images/trees/limdo.webp"
  },
  {
    "name": "આસોપાલવ",
    "category": "વૃક્ષ-અન્ય",
    "count": 7,
    "benefits": "ઝડપી વૃદ્ધિ; શેડ અને હરિયાળો સ્ક્રીન.",
    "image": "images/trees/ashopalav.webp"
  },
  {
    "name": "જામફળ",
    "category": "વૃક્ષ-અન્ય",
    "count": 1,
    "benefits": "ફળ વિટામિન C ભરપૂર; પાંદડા પરંપરાગત દાંતસાફી માટે.",
    "image": "images/trees/jamfal.webp"
  },
  {
    "name": "આંબો",
    "category": "વૃક્ષ-અન્ય",
    "count": 2,
    "benefits": "આમ્રફળ; છાયો અને પરાગણ માટે પક્ષીઓને આકર્ષે.",
    "image": "images/trees/ambo.webp"
  },
  {
    "name": "ગૂંદી",
    "category": "વૃક્ષ-અન્ય",
    "count": 1,
    "benefits": "લોકલ શોભાવર્ધક ઝાડ; જીવવૈવિધ્ય માટે ઉપયોગી.",
    "image": "images/trees/gundi.webp"
  },
  {
    "name": "કણજી",
    "category": "વૃક્ષ-અન્ય",
    "count": 1,
    "benefits": "ગ્રામ્ય વિસ્તારમાં સામાન્ય; છાયો અને જમીનની ધારાપકતા વધે.",
    "image": "images/trees/kanaji.webp"
  },
  {
    "name": "પાનખર ઝાડી",
    "category": "વૃક્ષ-અન્ય",
    "count": 1,
    "benefits": "મોસમી પાનખરથી માટીમાં કાર્બનિક પદાર્થ વધે.",
    "image": "images/trees/pankharjadi.webp"
  },
  {
    "name": "અગાવેન અમેરિકાના",
    "category": "વૃક્ષ-અન્ય",
    "count": 6,
    "benefits": "ઝેરૉસ્કેપ માટે યોગ્ય; માટી ધોવાણ રોકે, બોર્ડર માટે.",
    "image": "images/trees/agaven.webp"
  },
  {
    "name": "વાંસ",
    "category": "વૃક્ષ-અન્ય",
    "count": 3,
    "benefits": "ઝડપી વૃદ્ધિ; માટી બાથું રાખે, હવા શુદ્ધીકરણ.",
    "image": "images/trees/vans.webp"
  },
 {
    "name": "શેતૂર",
    "category": "ફળ-ફૂલ",
    "count": 3,
    "benefits": "ફળ એન્ટીઑક્સીડન્ટોથી ભરપૂર; છાયો આપે.",
    "image": "images/fruitsflowers/setur.jpg"
  },
 {
    "name": "દાડમ",
    "category": "ફળ-ફૂલ",
    "count": 1,
    "benefits": "હૃદય આરોગ્ય માટે ફાયદાકારક ફળ; સુશોભન મૂલ્ય.",
    "image": "images/fruitsflowers/dadm.jpg"
  },
 {
    "name": "રામ ફળી",
    "category": "ફળ-ફૂલ",
    "count": 3,
    "benefits": "શાક માટે ઉપયોગી; નાઈટ્રોજન ફિક્સિંગથી માટી સુધારે.",
    "image": "images/fruitsflowers/ramfali.jpg"
  },
{
    "name": "સીતાફળી",
    "category": "ફળ-ફૂલ",
    "count": 2,
    "benefits": "મીઠું ફળ; ગરમ પ્રદેશમાં સારી વૃદ્ધિ.",
    "image": "images/fruitsflowers/sitafali.jpg"
  },
 {
    "name": "લીંબુ",
    "category": "ફળ-ફૂલ",
    "count": 5,
    "benefits": "વિટામિન C; રસોડામાં રોજબરોજ ઉપયોગી.",
    "image": "images/fruitsflowers/limbu.jpg"
  },
{
    "name": "લવણ વલી",
    "category": "ફળ-ફૂલ",
    "count": 1,
    "benefits": "માટીને આવરણ આપતું વેલ; મુલ્ચિંગ અસર.",
    "image": "images/fruitsflowers/lavanvali.jpg"
  },
{
    "name": "જાંબુ",
    "category": "ફળ-ફૂલ",
    "count": 3,
    "benefits": "ફળ લોહ અને વિટામિન સભર; છાયો આપે.",
    "image": "images/fruitsflowers/jambu.jpg"
  },
 {
    "name": "જાસુદ",
    "category": "ફળ-ફૂલ",
    "count": 12,
    "benefits": "ફૂલ વાળની સારસંભાળમાં; તિતલીઓ/મધમાખીઓને આકર્ષે.",
    "image": "images/fruitsflowers/jashud.jpg"
  },
 {
    "name": "મોગરો",
    "category": "ફળ-ફૂલ",
    "count": 9,
    "benefits": "તીવ્ર સુગંધિત ફૂલ; ગાલા/હાર માટે લોકપ્રિય.",
    "image": "images/fruitsflowers/mogaro.jpg"
  },
 {
    "name": "ટગરી",
    "category": "ફળ-ફૂલ",
    "count": 2,
    "benefits": "સુગંધિત સફેદ ફૂલ; નાઈટ-બ્લૂમિંગ જાતો શાંત સુગંધ આપે.",
    "image": "images/fruitsflowers/tagri.jpg"
  },
{
    "name": "પારિજાત",
    "category": "ફળ-ફૂલ",
    "count": 1,
    "benefits": "સવારના સમયે ખીલતા સુગંધિત ફૂલ; શોભાવર્ધક.",
    "image": "images/fruitsflowers/parijat.jpg"
  },
{
    "name": "તુલસી",
    "category": "ઔષધી",
    "count": 3,
    "benefits": "ઇમ્યુનિટી સપોર્ટ; કફ-સર્દીમાં ઘરેલું ઉપયોગ.",
    "image": "images/medicinal/tulasi.jpg"
  },
 {
    "name": "લેમન ગ્રાસ",
    "category": "ઔષધી",
    "count": 1,
    "benefits": "ચા માટે સુગંધિત ઘાસ; મચ્છર દૂર રાખવામાં મદદરૂપ.",
    "image": "images/medicinal/lemangras.jpg"
  },
 {
    "name": "પત્થર ફૂટી",
    "category": "ઔષધી",
    "count": 8,
    "benefits": "પરંપરાગત રીતે મૂત્ર માર્ગ સંબંધિત સમસ્યામાં ઘરેલું ઉપયોગ.",
    "image": "images/medicinal/paththarfuti.jpg"
  },
{
    "name": "સુદર્શન",
    "category": "ઔષધી",
    "count": 1,
    "benefits": "પરંપરાગત આયુર્વેદિક મિશ્રણોમાં ઉપયોગ.",
    "image": "images/medicinal/sudrshan.jpg"
  },
 {
    "name": "અળવી",
    "category": "ઔષધી",
    "count": 1,
    "benefits": "પાચનમાં મદદરૂપ, ઘરેલું વાનગીઓમાં વિશેષ.",
    "image": "images/medicinal/alavi.jpg"
  },
 {
    "name": "પીંપળી",
    "category": "ઔષધી",
    "count": 2,
    "benefits": "આયુર્વેદમાં પાચન માટે પ્રસિદ્ધ; રસોઇમાં પણ વપરાય.",
    "image": "images/medicinal/pimpali.jpg"
  },
 {
    "name": "અરડૂસી",
    "category": "ઔષધી",
    "count": 1,
    "benefits": "પરંપરાગત રીતે શ્વાસ સંબંધિત સમસ્યામાં કશાય તરીકે.",
    "image": "images/medicinal/ardushi.jpg"
  },
 {
    "name": "શતાવરી",
    "category": "ઔષધી",
    "count": 1,
    "benefits": "આયુર્વેદિક ટોનિક તરીકે જાણીતી; તંદુરસ્તી સમર્થન.",
    "image": "images/medicinal/satavri.jpg"
  },
 {
    "name": "ચણોઠી",
    "category": "ઔષધી",
    "count": 1,
    "benefits": "લોકચિકિત્સામાં ઉપયોગ; ગ્રાઉન્ડ કવર તરીકે પણ.",
    "image": "images/medicinal/chanothi.jpg"
  },
 {
    "name": "નગોળ",
    "category": "ઔષધી",
    "count": 1,
    "benefits": "ગરમીમાં રાહત; સ્થાનિક લોકઉપયોગમાં ઉલ્લેખિત.",
    "image": "images/medicinal/nagol.jpg"
  },
 {
    "name": "મીઠો લીમડો",
    "category": "ઔષધી",
    "count": 9,
    "benefits": "હળવો સુગંધિત છોડ; ઘરઆંગણે તાજગી અને જીવજંતુ ઘટાડે.",
    "image": "images/medicinal/mitholimdo.jpg"
  }
];
// ====== Data & DOM refs ======
const grid = document.getElementById('grid');
const search = document.getElementById('search');
const stats = document.getElementById('stats');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalCat = document.getElementById('modalCat');
const modalCount = document.getElementById('modalCount');
const modalBenefits = document.getElementById('modalBenefits');
const modalClose = document.getElementById('modalClose');
const modalX = document.getElementById('modalX');
// ====== Modal ======
function openModal(p) {
  modalImg.src = p.image;
  modalTitle.textContent = p.name;
  modalCat.textContent = `વર્ગ: ${p.category}`;
  modalCount.textContent = `સંખ્યા: ${p.count}`;
  modalBenefits.innerHTML = '';
  p.benefits.split(";").forEach(point => {
    const li = document.createElement("li");
    li.textContent = point.trim();
    modalBenefits.appendChild(li);
  });
  modal.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
}
modalClose && modalClose.addEventListener('click', closeModal);
modalX && modalX.addEventListener('click', closeModal);
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
// ====== Grid Render (single source of truth) ======
function render() {
  const term = (search?.value || '').trim().toLowerCase();
  let data = PLANTS.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.category.toLowerCase().includes(term)
  );
  // Gujarati-friendly sort
  data.sort((a, b) => a.name.localeCompare(b.name, 'gu'));
  grid.innerHTML = '';
  for (const p of data) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="content">
        <div class="badge">${p.category}</div>
        <h3>${p.name}</h3>
        <div class="count">સંખ્યા: ${p.count}</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(p));
    grid.appendChild(card);
  }
  const totalCount = PLANTS.reduce((s, x) => s + (Number(x.count) || 0), 0);
  stats.textContent = `કુલ જાત: ${PLANTS.length} | કુલ સંખ્યા: ${totalCount}`;
}
search && search.addEventListener('input', render);
render();
// ====== Random highlight (every 10s) ======
const box = document.getElementById('randomBox');
function showRandomData() {
  if (!box) return;
  const random = PLANTS[Math.floor(Math.random() * PLANTS.length)];
  box.innerHTML = `
    <img src="${random.image}" alt="${random.name}">
    <h3>${random.name}</h3>
  `;
}
showRandomData();
setInterval(showRandomData, 10000);
// ====== Sidebar (guarded) ======
(function () {
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('hamburger');
  const closeBtn = document.getElementById('sidebarClose');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (!sidebar) return;
  function openSidebar() {
    sidebar.classList.add('open');
    openBtn && openBtn.setAttribute('aria-expanded', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    openBtn && openBtn.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  openBtn && openBtn.addEventListener('click', openSidebar);
  closeBtn && closeBtn.addEventListener('click', closeSidebar);
  backdrop && backdrop.addEventListener('click', closeSidebar);
  // Close on link click
  sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', closeSidebar));
  // Close on Escape
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSidebar(); });
})();
// ====== query box ======
function openquery() {
          window.open("querybox.html", "_self");
}










