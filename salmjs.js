function salesLocation (minSales, maxSales, averageSales, Id) {
  this.minSales = minSales;
  this.maxSales = maxSales;
  this.averageSales = averageSales;
  this.Id = Id;
  this.storeHours = ["9:00 am ","10:00 am","11:00 am ","12:00 pm ","1:00 pm ","2:00 pm ","3:00 pm ", "4:00 pm ", "5:00 pm"];
  this.randomNumFunction = function() { // Creates Random sells with min max range.
    return Math.floor(((Math.random() * (this.maxSales - this.minSales)) + this.minSales) * this.averageSales);
  };
};


function hourlySales (shop) {
var total = 0;
var table = document.getElementById('table');
var storeName = table.innerHTML += "<tr><th>"+shop.Id+"</th>";
for (var index = 0; index < shop.storeHours.length; index++){
  var storeRow = ""; // declaring var. to use below.
  var randomNum = shop.randomNumFunction();
  total += randomNum; // ADD random numbers for total.
  storeRow = "<td>"+shop.storeHours[index]+"</td><td>"+randomNum+"</td>";
  table.innerHTML += storeRow;
}
table.innerHTML += "<td>Total: "+total+"</td></tr>";
}


var stores = new Array();
stores.push(new salesLocation(6, 24, 1.2, "Portland Airport"));
stores.push(new salesLocation(11, 38, 1.9, "Washington Square"));
stores.push(new salesLocation(20, 48, 3.3, "Sellwood"));
stores.push(new salesLocation(3, 24, 2.6, "Pearl District"));
stores.push(new salesLocation(17, 88, 5.2, "Pioneer Square"));

function mainFunction() {
  for (var index = 0; index < stores.length; index++){ // Calling function with parameter.
    hourlySales(stores[index])
  }
}

function addNewStore(form) {
    var locationName = form.locName.value;
    var maxSales = parseInt(form.maxSales.value);
    var minSales = parseInt(form.minSales.value);
    var averageSales = parseFloat(form.averageSales.value);
    //var displayArea = document.getElementById("tables");
    stores.push(new salesLocation(minSales, maxSales, averageSales, locationName));
    mainFunction();
}
mainFunction();

// function showMessage() {
//   alert(hourlySales(prompt("what is?")));
// }
// // form validation -- use length eval thing in last chapter
// var newLocation =
// <form>
// <label for="locName">Location Name:</label>
// //   input type="text" id="locName"
// </form>
// function evaluateForm(form){
//   var fullname = form.fist.value + "" + form.last.value;
//    var formIsValid = True;
//      if(submittedForm.first.value == "") {submittedForm.first.setAttribute("class","")}
//        var formIsValid = False;
// var displayArea = getElementById("")"
//displayArea.innerHTML.<tr><th>"+shop.Id+"</th>";
// }
