const database = require('../models');
const Sequelize = require('sequelize');


  class PessoaController {
    static async pegaTodasAsPessoas(req, res){
      try {
                                                        //filtrando com scope
        const todasAsPessoas = await database.Pessoas.scope('todos').findAll()
        return res.status(200).json(todasAsPessoas)  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async pegaTodasAsPessoasAtivas(req, res){
      try {
        const pessoasAtivas = await database.Pessoas.findAll()
        return res.status(200).json(pessoasAtivas)  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    



    static async pegaUmaPessoa(req, res) {
      const { id } = req.params
      try {
        const umaPessoa = await database.Pessoas.findOne( { 
          where: { 
            id: Number(id) 
          }
        })
        return res.status(200).json(umaPessoa)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }


    static async pegaUmaMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params
      try {
        const umaMatricula = await database.Matriculas.findOne( { 
          where: { 
            id: Number(matriculaId),
            estudante_id: Number(estudanteId)
          }
        })
        return res.status(200).json(umaMatricula)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    static async pegaMatriculasPorTurma(req, res) {
      const { turmaId } = req.params
      try {
        const todasAsMatriculas = await database.Matriculas.findAndCountAll({
          where: {
            turma_id: Number(turmaId),
            status: 'confirmado'
          },
          limit: 10, //limita a 1 registro  por pagina
          order: [['estudante_id', 'ASC']] //ordena por estudante_id de forma ascendente
        })
        return res.status(200).json(todasAsMatriculas)
        //return res.status(200).json(todasAsMatriculas.count)
         
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }




    static async pegaTurmasLotadas(req, res) {
      const lotacaoTurma = 2

      try {
        const turmasLotadas = await database.Matriculas.findAndCountAll({
          where: {
            status: 'confirmado'
          },
          attributes: ['turma_id'],
          group: ['turma_id'] ,// agrupa por turma_id
          having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`) // filtra por lotacaoTurma
         //usand o having que seria o mesmo quer  ter
          //verifica se o count de turma_id é maior ou igual a lotacaoTurma

        })
        return res.status(200).json(turmasLotadas)
   
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }






   static async cancelaPessoa(req, res) {
      const {estudanteId} = req.params

      try {
       await database.Pessoas
        .update({ative: false}, 
        {where: {id: Number(estudanteId)}})
        
       await database.Matriculas
       .update({ativo: false},
        {where: {estudante_id: Number(estudanteId)}})
        
        return res.status(200).json({message: ` cancelada com sucesso`})
   
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }






    
    static async criarMatricula(req, res) {
      const { estudanteId } = req.params
      const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
      try {
        const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
        return res.status(200).json(novaMatriculaCriada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }


    static async criaPessoa(req, res) {
      const novaPessoa = req.body
      try {
        const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
        return res.status(200).json(novaPessoaCriada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async atualizaPessoa(req, res) {
      const { id } = req.params
      const novasInfos = req.body
      try {
        await database.Pessoas.update(novasInfos, { where: { id: Number(id) }})
        const pessoaAtualizada = await database.Pessoas.findOne( { where: { id: Number(id) }})
        return res.status(200).json(pessoaAtualizada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    static async atualizarMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params
      const novasInfos = req.body
      try {
        await database.Matriculas.update(novasInfos, { 
          where: { 
            id: Number(matriculaId),
            estudante_id: Number(estudanteId) 
          }
        })
        const matriculaAtualizada = await database.Matriculas.findOne( { 
          where: { 
            id: Number(matriculaId),
            estudante_id: Number(estudanteId) 
          }
        })
        return res.status(200).json(matriculaAtualizada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    //deletar um registro
    static async apagaPessoa(req, res) {
      const { id } = req.params
      try {
        await database.Pessoas.destroy({ where: { id: Number(id) }})
        return res.status(200).json({ mensagem: `id ${id} deletado` })
  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
   //restaura um registro
   static async restauraPessoa(req, res) {
    const id = req.params.id;
    try {
      await database.Pessoas.restore({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} restaurado` })
    }catch(error){
      return res.status(500).json(error.message)
    }
   }



   //restaura matricula
   static async restauraMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.restore({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json({ mensagem: `id ${id} restaurado`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
 
 

    static async apagarMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params
      try {
        await database.Matriculas.destroy({ 
          where: { 
            id: Number(matriculaId),
            estudante_id: Number(estudanteId) 
          }
        })
        return res.status(200).json({ mensagem: `id ${id} deletado` })
  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
    static async pegaMatriculas(req, res) {
      const { estudanteId } = req.params

      try {

        const pessoa = await database.Pessoas.findOne({ where: { id: Number(estudanteId) }})
          
        const matriculas = await pessoa.getAulasMatriculadas()// aulasMatriculas é o nome do scope no modelo pessoa
        // const matriculas =await database.Matriculas.findAll({ 
        //   where: { 
        //     estudante_id: Number(estudanteId),
        //   }
        //}
        return res.status(200).json(matriculas )
  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  }
  
  module.exports = PessoaController;
  


