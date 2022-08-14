const list = document.getElementById("list")

const menu = document.getElementById("menu")

const header = document.getElementById("header")
const close = document.getElementById("close")

list.addEventListener("click",function(){
    console.log("hi ");
    menu.style.display = "block"
    menu.style.textAlign = "center"
    header.style.backgroundColor = "rgb(224, 245, 224)"
    menu.style.backgroundColor="rgb(224, 245, 224)"
    header.style.position = "fixed"
    header.style.width = "100%"
    close.style.display = "block"
})

close.addEventListener("click",function(){
    menu.style.display = "none"
    header.style.position = "static"
    close.style.display = "none"
    header.style.backgroundColor = "rgb(255, 255, 255)"


})