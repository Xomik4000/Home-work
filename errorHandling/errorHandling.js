function safeDivide(a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль невозможно")
    }
    return a / b
}

try {
    safeDivide(4, 0)
} catch (e) {
    console.log("Ошибка:", e.message);
} // Первое задание



function transfromJSON(str) {
    const userJson = JSON.parse(str)
    if (userJson.name === undefined) {
        throw new Error('Имя не заполнено')
    }
    if (!userJson.age) {
        throw new Error('Возраст не заполнен')
    }
    return userJson
}

 
try {
    const user = '{ "name": "Alex", "age": 24 }'
    console.log(transfromJSON(user));
} catch (e) {
    console.log('Ошибка:', e.message);
} // Второе задание

function checkAccess(age) {
    if (age < 18) {
        throw new Error('Доступ запрещён!!!')
    }
    return age
}

try {
    console.log(checkAccess(17));
} catch (e) {
    console.log('Ошибка:', e.message);
} // Третье задание