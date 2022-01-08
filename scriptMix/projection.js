'use strict';
// ***************projection***********************
// получаем data из json
const getData = async (callback) => {
    const response = await fetch('../dbHeroes.json');
    if (response.ok) {
        const result = await response.json();
        // а без await будет опять промисс
        callback(result);
    }
};

getData(console.log); // console.log как callback
//*********************** */
// здесь возвр Arr
const projection1 = (fields, obj) => Object.keys(obj)
    .filter(field => fields.includes(field))
    .reduce((newObj, key) => {
        newObj[key] = obj[key];
        return newObj;
}, {});

getData(data => {
    const newHeroes = data // прогон через поджекшн
        .map(item => projection1(['realName', 'citizenship'], item));
    console.log('newHeroes :', newHeroes);
});

    //************************** */
// здесь возвр Obj
const projection2 = meta => {
    const keys = Object.keys(meta);
    return obj => {
        const newObj = {};
        keys.forEach(key => {
            const def = meta[key]; //def - дефолтное
            const [field, fn] = def;
            const val = obj[field]; // достаем по field
            newObj[key] = fn ? fn(val) : val;
        });
        return newObj;
    };
};

const metaData2 = {
    hero: ['name'],
    films: ['movies'],
    nations: ['citizenship', city => city ? city.toUpperCase() : 'no data'],
}

getData(data => {
    const metaDataProj2 = projection2(metaData2);
    const newHeroes2 = data.map(metaDataProj2);
    console.log('newHeroes2: ', newHeroes2);
});

/********************************* */
// позволяет много fn в metaData
const projection3 = meta => {
    const keys = Object.keys(meta);
    return obj => keys.reduce((newObj, key) => {
        // получаем по key и снова прогоняем ч/з reduce
        newObj[key] = meta[key].reduce((val, fn, index) => index ? fn(val) : obj[fn], null);
        return newObj;
    }, {})
};

const metaData3 = {
    hero: ['name'],
    films: ['movies',
        arr => (arr ? arr.join(', ') : false),
        movie => (movie ? movie.toLowerCase() : 'no data')],
    nations: ['citizenship', city => (city ? city.toUpperCase() : 'no data')],
}

getData(data => {
    const metaDataProj3 = projection3(metaData3);
    const newHeroes3 = data.map(metaDataProj3);
    console.log('newHeroes3: ', newHeroes3);
});
