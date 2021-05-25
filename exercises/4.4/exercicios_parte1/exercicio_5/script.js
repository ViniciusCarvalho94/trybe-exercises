let infoM = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim'
};

let infoT = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
};

console.log(infoM.personagem + ' e ' + infoT.personagem)
console.log(infoM.origem + ' e ' + infoT.origem)
console.log(infoM.nota + ' e ' + infoT.nota)

if (infoM.recorrente === 'sim' && infoT.recorrente === 'sim'){
  console.log('Ambos recorrentes')
}
