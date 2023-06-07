import s from "./OnOff.module.css"

type OnOffType={
    choice:boolean
}

export const OnOff =(props:OnOffType)=>{
    return(
        <div className={s.container}>
            <span className={`${s.standart} ${s.on} ${!props.choice && s.off}`}>ON</span>
            <span className={s.standart}>OFF</span>
            <span className={`${s.standart} ${s.circle} ${s.on} ${!props.choice && s.off}`}></span>
        </div>
    )
}