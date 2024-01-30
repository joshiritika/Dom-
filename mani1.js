let istatus = document.querySelector("h5")
let addfriend = document.querySelector("#clickbtn")


let n=0;
addfriend.addEventListener("click", function(){
    if(n==0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        console.log("hiii");
        n=2;
    }else{
        istatus.innerHTML  = "Stranger"
        istatus.style.color = "rgb(0, 123, 255)"
        console.log("bye");
        n=0;
    }
})

let t = document.querySelector("#container")
let likes = document.querySelector("i")
let hclick = document.querySelector("#heart")

let v=0;
hclick.addEventListener("click",function(){
    if(v==0){
        hclick.style.color = "red";
        likes.style.transform = "translate(-50%,-50%) scale(1)";
        likes.style.opacity = "0.7";
        setTimeout(function(){
            likes.style.opacity = "0";
        },1000)
        setTimeout(function(){
            likes.style.transform = "translate(-50%,-50%) scale(0)";
        },2000)
        v=2;
    }else{
        hclick.style.color = "white";
        v=0;
    }
    
    
    
})
