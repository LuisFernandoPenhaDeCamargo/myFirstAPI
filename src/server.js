import { app } from "./app";

const port = 3000;
const server = app.listen(port, () => {
  //const objetoConst = "string";
  //let objetoLet = "string";
  //const lista = [];

  //console.log(`Valor do objetoConst: ${objetoConst}.`);
  //console.log(`Valor do objetoLet: ${objetoLet}.`);

  //objetoLet = 1;

  //console.log(`Novo valor do objetoLet: ${objetoLet}.`);

  //lista.push("String[0]");

  //console.log(`Lista após uma inserção: ${lista}.`);

  //lista.push(1);

  //console.log(`Lista após a segunda inserção: ${lista}.`);

  //lista.pop();

  //console.log(`Lista após a primeira remoção: ${lista}.`);

  //delete lista[0];

  //console.log(`Lista após a segunda remoção: ${lista}.`);

  //lista.splice(1,2);

  //console.log(`Remoções realizadas utilizando a função "splice": ${lista}.`);

  console.log(`Servidor escutando na porta: ${port}.`);
});
