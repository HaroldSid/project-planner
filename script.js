const butTaskCreator = document.querySelector('.taskCreator');
const taskOutput = document.querySelector('.taskOutput');
const taskName = document.querySelector('.taskName');
const taskDescritpion = document.querySelector('.taskDescription');
const taskDate = document.querySelector('.taskDate');
const taskLabel = document.querySelector('.taskLabel');
let tasks = [];
let taskNumber = 0;
let columnToSort = 0;

const sortFunction=(a, b) =>{
    if (a[columnToSort] === b[columnToSort]) {
        return 0;
    }
    else {
        return (a[columnToSort] < b[columnToSort]) ? -1 : 1;
    }
}



const taskCreator = () => { 

    const taskCurrent = document.createElement('p');
    const timeCurrent = Date.now();
    let remainTime = Date();

    remainTime = Math.ceil((Date.parse(taskDate.value) - timeCurrent) / 1000 / 60 / 60 / 24);
    
    tasks[taskNumber] = [taskNumber, taskName.value, taskDescritpion.value, taskDate.value, taskLabel.value, remainTime ]
    
    taskCurrent.textContent = `${tasks[taskNumber][0]} :${tasks[taskNumber][1]} ${tasks[taskNumber][2]} ${tasks[taskNumber][3]} ${tasks[taskNumber][4]} il vous reste ${tasks[taskNumber][5]} jours`;

    taskOutput.append(taskCurrent);
    
    taskNumber++;
}

butTaskCreator.addEventListener('click', taskCreator);