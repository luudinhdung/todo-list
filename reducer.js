import storge from "./util/storge.js"
const init={
    todos:storge.get(),
    filter:'all',
    filters:{
        all:()=>true,
        active:todo=>!todo.completed,
        completed:todo=>todo.completed
    },
    indexEdit:null
}
const actions={
    add({todos},title){
        if(title){
            todos.push({title,completed:false})
            storge.set(todos)
        }
    },
    toggle({todos},index){
       const todo = todos[index]
      todo.completed=!todo.completed
    },
    toggleAll({todos},completed){
        todos.forEach(todo => {
           todo.completed= completed
        });
        storge.set(todos)
    },
    destroy({todos},index){
        todos.splice(index,1)
        storge.set(todos)
    },  
    switchFilter(state,filter){
        console.log(filter);
        state.filter=filter
    },
    clearCompleted(state){
        state.todos = state.todos.filter(state.filters.active)
        storge.set(state.todos)
    },
    editStart(state,index){
            state.indexEdit=index
    },
    editEnd(state,title){
        if(state.indexEdit!==null){
            if(title){
            state.todos[state.indexEdit].title=title
            storge.set(state.todos)
            }else{
                this.destroy(state,state.indexEdit)
            }
            state.indexEdit=null
        }
       
    },
    canelEdit(state){
        state.indexEdit=null
    }

}
export default function reducer(state = init , action, args){
    actions[action]&&actions[action](state,...args)
    return state   
}

const b=document.getElementById('input')
b.onkeyup=function(e){
    console.log(e.keyCode);
}