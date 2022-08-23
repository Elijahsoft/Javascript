const input = document.getElementById("real-file");
const btn = document.getElementById("button");
const text = document.getElementById("text");
btn.addEventListener("click",function(){
    input.click();
})
input.addEventListener("change",function(){
   if(input.value){
       text.innerHTML = input.value.match(/[/\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
   }else{
       text.innerHTML = " No File Choosen yet."
   }
})