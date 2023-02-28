//comando para gerar a migration
//com ele se criar a tabela no banco de dados
//npx sequelize-cli db:migrate
//este comando defaz a migration, em caso de uma mudança que tenha dado erro
//npx sequelize-cli db:migrate:undo  //só desfaz a ultima migration
'use strict';//obs: as migrations ou tabelas sao criadas na ordem que foram criadas
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    //adiciona a coluna deletedAt na tabela Pessoas   //nome da coluna
    await queryInterface.addColumn('Pessoas', 'deletedAt', {
        allowNull:true,
        type:Sequelize.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    //remove a coluna deletedAt da tabela Pessoas   //nome da coluna
    await queryInterface.removeColumn('Pessoas', 'deletedAt');
  }
};