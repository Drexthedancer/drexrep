/*alert("welcome to your bank!");
var deposit= prompt("how much do you want to deposit today: ");
alert("you have deposited: "+deposit);
console.log("cool");
*/
/*
alert("welcome to scale: ");

var weight=prompt("enter the weight in pounds: ");
var sum =weight*0.454;
alert("your weight in kilogram is: "+sum);
console.log("conversion complete")
*/

/*
var x=0;

while (x<5){
  console.log("x is currently: "+x);

  if(x==3){

    console.log("x is equal to 3");
    break;
  }


  console.log("x is still less than 5, adding 1 to x");  

  x=x+1;
}
*/

/*
var x = 0;

while(x<=10){
    if(x%2 ==0){
        console.log(x);
        
    }
    x++ 
}
*/

/*
var word="abadafagaiak";

for (var i=0; i<word.length; i=i+2){
    console.log(word[i]);
}
*/

/*
var nu=0;

while(nu<5){
    console.log("hello");
    nu++;
    
}

for( var num=0; num<5; num++ ){
    console.log("hello");
    
}


var x=1;

while(x<=25){
    if(x%2==1){
        console.log(x);
    }
    x++;
}


for( var xy=1; xy<=25; xy++ ){
    if(xy%2==1){
        console.log(xy);
    }
}
*/

/*
var fname=  prompt("what is your first name: ");
var lname=  prompt("what is your last name: ");
var age=    prompt("what is your age: ");
var hei=    prompt("what is your height in cm: ");
var pname=  prompt("what is your pet name: ");

var hcon;
var pcon;
var ncon;
var agcon;

if(fname[0]==lname[0]){
   ncon= true; 
}

if(age>=20 && age<=30){
    agcon= true;
}

if(hei>=170){
    hcon= true;
}

if(pname[pname.length-1]=="y"){
    pcon= true;
}


if( ncon && agcon && hcon && pcon ){
    console.log("welcome spy");
}else{
    console.log("nothing to see here");
}

alert("thanks for the information");
*/




/*
function addnum(n1,n2){
    console.log(n1+n2);
}

function  hellosome(name="drex") {
    console.log("hello "+name );
}  

function formal(name="sam", title='sir'){
    return title+" "+name
}


function timesf(inp){
    var r=inp*5
    return r
}
*/

/*
var v="global v"
var stuff= "global stuff"

function fun(stuff){
    console.log(v)
    stuff="reassign stuff inside function"
    console.log(stuff);
}

fun()
console.log(stuff)
*/

/*
function sleepin(weekday,vacation){
 
    return (!weekday || vacation)
}

function monkeytrouble(asmile,bsmile){
    return (asmile && bsmile) || (!asmile && !bsmile)
}


function stringtimes(str, n){
    var strn= ""
    var i=0;
    while(i<n){
       strn += str
       i++
    }
    return strn
    
}


function luckySum(a,b,c){
    if(a==13){
        return 0
    }
    if(b==13){
        return a
    }
    if(c==13){
        return a+b
    }
    return a+b+c
}


 function caughtspeeding(speed,birthday){

     if(speed<=65 && birthday==true){
         return 0;
     }else if(speed>=66 && speed<=85 && birthday==true){
         return 1
     }
     else if(speed>=86 && birthday==true){
         return 2
     }
    
     if(speed<=60 ){
         return 0
     }else if(speed>=61 && speed<=80){
         return 1
     }else if(speed>=81){
         return 2
     }

 }

    function catchspee(speed,birthday){
       if(birthday==true){
        speed-=5
       }

       if(speed<=60){
        return 0
       }

       if(speed>=61 && speed <=80){
        return 1
       }

      if(speed>80){
        return 2
      }

    }

    





function makeBricks(small,big,goal){
    return goal%5>=0 && goal%5 -small<=0 && small + 5*big>=goal;
}

function mbricks(s,b,g){
    if(g>b*5 + s) return false

    if(g%5>s) return false

    return true
}
*/


/*
var roster=[]

function addname(){
    var nname=prompt("what name would you like to add?")
    roster.push(nname)
}

function remove(){
    var rname=prompt("type the name you would like to remove")
    var index= roster.indexOf(rname)
    roster.splice(index,1)
}

function display(){
    alert("check the console for the names you inputed")
   console.log(roster)
}

function quit(){
    answer="no"
}


var fq=prompt("would you like to start the roster web app? type in yes or no")
var answer

if(fq==="yes"){
    while(answer!=="no"){
      answer=prompt("please input an action: add, remove, display, or quit.")
         if(answer==="add"){
            addname()
         }else if(answer==="remove"){
            remove()
         }else if(answer==="display"){
            display()
         }else if(answer==="quit"){
            quit()
         }else{
            alert("input invalid!!")
            
         }
    }  
    }

    alert("hope our app was useful click refresh for re-use")
*/


