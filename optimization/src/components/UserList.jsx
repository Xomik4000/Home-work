import { useState, memo} from 'react'

const User = memo(({name}) => {
  console.log('Ререндер:', name);
  return <li>{name}</li>
})

function UserList() {
  const [users, setUsers] = useState(['Анна', 'Игорь'])

  return (
    <div>
      <button onClick={() => setUsers([...users, 'Новый'])}>Добавить</button>
      <ul>
        {users.map((name, index) => (
          <User key={index} name={name} />
        ))}
      </ul>
    </div>
  )
}

export default UserList //Первое задание