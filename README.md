# vue-covid
## _Treinando um pouco da maravilha chamado: Vue3_

Publicado em: https://60677623434b8e00dae68aea--reverent-golick-91ec5a.netlify.app/

Este projeto utiliza a API do https://brasil.io/covid19/ que faz o maravilhoso trabalho de catalogar e disponiblizar as informações do Covid19 por todo país.

## Funcionalidades

- Pesquisa por Estados
- Pesquisa por Cidades

obs: A ideia é poder criar em breve um comparativo entre duas cidades que forem selecionadas, e também uma API em NodeJS.

## Tecnologia

- VueJS 3
- Axios
- SQLite
- NodeJS
- Express

## Instalação
É necessario acessar o site https://brasil.io/dataset/covid19/files/ para baixar o dataset com as informações completas (caso_full.csv.gz).
Feito isso, o processo para importar o CSV no SQLite é muito simples (muito mesmo):
- Extraia o arquivo caso_full.csv.gz (o resultado vai ser um arquivo caso_full.csv).
- Acesse o diretório onde foi extraído o arquivo pelo terminal (para ficar mais fácil se localizar).
- Execute o comando sqlite3:
```sh
sqlite3 covid19.db
```
- O retorno deve ser algo bem próximo a isso
```sh
SQLite version 3.32.2 2020-06-04 12:58:43
Enter ".help" for usage hints.
sqlite>
```
- Em seguida entre no mod csv com o comando:
```sh
sqlite> .mode csv
sqlite> .import caso_full.csv casos
```
- Para conferir a estrutura do arquivo, use o comando:
```sh
sqlite> .schema casos

CREATE TABLE casos(
  "city" TEXT,
  "city_ibge_code" TEXT,
  "date" TEXT,
  "epidemiological_week" TEXT,
  "estimated_population" TEXT,
  "estimated_population_2019" TEXT,
  "is_last" TEXT,
  "is_repeated" TEXT,
  "last_available_confirmed" TEXT,
  "last_available_confirmed_per_100k_inhabitants" TEXT,
  "last_available_date" TEXT,
  "last_available_death_rate" TEXT,
  "last_available_deaths" TEXT,
  "order_for_place" TEXT,
  "place_type" TEXT,
  "state" TEXT,
  "new_confirmed" TEXT,
  "new_deaths" TEXT
);
```
- ou
```sh
sqlite> select count(*) from casos;
1871200
```
- Para sair, use o comando:
```sh
.quit
```
Pronto! Feito isso copie o covid19.db para a raiz do diretório backend para que a API consiga acessar sem problemas ;)

## Setup Front
```sh
yarn install
```
## Run Front
```sh
yarn serve
```

![Image da tela de estados](https://github.com/leoeek/vue-covid/blob/main/img1.png?raw=true)
![Image da tela de cidades](https://github.com/leoeek/vue-covid/blob/main/img2.png?raw=true)


## Setup Backend
```sh
cd backend
npm install
```
## Run Backend
```sh
cd backend
npm run dev
```
