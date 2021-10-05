// Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta.

var fruta; // 'maçã', 'kiwi', 'melancia';

switch (fruta) { 
    
  case 'maçã':
    console.log('Não vendemos esta fruta aqui.');
break;
    
  case 'kiwi':
    console.log('Estamos com escassez de kiwis.');
    break;
    
  case 'melancia':
    console.log('Aqui está, são 3 reais o quilo.');
    break;

  default:
    console.log('Procure o administrador do sistema!');
}


// As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores. Criar variáveis que tenham o salário do colaborador e o reajuste segundo o seguinte critério, baseado no salário atual.

var salario; // Qual seu salário?.

if (salario <= 280){
  
  let aumento = salario * 0.20;
  let total = salario + aumento;
  
 console.log(`Salário: R$ ${salario},00 \n Aumento aplicado: 20% \n Valor do aumento: R$ ${aumento},00 \n Salário total: R$ ${total},00`);
}
else if (salario >= 280 && salario <= 700){
  
  let aumento = salario * 0.15;
  let total = salario + aumento;
  
console.log(`Salário: R$ ${salario},00 \n Aumento aplicado: 15% \n Valor do aumento: R$ ${aumento},00 \n Salário total: R$ ${total},00`);
}
else if (salario >= 700 && salario <= 1500){
  
  let aumento = salario * 0.10;
  let total = salario + aumento;
  
console.log(`Salário: R$ ${salario},00 \n Aumento aplicado: 10% \n Valor do aumento: R$ ${aumento},00 \n Salário total: R$ ${total},00`);
}
else if (salario > 1500){
  
  let aumento = salario * 0.05;
  let total = salario + aumento;
  
  console.log(`Salário: R$ ${salario},00 \n Aumento aplicado: 5% \n Valor do aumento: R$ ${aumento},00 \n Salário total: R$ ${total},00`);
}
else{
  console.log('Tente novamente, salario a baixo de R$280,00 não cadrastado no sistema!');
}