const searchInput = document.getElementById("searchInput");
const projectList = document.getElementById("projectList");

if (searchInput && projectList) {
  const items = Array.from(projectList.querySelectorAll(".project-item"));

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();

    items.forEach(a => {
      const txt = a.textContent.trim().toLowerCase();
      a.style.display = txt.includes(q) ? "block" : "none";
    });
  });
}
