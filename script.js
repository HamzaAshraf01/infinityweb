// this code is copied form codepen to combine scroll trigger and locomotiv (puted in fuction)
function init(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  init ()
// sheryy part

Shery.mouseFollower();
Shery.makeMagnet(".magnet-icon");
Shery.hoverWithMediaCircle(".hvr" , {videos: ["./c.mp4" , "./e.mp4" , "./a.mp4"] })




//   rest part start

let tl = gsap.timeline();


tl.from("#top-d>.in-img" ,  {
  x: - 1000 ,
  duration: 2 ,
  ease: "power3.inOut",
  stagger: -0.3 ,
  opacity: 0 ,

}, "s")
tl.from("#bottom-d>.in-img" ,  {
  x: - 1000 ,
  duration: 2 ,
  ease: "power3.inOut",
  stagger: -0.3 ,
  opacity: 0 ,

}, "s")

tl.from("#center-d>.in-img" ,  {
  x: 1000 ,
  scale: 0.8 ,
  duration: 2 ,
  ease: "power3.inOut",
  stagger: 0.2 ,

}, "s")

// tl.to("#slider" , {
//   width: "100vw" ,
//   height: "100vh",
//   position: "absolute" ,
//   duration: 2 ,
//   ease: "power3",
// })

tl.to(".wrapper-div" , {
  scale: 3.6 ,
  duration: 2 ,
  ease: "power3.inOut" ,
  delay: 1.8 
  
}, "s")

tl.from(".h-div h1" , {
  y: 300 , 
  duration: 1 ,
  stagger: 0.2 ,
  delay: -1 ,
  ease: "power4"
})

let tl2 = gsap.timeline({scrollTrigger: {
    trigger: "#page-2" ,
    scroller: "#main" ,
    start: "0% 100%" ,
    end: "50% 45%" ,
    scrub: true ,

}})

tl2.from (".round-wrapper" , {
  marginTop: 0 ,
  height: 0 ,
})
tl2.to (".round-wrapper" , {
  marginTop: 0 ,
  height: 0 ,
})

// text reveal animation 


var clutter = "";

document.querySelector("#text-divs>.h1-head-1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#text-divs>.h1-head-1").innerHTML = clutter;
})




tl.to("#text-divs>.h1-head-1>span",{
  scrollTrigger:{
      trigger:`#text-divs>.h1-head-1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})


let clutter2 = "" ;

document.querySelector("#text-divs>.h1-head-2").textContent.split("").forEach(function(dets){
  clutter2 += `<span>${dets}</span>`

  document.querySelector("#text-divs>.h1-head-2").innerHTML = clutter2;
})




tl.to("#text-divs>.h1-head-2>span",{
scrollTrigger:{
    trigger:`#text-divs>.h1-head-2>span`,
    start:`top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5,
},
stagger:.2,
color:`#fff`
})


// pinnign

