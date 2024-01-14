var clutter="";
function bubble(){
    for(var i=0;i<210;i++)
{
    var new_num=Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${new_num}</div>`;
}

document.querySelector(".pbottom").innerHTML=clutter

}
bubble();
 

function timer(){
    var a=document.querySelector("#box3")

    setInterval(function(){ 
        var currentContent = parseInt(a.innerHTML)
        if(currentContent <60)
        {
            a.innerHTML++;
        }
        else
        {
            document.querySelector(".pbottom").innerHTML="game over"
        }
       
    }
     
    ,1000)

}
timer();

 var c=0;
function hit()
{
    c= Math.floor(Math.random() * 10);
    document.querySelector("#box2").textContent=c;
}

hit();

var score=0;
function score_inc()
{
 score+=10;
 document.querySelector("#box1").textContent=score;
}


 // hum kab badhana chahte hei  score lo jab hum correct hit pe click kare
//iskeliye event listner lagayenge
//  function correct_hit()
//  {
//     var d=hit();
//   if(d==num_clicked)
//   {
//     score_inc;
//     hit;
//   }
 

//  }

document.querySelector(".pbottom")
.addEventListener("click",function(a)
{
if(a.target.textContent==c)
{
    score_inc();
    hit();
    bubble();
}
})