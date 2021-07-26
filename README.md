# rascunho do readme:
- começa montando o projeto;
- express-typescript serão usados;
## segunda aula:
- instalação e ultilização do typeorm para trabalhar com banco de dados;
- criação do arquivo ormconfig.json;
- criação da migration users;
- instalação do uuid;
- criar entidade User;
- criar repository User;
- criar service User;
- criar controller User;
## terceira aula: 
- criação do middleware para tratamento de exeções;
- instalação da biblioteca express-async-errors;
- criação e implementação de tags da mesma forma que users;
-não permitir que usuário não administradores cadastrem tags
## quarta aula:
- ultilização do jsonwebtoken para sessão e login;
- criação e implementação de compliments da mesma forma que users;
- criação de regras para mandar um elogio;
## quinta aula:
- criação do middleware ensure authendicated;
- modificação do express(request) para guardar id do usuário;
- correção do ensure admin;
- correção dos compliments(pegar userSender do request);
- finalização do projeto :-)