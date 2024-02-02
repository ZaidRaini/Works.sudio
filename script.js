function loading(){

    var loaderElement = document.querySelector(".loader");

    if (!loaderElement) {
        console.error("Loader element not found.");
        return;
    }


    var time = gsap.timeline()

    time.to(".yellow1", {
        top:"-100%",
        delay:0.8,
        duration:0.5,
        ease:'expo.out'
    },"first");
    time.from(".yellow2",{
        top:"100%",
        delay:0.6,
        duration:0.4,
        ease:'expo.out'
    
    },"anim");
    time.to(".loader h1", {
        delay:0.6,
        duration:0.7,
        color:"black"
    },"anim");
    time.to(".loader",{
        opacity:0,
    });
    time.to(".loader",{
        display:"none",
    });
}

loading()


function loco (){

    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    document.querySelector("footer h3").addEventListener("click",() =>{
        scroll.scrollTo(0)
    })
    
    
    var element = document.querySelectorAll('.ele');
    var page2 = document.querySelector(".page2");
    
    
    
    element.forEach(function(e){
        e.addEventListener('mouseenter', function(){
           var bgimg =  e.getAttribute('data-img');
        page2.style.backgroundImage = `url(${bgimg})`
        console.log(bgimg);
        console.log(page2);
        })
    
    })

}

loco()


function navBar(){
    const main = document.querySelector('.bar');
    const main2 = document.querySelector('.toggle');
    let menuOpen = false;

    main.addEventListener('click',()=>{
        if(!menuOpen){
            main.classList.add('open');
            main2.classList.add('open1');
            menuOpen = true;

        }else {
            main.classList.remove('open')
            menuOpen = false;

        }
    })
}

navBar()



document.querySelector('.toggle').addEventListener('click', toggleNav);

function toggleNav(){
    const nav2 = document.querySelector('.sub-navbar');
    const nav1 = document.querySelector('.sub-navbar1');

    const computedStyle = window.getComputedStyle(nav2);
    const currentOpacity = computedStyle.getPropertyValue('opacity');



if (currentOpacity === '0') {
    gsap.to(nav2, {
        x: 0,
        duration: 1,
        opacity: 1
    });

    gsap.to(nav1, {
        x: 0,
        duration: 1
    });
} else {
    gsap.to(nav2, {
        x: 200,
        duration: 1,
        opacity: 0
    });

    gsap.to(nav1, {
        x: 240,
        duration: 1
    });


}
}
