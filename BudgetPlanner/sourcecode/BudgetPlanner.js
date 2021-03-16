
var budgetObj =[];
function storeInSession() {
    sessionStorage.setItem("AnnualBudget", "budgetObj")
    SessionStorage.setItem("AnnualBudget",JSON.stringify(budgetObj));

    for(let i=0; i<sessionStorage.length;i++)

    console.log(sessionStorage.getItem(Annualbudget));
    console.log(JSON.parse(sessionStorage.getItem(obj)));
    
}

function retrieveFromSession() {
    var budgetObj = localStorage.getItem("AnnualBudget");
    console.log(sessionStorage.getItem(Annualbudget));
    console.log(sessionStorage.getItem(obj));
    

}


function onFormSubmit()
{
    alert("Data Added...")
    var data = readFormData();
    insertNewRecord(data);
    resetData();
    budgetObj.push(data); // in empobj
}
function readFormData()
{
    var obj = {} // empty object
    obj.clientname = document.getElementById("clientname").value;
    obj.projectname = document.getElementById("projectname").value;
    obj.projectbudget = document.getElementById("projectbudget").value;
    console.log(obj);
    return obj;
}

function insertNewRecord(data)
{
    var table = document.getElementById("AnnualBudget")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.lenth); //row created

    var cell1 = newRow.insertCell(0); //cell created
    cell1.innerHTML = data.clientname; // value passed

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.projectname;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.projectbudget;
}


 function resetData() {
    document.getElementById("clientname").value="";
    document.getElementById("projectname").value="";
    document.getElementById("projectbudget").value=""; 
} 

