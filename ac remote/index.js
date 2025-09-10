let acstatus = false;
let acspeeed = 0;
let actemp = 16;
function togglepower() {
  if (acstatus == false) {
    acstatus = true;
    acspeeed = 1;
    console.log("AC is now ON");
  }
  else{
      acstatus = false;
      acspeeed = 0;
      console.log("AC is now OFF");
  }
} 


function fanSpeed(){
if(acstatus == true && acspeeed < 3){

acspeeed += 1;
console.log("AC fan speed is now " + acspeeed);
}
else if(acstatus == true && acspeeed == 3){
   acspeeed = 1;
   console.log("AC fan speed is now " + acspeeed);
}
}


function tempup(){
   if(acstatus == true && actemp < 29){
      actemp++;
      console.log("ac temp is now "+ actemp);
   }
}

function tempdown(){

if(acstatus==true && actemp >16){
  actemp--;
   console.log("ac temp is now "+ actemp);
}

}
