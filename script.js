
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


// ====== search ======


const consonants = {
  k: "ક", g: "ગ", j: "જ", t: "ટ", d: "ડ",t: "ત",
  p: "પ", b: "બ", m: "મ", n: "ન",
  r: "ર", l: "લ", v: "વ", s: "સ",
  h: "હ", y: "ય", ch: "ચ", kh: "ખ", ph: "ફ", bh: "ભ"
};

const vowels = {
  a: "અ", aa: "આ", i: "ઇ", ee: "ઈ", i: "ઈ", ee: "ઇ",
  u: "ઉ", oo: "ઊ",u: "ઊ", oo: "ઉ", e: "એ", ai: "ઐ",
  o: "ઓ", au: "ઔ"
};

// Matras (vowel signs for consonants)
const matras = {
  a: "",   // default (no sign)
  aa: "ા",
  i: "િ",
  ee: "ી",
  i: "ી",
  ee: "િ",
  u: "ુ",
  oo: "ૂ",
  e: "ે",
  ai: "ૈ",
  o: "ો",
  au: "ૌ"
};

function convertToGujarati(text) {
  let result = "";
  let i = 0;

  while (i < text.length) {
    let two = text.slice(i, i+2).toLowerCase();
    let one = text[i].toLowerCase();

    // Check two-letter vowels (aa, ee, oo, ai, au)
    if (vowels[two]) {
      result += vowels[two];
      i += 2;
      continue;
    }

    // Consonant + vowel matra
    if (consonants[one]) {
      let next2 = text.slice(i+1, i+3).toLowerCase();
      let next1 = text[i+1]?.toLowerCase();

      if (matras[next2] !== undefined) {
        result += consonants[one] + matras[next2];
        i += 3;
        continue;
      } else if (matras[next1] !== undefined) {
        result += consonants[one] + matras[next1];
        i += 2;
        continue;
      } else {
        // just consonant (implicit 'a')
        result += consonants[one];
        i++;
        continue;
      }
    }

    // Single vowel
    if (vowels[one]) {
      result += vowels[one];
      i++;
      continue;
    }

    // Else keep as is
    result += text[i];
    i++;
  }

  return result;
}

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
// ====== Grid Render (optimized, category-wise) ======
function render(selectedCategory = null, viewAll = false) {
  const rawTerm = (search?.value || '').trim();
  const guTerm = convertToGujarati(rawTerm);
  const term = rawTerm.toLowerCase();

  let data = PLANTS.filter(p =>
    p.name.includes(guTerm) ||
    p.category.includes(guTerm) ||
    p.name.toLowerCase().includes(term) ||
    p.category.toLowerCase().includes(term)
  );

  data.sort((a, b) => a.name.localeCompare(b.name, 'gu'));
  grid.innerHTML = '';

  // Group by category
  const categories = {};
  data.forEach(p => {
    if (!categories[p.category]) categories[p.category] = [];
    categories[p.category].push(p);
  });

  // Full-page view for selected category
  if (viewAll && selectedCategory) {
    const section = document.createElement('div');
    section.className = 'full-page';
    const topBar = document.createElement('div');
    topBar.className = 'fullpage-header';
    topBar.innerHTML = `<h1>${selectedCategory}</h1>`;
    const closeBtn = document.createElement('button');
    closeBtn.textContent = "Close ✕";
    closeBtn.className = "close-btn";
    closeBtn.addEventListener('click', () => render());
    topBar.appendChild(closeBtn);
    section.appendChild(topBar);

    const list = document.createElement('div');
    list.className = 'card-list full-view';
    categories[selectedCategory].forEach(p => {
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
      list.appendChild(card);
    });

    section.appendChild(list);
    grid.appendChild(section);
    return;
  }

  // Normal view: vertically stack multiple category sections
  for (const cat in categories) {
    const section = document.createElement('div');
    section.className = 'category-section';

    // Header: category + view all button
    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `<h2>${cat}</h2>`;
    const btn = document.createElement('button');
    btn.textContent = "View All";
    btn.className = "view-all-btn";
    btn.addEventListener('click', () => render(cat, true));
    header.appendChild(btn);
    section.appendChild(header);

    // Card list: horizontal scroll
    const list = document.createElement('div');
    list.className = 'card-list';
    categories[cat].slice(0, 6).forEach(p => {
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
      list.appendChild(card);
    });

    section.appendChild(list);
    grid.appendChild(section); // each category section stacked vertically
  }
}

// ====== Initial render & Search event ======
render();
search && search.addEventListener("input", render);


// ====== Random highlight (every 10s) ======
document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('randomBox');
  const search = document.getElementById('search');
  let randomInterval = null;
  function showRandomData() {
    if (!box) return;
    const random = PLANTS[Math.floor(Math.random() * PLANTS.length)];
    box.innerHTML = `
      <img src="${random.image}" alt="${random.name}">
      <h3>${random.name}</h3>
    `;
    box.onclick = () => openModal(random);
    box.style.display = 'block'; // make sure it's visible
  }
  function startRandom() {
    if (!box) return;
    if (!randomInterval) {
      showRandomData();
      randomInterval = setInterval(showRandomData, 10000);
    }
  }

  function stopRandom() {
    if (randomInterval) {
      clearInterval(randomInterval);
      randomInterval = null;
    }
    if (box) box.style.display = 'none'; // hide box while stopped
  }

  // Start random highlights on page load
  startRandom();

  // Stop random highlights while typing
  search && search.addEventListener('input', () => {
    const term = search.value.trim();
    if (term) {
      stopRandom(); // stop & hide box
    } else {
      startRandom(); // restart when input cleared
    }
    render(); // update search results
  });
});

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
