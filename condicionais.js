let idade = Number(prompt("Digite sua idade:"));
let status = prompt("Você está registrado ou não registrado? (Digite exatamente: 'registrado' ou 'não registrado')");

let maioridade = (idade >= 18) ? "maior de idade" : "menor de idade";
console.log(`Você é ${maioridade}.`);

switch (status.toLowerCase()) {
    case "registrado":
        console.log("Bem-vindo ao sistema!");
        break;
    case "não registrado":
        console.log("Por favor, complete seu registro para continuar.");
        break;
    default:
        console.log("Status desconhecido.");
        break;
}

if (idade >= 18 && status.toLowerCase() === "registrado") {
    console.log("Você tem acesso completo ao sistema.");
} else {
    console.log("Seu acesso é limitado.");
}
