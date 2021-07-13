const {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
  obj1,
  obj2,
  obj3,
} = require('./exerciciosP1')


//exercicio 1
describe('Testes exercicio 1', () => {
  it('Testa se o retorno de sum(4, 5) é 9', () => {
    expect(9).toBe(sum(4, 5))
  })

  it('Testa se o retorno de sum (0, 0) é 0', () => {
    expect(0).toBe(sum(0, 0))
  })

  it('Testa se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
    expect(() => {sum(4, '5')}).toThrow();
  })

  it('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {sum(4, '5')}).toThrow('parameters must be numbers');
  })
})

//exercicio 2
describe('Testes exercicio 2', () => {
  it('Verifica se a função myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3))
  })

  it('Verifica se a função myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () =>{
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3))
  })

  it('Verifica se o array passado por parâmetro não sofreu alterações', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4]))
  })

  it('Verifica se a função myRemove([1, 2, 3, 4] ,5) retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5))
  })
})

//exercicio 3
describe('Testes exercicio 3', () => {
  it('Verifica se a função myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3))
  })

  it('Verifica se a função myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3))
  })

  it('Verifica se ao fazer chamada para a função myRemoveWithoutCopy, o array passado por parâmetro sofreu alterações', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4]))
  })

  it('Verifica se a função myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5))
  })
})

//exercicio 4
describe('Testes exercicio 4', () => {
  it('Ao passar um numero divisível por 3 e 5, verifica se o retorno é o esperado', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15))
  })

  it('Ao passar um numero divisível por 3, verifica se o retorno é o esperado', () => {
    expect('fizz').toBe(myFizzBuzz(3))
  })

  it('Ao passar um numero divisível por 5, verifica se o retorno é o esperado', () => {
    expect('buzz').toBe(myFizzBuzz(5))
  })

  it('Ao passar um numero que não é divisível por 3 ou por 5, verifica se o retorno é o esperado', () => {
    expect(4).toBe(myFizzBuzz(4))
  })

  it('Ao passar um parâmetro que não é um número, verifica se o retorno é o esperado', () => {
    expect(false).toBe(myFizzBuzz('5'))
  })
})

//exercicio 5
describe('Testes exercicio 5', () => {
  it('Compara se obj1 e o obj2 é igual', () => {
    expect(obj1).toEqual(obj2)
  })

  it('Verifica se o obj1 e o obj3 não são iguais', () => {
    expect(obj1).not.toEqual(obj3)
  })

  it('Verifica se o obj2 e o obj3 não são iguais', () => {
    expect(obj2).not.toEqual(obj3)
  })
})