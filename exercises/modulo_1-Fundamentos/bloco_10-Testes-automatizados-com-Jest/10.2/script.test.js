const {
  uppercase,
  getUserName,
  getRepos,
  getAnimal,
  animalAge,
} = require('./script')


//exercicio 1
test('Testa se a palavra passa da como parametro está toda com letra maiuscula', (done) => {
  uppercase('vinicius carvalho', (str) => {
    expect(str).toEqual('VINICIUS CARVALHO')
    done()
  })
})

//exercicio 2
test('Teste para se o usuário for encontrado', () => {
  return getUserName(4).then(user => {
    expect(user).toEqual('Mark')
  })
})

test('Teste para se o usuário não for encontrado', () => {
  return getUserName(6).catch(error => {
    expect(error).toEqual({ error: 'User with 6 not found.' })
  })
})

//exercicio 3
test('Teste para se o usuário for encontrado', async () => {
  await getUserName(4);
  expect('Mark')
})

test('Teste para se o usuário não for encontrado', async () => {
  try {
    await getUserName(6);
  } catch (error) {
    expect(error).toEqual({ error: 'User with 6 not found.' })
  }
})

//exercicio 4
test('Testa se os repositórios passados como parametros se encontram na lista da API', async () => {
  const url = await getRepos('https://api.github.com/orgs/tryber/repos');
  expect(url).toContain('sd-01-week4-5-project-todo-list');
  expect(url).toContain('sd-01-week4-5-project-meme-generator');
})


//exercicio 5
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });

// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach

//exercicio 6.1
describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

//exercicio 6.2
describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe um animal com a idade procurada', () => {
    test('Retonre o objeto do animal', async () => {
      const objAnimal = await animalAge(2)
      expect(objAnimal).toEqual({ name: 'Soneca', age: 2, type: 'Dog' })
    })
  })
  describe('Quando não existe um animal com a idade procurada', () => {
    test('Retorna um erro',async () => {
      try {
        await animalAge(10)
      } catch (error) {
        expect(error).toBe('Nenhum animal com essa idade!')
      }
    })
  })
})
