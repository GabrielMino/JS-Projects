// scope function(se ejecuta a si misma) para limitar alcance de las variables

(function(){
    //elementos con sub menú
    const listElements = document.querySelectorAll(".menu_item--show");
    // todo el ul
    const list = document.querySelector(".menu_links");

    const addClick = () =>{
        listElements.forEach(element=> {
            element.addEventListener("click",()=>{
                console.log(element);
            })
        })
    }
    addClick();

})();

//https://www.youtube.com/watch?v=6437QeuvbpY