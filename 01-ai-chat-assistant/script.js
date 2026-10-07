const input = document.getElementById("userInput");
const messages = document.getElementById("messages");

function setPrompt(text) {
    input.value = text;
    input.focus();
}

function addMessage(text, type) {
    const message = document.createElement("div");
    message.className = "message " + type;
    message.innerHTML = "<strong>" + (type === "ai" ? "AI:" : "You:") + "</strong><p>" + text + "</p>";
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {
    const text = input.value.trim();

    if (text === "") {
        return;
    }

    addMessage(text, "user");
    input.value = "";

    setTimeout(function () {
        addMessage("Here is an AI-style response to your question. I can help you understand the topic, generate ideas, and organize your work.", "ai");
    }, 500);
}

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
