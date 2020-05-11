const output= document.querySelector("#output");
const btn = document.querySelector("button");

btn.addEventListener("click",getJoke);
function getJoke(){
  const xhr = new XMLHttpRequest();
const url = "https://api.chucknorris.io/jokes/random";
xhr.onreadystatechange=function(){
  console.log(xhr.readyState);
  if(xhr.readyState == 4 && xhr.status == 200){
   console.log(xhr.responseText);
   const str = xhr.responseText;
   const obj = JSON.parse(str);
   output.innerHTML = obj.value + '<br><img src="'+obj.icon_url+'">' + '<br>' + obj.created_at
   console.log(obj);

  }else{
    output.innerHTML="ERROR";
  }
}
xhr.open("GET",url);
xhr.send()
xhr.addEventListener("progress",callBackfn);
xhr.addEventListener("load",callBackfn);
xhr.addEventListener("error",callBackfn);
console.log(xhr);

function callBackfn(e){
  console.log(e)
}
}
