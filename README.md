# Projeto Final do Curso de Desenvolvimento de Aplicativos Móveis (SENAC - RioOn)

Este é um aplicativo React Native que permite aos usuários visualizar os repositórios de um usuário do GitHub. Ele usa a API pública do GitHub para buscar informações sobre os repositórios de um usuário e exibe-os de forma interativa. O aplicativo também implementa persistência de dados usando o `AsyncStorage`, o que significa que, mesmo após o fechamento do aplicativo, os dados dos repositórios são mantidos.

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-Requisitos](#pré-requisitos)
- [Capturas de Tela](#capturas-de-tela)
- [Contribuição](#contribuição)
- [Contato](#contato)

## Funcionalidades

- **Login e Registro**: O aplicativo permite que os usuários se registrem e façam login utilizando email e senha (Firebase Authentication).
- **Busca de Repositórios**: Os usuários podem digitar o nome de um usuário GitHub para buscar e visualizar seus repositórios públicos.
- **Persistência de Dados**: O aplicativo utiliza o `AsyncStorage` para armazenar localmente os repositórios do usuário, permitindo que os dados persistam mesmo após o fechamento do aplicativo.
- **Visualização de Repositórios**: Cada repositório listado exibe o nome, descrição (se disponível) e URL.

## Tecnologias Utilizadas

- **React Native**: Framework utilizado para o desenvolvimento do aplicativo.
- **Firebase Authentication**: Usado para gerenciar a autenticação de usuários.
- **Axios**: Biblioteca utilizada para fazer requisições HTTP à API do GitHub.
- **AsyncStorage**: Usado para persistir os dados dos repositórios localmente no dispositivo do usuário.

## Pré-Requisitos

Para rodar o aplicativo localmente, você precisará ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (para iniciar o projeto React Native)
- [Firebase Project](https://firebase.google.com/) configurado para autenticação.

## Capturas de Tela

<p align="center">
  <img src="https://github.com/victor-hmds/projeto-final-app-analise-de-dados/blob/main/assets/rio-on-splash.jpeg" width="30%" />
  <img src="https://github.com/victor-hmds/projeto-final-app-analise-de-dados/blob/main/assets/rio-on-login.jpeg" width="30%" />
  <img src="https://github.com/victor-hmds/projeto-final-app-analise-de-dados/blob/main/assets/rio-on-registro.jpeg" width="30%" />
</p>

<p align="center">
  <img src="https://github.com/victor-hmds/projeto-final-app-analise-de-dados/blob/main/assets/rio-on-api-github.jpeg" width="30%" />
  <img src="https://github.com/victor-hmds/projeto-final-app-analise-de-dados/blob/main/assets/rio-on-api-github-funcionando.jpeg" width="30%" />
</p>

## Contribuição

Contribuições são bem-vindas! Se você deseja melhorar este projeto, siga os passos abaixo:

1. **Faça um fork deste repositório.**
2. **Crie uma branch para sua feature:** `git checkout -b minha-feature`
3. **Commit suas alterações:** `git commit -m 'Adiciona minha feature'`
4. **Envie para a branch principal:** `git push origin minha-feature`
5. **Abra um Pull Request.**

## Contato

Para dúvidas ou sugestões:

- **Nome:** Victor Hugo Martins de Souza
- **LinkedIn:** [victor-martins-rs](https://www.linkedin.com/in/victor-martins-rs/)
