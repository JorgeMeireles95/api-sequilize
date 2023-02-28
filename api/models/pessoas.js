
//npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:strings --attributes nome:string,ativo:boolean,email:string,role:string

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoas.hasMany(models.Turmas,{
        foreignKey: 'docente_id' //defini o nome da chave estrangeira
      })//PessoasID ser eu nao definir o nome da chave estrangeira
      Pessoas.hasMany(models.Matriculas,{
        foreignKey: 'estudante_id'
      })
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
             //isEmail:true //valida se o email é valido
        isEmail: {
          args: true,//outra forma de validae e manda um mensagem, caso tenha um erro
          msg: 'e-mail inválido'
        }
      }
    },
      role: DataTypes.STRING
  }, {
    sequelize,
    paranoid:true, // soft delete apaga do sistema mas mantem no banco
    defaultScope:{ //para trazer por padrao os registros que nao foram deletados que no campo está como ativo: true
      where: {ativo: true}
    }, //para nao trazer os registros que foram deletados
   scopes:{
    todos:{where: {} } //como não tem nada dentro do where ele traz todos os registros
   },
    modelName: 'Pessoas',
  });
  return Pessoas;
};

//para impedir que o sequelize crie o nome da tabela no plural, basta adicionar o seguinte código no arquivo de configuração do sequelize
// sequelize.define('User', {
//   // ... (attributes)
// }, {
//   freezeTableName: true
// });


//para definir o nome na tabela que ser usada no banco usar o tableName
// sequelize.define('User', {
//   // ... (attributes)
// }, {
//   tableName: 'Employees'
// });