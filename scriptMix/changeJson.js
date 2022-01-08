const myLesson = [
    {lesson: 1, type: 'basic', points: 2, tasks: {one: 'test', two: 'test2', three: 'test3'}},
    {lesson: 2, type: 'additional', points: 4, tasks: {one: 'test'}},
    {lesson: 3, type: 'basic', points: 6, tasks: {one: 'test'}},
    {lesson: 4, type: 'additional', points: 3, tasks: {one: 'test', two: 'test2'}},
    {lesson: 5, type: 'basic', points: 4, tasks: {one: 'test', two: 'test2'}},
    {lesson: 6, type: 'basic', points: 2, tasks: {one: 'test'}},
    {lesson: 7, type: 'additional', points: 2, tasks: {one: 'test', two: 'test2'}},
    {lesson: 8, type: 'basic', points: 6, tasks: {one: 'test', two: 'test2'}},
    {lesson: 9, type: 'basic', points: 4, tasks: {one: 'test'}},
    {lesson: 10, type: 'basic', points: 6, tasks: {one: 'test', two: 'test2'}},
    {lesson: 11, type: 'additional', points: 5, tasks: {one: 'test', two: 'test2'}},
    {lesson: 12, type: 'basic', points: 2, tasks: {one: 'test', two: 'test2'}},
    {lesson: 13, type: 'additional', points: 2, tasks: {one: 'test'}},
    {lesson: 14, type: 'basic', points: 4, tasks: {one: 'test', two: 'test2', three: 'test3'}},
    {lesson: 15, type: 'additional', points: 1, tasks: {one: 'test', two: 'test2'}},
    {lesson: 16, type: 'additional', points: 7, tasks: {one: 'test', two: 'test2'}},
];
console.log('myLesson: ', myLesson);

{// Заменим test на task, points/2, Данные в новый массив
// ({...obj}) в скобках чтобы js не думал что fn
// во время forEach нельзя удалить из массива
const createNew = (arr) => {
    const newArr = JSON.parse(JSON.stringify(arr));
    newArr.forEach((obj, key) => {
        // не сработает - последний останется
        //if(obj.type === 'additional') newArr.splice(key, 1);
        obj.points = obj.points / 2;
        let i = 0;
        for(const val in obj.tasks) {
            obj.tasks[val] = `taskName${++i}`;
        }
    });
    return newArr;
};
const newMyLesson = createNew(myLesson);
console.log('newMyLesson: ', newMyLesson);
}

{// basic points / 2. Изменить исходный массив
// исх меняется, т.к. при переборе obj - это ссылки на них в исх arr
// const changeOrig = (arr) => arr.forEach(obj => obj.points = obj.points / 2);
// changeOrig(myLesson);
// console.log('change myLesson: ', myLesson);
}

{// basic points / 2. Данные в новый массив
// // ({...obj}) в скобках чтобы js не думал что fn
// const createNew = (arr) => {
//     const newArr = arr.map(obj => ({...obj}));
//     newArr.forEach(obj => obj.points = obj.points / 2);
//     return newArr;
// };
// const newMyLesson = createNew(myLesson);
// console.log('newMyLesson: ', newMyLesson);
}

{// Заменим test на task Данные в новый массив
// ({...obj}) в скобках чтобы js не думал что fn
// const createNew = (arr) => {
//     const newArr = arr.map(obj => ({...obj}));
//     newArr.forEach(obj => {
//         let i = 0;
//         for(const val in obj.tasks) {
//             obj.tasks[val] = `taskName${++i}`;
//         }
//     });
//     return newArr;
// };
// const newMyLesson = createNew(myLesson);
// console.log('newMyLesson: ', newMyLesson);
}

{// Del все additional, а basic points / 2. Изменить исходный массив

// const myMap = new Map();
// myLesson.forEach(item => myMap.set(item));
// for (let i = myLesson.length; i--;) {
//     myLesson.splice(i, 1);
// }
// myMap.forEach((item, key) => {
//     const {lesson, type, points} = key;
//     if (type === 'additional') myMap.delete(key);
//     if (type === 'basic') {
//         let myObj = Object.assign(key);
//         let elemObj = myObj.points / 2;
//         myObj.points = elemObj;
//         myLesson.push(key);
//     }
// });
// console.log('This new myLesson: ', myLesson);
}

{ // Del все additional, а basic points / 2. Данные в новый массив
// const myMap = new Map();
// myLesson.forEach(item => myMap.set(item));
// myMap.forEach((item, key) => {
//     const {lesson, type, points} = key;
//     if (type === 'additional') {
//         myMap.delete(key);
//     }
//     if (type === 'basic') {
//         const myObj = Object.assign(key);
//         const elemObj = myObj.points / 2;
//         myObj.points = elemObj;
//     }
// });
// const newMyLesson = Array.from(myMap.keys());
// console.log('newMyLesson: ', newMyLesson);
}
