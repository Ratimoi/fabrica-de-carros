# 🚗 Projeto Veículo

Este projeto é um **simulador de veículo em TypeScript**, que permite criar um veículo, acelerar, frear, subir e reduzir marchas, e visualizar os dados do veículo em tempo real através de um menu interativo no terminal.

---

## 🔹 Funcionalidades

- Criar veículo com marca, modelo, potência e número de marchas.
- Acelerar o veículo (somente se estiver em uma marcha).
- Frear o veículo.
- Subir marcha e reduzir marcha.
- Visualizar os dados completos do veículo (marca, modelo, potência, marcha atual e velocidade).
- Menu interativo no terminal usando `prompt-sync`.

---

## 🛠️ Tecnologias

- **TypeScript**
- **Node.js**
- **prompt-sync** para entrada de dados pelo terminal
- Git e GitHub para versionamento

---

## 💻 Instalação

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
```
Instale as dependências:
```
npm install
```
Compile o TypeScript (opcional, se não usar ts-node):
```
tsc
```
---

## ▶️ Como Executar
Com ts-node (recomendado)
```
npx ts-node index.ts
```
Ou compilando e rodando com Node
```
tsc
node dist/index.js
```

---

## 📝 Estrutura do Projeto
```
├── index.ts          # Código principal e menu
├── Veiculo.ts        # Classe Veículo
├── package.json
├── tsconfig.json
└── README.md
```
---

## 📋 Exemplo de Uso
```
Criação de veículo
Marca: Ford
Modelo: Fiesta
Potência: 100
Número de marchas: 5

########### MENU ###########
1 - Acelerar
2 - Frear
3 - Subir marcha
4 - Descer marcha
5 - Imprimir dados do veículo
0 - Sair
```
---

## 👥 Autores
Ramiro Quevedo Paz – @Ratimoi <br>
Mariana – @marianatica <br>
Soares Cawan – @Soarescawan

---
## 📜 Licença
```
Este projeto está disponível sob a licença MIT.

```
