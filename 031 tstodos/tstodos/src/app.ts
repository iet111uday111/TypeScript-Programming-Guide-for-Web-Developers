import $ = require('jquery');
import {Todos} from './lib/Todos';

// Instantiate Object
let todos = new Todos();

// Load All Todos
function loadTodos(){
    todos.getTodos().then((todos) => {
        for(let todo of todos){
            $('#todos').append(`
                <div class="col-lg-9 col-md-9">
                    <p>${todo.text}</p>
                </div>
                <div class="col-lg-3 col-md-3">
                    <button class="btn btn-danger">Delete</button>
                </div>
            `);
        }
    });
}

loadTodos();