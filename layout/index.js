const headerBox =document.querySelector(".headerBox");
const itemInside1 =document.querySelector(".focuseBox1");
const itemInside2 =document.querySelector(".focuseBox2");
const itemInside3 =document.querySelector(".focuseBox3");
const itemInside4 =document.querySelector(".focuseBox4");
const titleSection2 = document.querySelector(".titleSection2");

gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline();

gsap.from( headerBox,{
    duration:2,
    x:-200,
    scrollTrigger:{
        trigger: headerBox,
    },
})


gsap.from(titleSection2,{
    opacity:0,
    duration:1,
    x:100,
})

gsap.from(itemInside1,{
    x:100,
    duration:2,
    ease:"power4.out",
    scrollTrigger:{
        trigger: itemInside1,
    },
},"-=0.2")
timeline.from(itemInside2,{
    x:100,
    duration:1,
},"-=0.2")
timeline.from(itemInside3,{
    x:100,
    duration:1,
},"-=0.2")
timeline.from(itemInside4,{
    x:100,
    duration:1,
},"-=0.2")