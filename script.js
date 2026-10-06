const year = document.getElementById("year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const revealItems = document.querySelectorAll(
  ".statement-inner, .section-intro, .expertise-item, .section-heading, .work-feature, .work-side-card, .project-item, .experience-heading, .experience-row, .toolkit-group, .credential-block, .contact-heading, .contact-card"
);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("has-motion");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -48px 0px", threshold: 0.12 }
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal");
    revealObserver.observe(item);
  });
}
