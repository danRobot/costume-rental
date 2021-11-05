class DRIVER{
    constructor(domain){
        this.client=''
        this.tables=new Map();
        this.tables.set("admins",domain+'/api/Admins/all');
        this.tables.set("category",domain+'/api/Category/all');
        this.tables.set("client",domain+'/api/Client/all');
        this.tables.set("costume",domain+'/api/Costume/all');
        this.tables.set("message",domain+'/api/Message/all');
        this.tables.set("reservation",domain+'/api/Reservation/all');
        this.tables.set("score",domain+'/api/Score/all');
        this.xmlreq=new XMLHttpRequest();
        this.xmlreq.responseType="json";    
    }
    read(key,callback,id,params){
        this.xmlreq.open("GET",this.tables.get(key)+id,true);
        this.xmlreq.onerror=()=>{
            console.log(this.xmlreq.status);
            console.log(this.xmlreq.response);
        }
        this.xmlreq.onreadystatechange=()=>{
            if (this.xmlreq.readyState == 4 && this.xmlreq.status == 200) {
                console.log(this.xmlreq.response);
                callback(this.xmlreq.response,params);
            }
        }
        this.xmlreq.send();
    }
    write(type,key,content,callback,params){
        this.xmlreq.open(type,this.tables.get(key),true);
        this.xmlreq.setRequestHeader('Content-Type', 'application/JSON');
        this.xmlreq.onerror=()=>{
            console.log(this.xmlreq.status);
            console.log(this.xmlreq.response);
        }
        this.xmlreq.onreadystatechange=()=>{
            if (this.xmlreq.readyState == 4 && this.xmlreq.status == 204) {
                console.log("delete");
                callback(this.xmlreq.response,params);
            }
            if (this.xmlreq.readyState == 4 && this.xmlreq.status == 201) {
                console.log("put or post");
                callback(this.xmlreq.response,params);
            }
        }
        try {
            this.xmlreq.send(content);
        } catch (error) {
            console.log(error);
        }
    }
}