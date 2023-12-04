function show(){
    if (document.querySelector("#poem").getBoundingClientRect().top<500) {
        document.querySelector("figure:first-child").style.transform="translateX(0px)"
        document.querySelector("figure:last-child").style.transform="translateX(0px)"
    }
    if (document.querySelector("#signs").getBoundingClientRect().top<300){
        document.querySelector("#signs").classList.add("signsanim")
    }
}