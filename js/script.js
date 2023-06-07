console.log('Hello World!');

let form = document.getElementById('form')

form.addEventListener ('submit', function (e) {
    e.preventDefault()

    const newTaskInput = document.getElementById('new-task')
    
    let newTask = newTaskInput.value
   
let listElement = document.createElement ('li')
listElement.classList.add ('task')
listElement.innerHTML = `
<span class="word">${newTask}</span> <button> Delete </button> 
`

const unorederList = document.querySelector ('#unorder-list')
unorederList.appendChild (listElement)

const contentList = document.querySelectorAll('.word')
contentList.forEach ((span) => { 
    span.addEventListener ('click', function (e) {
    let wordClicked = e.target
    wordClicked = wordClicked.style.textDecoration = 'line-through'        
}) 
}) 

const deleteButton = document.querySelectorAll('.task button')

deleteButton.forEach ((button) => {
button.addEventListener ('click', function (e) {
    let buttonClicked = e.target
let taskToRemove = buttonClicked.parentElement
taskToRemove.remove()
})
})

newTaskInput.value = ''
})