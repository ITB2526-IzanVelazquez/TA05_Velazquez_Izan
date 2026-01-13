const filterInput = document.getElementById("filterInput");
const languageFilter = document.getElementById("languageFilter");
const yearFilter = document.getElementById("yearFilter");
const rows = Array.from(document.querySelectorAll(".project-row"));

function normalize(str) {
  return (str || "").toLowerCase().trim();
}

function applyFilters() {
  const text = normalize(filterInput.value);
  const lang = normalize(languageFilter.value);
  const year = yearFilter.value;

  rows.forEach(row => {
    const name = normalize(row.querySelector(".project-name")?.textContent);
    const rowLang = normalize(row.dataset.language || "");
    const rowYear = row.dataset.year || "";

    const okText = !text || name.includes(text);
    const okLang = (lang === "all") || rowLang.includes(lang);
    const okYear = (year === "all") || rowYear === year;

    row.style.display = (okText && okLang && okYear) ? "grid" : "none";
  });
}

filterInput.addEventListener("input", applyFilters);
languageFilter.addEventListener("change", applyFilters);
yearFilter.addEventListener("change", applyFilters);

applyFilters();
