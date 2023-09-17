import React from "react";

type ItemType ={
    title: string
    value:any
}

type AccordionPropsType = {
    titleValue: string
    accordionCollapsed:boolean
    setAccordionCollapsed: () =>void
    items: ItemType[]
    onClick:(value:any)=>void
}

function Accordion1(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div><AccordionTitle title={props.titleValue} onChanges={props.setAccordionCollapsed}/>
            {!props.accordionCollapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>)
}




{/*----------------------------------------------------------------- как бы другая компонента AccordionTitle*/}
type AccordionTitlePropsType = {
    title: string
    onChanges: () =>void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={props.onChanges}>{props.title}</h3>
    );
}

{/*//----------------------------------------------------------------- как бы другая компонента AccordionBody*/}
type AccordionBodyTYpe={
    items: ItemType[]
    onClick:(value:any)=>void
}
            
function AccordionBody(props: AccordionBodyTYpe) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map((i, index)=><li key={index} onClick={()=>props.onClick(i.value)}>{i.title} </li>)}
        </ul>
    )
}

export default Accordion1;