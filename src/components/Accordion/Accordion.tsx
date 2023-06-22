import React from "react";

type AccordionPropsType = {
    titleValue: string
    accordionCollapsed:boolean
    setAccordionCollapsed: () =>void

}

function Accordion1(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div><AccordionTitle title={props.titleValue}  setAccordionCollapsed={props.setAccordionCollapsed}/>
            {!props.accordionCollapsed && <AccordionBody/>}
        </div>)
}

// первоначальный вариант
// function Accordion2(props: AccordionPropsType) {
//     console.log("Accordion rendering")
//
//     if (props.collapsed) {
//         return (
//             <div><AccordionTitle title={props.titleValue}/></div>
//         )
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         );
//     }
//
// }


//----------------------------------------------------------------- как бы другая компонента
type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: () =>void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={props.setAccordionCollapsed}>{props.title}</h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion1;