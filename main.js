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

