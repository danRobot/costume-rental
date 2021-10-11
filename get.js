apex=new ApexDRIVER('https://g1f2b794f0e1017-db202109230851.adb.us-sanjose-1.oraclecloudapps.com');

let listacostume=document.getElementById("cosList");
let listaclients=document.getElementById("cliList");
let listamessage=document.getElementById("mesList");

let getcostume=document.getElementById("getcostume");
let getclient=document.getElementById("getclient");
let getmessage=document.getElementById("getmessage");

var costumeParams={'Nombre':'name','Marca':'brand','Modelo':'model','Categoria':'category_id'};
var clientParams={'Nombre':'name','Correo':'email','Edad':'age'};
var messageParams={'Mensaje':'messagetext'};

getcostume.onclick=()=>{
    //key,callback,id,params
    apex.read("costume",makeTable,'',costumeParams);
}
getclient.onclick=()=>{
    apex.read("client",makeTable,'',clientParams);
}
getmessage.onclick=()=>{
    apex.read('message',makeTable,'',messageParams);
}