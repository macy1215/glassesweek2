import './assets/scss/all.scss';

console.log("Hello world!");
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
    x:-200,
    scrollTrigger:{
        trigger: headerBox,
    },
})


gsap.from(titleSection2,{
    opacity:0,
    duration:1,
    x:100,
    scrollTrigger:{
        trigger: titleSection2,
        
    },
})

gsap.from(itemInside1,{
    x:100,
    duration:2,
    ease:"power4.out",
    scrollTrigger:{
        trigger: titleSection2,
    },
})
gsap.from(itemInside2,{
    x:100,
    duration:1,
    ease:"power4.out",
    scrollTrigger:{
        trigger: itemInside1,
    },
})
gsap.from(itemInside3,{
    x:100,
    duration:1,
    ease:"power4.out",
    scrollTrigger:{
        trigger: itemInside2,
    },
})
gsap.from(itemInside4,{
    x:100,
    duration:1,
    ease:"power4.out",
    scrollTrigger:{
        trigger: itemInside3,
    },
})

gsap.from(classicTitle,{
    opacity:0,
    duration:1,
    x:-100,
    scrollTrigger:{
        trigger: classicTitle,
    },
})

gsap.from(classicBox,{
    opacity:0,
    duration:1,
    y:300,
    scrollTrigger:{
        trigger: classicSection,
    },
})

gsap.from(bannerTitle,{
    opacity:0,
    duration:1,
    x:100,
    scrollTrigger:{
        trigger: bannerSection,
    },
    
})