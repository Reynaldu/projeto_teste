document.getElementById("form-agendamento").addEventListener("submit", function(event) {
    event.preventDefault();

    // Pega os valores dos campos
    const nome = document.getElementById("nome").value;
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const whatsapp = document.getElementById("whatsapp").value;

    // Verifica se os campos estão preenchidos
    if (nome && servico && data && hora && whatsapp) {
        // Formata a mensagem para enviar ao WhatsApp
        const mensagem = `Olá, meu nome é ${nome}. Gostaria de agendar um serviço de ${servico} para o dia ${data} às ${hora}. Meu WhatsApp é: ${whatsapp}.`;

        // Substitui espaços na URL e codifica os caracteres
        const url = `https://wa.me/5524999405034?text=${encodeURIComponent(mensagem)}`;  // Substitua 5599999999999 pelo número da manicure

        // Redireciona o usuário para o WhatsApp
        window.open(url, "_blank");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

const imagens = [

"img1.jpg",
"img2.jpg",
"img3.jpg"

];

let indice = 0;

const imagem = document.getElementById("imagem");

function trocarImagem(){

indice++;

if(indice >= imagens.length){

indice = 0;

}

imagem.src = imagens[indice];

}

setInterval(trocarImagem,3000);



window.onload = function() {
    setTimeout(function() {
        document.getElementById("loading").style.display = "none";
        document.getElementById("site").style.display = "block";
    }, 2500); // 2,5 segundos
};
