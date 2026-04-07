// index.ts
import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

// ======== Funções ========

function criarVeiculo(): Veiculo {
    const veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}

function acelerar(veiculo: Veiculo): void {
    if (veiculo.marchaAtual !== 0) {
        veiculo.velocidade += veiculo.potencia * 0.1;
        console.log(`Velocidade atual: ${veiculo.velocidade.toFixed(2)} km/h`);
    } else {
        console.log("Coloque o veículo em uma marcha antes de acelerar.");
    }
}

function frear(veiculo: Veiculo): void {
    if (veiculo.velocidade > 0) {
        veiculo.velocidade -= veiculo.potencia * 0.1;
        if (veiculo.velocidade < 0) veiculo.velocidade = 0;
        console.log(`Velocidade atual: ${veiculo.velocidade.toFixed(2)} km/h`);
    } else {
        console.log("O veículo já está parado.");
    }
}

function subirMarcha(veiculo: Veiculo): void {
    if (veiculo.marchaAtual < veiculo.numeroMarchas) {
        veiculo.marchaAtual++;
        console.log(`Marcha atual: ${veiculo.marchaAtual}`);
    } else {
        console.log("Já está na marcha máxima");
    }
}

function reduzirMarcha(veiculo: Veiculo): void {
    if (veiculo.marchaAtual > 0) {
        veiculo.marchaAtual--;
        console.log(`Marcha reduzida para: ${veiculo.marchaAtual}`);
    } else {
        console.log("Já está no ponto morto!");
    }
}

function imprimirVeiculo(veiculo: Veiculo): void {
    console.log("\n===== DADOS DO VEÍCULO =====");
    console.log("Marca:", veiculo.marca);
    console.log("Modelo:", veiculo.modelo);
    console.log("Potência:", veiculo.potencia);
    console.log("Número de marchas:", veiculo.numeroMarchas);
    console.log("Marcha atual:", veiculo.marchaAtual);
    console.log("Velocidade:", veiculo.velocidade.toFixed(2));
}

// ======== Programa principal ========

console.log('Criação de veículo');
const carro = criarVeiculo();

let rodando = true;

while (rodando) {
    console.log("\n########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');

    switch (opcao) {
        case 0:
            console.log("Saindo...");
            rodando = false;
            break;
        case 1:
            acelerar(carro);
            break;
        case 2:
            frear(carro);
            break;
        case 3:
            subirMarcha(carro);
            break;
        case 4:
            reduzirMarcha(carro);
            break;
        case 5:
            imprimirVeiculo(carro);
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
}

console.log("Programa encerrado.");
