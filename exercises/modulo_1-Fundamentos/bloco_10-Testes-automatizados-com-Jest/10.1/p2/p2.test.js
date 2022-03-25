const {
  encode,
  decode,
  techList,
  hydrate,
} = require('./p2.js')


//exercicio 1
describe('Testes exercicio 1', () => {
  it('Testa se encode é uma função', () => {
    expect(encode('Vinicius Carvalho')).toBeDefined()
  });

  it('Testa se decode é uma função', () => {
    expect(decode('Vinicius Carvalho')).toBeDefined()
  });

  it('Testa se a funcão encode recebendo uma string com a, e, i, o, u converte em 1, 2, 3, 4, 5 respectivamente', () => {
    expect('V3n3c35s C1rv1lh4').toEqual(encode('Vinicius Carvalho'))
  });

  it('Testa se a função decode recebendo uma string com 1, 2, 3, 4, 5 converte em a, e, i, o, u respectivamente', () => {
    expect('Vinicius Carvalho').toEqual(decode('V3n3c35s C1rv1lh4'))
  });

  it('Testa se a função encode recebendo abcdefghijklmnopqrstuvwxyz converte apenas a, e, i, o, u em 1, 2, 3, 4, 5 respectivamente', () => {
    expect('1bcd2fgh3jklmn4pqrst5vwxyz').toEqual(encode('abcdefghijklmnopqrstuvwxyz'))
  });

  it('Testa se a função decode recebendo 0123456789 converte apenas 1, 2, 3, 4, 5 em a, e, i, o, u respectivamente', () => {
    expect('0aeiou6789').toEqual(decode('0123456789'))
  });

  it('Testa se o tamanho da string passada na funcão encode é o mesmo do retornado', () => {
    expect(('Vinicius Carvalho').length).toEqual((encode('Vinicius Carvalho')).length)
  });

  it('Testa se o tamnanho da string passada na função decode é o mesmo do retornado', () => {
    expect(('Vinicius Carvalho').length).toEqual((decode('V3n3c35s C1rv1lh4')).length)
  });
})

//exercicio 2
describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

//exercicio 3
describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
