import React, {useMemo, useState} from 'react';


const Users = (props: { users: Array<string> }) => {
    console.log('users должна отрис только при изм юзеров')
    return (
        <div>{props.users.map((u, i) => <div>{u}</div>)}</div>
    )
}

const UserTrue = React.memo(Users) // обертка в ХОК

const HelpsToReactMemo = () => {
    console.log('отрисовка родит комп HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Lena', 'Sasha', 'Anna'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('s') > -1)
    }, [users])

    const addUserHandler = () => {
        const newUsers=[...users, "Sveta" + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUserHandler}>add user</button>
            {counter}
            {/*            нам к примеру нужно зафильтровать юзеров, но тогда компон юзерс (даже замемоизированная) будет постоянно отрисовыватья. значит надо это все поместить в юзМемо*/}
            {/*            <UserTrue users={}/>*/}
            <UserTrue users={newArray}/>
        </>
    );
};

export default HelpsToReactMemo;