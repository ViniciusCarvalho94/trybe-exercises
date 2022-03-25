const func = require('./func');

describe('Exercicio 1', () => {
  it('Testa o chamado da função randomNumber, retorno padrão de 10, quantas vezes foi chamada e qual o seu retorno', () => {
    func.randomNumber = jest.fn().mockReturnValue(10);

    expect(func.randomNumber()).toBe(10);
    expect(func.randomNumber).toHaveBeenCalled();
    expect(func.randomNumber).toHaveBeenCalledTimes(1);
  });
});

describe('Exercicio 2', () => {
  it('Testa a função randomNumber implementando uma divisão nela', () => {
    const mockRandomNumber = jest.spyOn(func, 'randomNumber');
    mockRandomNumber.mockRestore();
    mockRandomNumber.mockImplementation((a, b) => a / b);

    expect(mockRandomNumber(10, 2)).toBe(5);
    expect(mockRandomNumber).toHaveBeenCalled();
    expect(mockRandomNumber).toHaveBeenCalledTimes(1);
    expect(mockRandomNumber).toHaveBeenCalledWith(10, 2);
  });
});

describe('Exercicio 3', () => {
  it('Testa a função randomNumber implementando uma multiplicação, depois reseta e implementa um novo parametro multiplicando ele por ele mesmo', () => {
    const mockRandomNumber = jest.spyOn(func, 'randomNumber');
    mockRandomNumber.mockRestore();
    mockRandomNumber.mockImplementation((a, b, c) => a * b * c);

    expect(mockRandomNumber(10, 2, 2)).toBe(40);
    expect(mockRandomNumber).toHaveBeenCalled();
    expect(mockRandomNumber).toHaveBeenCalledTimes(1);
    expect(mockRandomNumber).toHaveBeenCalledWith(10, 2, 2);

    mockRandomNumber.mockRestore();
    mockRandomNumber.mockImplementation((a) => a * a);

    expect(mockRandomNumber(5)).toBe(25);
    expect(mockRandomNumber).toHaveBeenCalled();
    expect(mockRandomNumber).toHaveBeenCalledTimes(1);
    expect(mockRandomNumber).toHaveBeenCalledWith(5);
  });
});

describe('Exercicio 5', () => {
  it('Reimplementando a função', () => {
    const mockUpperCase = jest.spyOn(func, 'upperCase');
    mockUpperCase.mockImplementation((string) => string.toLowerCase());

    expect(mockUpperCase('VINICIUS')).toBe('vinicius');
    expect(mockUpperCase).toHaveBeenCalled();
    expect(mockUpperCase).toHaveBeenCalledTimes(1);
    expect(mockUpperCase).toHaveBeenCalledWith("VINICIUS");

    mockUpperCase.mockRestore();

    expect(func.upperCase('vinicius')).toBe('VINICIUS')
  });
});

describe('Exercicio 6', () => {
  const mockAPI = jest.spyOn(func, 'fetchDog');
  afterEach(mockAPI.mockReset);

  it('Requisição bem resolvida', async () => {
    mockAPI.mockResolvedValue('request sucess');

    await mockAPI()
    expect(mockAPI).toHaveBeenCalled();
    expect(mockAPI).toHaveBeenCalledTimes(1);
    await expect(mockAPI()).resolves.toBe('request sucess')
    expect(mockAPI).toHaveBeenCalledTimes(2);
  });

  it('Requisição não foi resolvida', async () => {
    mockAPI.mockRejectedValue('request failed');

    expect(mockAPI).toHaveBeenCalledTimes(0);
    await expect(mockAPI()).rejects.toBe('request failed');
    expect(mockAPI).toHaveBeenCalledTimes(1);
  })
});
