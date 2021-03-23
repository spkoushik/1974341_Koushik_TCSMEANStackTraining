function retrievefromSession(): void{
    let obj:any=sessionStorage.getItem("cart-item");
    let data:any=JSON.parse(obj);
    insertNewRecord(data);
   
   }
   function insertNewRecord(data:any){    

       let table:any = document.getElementById("shopping")
   
       let body:any = table.getElementsByTagName("tbody")[0]; 
       
       let total:number = 0;
    
       for(let i = 0; i < data.length; i++){
           var newRow = body.insertRow();
           var cell1 = newRow.insertCell(0);
               cell1.innerHTML= data[i].name;
   
           var cell2 = newRow.insertCell(1);
               cell2.innerHTML= data[i].price;

            total += parseFloat(data[i].price);
   
       }
       let pElement:any = document.getElementById("totalPrice")
       pElement.innerHTML = "Total: " +  total;
   
   }