// arquivo que vai rodar antes dos testes iniciarem
import { SetupServer } from '@src/server';
import supertest from 'supertest';

//roda antes de todos os testes
beforeAll(() => {
  //cria o servidor no ambiente de teste
  const server = new SetupServer();
  server.init();
  //seta a variavel serve no ambiente global para que o testes possam utilizar
  global.testRequest = supertest(server.getApp());
});
