const the_animation = document.querySelectorAll(".earthtext, .earthtext2, .earthtext3");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("earthtext")) {
                    entry.target.classList.add("earthtext-animate");
                }

                if (entry.target.classList.contains("earthtext2")) {
                    entry.target.classList.add("earthtext2-animate");
                }
                if (entry.target.classList.contains("earthtext3")) {
                    entry.target.classList.add("earthtext3-animate");
                }
            } else {
                entry.target.classList.remove("earthtext-animate");
                entry.target.classList.remove("earthtext2-animate");
                entry.target.classList.remove("earthtext3-animate");
            }
        });
    },
    { threshold: 1, rootMargin: "0px 0px -200px 0px" }
);

for (let i = 0; i < the_animation.length; i++) {
    observer.observe(the_animation[i]);
}
