import React, {useState, KeyboardEvent, useEffect, MouseEventHandler} from 'react';
import styles from './Select_Dimich.module.css'

type ItemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

//  урок 18. НЕ ДОДЕЛАЛА, надо сделать селект с юзМемо и РЕАКТ.мемо
export function Example4Select() {

    const state = [
        {age: 10, name: 'Anna'},
        {age: 15, name: 'Sasha'},
        {age: 10, name: 'Ira'},
        {age: 15, name: 'Vika'},
        {age: 10, name: 'Olya'},
        {age: 20, name: 'Dima'}
    ]

    const [active, setActive] = useState(false)
    const [value, setValue] = useState(state[0].name)
    const [selectName, setSelectName]=useState("")

    const toggleItems = () => setActive(!active)

    const selectHandler=(name:string)=>{
        setValue(name)
        toggleItems()
    }

    return (
        <>
            <div tabIndex={0}>
                <span onClick={toggleItems}>{value}</span>
                {active &&
                    <div>
                        {state.map((el, i) =>
                            <div key={i} onClick={()=>selectHandler(el.name)}>{el.name}</div>)}
                    </div>
                }
            </div>
        </>
    )
}