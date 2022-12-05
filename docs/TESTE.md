# Testes

Esta anotação tem como objetivo reunir material sobre TDD e como fazer testes no Adonis
# TDD

Acesse este [repositorio](https://github.com/PauloGoncalvesBH/aprenda-tdd-na-pratica) para entender e como praticar TDD. 

# Teste no Adonis

## Executar teste

```console
# Runs all tests
node ace test

# Only functional tests are executed
node ace test functional

# unit and functional tests are executed sequentially
node ace test unit functional

# Only tests with an "orders" or "upload" tag in the "unit" and "functional" suites
node ace test --tags="orders,upload" unit functional

```

## Suite de Teste

- Testes funcionais devem ser definidos dentro da página tests/functional/
- Testes unitários devem ser definidos dentro da página tests/unit/

## Criação de testes

### Criação de teste funcional

O comando node ace make:test aceita o nome da suite como primeiro argumento seguido no nome do teste.

```console
node ace make:test functional list_users

```

Para melhor organização pode ser criado uma estrutura de pasta.
Por exemplo todas os testes relativos a notas podem estar dentro da pasta notas

```console
node ace make:test functional notas/notas_test
```


