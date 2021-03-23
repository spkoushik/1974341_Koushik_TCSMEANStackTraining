function retrievefromSession() {
    var obj = sessionStorage.getItem("cart-item");
    var data = JSON.parse(obj);
    insertNewRecord(data);
}
function insertNewRecord(data) {
    var table = document.getElementById("shopping");
    var body = table.getElementsByTagName("tbody")[0];
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        var newRow = body.insertRow();
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data[i].name;
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data[i].price;
        total += parseFloat(data[i].price);
    }
    var pElement = document.getElementById("totalPrice");
    pElement.innerHTML = "Total: " + total;
}
