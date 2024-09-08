document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll("section");
    var timelineItems = document.querySelectorAll(".timeline-item");
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            var _a, _b;
            var id = entry.target.id;
            if (entry.isIntersecting) {
                // Find the matching timeline item and add 'active' class
                (_a = document
                    .querySelector(".timeline-item[data-target=\"".concat(id, "\"]"))) === null || _a === void 0 ? void 0 : _a.classList.add("active");
            }
            else {
                // Remove 'active' class when the section is out of view
                (_b = document
                    .querySelector(".timeline-item[data-target=\"".concat(id, "\"]"))) === null || _b === void 0 ? void 0 : _b.classList.remove("active");
            }
        });
    }, {
        threshold: 0.6, // Trigger when 60% of the section is in view
    });
    sections.forEach(function (section) { return observer.observe(section); });
});
