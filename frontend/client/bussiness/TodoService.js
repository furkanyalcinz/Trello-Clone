const DUMMY_TODO_LIST = [
    {
        id:"1",
        title:"Test",
        description:"Test123 123 dfetdscnsjfdlflsdf wedfwdngfksd nfsdf swde wfedwsdlsdgkf.",
        expireDate:"22/01/2023",
        taskStatu :"1"
    }
]

export function ReturnTodoList(statu) {
    const result = []
    DUMMY_TODO_LIST.map((todo)=>{
        if(todo.taskStatu === statu){
            result.push(todo)
        }});
    return result
}

export function AddTodo(todo) {
    const todoModel = {id:todo.id, title:todo.title, description:todo.description, expireDate:todo.expireDate, taskStatu: "1"}
    DUMMY_TODO_LIST.push(todoModel);

}