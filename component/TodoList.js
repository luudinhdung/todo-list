import html from "../core.js";
import TodoItems from "./TodoItems.js";
import { connect } from "../store.js";
const connector=connect()
function TodoList({todos,filter,filters,indexEdit}){
    return html`
            <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox"
            onchange=dispatch('toggleAll',this.checked)
            ${todos.every(filters.completed)&&'checked'}
            >
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos
                    .filter(filters[filter])
                    .map((todo,index)=>TodoItems(todo,index,indexEdit) )}                
            </ul>
            </section>
    `
}
export default connector(TodoList)

