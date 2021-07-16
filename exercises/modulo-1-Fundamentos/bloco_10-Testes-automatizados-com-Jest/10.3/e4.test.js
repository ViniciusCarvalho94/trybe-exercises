const func = require('./func')
jest.mock('./func')

describe('Exercicio 4', () => {
  it('Reimplementando a função upperCase para retornar letras minusculas', () => {
    func.upperCase.mockImplementation((string) => string.toLowerCase());

    expect(func.upperCase('VINICIUS')).toBe('vinicius');
    expect(func.upperCase).toHaveBeenCalled();
    expect(func.upperCase).toHaveBeenCalledTimes(1);
    expect(func.upperCase).toHaveBeenCalledWith('VINICIUS')
  });
  
  it('Reimplementando a função firstLetter para retornar a ultima letra', () => {
    func.firstLetter.mockImplementation((string) => string.charAt(string.length - 1));

    expect(func.firstLetter('vinicius')).toBe('s');
    expect(func.firstLetter).toHaveBeenCalled();
    expect(func.firstLetter).toHaveBeenCalledTimes(1);
    expect(func.firstLetter).toHaveBeenCalledWith('vinicius')
  });

  it('Reimplementando a função sumStrings para contatenar 3 parametros', () => {
    func.sumStrings.mockImplementation((stringA, stringB, stringC) => `${stringA}${stringB}${stringC}`)

    expect(func.sumStrings('vin', 'ici', 'us')).toBe('vinicius');
    expect(func.sumStrings).toHaveBeenCalled();
    expect(func.sumStrings).toHaveBeenCalledTimes(1);
    expect(func.sumStrings).toHaveBeenCalledWith('vin', 'ici', 'us');
  });
});