const btnComecar = document.getElementById("btnComecar");
const conteudo = document.getElementById("conteudo");
const btnSurpresa = document.getElementById("btnSurpresa");
const mensagemSurpresa = document.getElementById("mensagemSurpresa");
const coracoes = document.getElementById("coracoes");
const musica = document.getElementById("musica");

btnComecar.addEventListener("click", () => {
    conteudo.classList.remove("oculto");
    conteudo.scrollIntoView({
        behavior: "smooth"
    });

    if (musica) {
        musica.play().catch(() => {});
    }
});

btnSurpresa.addEventListener("click", () => {
    mensagemSurpresa.classList.add("aberta");
    btnSurpresa.style.display = "none";
    criarCoracoes(20);

    mensagemSurpresa.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

function criarCoracao() {
    const coracao = document.createElement("span");
    coracao.classList.add("coracao");
    coracao.innerHTML = "❤️";
    coracao.style.left = Math.random() * 100 + "%";
    coracao.style.fontSize = (Math.random() * 20 + 12) + "px";
    coracao.style.animationDuration = (Math.random() * 5 + 5) + "s";

    coracoes.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 10000);
}

function criarCoracoes(quantidade) {
    for (let i = 0; i < quantidade; i++) {
        setTimeout(() => {
            criarCoracao();
        }, i * 100);
    }
}

setInterval(() => {
    criarCoracao();
}, 1200);

const secoes = document.querySelectorAll(".secao");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.15
});

secoes.forEach((secao) => {
    secao.style.opacity = "0";
    secao.style.transform = "translateY(30px)";
    secao.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observador.observe(secao);
});