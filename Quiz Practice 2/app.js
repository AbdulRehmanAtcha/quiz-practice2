// Chapter 36(a)
function greetUser() {
    alert("Hello, there.");
}
greetUser("Hello, there.");
// Chapter 36(b)
function greetUser(greeting) {
    alert(greeting);
}
var greeting = "Hello, there."
greetUser(greeting);
// Chapter 36(c)
function greetUser(greeting) {
    alert(greeting);
}
var whatever = "Hello, there.";
greetUser(whatever);
// Chapter 36(d)
var almostAMil = 999999;
showBigNum(almostAMil);
showBigNum(999999);
// Chapter 36(e)
function showMessage(m, string, num) {
    alert(m + string + num);
}
var month = "March";
showMessage(month, "'s winner number is ", 23);
// Chapter 37(a)
var orderTot;
if (merchTot >= 100) {
    orderTot = merchTot;
}
else if (merchTot < 50.01) {
    orderTot = merchTot + 5;
}
else {
    orderTot = merchTot + 5 + (.03 * (merchTot - 50));
}
// Chapter 37(b)
function calcTot(merchTot) {
    var orderTot;
    if (merchTot >= 100) {
        orderTot = merchTot;
    }
    else if (merchTot < 50.01) {
        orderTot = merchTot + 5;
    }
    else {
        orderTot = merchTot + 5 + (.03 * (merchTot - 50));
    }
    return orderTot;
}
var totalToCharge = calcTot(79.99);
var totalToCharge = 85.00;
var totalToCharge = merchTotal;
var totalToCharge = merchTotal + ship + tax;
var totalToCharge = calcTot(79.99);
alert(calcTot(79.99));
var orderTot = merchTot + calcTax(merchTot);
var tot = calc(merchTot, calcTax(merchTot));
// Chapter 37(c)
function calcTot(price) {
    return price + calcShip(price);
}
// Chapter 38(a)
var theSum
addNumbers();
function addNumbers() {
    theSum = 2 + 2;
}
alert(theSum);
// Chapter 38(b)
function addNumbers() {
    var theSum = 2 + 2;
}
alert(theSum);
// Chapter 38(c)
var theSum = 1000;
addNumbers();
function addNumbers() {
    var theSum = 2 + 2;
}
// Chapter 38(d)
var theSum = addNumbers();
function addNumbers() {
    var theSum = 2 + 2;
    return theSum;
}
// Chapter 39(a)
switch (dayOfWk) {
    case "Sat":
        alert("Whoopee");
        break;
    case "Sun":
        alert("Whoopee");
        break;
    case "Fri":
        alert("TGIF!");
        break;
    default:
        alert("Shoot me now!");
}
// Chapter 40 Continue Of 39(a)
// Chapter 41(a)
var i = 0;
while (i <= 3) {
    alert(i);
    i++;
}
// Chapter 42(a)
var i = 0;
do {
    alert(i);
    i++;
} while (i <= 3);
// Chapter 42(b)
var i = 0;
while (i < 0) {
    alert(i);
    i++;
}
// Chapter 42(c)
var i = 0;
do {
    alert(i);
    i++;
} while (i < 0);
// Chapter 44(a)
1 // This is a comment, ignored by the browser
for (var i = 0; i < animals.length; i++) {
    if (animals[i] === "bat") {
        animals[i] = "cat";
    }
}
// Chapter 44(b)
var animals = []; // Declare an empty array
// Chapter 44(c)
/*
When a comment requires more than one line,
a block comment like this, with its opening
and closing tags, is the way to go.
*/
// Chapter 45(a)
<a href="#" onClick="alert('Hi');">Click</a>
// // Chapter 45(b)
// // <a href="JavaScript:void(0)" onClick="alert('Hi');">Click</a>
// // Chapter 45(c)
// //  <a href="JavaScript:void(0)" onClick="var greet="hi'; alert(greet);">Click</a> 
// // Chapter 45(d)
// function popup(message) {
//     alert(message);
// }
// <a href="JavaScript:void(0)" onClick="popup('Hi');">Click</a>
// // Chapter 46(a)
// /* <input type="button" value="Click" onClick="alert('Hello world!');"></input> */
// // Chapter 46(b)
// <a href="summary-page.html"><img src="button-sum-pg.png"></a>

// Chapter 50(a)
function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
        case "60608":
            cityName = "Chicago";
            break;
        case "68114":
            cityName = "Omaha";
            break;
        case "53212":
            cityName = "Milwaukee";
    }
    document.getElementById("city").value = cityName;
}
// Chapter 50(a)
function expandLoris() {
    var expandedParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus ea culpa. Commodi tempore eveniet placeat, maxime, amet consectetur dolorem dolore expedita consequuntur numquam iure consequatur aliquam. Maxime tenetur delectus ducimus reiciendis. Quis, beatae?"
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}
function placeAList() {
    var listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
    document.getElementById("lorisList").innerHTML = listToPlace;
}
// Chapter 52(a)
function makeInvisible() {
    document.getElementById("ugly").className = "hidden";
}
// Chapter 53(a)
function swapPic() {
    document.getElementById("before").src = "after-pic.jpg";
}
// Chapter 53(b)
function swapPic(eId, newPic) {
    document.getElementById(eId).src = newPic;
}
// Chapter 54(a)
function swapPic() {
    document.getElementById("before").src = "after-pic.jpg";
}
// Chapter 54(b)
function swapPic() {
    var pic = document.getElementById("before");
    pic.src = "after-pic.jpg";
}
// Chapter 54(c)
function getAddress() {
    var link = document.getElementById("link1");
    var address = link.href;
}
// Chapter 54(d)
function enlargeForm() {
    var frm = document.getElementById("link1");
    frm.className = "jumbo";
}
// Chapter 55(a)
function makeBig() {
    document.getElementById("p1").className += " big";
}
// Chapter 55(b)
function makeBig() {
    document.getElementById("p1").style.fontSize = "2em";
}
document.getElementById("pic99").style.cssFloat = "left";
document.getElementById("div9").style.visibility = "hidden";
document.getElementById("mainPic").style.margin = "0 10px 0 10px;";
var m = document.getElementById("mainPic").style.margin;
// Chapter 56(a)
getElementById("theId").style.fontSize = "2em";
// Chapter 56(b)
var par = document.getElementsByTagName("p");
var textInMiddleParagraph = par[1].innerHTML;
par[1].innerHTML = "This SUV is too big.";
for (var i = 0; i < par.length; i++) {
    par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
}
// Chapter 57(a)
var pars = document.getElementsByTagName("p");
var textInMiddleParagraph = pars[1].innerHTML;
// Chapter 57(b)
var e = document.getElementByID("rules");
var paragraphs = e.getElementsByTagName("p");
// Chapter 57(c)
document.getElementsByTagName("p");
e.getElementsByTagName("p");
// Chapter 57(d)
var t = document.getElementById("table9");
var cells = t.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "pink";
}




















