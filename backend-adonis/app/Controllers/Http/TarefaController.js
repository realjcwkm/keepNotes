'use strict'
const Tarefa = use('App/Models/Tarefa')

class TarefaController {
    // index( {request, response} ){
    //     return Tarefa.all().then((listaDeTarefas) => {
    //         return listaDeTarefas;
    //     });
    // }
    async index({ response }) {
        return await Tarefa.all();
    }

    async create( {request, response}){
        const tarefaParams = request.post();

        const tarefa = new Tarefa();
        tarefa.descricao = tarefaParams.tarefa.descricao;
        tarefa.finalizada = tarefaParams.tarefa.finalizada;
                
        if(await tarefa.save()){
            response.created(tarefa);
        }
        else{
            response.unprocessableEntity();
        }
    }

    async update( {params, request, response} ){
        const tarefaId = await Tarefa.findOrFail(params.id);
        const tarefa = request.only(['descricao', 'finalizada']);

        tarefaId.merge({...tarefa});

        if(await tarefaId.save()){
            return response.status(200).send();
        }
        return response.status(204).send();
    }
}

module.exports = TarefaController