/*
const animal=prompt("please enter an animal name:")



switch (animal){
    case "cat":
        console.log("i like cats")
        break
    case "dog":
        console.log("dogs are alright")
        break
    case "shark":
        console.log("sharks are scary")
        break    
     default:
        console.log("not available")   
            
}
*/
/*
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    meth: function(){
        console.log("the name length of the employee is "+this.name.length)
    }
  }

  employee.meth()


  var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    metho: function(){
        alert("my name is "+this.name+" i am a "+this.job+" i am "+this.age+" years old")
    }
   
  }

  employee.metho()



  var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lastname: function(){
      console.log("his last name is: "+this.name.split(" ")[1])
    }
  }

  employee.lastname()
*/

/*
var header = document.querySelector("h1")


function randcol(){
    var let="0123456789ABCDEF"
    var color="#"

    for(i=0; i<6; i++){
        color+=let[Math.floor(Math.random()*16)]
    }
    return color
}

function changecolheader(){
    colinput=randcol()
    header.style.color=colinput
}

setInterval("changecolheader()",1000)
*/

/*
var hdone= document.querySelector("#one")
var hdtwo= document.querySelector("#two")
var hdthree= document.querySelector("#three")



hdone.addEventListener("mouseover",function(){
    hdone.textContent="mouse is currently over"
    hdone.style.color="red"
})

hdone.addEventListener("mouseout",function(){
    hdone.textContent="hover over me"
    hdone.style.color="black "
})

hdtwo.addEventListener("click",function(){
    hdtwo.textContent="clicked on"
    hdtwo.style.color="blue"
})

hdthree.addEventListener("dblclick",function(){
    hdthree.textContent="double clicked!"
    hdthree.style.color="red"
})
*/








//project



/*

var b1 =document.querySelector("#q")
var b2 =document.querySelector("#w")
var b3 =document.querySelector("#e")
var b4 =document.querySelector("#r")
var b5 =document.querySelector("#t")
var b6 =document.querySelector("#y")
var b7 =document.querySelector("#u")
var b8 =document.querySelector("#i")
var b9 =document.querySelector("#o")

var b10=document.querySelector("#btn")


b10.onclick=function(){
    b1.innerHTML=""
    b2.innerHTML=""
    b3.innerHTML=""
    b4.innerHTML=""
    b5.innerHTML=""
    b6.innerHTML=""
    b7.innerHTML=""
    b8.innerHTML=""
    b9.innerHTML=""
    
};


b1.addEventListener("click", function (evt) {
    b1.style.textAlign="center"
    if(evt.detail===1){
        b1.innerHTML="<h1> X </h1>"
      
    }else if(evt.detail===2){
        b1.innerHTML="<h1> O </h1>"
     
    }else if (evt.detail === 3) {
        b1.textContent=""
    }
});


b2.addEventListener("click", function (evt) {
    b2.style.textAlign="center"
    if(evt.detail===1){
        b2.innerHTML="<h1> X </h1>"
      
    }else if(evt.detail===2){
        b2.innerHTML="<h1> O </h1>"
     
    }else if (evt.detail === 3) {
        b2.textContent=""
    }
});


b3.addEventListener("click", function (evt) {
    b3.style.textAlign="center"
    if(evt.detail===1){
        b3.innerHTML="<h1> X </h1>"
      
    }else if(evt.detail===2){
        b3.innerHTML="<h1> O </h1>"
     
    }else if (evt.detail === 3) {
        b3.textContent=""
    }
});


b4.addEventListener("click", function (evt) {
    b4.style.textAlign="center"
    if(evt.detail===1){
        b4.innerHTML="<h1> X </h1>"
      
    }else if(evt.detail===2){
        b4.innerHTML="<h1> O </h1>"
     
    }else if (evt.detail === 3) {
        b4.textContent=""
    }
});


b5.addEventListener("click", function (evt) {
    b5.style.textAlign="center"
    if(evt.detail===1){
        b5.innerHTML="<h1> X </h1>"
      
    }else if(evt.detail===2){
        b5.innerHTML="<h1> O </h1>"
     
    }else if (evt.detail === 3) {
        b5.textContent=""
    }
});


b6.addEventListener("click", function (evt) {
    b6.style.textAlign="center"
    if(evt.detail===1){
        b6.innerHTML="<h1> X </h1>"
      
    }else if(evt.detail===2){
        b6.innerHTML="<h1> O </h1>"
     
    }else if (evt.detail === 3) {
        b6.textContent=""
    }
});


b7.addEventListener("click", function (evt) {
    b7.style.textAlign="center"
    if(evt.detail===1){
        b7.innerHTML="<h1> X </h1>"
      
    }else if(evt.detail===2){
        b7.innerHTML="<h1> O </h1>"
     
    }else if (evt.detail === 3) {
        b7.textContent=""
    }
});


b8.addEventListener("click", function (evt) {
    b8.style.textAlign="center"
    if(evt.detail===1){
        b8.innerHTML="<h1> X </h1>"
      
    }else if(evt.detail===2){
        b8.innerHTML="<h1> O </h1>"
     
    }else if (evt.detail === 3) {
        b8.textContent=""
    }
});


b9.addEventListener("click", function (evt) {
    b9.style.textAlign="center"
    if(evt.detail===1){
        b9.innerHTML="<h1> X </h1>"
      
    }else if(evt.detail===2){
        b9.innerHTML="<h1> O </h1>"
     
    }else if (evt.detail === 3) {
        b9.textContent=""
    }
});

*/

