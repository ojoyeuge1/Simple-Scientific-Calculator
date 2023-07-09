function key(x){
    document.getElementById("secDisplay").innerHTML = document.getElementById("secDisplay").innerHTML += x;
}

function brac1(){
    document.getElementById("secDisplay").innerHTML = document.getElementById("secDisplay").innerHTML +=  document.getElementById("brak1").innerHTML;
}

function brac2(){
    document.getElementById("secDisplay").innerHTML = document.getElementById("secDisplay").innerHTML +=  document.getElementById("brak2").innerHTML;
}

function bkSpace(){
    document.getElementById("secDisplay").innerHTML = document.getElementById("secDisplay").innerHTML.slice(0, -1); 
}

function Sin(){
    var x = document.getElementById("secDisplay").innerHTML;
    document.getElementById("priDisplay").innerHTML = Math.sin(x * Math.PI / 180);
}

function Tan(){
    var x = document.getElementById("secDisplay").innerHTML;
    document.getElementById("priDisplay").innerHTML = Math.tan(x * Math.PI / 180);
}

function Cos(){
    var x = document.getElementById("secDisplay").innerHTML;
    document.getElementById("priDisplay").innerHTML = Math.cos(x * Math.PI / 180);
}

function sqrt(){
    var x = document.getElementById("secDisplay").innerHTML;
    document.getElementById("priDisplay").innerHTML = Math.sqrt(x);
}

function log(){
    var x = document.getElementById("secDisplay").innerHTML;
    document.getElementById("priDisplay").innerHTML = Math.log(x);
}

function pi(){
    var x = document.getElementById("secDisplay").innerHTML;
    document.getElementById("priDisplay").innerHTML = Math.PI * x;
}

function calculate(){
    document.getElementById("priDisplay").innerHTML = document.getElementById("secDisplay").innerHTML;
    document.getElementById("secDisplay").innerHTML = eval(document.getElementById("secDisplay").innerHTML);
}

function Clear(){
    document.getElementById("priDisplay").innerHTML = "";
    document.getElementById("secDisplay").innerHTML = "";
}