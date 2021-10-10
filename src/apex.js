class ApexDRIVER{
    constructor(domain){
        this.client=''
        this.apex=new Map();
        this.apex.set("costume",domain+'/ords/admin/costume/costume');
        this.apex.set("client",domain+'/ords/admin/client/client');
        this.apex.set("message",domain+'/ords/admin/message/message');
        this.xmlreq=new XMLHttpRequest();
        this.xmlreq.responseType="json";    
    }
    read(key,callback,id){
        this.xmlreq.open("GET",this.apex.get(key)+id,true);
        this.xmlreq.onerror=()=>{
            console.log(this.xmlreq.status);
            console.log(this.xmlreq.response);
        }
        this.xmlreq.onreadystatechange=()=>{
            if (this.xmlreq.readyState == 4 && this.xmlreq.status == 200) {
                callback(this.xmlreq.response);
            }
        }
        this.xmlreq.send();
    }
    write(type,key,content,callback){
        this.xmlreq.open(type,this.apex.get(key),true);
        this.xmlreq.setRequestHeader('Content-Type', 'application/JSON');
        this.xmlreq.onerror=()=>{
            console.log(this.xmlreq.status);
            console.log(this.xmlreq.response);
        }
        this.xmlreq.onreadystatechange=()=>{
            if (this.xmlreq.readyState == 4 && this.xmlreq.status == 204) {
                console.log("delete");
                callback(this.xmlreq.response);
            }
            if (this.xmlreq.readyState == 4 && this.xmlreq.status == 201) {
                console.log("put or post");
                callback(this.xmlreq.response);
            }
        }
        try {
            this.xmlreq.send(content);
        } catch (error) {
            console.log(error);
        }
    }
}