


const tlMainTitl = gsap.timeline();
const tlMainPhoto =gsap.timeline();

tlMainTitl
.fromTo('.main__title__suptitle',{opacity: 0, y: 30},{opacity: 1, y: 0, duration:.8})
.fromTo('.main__title__text',{opacity: 0, y: 30},{opacity: 1, y: 0, duration:.5})
.fromTo('.connection__btn',{opacity: 0, y: 30},{opacity: 1, y: 0, duration:.5});

tlMainPhoto
.fromTo('.main__photo',{opacity: 0, y:100},{opacity: 1, duration:1, y:0, delay:1});


// Анимация блоков
gsap.from(".main__about h2", {
    opacity: 0,
    x: -100,
    scrollTrigger: {
    trigger: ".main__about h2",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    }
});
gsap.from(".main__about__title", {
    opacity: 0,
    x: -100,
    scrollTrigger: {
    trigger: ".main__about__title",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    }
});
gsap.from(".main__about__cards", {
    opacity: 0,
    y: 160,
    scrollTrigger: {
    trigger: ".main__about__cards",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    }
});

gsap.from(".main__services h2", {
    opacity: 0,
    x: -100,
    scrollTrigger: {
    trigger: ".main__services h2",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    }
});
gsap.from(".main__services__cards", {
    opacity: 0,
    y: 160,
    scrollTrigger: {
    trigger: ".main__services__cards",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    }
});

gsap.from(".main__project h2", {
    opacity: 0,
    x: -100,
    scrollTrigger: {
    trigger: ".main__project h2",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    }
});
gsap.from(".main__project p", {
    opacity: 0,
    x: -100,
    scrollTrigger: {
    trigger: ".main__project p",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    }
});
gsap.from(".main__project__slider", {
    opacity: 0,
    y: 160,
    scrollTrigger: {
    trigger: ".main__project__slider",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    }
});

gsap.from(".main__contact h2", {
    opacity: 0,
    x: -100,
    scrollTrigger: {
    trigger: ".main__contact h2",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    }
});
gsap.from(".main__contact__send form", {
    opacity: 0,
    x: 400,
    scrollTrigger: {
    trigger: ".main__contact__send form",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    }
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
    smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true,           // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  });