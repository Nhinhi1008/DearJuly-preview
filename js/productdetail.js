

function toggleDetails(element) {
    const content = element.nextElementSibling;
    const sign = element.querySelector('.sign');

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        sign.textContent = "-";
    } else {
        content.style.display = "none";
        sign.textContent = "+";
    }
}
