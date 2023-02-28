'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Turmas.hasMany(models.Matriculas,{
      foreignKey: 'turma_id'
     })

     Turmas.belongsTo(models.Pessoas, {
      foreignKey: 'docente_id'
     }) // fazendo o outro lado da relação
     Turmas.belongsTo(models.Niveis,{
      foreignKey: 'nivel_id' //fazendo a relação com os dois lados
     }) // fazendo o outro lado da relação
    }
  }
  Turmas.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    paranoid:true, // soft delete apaga do sistema mas mantem no banco
    modelName: 'Turmas',
  });
  return Turmas;
};