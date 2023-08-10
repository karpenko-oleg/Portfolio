const mainPhoto = new Swiper('.swiper.mainPhoto', {
    loop: false,
    spaceBetween: 30,
    autoplay: {
        delay:3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    // куб
    effect: 'cube',
    
    cubeEffect:{
        slideShadows: true,
        shadow: false,
        shadowOffset: 40,
        shadowScale: 1.84
    }
  });


  const mainProject = new Swiper('.swiper.project__slider', {
    loop:true,
    effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      
      autoplay: {
        delay:1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
  });