class ListBinding{
    constructor(element){
        this.listElement = element;
        this.textList = [];
    }
    // This Method Creates <li>with Text</li> Tag; 
    static createListItem(text){
        const li =document.createElement('li');
        li.textContent =text;
        return li;
    }
    update(){
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild)
        }
for(const text of this.textList){
this.listElement.appendChild(ListBinding.createListItem(text));
}
}
add(text){
    this.textList.push(text);
    this.update();
}
remove(text){
    this.textList.splice(text,1);
    this.update();
}
}