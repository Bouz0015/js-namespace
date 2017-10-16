var BOUZ0015 = {
    init: function(){
        
        let box = document.createElement("div");
        box.className = "box";
        box.textContent = "bouz0015";
        document.getElementById("boxes").appendChild(box);
        box.addEventListener("mouseover", BOUZ0015.hover);
        box.addEventListener("mouseout", BOUZ0015.hover);
        box.addEventListener("click", BOUZ0015.click)},
    
    hover: function(ev){
        ev.currentTarget.classList.toggle("highlight");
    },
    
    click: function(ev){
        ev.currentTarget.style.backgroundColor = "green";
        ev.currentTarget.style.borderColor = "red";
    },
    
};