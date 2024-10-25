document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    title.innerHTML = title.textContent
        .split("")
        .map((letter, idx) => `<span class="letter" style="animation-delay:${idx * 0.2}s">${letter}</span>`)
        .join("");
});
