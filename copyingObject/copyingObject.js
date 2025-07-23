const student = {
    name: 'Александр',
    age: 24,
    address: {
        city: 'Краснодар',
        street: 'Красная',
    },
    hobby: ['баскетбол', 'видеоигры', 'готовка']
}

const shallowCopyStudent = Object.assign({}, student);

const shallowCopyStudent2 = { ...student };

shallowCopyStudent.hobby[0] = 'футбол';
shallowCopyStudent2.address.city = 'Москва'

console.log(shallowCopyStudent);
console.log(shallowCopyStudent2);
console.log(student.hobby[0]);
console.log(student.address.city); //Первое задание
/*при поверхностном копированни, если изменить в скопированном объекте значение вложенных объетов
 и массивов, то они изменятся и в исходном объекте(копирование происходит на первом уровне) 
 поэтому они всё ещё копируюся по ссылке, а не по значению.
*/
const user = {
    name: 'Alice',
    age: 30,
    address: {
        city: 'Wonderland',
        zip: '12345'
    },
    sayHi: () => console.log('Hello, Alice')
};

const deepCopyUser = JSON.parse(JSON.stringify(user));

console.log(user.sayHi()); // Тут стрелочная функция вызывается
// console.log(deepCopyUser.sayHi()); //Второе задание: выдаёт ошибку sayHi is not a function (sayHi не является функцией), потому что функция при вызове JSON.stringify получает undefined.


function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') { 
        return obj;
    }
     /*Это базовый случай в рекурсии, чтобы функция могла закончится.
    Если obj это null, или это не объект, то возвращаем как есть,
    потому что примитивные типы данных копируются по значению 
*/
    const copy = Array.isArray(obj) ? [] : {}; 
    /*Это тернарный оператор, который проверяет, если obj это массив,
    то создаём пустой массив, иначе пустой объект в переменную copy
    */
    for (let key in obj) { //с помощью цикла перебираем все свойства объекта
        if (obj.hasOwnProperty(key)) {
    //с помощью hasOwnProperty(key) проверяем, принадлежит ли свойство не прототипу, а самому объекту 
            copy[key] = deepCopy(obj[key]) // рекурсивно вызываем фунцию deepCopy для каждого значения
        }
    }
    return copy //возвращает новый скопированный объект
} //Третье задание

