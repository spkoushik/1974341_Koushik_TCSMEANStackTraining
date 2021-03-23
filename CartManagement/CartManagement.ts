
function storeinSession(cartObj:any):void {
    let obj:any = sessionStorage.getItem("cart-item");
    if(obj != undefined){
        let dataObj:any = JSON.parse(obj);
        if(cartObj.length > 0){
            dataObj.push(cartObj[0]);
            sessionStorage.setItem("cart-item",JSON.stringify(dataObj));
        }
    }else{
        sessionStorage.setItem("cart-item",JSON.stringify(cartObj));
    }
}
var i=0;
function add(index:number): void {
    
    let cartObj:any = [];
    let item:any = readfromData(index);
    cartObj.push(item);
    storeinSession(cartObj);
    //document.getElementById("num").value=i++ ;
}

function readfromData(index:number):any {
    var item:any = {};
    item.name = document.getElementById("name" + index).textContent;
    item.price = document.getElementById("price" + index).textContent;
    console.log(item);
    return item;
}

