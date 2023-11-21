const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("scroll-show");
    } else {
      entry.target.classList.remove("scroll-show");
    }
  });
});

document.querySelectorAll("p").forEach((p) => {
  p.classList.add("scroll-hide");
});

document.querySelectorAll("pre").forEach((p) => {
  p.classList.add("scroll-hide");
});

// document.querySelectorAll("p").forEach((p) => {
//   observer.observe(p);
// });

document.querySelectorAll(".scroll-hide").forEach((p) => {
  observer.observe(p);
});
