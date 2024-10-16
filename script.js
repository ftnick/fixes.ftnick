const fixes = [
    {
        title: "Fix steam 'Reserving Space' long ass download speed",
        description: "A really simple fix that turns a 100gb space reservation by steam from 10 hours to 10 seconds.",
        link: "steamrs1.html"
    }
];

function loadFixes() {
    const container = document.getElementById("fixes-preview");
    fixes.forEach(fix => {
        const fixDiv = document.createElement("div");
        fixDiv.className = "fix";
        
        const title = document.createElement("h3");
        title.textContent = fix.title;

        const description = document.createElement("p");
        description.textContent = fix.description;

        const link = document.createElement("a");
        link.href = fix.link;
        link.textContent = "Read more";
        link.className = "read-more";

        fixDiv.appendChild(title);
        fixDiv.appendChild(description);
        fixDiv.appendChild(link);
        container.appendChild(fixDiv);
    });
}

document.addEventListener("DOMContentLoaded", loadFixes);
