import {TodosClassInterface} from './TodosClassInterface';
import {Todo} from './TodoInterface';
import {Promise} from 'es6-promise';

export class Todos implements TodosClassInterface{
    todos:Todo[];

    constructor(){
        this.todos = [
            {
                id: 1,
                text: 'My Todo One'
            },
            {
                id: 2,
                text: 'My Todo Two'
            },
            {
                id: 3,
                text: 'My Todo Three'
            }
        ];
    }

    getTodos():Promise<Todo[]>{
        let promise = new Promise((resolve, reject) => {
            resolve(this.todos);
        });
        return promise;
    }

    addTodo(todo:Todo):Promise<Todo>{
        this.todos.push(todo);

        let promise = new Promise((resolve, reject) => {
            resolve(todo);
        });
        return promise;
    }

    generateId():number{
        return Math.floor(Math.random() * 1000000000);
    }
}