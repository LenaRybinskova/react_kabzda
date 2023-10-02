import React, {useEffect, useState} from 'react';

const HwWatchLena = () => {
    console.log('рендер компоненты')

    const [hours, setHours] = useState(()=> new Date().getHours())
    const [minuts, setMinuts] = useState(()=> new Date().getMinutes())
    const [seconds, setSeconds] = useState(()=> new Date().getSeconds())

    useEffect(() => {
        console.log('эфф')
        setInterval(()=>{
            setHours(()=> new Date().getHours())
        },1000)
    }, [])

    useEffect(() => {
        console.log('эфф')
        setInterval(()=>{
            setMinuts(()=> new Date().getMinutes())
        },1000)
    }, [])

    useEffect(() => {
        console.log('эфф')
        setInterval(()=>{
            setSeconds(()=> new Date().getSeconds())
        },1000)
    }, [])

    const style:React.CSSProperties = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        fontSize:50,
        fontWeight:'bold'
    };

    return (
        <div style={style}>
            {hours}:{minuts}:{seconds}
        </div>
    );
};

export default HwWatchLena;