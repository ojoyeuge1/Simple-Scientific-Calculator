function reset(){
    document.getElementById("display2").innerHTML = " ";
    document.getElementById("display1").innerHTML = " "
}

function bkSpace(){
    document.getElementById("display2").innerHTML = document.getElementById("display2").innerHTML.slice(0, -1)
}

function keypad(x){
    document.getElementById("display2").innerHTML = document.getElementById("display2").innerHTML += x
}

function equal(){
    document.getElementById("display1").innerHTML = document.getElementById("display2").innerHTML;
    document.getElementById("display2").innerHTML = eval(document.getElementById("display2").innerHTML)
    
     
}