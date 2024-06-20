let msg = document.querySelector("#msg");

msg.addEventListener("click", ()=>{
    let alerta= new bootstrap.Toast("#toast-alert")
    alerta.show()
})