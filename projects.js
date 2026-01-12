const filterInput = document.getElementById("filterInput");
const languageFilter = document.getElementById("languageFilter");
const yearFilter = document.getElementById("yearFilter");
const rows = Array.from(document.querySelectorAll(".project-row"));

function norm(s){ return (s || "").toLowerCase().trim(); }

function applyFilters(){
  const txt = norm(filterInput.value);
  const lang = languageFilter.value;
  const year = yearFilter.value;

  rows.forEach(row=>{
    const name = norm(row.querySelector(".project-name")?.textContent);
    const rowLang = norm(row.dataset.language);
    const rowYear = row.dataset.year;

    const okText = !txt || name.includes(txt);
    const okLang = (lang === "all") || rowLang.includes(norm(lang));
    const okYear = (year === "all") || rowYear === year;

    row.style.display = (okText && okLang && okYear) ? "grid" : "none";
  });
}

filterInput.addEventListener("input", applyFilters);
languageFilter.addEventListener("change", applyFilters);
yearFilter.addEventListener("change", applyFilters);
applyFilters();
