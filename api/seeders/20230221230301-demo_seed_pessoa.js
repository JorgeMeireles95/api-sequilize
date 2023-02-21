'use strict';

//Para gerar um seed o comando:
//npx sequelize-cli seed:generate --name demo_seed_pessoa

//sicronizar o seed com o banco de dados
//npx sequelize-cli db:seed:all


//só terá qe gerar o seed uma vez na mão, depois o seed popula a tabela automaticamente
//para desfazer o seed
//npx sequelize-cli db:seed:undo ,somente desfaz o ultimo seed

//para fazer de uma tabela especifica
//npx sequelize-cli db:seed:undo --seed nome-do-arquivo


//para desfazer todos os seeds
//npx sequelize-cli db:seed:undo:all



//para ver todos os seeds
//npx sequelize-cli db:seed:all

//novos id serão gerados quando um seed e desfeito e depois refeito
/** @type {import('sequelize-cli').Migration} */
module.exports = {

  //inserir dados na tabela
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Pessoas', [
        {
          nome: 'Ana Souza',
          ativo: true,
          email: 'ana@ana.com',
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Marcos Cintra',
          ativo: true,
          email: 'marcos@marcos.com',
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Felipe Cardoso',
          ativo: true,
          email: 'felipe@felipe.com',
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Sandra Gomes',
          ativo: false,
          email: 'sandra@sandra.com',
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Paula Morais',
          ativo: true,
          email: 'paula@paula.com',
          role: 'docente',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Sergio Lopes',
          ativo: true,
          email: 'sergio@sergio.com',
          role: 'docente',
          createdAt: new Date(),
          updatedAt: new Date()
        }
  
     ], {});
    
  },

  //remover dados da tabela
  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Pessoas', null, {});
    
  }
};
