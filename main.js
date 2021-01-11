var minutes=document.querySelector("#inpMinutes");
var secounds=document.querySelector("#inpSecounds");
var start= document.querySelector("#btnStartCounter");
var stoop = document.querySelector("#btnStopCounter");
var divS = document.querySelector("#divS");
var divM = document.querySelector("#divM");
var divCat = document.querySelector("#cat");
var roler = document.querySelector(".roler");
var intervalId  ;
start.addEventListener("click",function(){
var x = secounds.value;
var y = minutes.value;
divM.innerText = y;
 intervalId = setInterval( function(){
    if(x>0){
        x=x-1
        divS.innerText = x
    }
   else{
    if(y>0){
       y=y-1;
       divM.innerText = y;
       x = 59;
   }else{

roler.style.display="block";
async function cat() {
    var res = await fetch ("https://aws.random.cat/meow");
    var json = await res.json();

    var img = document.querySelector("img");
    img.src = json.file;

}
cat();
roler.style.display="none";
clearInterval(intervalId);

   }}
},1000)


})

stoop.addEventListener("click", function () {
    clearInterval(intervalId);
})


  