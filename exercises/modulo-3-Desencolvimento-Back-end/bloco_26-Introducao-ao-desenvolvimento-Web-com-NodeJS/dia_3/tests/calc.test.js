const { expect } = require("chai");
const calc = require("../modules/calc")

describe("Teste calc.js", () => {
    it("retorna reprovado", () => {
      expect(calc(4)).to.be.equals("reprovado");
  });
  
    it("retorna aprovado", () => {
      expect(calc(7)).to.be.equals("aprovado");
  })
  
    it("retorna aprovado", () => {
      expect(calc(9)).to.be.equals("aprovado");
    })
})