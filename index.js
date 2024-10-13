
betty=document.getElementById ("betty")
betty.addEventListener("click",tip)
function tip(){
    x=prompt("What do you think dear user?")
    y=prompt("AM I making you uncomfortable?")
    if (x&&y){
        alert(x+y)
    } else{
        alert("HOW DARE YOU IGNORE ME YOU DESPICABLE BEING")
    }
}