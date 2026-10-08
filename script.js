
const task = document.getElementById('taskForm')
const sendBtn = document.getElementById('sendBtn')


sendBtn.addEventListener('click', function(event) {

    event.preventDefault()

    const data = new FormData(task)
    const newTask = Object.fromEntries(data.entries())

    console.log("New task created with success ", newTask)

    task.reset()

}) 



