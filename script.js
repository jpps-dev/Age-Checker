const idade = document.getElementById("idade");
const mensagem = document.getElementById("mensagem");

idade.addEventListener("input", function() {
    if (idade.value === "") {
        mensagem.textContent = "";
    } else if (idade.value < 18) {
        mensagem.textContent = "Menor de idade";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Maior de idade";
        mensagem.style.color = "green";
    }
});