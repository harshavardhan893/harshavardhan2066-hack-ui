const promptInput = document.getElementById("prompt");
const toneInput = document.getElementById("tone");
const output = document.getElementById("output");
const stats = document.getElementById("stats");

function generateContent() {
    const prompt = promptInput.value.trim();
    const tone = toneInput.value;

    if (prompt === "") {
        alert("Please enter a prompt.");
        return;
    }

    const content =
        "AI Generated Content\n\n" +
        "Topic: " + prompt + "\n" +
        "Tone: " + tone + "\n\n" +
        "Artificial intelligence is transforming the way people learn, work, and create. " +
        "By combining human ideas with intelligent tools, we can turn simple concepts into useful and engaging content. " +
        "Use this starting point, refine the details, and make the final result your own.";

    output.textContent = content;

    const words = content.trim().split(/\s+/).length;
    stats.textContent = words + " words";
}

function copyContent() {
    navigator.clipboard.writeText(output.textContent);
    alert("Content copied!");
}
