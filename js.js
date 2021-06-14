'use strict'
document.addEventListener("DOMContentLoaded", ()=>{
    const upBtn=document.querySelector(".up-button"),
    downBtn=document.querySelector(".down-button"),
    sidebar=document.querySelector('.sidebar'),
    mainSlider=document.querySelector(".main-slide"),
    slides=mainSlider.querySelectorAll("div")
    sidebar.style.top=`-${(slides.length-1)*100}%`
    
    let activeSlide=0

    upBtn.addEventListener("click", ()=>{
        changeSlide("up")
    })
    downBtn.addEventListener("click", ()=>{
        changeSlide("down")
    })
    document.addEventListener('keydown', (event)=>{
        if (event.code === 'ArrowDown') {
            changeSlide("down")
        }else if(event.code === 'ArrowUp'){
            changeSlide("up")
        }
      })
    function changeSlide(direction){
        if(direction==="up"){
            activeSlide++
            if(activeSlide===slides.length){
                activeSlide=0
            }
        }else if(direction==="down"){
            activeSlide--
            if(activeSlide<0){
                activeSlide=slides.length-1
            }
        }
        mainSlider.style.transform=`translateY(-${(activeSlide)*100}%)`
        sidebar.style.transform=`translateY(${(activeSlide)*100}%)`
    }

})