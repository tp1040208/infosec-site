const text = "INFOSEC DISCUSSION GROUP";
const speed = 100; // 打字速度 (ms)

let index = 0;
const target = document.getElementById("typing");

function typeWriter() {
    if (index < text.length) {
        target.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.addEventListener("load", typeWriter);
