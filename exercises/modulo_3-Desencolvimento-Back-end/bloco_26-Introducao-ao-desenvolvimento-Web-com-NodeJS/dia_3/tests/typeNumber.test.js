const { expect } = require("chai");
const typeNumber = require("../modules/typeNumber")

describe("Exercicios 1 e 2", () => {  
  it("retorna negativo", () => {
    expect(typeNumber(-1)).to.be.equals("negativo");
  });

  it("retorna neutro", () => {
    expect(typeNumber(0)).to.be.equals("neutro")
  });

  it("retorna positivo", () => {
    expect(typeNumber(1)).to.be.equals("positivo")
  })
})

describe("Exercicio 3", () => {
  it("retorna 'o valor deve ser um número'", () => {
    expect(typeNumber("aaa")).to.be.equals("o valor deve ser um número")
  });
})