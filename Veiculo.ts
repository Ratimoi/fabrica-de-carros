export class Veiculo{
    marca: string = 'Padrão';
    modelo: string = 'Padrão';
    potencia: number = 0;
    numeroMarchas: number = 5;
    marchaAtual: number = 0;
    velocidade: number = 0;

acelerar(incremento: number): void {
  if (this.marchaAtual === 0) {
    console.log("Coloque o veículo em uma marcha antes de acelerar");
    return;
  }
  if (incremento <= 0) {
    console.log("Valor inválido para acelerar");
    return;
  }
  this.velocidade += incremento;
  console.log(`Acelerando... Velocidade: ${this.velocidade} km/h`);
}

}