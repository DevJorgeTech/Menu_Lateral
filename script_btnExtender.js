const btn_expandir = document.getElementById("btn-expandir")
const menu_lateral = document.getElementById("menu_lateral")
control = 0

btn_expandir.addEventListener("click", function(){
    btn_expandir.style.width = "100px"
    control++ 

    if (control == 2){
        menu_lateral.style.width = "80px"
        control = 0
    } else {
        menu_lateral.style.width = "300px"
    }
})