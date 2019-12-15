function and(){
    var a = document.getElementById("inanda").value;
    var b = document.getElementById("inandb").value;

    document.getElementById("anda").innerHTML = "Input a: " + a;
    document.getElementById("andb").innerHTML = "Input b: " + b;

    if(a == b){
        document.getElementById("andout").innerHTML = "AND output: " + a;
    }else{
        document.getElementById("andout").innerHTML = "AND output: 0";
    }
}

function nand(){
    var c = document.getElementById("innanda").value;
    var d = document.getElementById("innandb").value;

    document.getElementById("nanda").innerHTML = "Input a: " + c;
    document.getElementById("nandb").innerHTML = "Input b: " + d;

    if(c === "0" && d === "0"){
        document.getElementById("nandout").innerHTML = "NAND output: 1";
    }else if(c === "1" && d === "1"){
        document.getElementById("nandout").innerHTML = "NAND output: 0";
    }else{
        document.getElementById("nandout").innerHTML = "NAND output: 1";
    }
}

function or(){
    var e = document.getElementById("inora").value;
    var f = document.getElementById("inorb").value;

    document.getElementById("ora").innerHTML = "Input a: " + e;
    document.getElementById("orb").innerHTML = "Input a: " + f;

    if(e === "1" || f === "1"){
        document.getElementById("orout").innerHTML = "OR output: 1";
    }else{
        document.getElementById("orout").innerHTML = "OR output: 0";
    }
}

function nor(){
    var g = document.getElementById("innora").value;
    var h = document.getElementById("innorb").value;

    document.getElementById("nora").innerHTML = "Input a: " + g;
    document.getElementById("norb").innerHTML = "Input b: " + h;

    if(g === "0" && h === "0"){
        document.getElementById("norout").innerHTML = "NOR output: 1";
    }else{
        document.getElementById("norout").innerHTML = "NOR output: 0";
    }
}

function xor(){
    var i = document.getElementById("inxora").value;
    var j = document.getElementById("inxorb").value;

    document.getElementById("xora").innerHTML = "Input a: " + i;
    document.getElementById("xorb").innerHTML = "Input b: " + j;

    if(i === j){
        document.getElementById("xorout").innerHTML = "XOR output: 0";
    }else{
        document.getElementById("xorout").innerHTML = "XOR output: 1";
    }
}

function xnor(){
    var k = document.getElementById("inxnora").value;
    var l = document.getElementById("inxnorb").value;

    document.getElementById("xnora").innerHTML = "Input a: " + k;
    document.getElementById("xnorb").innerHTML = "Input b: " + l;

    if(k === l){
        document.getElementById("xnorout").innerHTML = "XNOR output: 1";
    }else{
        document.getElementById("xnorout").innerHTML = "XNOR 0utput: 0";
    }
}
