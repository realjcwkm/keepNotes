'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tarefa extends Model {
    getFinalizada(finalizada){
        if(finalizada == 0){
            return false;
        }
        return true;
    }
}

module.exports = Tarefa
