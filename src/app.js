import express from "express";

export const app = express();
app.use(express.json());

app.get("/nomeDaRota", (request, response) => {
  let nome = request.query.nome;
  console.log(request.query);
  console.log(request.body);
  if (nome == "William") {
    return response.status(200).json({ mensagem: "Meu tutor." });
  }
  return response
    .status(200)
    .json({ mensagem: "Resposta retornada ao usuário da API." });
});

app.post("/outraRota", function (request, response) {
  let mensagem = "Default.";
  const { nome, senha } = request.body;
  console.log(request.query);
  console.log(request.body);
  if (nome == "Lucas") {
    return response.status(200).json({ mensagem });
  }
  return response.status(200).json({
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
