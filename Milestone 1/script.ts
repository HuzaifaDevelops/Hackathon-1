document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const timelineItems = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const id = entry.target.id;
                if (entry.isIntersecting) {
                    // Find the matching timeline item and add 'active' class
                    document
                        .querySelector(`.timeline-item[data-target="${id}"]`)
                        ?.classList.add("active");
                } else {
                    // Remove 'active' class when the section is out of view
                    document
                        .querySelector(`.timeline-item[data-target="${id}"]`)
                        ?.classList.remove("active");
                }
            });
        },
        {
            threshold: 0.6, // Trigger when 60% of the section is in view
        }
    );

    sections.forEach((section) => observer.observe(section));
});
