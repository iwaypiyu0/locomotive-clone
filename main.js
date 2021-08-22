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
         return '-=26vh';
       case 1:
         return '-=42vh';  
       case 2:
         return '-=18vh';
       case 3:
         return '-=20vh'; 
       case 4:
          return '-=25vh';  
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

gsap.fromTo(document.querySelector('#outline-section .listline1'), {
  scaleX: 0,
}, {
  scaleX: 1,
  scrollTrigger: {
    trigger: '#outline-section .listline1',
    toggleActions: 'restart pause reverse pause',
    start: '20px 85%',
    end: 'bottom bottom',
    scrub: 1.2,
  },
});

gsap.fromTo(document.querySelector('#outline-section .listline2'), {
  scaleX: 0,
}, {
  scaleX: 1,
  scrollTrigger: {
    trigger: '#outline-section .listline2',
    toggleActions: 'restart pause reverse pause',
    start: '20px 85%',
    end: 'bottom bottom',
    scrub: 1.2,
  },
});

gsap.fromTo(document.querySelector('#outline-section .listline3'), {
  scaleX: 0,
}, {
  scaleX: 1,
  scrollTrigger: {
    trigger: '#outline-section .listline3',
    toggleActions: 'restart pause reverse pause',
    start: '20px 85%',
    end: 'bottom bottom',
    scrub: 1.2,
  },
});

gsap.fromTo(document.querySelector('#outline-section .listline4'), {
  scaleX: 0,
}, {
  scaleX: 1,
  scrollTrigger: {
    trigger: '#outline-section .listline4',
    toggleActions: 'restart pause reverse pause',
    start: '20px 85%',
    end: 'bottom bottom',
    scrub: 1.2,
  },
});

window.addEventListener('scroll', () =>{
  const ListEntry =document.querySelector('#outline-section .list1');
  const ListEntry2 =document.querySelector('#outline-section .list2');
  const ListEntry3 =document.querySelector('#outline-section .list3');
  const ListEntry4 =document.querySelector('#outline-section .list4');

  if (window.scrollY >= 200) {
    ListEntry.classList.add('list-entry');
    ListEntry2.classList.add('list-entry');
    ListEntry3.classList.add('list-entry');
    ListEntry4.classList.add('list-entry');
  }
  else {
    console.log('original')
  }
}, false);