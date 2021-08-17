
let categories = document.getElementsByClassName("category-name");

for (i=0; i<categories.length; i++){
    let categorySelected = categories[i];
    categorySelected.addEventListener("mouseenter", fun);
    categorySelected.addEventListener("mouseleave", fun);
    

    function fun(){
       let titles = categorySelected.querySelector(".titles");
       titles.classList.toggle("active");
    }
}


let children = document.getElementsByClassName("child-name");

let all = document.getElementById("allActors")


for (i=0; i<children.length; i++){
    let childSelected = children[i];
    childSelected.addEventListener("mouseenter", fun);
    childSelected.addEventListener("mouseleave", fun);

    childSelected.addEventListener("click", funClick);
    

    function fun(){
       let actors = childSelected.querySelector(".actors");
       actors.classList.toggle("active");
    }

    function funClick(){
        let actors = childSelected.querySelector(".actors");
        var list = document.getElementById("list");
        list.innerHTML = actors.innerHTML;
    }

    

}

//all actors

document.getElementById("allActors").addEventListener("click", funAll);
let allActors = document.getElementsByClassName('actor-name');


var clicked = false;

function funAll(){
    if(!clicked){
        clicked = true;
        console.log("ucitano");
    
        for(i=0; i<allActors.length; i++){
            let node = document.createElement("LI");
            let all = allActors[i].innerHTML;
            console.log("svaki pojedinacno", all);
            let textnode = document.createTextNode(all); 
            
            node.appendChild(textnode); 
            document.getElementById("myList").appendChild(node);
            
            
        }
    }
    
    
}








