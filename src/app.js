import express from "express";

export const app = express();

app.get("/nomeDaRota", (request, response) => {
  response
    .status(200)
    .json({ mensagem: "Resposta retornada ao usuário da API." });
});

app.get("/outraRota", function (request, response) {
  response.status(200).json({
    mensagem:
      "Resposta retornada ao usuário da API utilizando outra forma de se declarar uma função.",
  });
});

function nomeDaFuncao(request, response) {
  response.status(200).json({
    mensagem:
      "Resposta retornada ao usuário da API utilizando uma terceira forma de se declarar uma função.",
  });
}

app.get("/terceiraRota", nomeDaFuncao);
