import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}


function AccordionUncontrolled(props: AccordionPropsType) {
    console.log("Accordion rendering")

    const [collapsed, setCollapsed] = useState(false)

    const onClickHandle=()=>{
        setCollapsed(!collapsed)
        console.log(collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={onClickHandle}/>
            {collapsed && <AccordionBody/>}

        </div>)
}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>7</li>
            <li>8</li>
            <li>9</li>
        </ul>
    )
}

export default AccordionUncontrolled;