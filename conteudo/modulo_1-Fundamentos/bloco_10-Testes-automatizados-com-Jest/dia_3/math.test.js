const math = require('./math')

//exercicio 1
describe('Exercicio 1', () => {
  it('Testar chamada da função subtrair', () => {
    math.subtrair = jest.fn();
  
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
});

//exercicio 2
describe('Exercicio 2', () => {
  it('Testa o retorno da função multiplicar no padrão 10', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
  
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
  });
});

//exercicio 3
describe('Exercicio 3', () => {
  it('Testa a chamada, quantas vezes foi chamada e se está com os parametros e resultados certos', () => {
    const mockSum = jest.spyOn(math, 'somar');
    mockSum.mockResolvedValue(3);
  
    math.somar(1, 2);
    expect(mockSum).toHaveBeenCalled();
    expect(mockSum).toHaveBeenCalledTimes(1);
    expect(mockSum).toHaveBeenCalledWith(1, 2);
    expect(mockSum(1, 2)).resolves.toBe(3);
  });
});

//exercicio 4
describe('Exercicio 4', () => {
  it('Testa o retorno da função dividir no padrão 15 e testa 2 chamadas padrões com 2 e 5 por uma vez cada', () => {
    math.dividir = jest.fn().mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5);
  
    expect(math.dividir()).toBe(2)
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledWith();
    expect(math.dividir).toHaveBeenCalledTimes(1);
  
    expect(math.dividir()).toBe(5);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledWith();
    expect(math.dividir).toHaveBeenCalledTimes(2);
  
    expect(math.dividir()).toBe(15);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledWith();
    expect(math.dividir).toHaveBeenCalledTimes(3);
  });
});

//exercicio 5
describe('Exercicio 5', () => {
  test('Testa o retorno da funcão subtrair, altera ela, um valor padrão de 20 e restaura a implementação original dela', () => {
    const mockSub = jest.spyOn(math, 'subtrair');
    mockSub.mockRestore();
    mockSub.mockImplementation((a, b) => a * b);
    mockSub.mockReturnValue(20);
  
    expect(mockSub(10, 2)).toBe(20);
    expect(mockSub).toHaveBeenCalled();
    expect(mockSub).toHaveBeenCalledTimes(1);
    expect(mockSub).toHaveBeenCalledWith(10, 2);

    mockSub.mockRestore();
    mockSub.mockReturnValue(8);

    expect(mockSub(10, 2)).toBe(8);
    expect(mockSub).toHaveBeenCalled();
    expect(mockSub).toHaveBeenCalledTimes(1);
    expect(mockSub).toHaveBeenCalledWith(10, 2);
  });
})