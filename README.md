# Duas contas GIT em um PC
1 - vá em C:\Program Files\Git\etc\gitconfig e abra o arquivo no VSCode
2 - exclua dois módulos de Credential 
[credential]
	helper = manager
[credential "https://dev.azure.com"]
	useHttpPath = true

 PRONTO!
