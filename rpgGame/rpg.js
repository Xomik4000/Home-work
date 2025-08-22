const character = {
    name: 'Геральт',
    health: 100,
    isAlive: true,
    strength: 16,
    protection: 5,
    level: 1,
    inventory: [
        {
            name: 'зелье здоровья',
            health: 30,
            quantity: 3
        },
        {
            name: 'щит',
            protection: 5,
            quantity: 1
        }
    ],
    isDefending: false,
    attack(target) {
        if (!target.isAlive || target.health <= 0) {
            return;
        }

        let effectiveProtection = target.protection;
        if (target.isDefending) {
            effectiveProtection *= 2;
            target.isDefending = false
        }

        const damage = Math.max(0, this.strength - effectiveProtection)

        target.health = Math.max(0, target.health - damage)
        writeLog(`${this.name} атакует ${target.name}а и наносит ${damage} урона. Здоровье врага: ${target.health}`)

        if (target.health === 0) {
            target.isAlive = false;
            this.level += 1
            updateStats(this);
            writeLog(`${target.name} мёрт вы получаете новый уровень. Ваш уровень: ${this.level}.`)
        } 
    },
    useOfInventory(itemName) {
        for (let i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].name === itemName) {
                const item = this.inventory[i];

                if (item.quantity <= 0) {
                    writeLog(`Невозможно использовать ${itemName}, он закончился`)
                    return;
                }

                if (item.health) {
                    this.health += item.health;
                    writeLog(`${this.name} использует ${item.name} и восстанавливает ${item.health} здоровья.`)
                }

                if (item.protection) {
                    this.protection += item.protection
                    writeLog(`${this.name} использует ${item.name} и получает ${item.protection} к защите.`)
                }

                item.quantity -= 1;
                updateStats(this)
                return;
            }
        }
        writeLog(`${this.name} не нашёл ${itemName} в инвентаре`)
    },
    defend() {
        this.isDefending = true
        writeLog(`${this.name} защищается, и увеличивает свою защиту на ${this.protection} `)
    }
}

const goblin = {
    name: 'Гоблин',
    isAlive: true,
    health: 30,
    protection: 5,
    strength: 14,
    attack(target) {
        if (!target.isAlive || target.health <= 0) return;

        let effectiveProtection = target.protection;
        if (target.isDefending) {
            effectiveProtection *= 2;
            target.isDefending = false
        }
        
        const damage = Math.max(0, this.strength - effectiveProtection)

        target.health = Math.max(0, target.health - damage)
        updateStats(target)

        writeLog(`${this.name} атакует ${target.name}а и наносит ${damage} урона. Ваше здоровье: ${target.health}`);
        if (target.health === 0) {
            target.isAlive = false;
            writeLog(`${target.name} пал в бою. Игра окончена!`)
        } 
    }
}

const ork = {
    name: 'Орк',
    isAlive: true,
    health: 40,
    protection: 8,
    strength: 15,
    attack(target) {
        if (!target.isAlive || target.health <= 0) return;

        let effectiveProtection = target.protection;
        if (target.isDefending) {
            effectiveProtection *= 2;
            target.isDefending = false
        }
        
        const damage = Math.max(0, this.strength - effectiveProtection)

        target.health = Math.max(0, target.health - damage)
        updateStats(target)
        
        writeLog(`${this.name} атакует ${target.name}а и наносит ${damage} урона. Ваше здоровье: ${target.health}`);
        if (target.health === 0) {
            target.isAlive = false;
            writeLog(`${target.name} пал в бою. Игра окончена!`)
        } 
    }
}

function resetGame() {
    character.name = 'Геральт';
    character.health = 100;
    character.isAlive = true;
    character.strength = 16;
    character.protection = 8;
    character.level = 1;
    character.isDefending = false;
    character.inventory = [
        { name: 'зелье здоровья', health: 30, quantity: 3 },
        { name: 'щит', protection: 5, quantity: 1 }
    ]

    goblin.isAlive = true;
    goblin.health = 30;
    goblin.protection = 5;
    goblin.strength = 14;
    
    ork.isAlive = true;
    ork.health = 40;
    ork.protection = 8;
    ork.strength = 15;

    window.currentEnemy = null
    const pos = document.getElementById('position')
    if (pos) {
        pos.textContent = 'Деревня'
    }

    const logWindow =document.getElementById('log')
    if (logWindow) {
        logWindow.innerHTML = ''
    }

    updateStats(character)
    writeLog('Новая игра начата. Выбирите локацию')
}



updateStats(character)

function updateStats(character) {
    document.getElementById('name').textContent = character.name
    document.getElementById('health').textContent = character.health
    document.getElementById('strength').textContent = character.strength
    document.getElementById('protection').textContent = character.protection
    document.getElementById('level').textContent = character.level
    document.getElementById('inventory').textContent =
        character.inventory
            .filter(it => it.quantity > 0)
            .map(it => `${it.name} x${it.quantity}`)
            .join(', ') || '(инвентарь пуст)';     
}

const logWindow = document.getElementById('log'); // окно журнала

const attackButton = document.getElementById('attack')
const protectionButton = document.getElementById('protection-button')
const inventoryButton = document.getElementById('inventory-button')
const forestButton = document.getElementById('forest')
const dungeonButton = document.getElementById('dungeon')
const villageButton = document.getElementById('village')
const restartButton = document.getElementById('restart-button')

restartButton.addEventListener('click', function() {
    resetGame()
})

attackButton.addEventListener('click', function() {
    if (!currentEnemy || !currentEnemy.isAlive) {
        writeLog('Враг побеждён. Перейдите в следующую локацию.')
        return
    };
    character.attack(currentEnemy)
    if (currentEnemy.isAlive) {
        currentEnemy.attack(character)
    }
});

protectionButton.addEventListener('click', () => {
    console.log('нажать');
    if (!currentEnemy || !currentEnemy.isAlive){
        writeLog('Враг побеждён. Перейдите в следующую локацию.')
        return
    } 
    character.defend()
    currentEnemy.attack(character)
})

inventoryButton.addEventListener('click', function() {
    if (!currentEnemy || !currentEnemy.isAlive){
        writeLog('Враг побеждён. Перейдите в следующую локацию.')
        return
    } 
    const choice = prompt(
        'Выберите предмет: \n1 - зелье здоровья\n2 - щит',
        '1'
    );

    const map = {
        '1': 'зелье здоровья',
        '2': 'щит'
    }

    const itemName = map[choice]
    if (!itemName) {
        writeLog('Предмет не выбран');
        return;
    }

    character.useOfInventory(itemName)
    updateStats(character)

    currentEnemy.attack(character)
})


//перемещение
forestButton.addEventListener('click', function() {
    document.getElementById('position').textContent = 'Лес'
    writeLog('Вы переместились в лес.')
    currentEnemy = goblin
    writeLog(`Вас атакует ${currentEnemy.name}`)
})

dungeonButton.addEventListener('click', function() {
    document.getElementById('position').textContent = 'Подземелье'
    writeLog('Вы переместились в подземелье.')
    currentEnemy = ork
    writeLog(`Вас атакует ${currentEnemy.name}`)
})


villageButton.addEventListener('click', function() {
    document.getElementById('position').textContent = 'Деревня'
    writeLog('Вы вернулись в деревню.')
    writeLog('Вы в безопасном месте.')
})



function writeLog(message) {
    const entry = document.createElement('p')
    entry.textContent = message;
    logWindow.appendChild(entry)
} // добавление в журнал



