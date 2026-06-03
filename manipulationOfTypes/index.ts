interface User {
    id: number;
    name: string;
    email: string;
}

type UserKeys = keyof User // 'id' | 'name' | 'email'

function getUserProp(obj: User, key: UserKeys) {
    return obj[key];
}

const user: User = { id: 1, name: 'Alice', email: 'alice@example.com'}
const userId = getUserProp(user, 'id') // 1

const person = {
    name: 'Alice',
    age: 30
}

type PersonType = typeof person

interface User1 {
    id: number;
    name: string;
    email: string;
}

type UserIdType = User1['id']
type UserNameType = User1['name']

function getId(user: User1): User1['id'] {
    return user.id
}

type IsString<T> = T extends string ? 'Это строка' : 'Это не строка';

type Test1 = IsString<string>
type Test2 = IsString<number>


type PartialUser = {
    [Key in keyof User1]?: User1[Key]
}

type ReadonlyUser = {
    readonly [Key in keyof User1]: User1[Key]
}

type Direction = 'top' | 'bottom' | 'left' | 'right';
type Size = 'small' | 'medium' | 'large'

type Position = `${Direction}-${Size}`

type Event1 = 'click' | 'hover' | 'focus'

type EvenHandlers = {
    [K in Event1 as `on${Capitalize<K>}`]: () => void;
}

type HexColor = `#${string}`;

let color1: HexColor = '#ff5733'
let color2: HexColor = 'ff5733'