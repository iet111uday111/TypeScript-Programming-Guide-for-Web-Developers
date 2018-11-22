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

    deleteTodo(id: number):Promise<Todo[]>{
        let i = 0;
        for(let todo of this.todos){
            if(id == todo.id){
                this.todos.splice(i,1);
                let promise = new Promise((resolve, reject) => {
                    resolve(this.todos);
                });
                return promise;
            }
            i++;
        }
    }

    generateId():number{
        return Math.floor(Math.random() * 1000000000);
    }
}