//restart button
/*
var but=document.querySelector("#b")
var box=document.querySelectorAll("td")

function clear(){
    for(i=0; i<box.length; i++){
        box[i].textContent=""
    }
}

but.addEventListener("click",clear)


//main

function repxo(){
    if(this.textContent===""){
        this.textContent="X"
    }else if(this.textContent==="X"){
        this.textContent="O"
    }else{
        this.textContent=""
    }
}

var f=document.querySelector("#q1")
var s=document.querySelector("#q2")
var t=document.querySelector("#q3")




for(i=0; i<box.length; i++){
    box[i].addEventListener("click", repxo);
    if(((f.textContent) && (s.textContent) && (t.textContent))==="X"){
        alert("you win bitch ")
        console.log("you win")
    }
}

*/


 /*
$("h1").click(function(){
    console.log("there was a click")
    $(this).text("i was changed")
})

$("li").click(function(){
    console.log("any li was clicked")
})
*/

//key press
/*
$("input").eq(0).keypress(function(event){
    //$("h3").toggleClass("turnBlue")
    //console.log(event)
    if(event.which===13){
        $('h3').toggleClass('turnBlue')
    }
})
*/

/*
$('h1').on('mouseenter',function(){
    $(this).toggleClass('turnBlue')
})
*/

/*
$("input").eq(1).on("click",function(){
   // $(".container").fadeOut(1000)
   $(".container").slideUp(10000)
})
*/




var p1= prompt("player one: enter your character name, you will be blue")
var p1col="rgb(86, 151, 255)"

var p2= prompt("player two: enter your character name, you will be red")
var p2col="rgb(237, 45, 73)"

var game_on= true;
var table=$("table tr")

function reportwin(rownum,colnum){
    console.log("you won starting at this row,col")
    console.log(rownum)
    console.log(colnum)
}


function changecolor(rowindex,colindex,color){
    return table.eq(rowindex).find("td").eq(colindex).find("button").css("background-color",color)
}

function returncolor(rowindex,colindex){
    return table.eq(rowindex).find("td").eq(colindex).find("button").css("background-color")
}

function checkbottom(colindex){
    var colorreport= returncolor(5,colindex)
    for(var row=5; row>-1; row--){
        colorreport= returncolor(row,colindex)
        if(colorreport==="rgb(128, 128, 128)"){
            return row
        }
    }
}




function colormatch(one,two,three,four){
    return (one===two && one===three && one===four && one!=="rgb(128, 128, 128)" && one!==undefined)
}


function horizontalwin(){
    for(var row=0; row<6; row++){
        for(var col=0; col<4; col++){
            if(colormatch(returncolor(row,col), returncolor(row,col+1), returncolor(row,col+2), returncolor(row,col+3))){
            console.log("horiz")
            reportwin(row,col)
            return true
        }else{
            continue
        }
        }
    }
}



function verticalwin(){
   for(var col=0; col<7; col++){
    for(var row=0; row<3; row++){
        if(colormatch(returncolor(row,col), returncolor(row+1,col), returncolor(row+2,col), returncolor(row+3,col))){
            console.log("vertical")
            reportwin(row,col)
            return true
        }else{
            continue
        }
    }
   } 
}



function diagonalwin(){
    for(var col=0; col<5; col++){
        for(var row=0; row<7; row++){
            if(colormatch(returncolor(row,col), returncolor(row+1,col+1), returncolor(row+2,row+2), returncolor(row+3,row+3))){
                console.log("diag")
                reportwin(row,col)
                return true
            }else if(colormatch(returncolor(row,col), returncolor(row-1,col+1), returncolor(row-2,col+2), returncolor(row-3,col+3))){
                console.log("diag")
                reportwin(row,col)
                return true
            }else{
                continue
            }
        }
    }
}



//logic

//player one

var currentplayer=1
var currentname= p1
var currentcolor=p1col

$("h3").text(p1+" it is your turn pick a column to drop in!")


$(".board button").on("click",function(){
    var col= $(this).closest("td").index()

    var bottomavail=checkbottom(col)

    changecolor(bottomavail,col,currentcolor)

    if(horizontalwin() || verticalwin() || diagonalwin()){
        $("h1").text(currentname+" you have won!")
        $("h3").fadeOut("fast")
        $("h2").fadeOut("fast")
    }


    currentplayer= currentplayer * -1

    if(currentplayer===1){
        currentname= p1
        $("h3").text(currentname+" it is your turn")
        currentcolor= p1col
    }else{
        currentname= p2
        $("h3").text(currentname+" it is your turn")
        currentcolor= p2col
    }

})








































































































