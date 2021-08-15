gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(document.querySelector('#key-visual-section .left-title'), {
  x: 0,
  y: 0,
}, {
  x: '+=20vw',
  y: '-=30vh',
  scrollTrigger: {
   start: 'top top',
   end: 'bottom bottom',
   scrub: true,
  },
});

gsap.fromTo(document.querySelector('#key-visual-section .right-title'), {
  x: 0,
  y: 0,
}, {
  x: '-=20vw',
  y: '-=30vh',
  scrollTrigger: {
   start: 'top top',
   end: 'bottom bottom',
   scrub: true,
  },
});

gsap.fromTo(Array.from(document.querySelectorAll('#key-visual-section .title-1 , #key-visual-section .title-2')), {
  transform: 'translateY(0)',
}, {
  transform: (index) => index ? 'translateY(-4vh)' : 'translateY(-9vh)',
  scrollTrigger: {
    start: 'top top',
    end: '+=100vh',
    scrub: true,
  },
});


const splitTextElements = document.querySelectorAll('#key-visual-section .split-version > span');

 gsap.to(Array.from(splitTextElements), {
   y: (index) => {
     switch (index) {
       case 0:
         return '-=15vh';
       case 1:
         return '-=30vh';  
       case 2:
         return '-=5vh';
       case 3:
         return '-=23vh';    
     }
   },
   scrollTrigger: {
     start: 'top top',
     end: 'bottom bottom',
     scrub: true,
   },
 });

gsap.fromTo(document.querySelector('#key-visual-section .divider'), {
  scaleX: 0,
}, {
  scaleX: 1,
  scrollTrigger: {
    trigger: '#key-visual-section .divider',
    toggleActions: 'restart pause reverse pause',
    start: '20px 85%',
    end: 'bottom bottom',
    scrub: 1,
  },
});