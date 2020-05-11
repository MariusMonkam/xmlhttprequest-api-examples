const randuser = document.querySelector("#randuser");
const output2 = document.querySelector("#output2");
const intake = document.querySelector("input");
const url = "https://randomuser.me/api";

randuser.addEventListener("click",getInput)

function getInput(){
  const xhr = new XMLHttpRequest();
  let tempVal=intake.value;
  let tempURL = url+"?results="+tempVal;
  xhr.onload = function(){
  
    if(xhr.readyState === 4 && xhr.status == "200"){
      let data = JSON.parse(xhr.responseText).results;
      outputHTML(data);
      console.log(data);
    }else{
      console.log("error")
    }
    
  }
  xhr.open("GET",tempURL);
  xhr.send()
  
  console.log(xhr)
  console.log(intake.value)
}

function outputHTML(data){
   console.log(data);
   for(let x=0; x<data.length;x++){
     output2.innerHTML+=data[x].email +"<br>"
   }
}