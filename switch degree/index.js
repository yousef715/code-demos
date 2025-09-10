let degree = prompt("enter your degree");
switch (true) {
  case degree >= 0 && degree < 50:
    console.log("يا ساقط يا فاشل ");
    break;
  case degree >= 50 && degree < 65:
    console.log("مقبول");
    break;
  case degree >= 65 && degree < 75:
    console.log("جيد");
    break;
  case degree >= 75 && degree < 85:
    console.log("جيد جدا");
    break;
  case degree >= 85 && degree <= 100:
    console.log("ممتاز");
    break
  default:
    console.log(" erorr");
    break;
}






