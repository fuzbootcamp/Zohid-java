// let ball = prompt("Ballingiz nechi !");
// if (ball < 60) {
//   alert("Siz instutga kirolmadingiz!");
//   document.body.style.backgroundColor = "dodgerblue";
// } else if (ball >= 60 && ball <= 80) {
//   alert("Siz super kantraktga kirdingiz");
//   document.body.style.backgroundColor = "red";
// } else if (ball >= 80 && ball <= 100) {
//   alert("siz kantraktga kirdingiz");
//   document.body.style.backgroundColor = "blue";
// } else if (ball >= 100 && ball <= 150) {
//   alert("Siz grand asosida kirdingiz");
//   document.body.style.backgroundColor = "yellow";
// } else if (ball >= 200 && ball <= 300) {
//   document.body.style.backgroundColor = "black";
//   alert(" Balingiz yetmadi!");
// } else {
//   alert("Eror");
//   document.body.style.backgroundColor = "green";
// }

function plusOne() {
  let son3 = prompt("qo'shuv amallarini yozing");
  let son4 = prompt("qoshuv amallarini ikkinchisini yozing");
  const javob = Number(son3) + Number(son4);
  alert("javob:" + javob);
}
function hello() {
  console.log("hello");
  let son5 = prompt("ayirish amalini yozing ");
  let son6 = prompt("ayirish amalini yozing ");
  const javob =Number ( son5) - Number ( son6);
  alert("javob:" + javob);
}

function math() {
  let son1 = prompt("ko'paytirish amalini yozing");
  let son2 = prompt("ko'paytirish amallarini yozing");
  const javob = Number(son1) * Number (son2);
  alert("javob:" + javob);
}
function Bolish() {
  let a = prompt("son yoz");
  let b = prompt("son yoz");
  const javob = Number(a) / Number(b);
  alert("javob: " + javob);
}
