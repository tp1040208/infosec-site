const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// 設定畫布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Matrix 字元
const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);

// 每一欄的掉落位置
const drops = Array(columns).fill(1);

function drawMatrix() {
    // 半透明黑色覆蓋，產生殘影效果
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff66";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// 每 50ms 重畫一次
setInterval(drawMatrix, 50);

// 視窗縮放時重設大小
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
