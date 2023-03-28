const key = 'TODO'
export default {
    get(){
        return JSON.parse(localStorage.getItem(key)) || []
    },
    set(todos){
        localStorage.setItem(key,JSON.stringify(todos))
    }
}
