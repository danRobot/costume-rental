var driver=new DRIVER('http://155.248.209.25/:8080');

let listacostume=document.getElementById("cosList");
let listaclients=document.getElementById("cliList");
let listamessage=document.getElementById("mesList");

let getcostume=document.getElementById("getcostume");
let getclient=document.getElementById("getclient");
let getmessage=document.getElementById("getmessage");

let getreserv=document.getElementById("getreserv");
let getreport=document.getElementById("getreport");

var costumeParams={'tablename':'costume','Nombre':'name','Marca':'brand','Modelo':'model','Categoria':'category_id'};
var clientParams={'tablename':'client','Nombre':'name','Correo':'email','Edad':'age'};
var messageParams={'tablename':'message','Mensaje':'messagetext'};

getcostume.onclick=()=>{
    //key,callback,id,params
    driver.read("costume",makeTable,'',costumeParams);
}
getclient.onclick=()=>{
    driver.read("client",makeTable,'',clientParams);
}
getmessage.onclick=()=>{
    driver.read('message',makeTable,'',messageParams);
}

window.addEventListener('load',()=>{
    driver.read("costume",makeTable,'',costumeParams);
})
/*window.addEventListener('change',()=>{
    apex.read("costume",makeTable,'',costumeParams);
})*/