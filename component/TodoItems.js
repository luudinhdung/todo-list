import html from "../core.js";
function TodoItems(todo,index,indexEdit){
    
    return html`
            <li class="${todo.completed  && 'completed'} ${indexEdit === index && 'editing'}" >
            <div class="view">
                <input class="toggle"  
                onchange="dispatch('toggle',${index})" 
                type="checkbox" ${todo.completed  && 'checked'}>   
                <label 
                ondblClick="dispatch('editStart',${index})">${todo.title}
                </label>
                <button class="destroy" onclick="dispatch('destroy',${index})"></button>
            </div>
            <input 
            class="edit" value="${todo.title}"
            onkeyup="event.keyCode === 13 && dispatch('editEnd',this.value.trim()) || event.keyCode===27 && dispatch('canelEdit')"
            onblur="dispatch('editEnd',this.value.trim())"
            >
            </li>
            `
}
export default TodoItems    
