let parrafo=document.getElementById('get');
let costume=document.getElementById('costume');
let message=document.getElementById('message');
let client=document.getElementById('client');

apex=new ApexDRIVER('https://g1f2b794f0e1017-db202109230851.adb.us-sanjose-1.oraclecloudapps.com');

function setClient(texto) {
    parrafo.innerHTML=texto;
}

function setCostume(texto) {
    parrafo.innerHTML=texto;
}

function setMessage(texto) {
    parrafo.innerHTML=texto;
}

costume.onclick=()=>{
    apex.read('costume',setCostume,'');
}
message.onclick=()=>{
    apex.write('DELETE','costume','{"id":'+document.getElementById("ID").value+'}',setCostume);
}
client.onclick=()=>{
    apex.getID('client',setClient,1);
}