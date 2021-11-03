function makeTable(response,params) {
    var items=response.items
    console.log("items",items);
    console.log("params",params);
    let tableTitles=Object.keys(params);
    let table=document.createElement("table");
    let head=table.createTHead();
    let body=table.createTBody();
    for (let i = 0; i < tableTitles.length; i++) {
        const element = tableTitles[i];
        let enc=document.createElement("th");
        enc.innerHTML=element;
        head.appendChild(enc);
    }
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        let row=document.createElement('tr');
        for (const key in params) {
            let row_item=document.createElement('td');
            var item=element[params [key]];
            row_item.innerHTML=item;
            row.appendChild(row_item);
        }
        var options=document.createElement('div');
        var edit=document.createElement('button');
        edit.innerHTML='editar';
        var del=document.createElement('button');
        del.innerHTML='borrar';
        edit.className='custom-btn btn-5';
        del.className='custom-btn btn-6';
        edit.onclick=(e)=>{
            editar(element['id']);
        };
        del.onclick=(e)=>{
            borrar(element['id']);
        };
        options.appendChild(edit);
        options.appendChild(del);
        options.style.display='flex';
        options.style.height='100%'
        options.style.justifyContent='center'
        row.appendChild(options);
        row.id=element['id'];
        console.log("row",row);
        body.appendChild(row);
    }
    var tabla=document.getElementById("tabla");
    tabla.innerHTML='';
    body.onclick=(e)=>{
        console.log('target',e.target);
    }
    tabla.appendChild(table);
}

function borrar(id) {
    alert(id);
}

function editar(id){
    alert(id);
}