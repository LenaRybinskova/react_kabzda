import s from "./OnOff_controlled.module.css"
import {useState} from "react";

type OnOff_controlledType = {
    on: boolean
    onChange: (on: boolean)=>void
}


export const OnOff_controlled = (props:OnOff_controlledType) => {




    // используем инлайн стили
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display:"inline-block",
        padding:"2px",
        backgroundColor: props.on ? "green": "white"
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"2px",
        padding:"2px",
        backgroundColor: props.on ? "white": "red"
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        backgroundColor:props.on ? "green": "red"
    }


    return (
        // писала для стилизации модулями
        // <div className={s.container}>
        //     <span className={`${s.standart} ${s.on} ${!props.on && s.off}`}>ON</span>
        //     <span className={s.standart}>OFF</span>
        //     <span className={`${s.standart} ${s.circle} ${s.on} ${!props.on && s.off}`}></span>
        // </div>

        // делаем стиль инлайн
        <div>
            <div style={onStyle} onClick={()=>{props.onChange(true)}}>ON</div>
            <div style={offStyle} onClick={()=>{props.onChange(false)}}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}