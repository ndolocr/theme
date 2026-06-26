const drawer = document.getElementById("investigationDrawer");
document.querySelectorAll(".btn-review").forEach(button=>{
    button.addEventListener("click",()=>{
        drawer.classList.add("open");
    });
});

document.querySelector(".drawer-close").onclick=()=>{
    drawer.classList.remove("open");};