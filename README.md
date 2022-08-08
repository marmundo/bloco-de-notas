Adonis JS

# Criar projeto 

 npm init adonis-ts-app@latest bloco-de-notas

# Executar projeto

npm run dev

# Para fazer consulta a ati usar o Thunder client (extensão VS Code)

https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client

# Rotas

## Definindo a primeira rota

```
Route.get(‘/‘, async()=> {
	return {hello: ‘world’}
})
```
## Listagem de Rotas

```node ace list:routes```
# Controller

## Criação de Rotas

```node ace make:controller <nome>```

## Extensão para Direcionar Controller

Adonis JS GOTO Controller (https://marketplace.visualstudio.com/items?itemName=stef-k.adonis-js-goto-controller)

## Atalho para crição de métodos http

```Route.resource('notas','NotasController').apiOnly()```

# Persistencia

## Comando para instalação do ORM Lucid

``` 
npm install @adonisjs/lucid
node ace configure @adonisjs/lucid
```
## Comando para criar modelo e migration
```node ace make:model <nome> -m```

## Comando para executar a migration
```node ace migration:run```