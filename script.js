const butTaskCreator = document.querySelector('.taskCreator');
const taskOutput = document.querySelector('.taskOutput');
const taskName = document.querySelector('.taskName');
const taskDescritpion = document.querySelector('.taskDescription');
const taskDate = document.querySelector('.taskDate');
const taskLabel = document.querySelector('.taskLabel');
let tasksNames = [];
let tasksDescritpions = [];
let tasksDates = [];
let tasksLabels = [];
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
    tasksNames[taskNumber] = taskName.value;
    tasksDescritpions[taskNumber] = taskDescritpion.value;
    tasksDates[taskNumber] = taskDate.value;
    tasksLabels[taskNumber] = taskLabel.value;
    remainTime = Math.ceil((Date.parse(tasksDates[taskNumber]) - timeCurrent)/1000/60/60/24);
    
    taskCurrent.textContent = `${taskNumber} :${tasksNames[taskNumber]} ${tasksDescritpions[taskNumber]} ${tasksDates[taskNumber]} ${tasksLabels[taskNumber]} il vous reste ${remainTime} jours`;
    taskOutput.append(taskCurrent);
    taskNumber++;
}

butTaskCreator.addEventListener('click', taskCreator);