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
        console.log("row",row);
        body.appendChild(row);
    }
    var tabla=document.getElementById("tabla");
    tabla.innerHTML='';
    tabla.appendChild(table);
}