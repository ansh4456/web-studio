
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1-text h1",
        scrub :5,
        scroller : "body",
        start:"top 30%",
        end:"top 0%",
    }},"anim"
)

tl.to("#page1-video video",{
    scale:1.6,
    scrollTrigger:{
        trigger:"#page1-video",
        scrub :1,
        scroller : "body",
        start:"top 70%",
        end:"top 0%",
    }
})


tl.to("#page1-text h1",{
    x:-300,
 
},"anim")

tl.to("#page1-text h2",{
    x:300,
 
},"anim")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scrub :1,
        scroller : "body",
        start:"top 60%",
        end:"top 20%",
    }},
)



tl2.to("#page2",{
    backgroundColor:"#fff",
    color:"#0F0D0D"
},"scroll")
tl2.to("#page3",{
    backgroundColor:"#fff",
    color:"#0F0D0D"
},"scroll")
tl2.to("#page1-video",{
    backgroundColor:"#fff",
    color:"#0F0D0D"
},"scroll")

tl2.to("#header",{
    color:"#0F0D0D"
},"scroll")



var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3-img",
        scrub :2,
        scroller : "body",
        start:"top 30%",
        end:"top 0%",
    }},
)

tl3.to("#pg1",{
    x:150
},"img")

tl3.to("#pg2",{
    x:-150
},"img")

var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
        scrub :1,
        scroller : "body",
        start:"top 40%",
        end:"top 0%",
    }},
)

tl4.to("#page3",{
    backgroundColor:"#0F0D0D",
    delay:0.5
},"page")


tl4.to("#page4",{
    backgroundColor:"#0F0D0D",
    borderTop:"1px solid white"
},"page")

tl4.to("#page3",{
    backgroundColor:"#0F0D0D",
    color:"#fff"
},"page")

tl4.to("#header",{
    color:"#fff"
},"page")




var move = document.getElementById("det")

window.addEventListener("mousemove",function(dets){
    move.style.left  = dets.clientX + 20+ "px"
    move.style.top = dets.clientY + 20+"px"
})

var elem= document.querySelectorAll(".p52")
elem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att =elem.getAttribute("data-image")
        move.style.width="20vw"
        move.style.display="block"
          move.style.height="20vw"
          move.style.transition="all 0.5s"
          move.style.borderRadius="1vw"
          move.style.backgroundImage=`url(${att})`
    })

    elem.addEventListener("mouseleave",function(){
          move.style.width="20px"
          move.style.display="none"

          move.style.height="20px"
          move.style.transition="all 0.5s"
          move.style.borderRadius="50%"
    })
})