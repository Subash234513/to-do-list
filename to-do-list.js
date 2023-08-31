let todoList=[];

renderTodoList();
function renderTodoList(){
    let todoListHtml='';
    for(let i=0; i<todoList.length;i++){
        const todo=todoList[i];
        const name=todo.name;
        const dueDate=todo.dueDate;
        const html=`
            <div>${name}</div>
            <div>${dueDate}</div>
             <button onclick="
             todoList.splice(${i},1);
             renderTodoList();
            ">Delete</button>`;
        todoListHtml+=html

    }
    console.log(todoListHtml);
    document.querySelector('.result')
     .innerHTML=todoListHtml;
}
function addTodo(){
    const inputElement=document.querySelector('.js-input');
    const name=inputElement.value;
    const dateInputElement=document.querySelector('.js-date');
    const dueDate=dateInputElement.value;
    todoList.push({
        name:name,
        dueDate:dueDate
    });
    console.log(todoList);
    inputElement.value=''
    dateInputElement.value='';
    renderTodoList();



}
function Enter(){
    if(event.key==='Enter'){
        addTodo();
    }
}