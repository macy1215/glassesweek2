const headerBox =document.querySelector(".headerBox");

const proFessional = document.querySelector(".professional");
const itemInside1 =document.querySelector(".focuseBox1");
const itemInside2 =document.querySelector(".focuseBox2");
const itemInside3 =document.querySelector(".focuseBox3");
const itemInside4 =document.querySelector(".focuseBox4");

const classicTitle =document.querySelector(".classicTitle");
const classicSection =document.querySelector(".classic");
const classicBox=document.querySelector(".classicBox");

const bannerTitle=document.querySelector(".bannerTitle2")
const bannerSection=document.querySelector(".banner")


const titleSection2 = document.querySelector(".titleSection2");

gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline();

gsap.from( headerBox,{
    duration:2,
    x:0,
    scrollTrigger:{
        trigger: headerBox,
    },
})


gsap.from(titleSection2,{
    opacity:1,
    duration:1,
    x:0,
    scrollTrigger:{
        trigger: titleSection2,
        
    },
})

gsap.from(itemInside1,{
    x:0,
    duration:2,
    ease:"power4.out",
    scrollTrigger:{
        trigger: titleSection2,
    },
})
gsap.from(itemInside2,{
    x:0,
    duration:1,
    ease:"power4.out",
    scrollTrigger:{
        trigger: itemInside1,
    },
})
gsap.from(itemInside3,{
    x:0,
    duration:1,
    ease:"power4.out",
    scrollTrigger:{
        trigger: itemInside2,
    },
})
gsap.from(itemInside4,{
    x:0,
    duration:1,
    ease:"power4.out",
    scrollTrigger:{
        trigger: itemInside3,
    },
})

gsap.from(classicTitle,{
    opacity:1,
    duration:1,
    x:0,
    scrollTrigger:{
        trigger: classicTitle,
    },
})

gsap.from(classicBox,{
    opacity:1,
    duration:1,
    y:0,
    scrollTrigger:{
        trigger: classicSection,
    },
})

gsap.from(bannerTitle,{
    opacity:1,
    duration:1,
    x:0,
    scrollTrigger:{
        trigger: bannerSection,
    },
    
})