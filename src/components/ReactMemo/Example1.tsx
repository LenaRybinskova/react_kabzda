import React, {useState} from 'react';

const NewMessagesCounter = (props: { count: number }) => {
    return (
        <div>{props.count}</div>
    )
}

//таблица
/*type UsersType={users:Array<string>}*/ // можно протипизировать аналогично прям в пропсах
const Users = (props: { users: Array<string> }) => {
    console.log('user отрисовалась')
    return (
        <div>{props.users.map((u, i) => <div>{u}</div>)}</div>
    )
}

const UserTrue = React.memo(Users)

const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Lena', 'Sasha', 'Anna'])

    const addUserHandler = () => {
       const newUsers=[...users, "Sveta" + new Date().getTime()]
        setUsers(newUsers)
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUserHandler}>add user</button>
            <NewMessagesCounter count={counter}/>
            <UserTrue users={users}/>
        </>
    );
};

export default Example1;