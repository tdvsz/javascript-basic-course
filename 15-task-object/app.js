'use strict'
let ToDoList = {
tasks: [],
idCounter: 1,

addTask: function(title, priority) {
    const newTask = { title, id: this.idCounter, priority };
    this.tasks.push(newTask);
    this.idCounter++;
},

deleteTask: function(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
},

updateTask: function(taskId, updatedFields) {
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
    this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedFields };
    }
},

sortTasks: function(param, reverseOrder) {
    this.tasks.sort((a, b) => {
    if (reverseOrder) {
        return b[param] - a[param];
    } else {
        return a[param] - b[param];
    }
    });
}
};

ToDoList.addTask('Помыть посуду', 1);
ToDoList.addTask('Починить телевизор', 3);
ToDoList.addTask('Сделать покупки', 1);
ToDoList.addTask('Забрать документы', 2);
console.log(ToDoList.tasks); // вывод

ToDoList.updateTask(1, { title: 'Навести порядок в комнате' });
console.log(ToDoList.tasks); // изменение задачи

ToDoList.sortTasks('id', true);
console.log(ToDoList.tasks); // сортировка по id

ToDoList.deleteTask(1);
console.log(ToDoList.tasks); // удаление задачи