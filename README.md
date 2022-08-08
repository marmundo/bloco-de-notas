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