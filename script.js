const btn = document.getElementById("dreamBtn");
const text = document.getElementById("dreamText");

btn.addEventListener("click", () => {
  text.classList.toggle("hidden");
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (!href || href.startsWith("http")) return;

    e.preventDefault();
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = href;
    }, 400);
  });
});

window.addEventListener("load", () => {
  document.body.classList.remove("fade-out");
});
