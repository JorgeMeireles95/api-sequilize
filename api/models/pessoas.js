
//tabela criado apartir do comando npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Pessoas.associate = function(models) {
    // associations can be defined here
  };
  return Pessoas;
};


