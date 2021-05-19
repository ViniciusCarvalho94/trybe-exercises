let xadrez = 'xablau';

switch (xadrez) {
  case 'rei':
    console.log('1 casa por jogada em qualquer direção');
    break;
  case 'rainha':
    console.log('O número maximo de casas para qualquer direção');
    break;
  case 'bispo':
    console.log('O número maximo de casas apenas para a diagonal');
    break;
  case 'cavalo':
    console.log('Apenas em L ou seja 3 casas para alguma direção e ao final uma casa para a direira ou esquerda apartir do lugar que está (ele pode pular inimigos e aliados)');
    break;
  case 'torre':
    console.log('O número maximo de casas para horizontal e vertical');
    break;
  case 'peao':
    console.log('Apenas para frente, sendo que pode 2 casas na primeira movimentação e 1 casa no restante (ele so pode matar uma outra peça em diagonal)');
    break;
  default:
    console.log('Essa peça não existe');
}