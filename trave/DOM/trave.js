const items = document.getElementById("items");
const form = document.querySelector("form");
const filter = document.getElementById("cheked")
filter.addEventListener("keyup",(e)=>{
    const text= e.target.value.toLowerCase();
    const item = items.getElementsByTagName('li');
    Array.from(item).forEach((itm)=>{
        const itemName = itm.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            itm.style.display = 'block';
        }else{
            itm.style.display ='none';

        }

    })
})

items.addEventListener("click",(e)=>{
    if(e.target.classList.contains('span')){
        if(confirm("Are You Sure To Delete?")){
            const li = e.target.parentElement;
            items.removeChild(li)
        }
    }
})
   form.addEventListener("submit", addItem)
 
    function addItem(e){
        e.preventDefault();

        let newItem = document.getElementById('item').value;

        let li =document.createElement('li');

        li.className ="tpan";

        li.appendChild(document.createTextNode(newItem));

        
        items.appendChild(li);
        
        let deleteBtn = document.createElement('button');

        deleteBtn.className ="span";

        deleteBtn.appendChild(document.createTextNode("X"));
        li.appendChild(deleteBtn)
        items.appendChild(li)
        console.log(li);
    }










        //  console.log("Event Type:"+ e.type)
      // console.log(e.target.value)
    //  document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"
    