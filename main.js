var canvas = document.getElementById("ctx");

var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth

canvas.height = window.innerHeight


var keys = [];


var pressingA = false;

var pressingW = false;

var pressingS = false;

var pressingD = false;





document.onkeydown = function(e){
    keys[e.keyCode] = true;
}



document.onkeyup = function(e){
  keys[e.keyCode] = false;
}





function movement(){

    if(keys[87]){

        p1.y -= p1.speed;

         }

    if(keys[83]){

        p1.y += p1.speed;

    }

    if(keys[68]){

        p1.x += p1.speed;

    }

    if(keys[65]){

        p1.x -= p1.speed

    }

}

function movement2(){

    if(keys[38]){

        p2.y -= p2.speed;

         }

    if(keys[40]){

        p2.y += p2.speed;

    }

    if(keys[39]){

        p2.x += p2.speed;

    }

    if(keys[37]){

        p2.x -= p2.speed

    }

}



function eatApplep2() {

  Apple.x = Math.random()*(canvas.width - 10);

  Apple.y = Math.random()*(canvas.height -  10);

  p2.w += 2

  p2.h += 2

  p2.score += 50;

  p2.speed *= .90
}

function eatApple(){

  Apple.x = Math.random()*(canvas.width - 10);

  Apple.y = Math.random()*(canvas.height - 10);

  p1.w += 2

  p1.h += 2

  p1.score += 50;

  p1.speed *= .90
}



function testCollisionRectRect(rect1,rect2){



    if (rect1.x < rect2.x + rect2.w &&

    rect1.x + rect1.w > rect2.x &&

    rect1.y < rect2.y + rect2.h &&

    rect1.h + rect1.y > rect2.y) {

        return true;

    }



    return false

}

var p1 = {

    x:canvas.width/2,

    y:canvas.height/2,

    w:10,

    h:10,

    speed:3,

    score:0,



}



var Apple = {

    x:Math.random()*(canvas.width - 10),

    y:Math.random()*(canvas.height - 10),

    w:10,

    h:10,



}

var p2 = {

     x:canvas.width/3,

     y:canvas.height/3,

     w:10,

     h:10,

     speed:3,

     score:0,

}

function Engine(){

    requestAnimationFrame(Engine)

    movement();

    movement2();

    if(testCollisionRectRect(p1,Apple)){

     eatApple();
   }

    if(testCollisionRectRect(p2,Apple)){

    eatApplep2();

  }






    ctx.fillStyle = "white"

    ctx.fillRect(0,0,canvas.width, canvas.height);

    ctx.fillStyle = "green";

    ctx.fillRect(p1.x, p1.y, p1.w, p1.h)

    ctx.fillStyle = "red";

    ctx.fillRect(Apple.x, Apple.y, Apple.w, Apple.h)

    ctx.fillStyle = "purple"

    ctx.fillRect(p2.x, p2.y, p2.w, p2.h)

    ctx.fillStyle = "black"

    ctx.font = "30px Arial"

    ctx.fillText("Score1: " +  p1.score, canvas.width - 200,canvas.height - 50 )

    ctx.fillText("Score2: " +  p2.score, canvas.width - 200,canvas.height - 100 )

}



Engine()
