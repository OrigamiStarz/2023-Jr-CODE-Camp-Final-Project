const bgBtn = document.getElementsByTagName("button")[1];

function r() {
    return Math.floor(Math.random() * 255);
}

bgBtn.addEventListener("click", function() {
    document.body.style.background = `rgb(${r()},${r()},${r()})`;
});