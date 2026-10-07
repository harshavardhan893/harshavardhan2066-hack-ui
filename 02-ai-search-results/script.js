const searchInput = document.getElementById("searchInput");
const answerTitle = document.getElementById("answerTitle");
const answerText = document.getElementById("answerText");

function search() {
    const query = searchInput.value.trim();

    if (query === "") {
        return;
    }

    answerTitle.textContent = query;

    answerText.textContent =
        "AI summary: " +
        query +
        " can be explored by understanding its main concepts, practical examples, benefits, and real-world applications. This demo shows how a natural-language AI search interface can organize an answer.";
}

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        search();
    }
});
