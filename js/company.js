let accords = document.querySelectorAll(".accord");
accords.forEach(a => {
    a.addEventListener("click", () => {
        accords.forEach(el => el.classList.remove("active"));
        a.classList.add("active");
    });
});