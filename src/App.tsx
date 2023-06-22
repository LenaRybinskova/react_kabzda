import React, {useState} from 'react';
import './App.css';
import Accordion1 from "./components/Accordion/Accordion";
import {Rating, RatingvalueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import AccordionUncontrolled from "./components/AccordionUncontrolled/AccordionUncontrolled";
import {RatingUncontrolled} from "./components/RatingUncontrolled/Rating";
import {OnOff_controlled} from "./components/OnOff_Controlled/OnOff_controlled";

function App() {
    console.log("App rendering")

    {/*// это для контролируемого компонента*/
    }
    // let [ratingValue, setRatingValue] =useState<RatingvalueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [swintchOn, setSwitchOn] = useState(true)

    return (
        <div>
            {/*// это для контролируемого компонента*/}
            {/*<Accordion1 titleValue={"Menu"} accordionCollapsed={accordionCollapsed} setAccordionCollapsed={()=>setAccordionCollapsed(!accordionCollapsed)}/>*/}
            {/*<Accordion1 titleValue={"Users"} accordionCollapsed={accordionCollapsed} setAccordionCollapsed={()=>setAccordionCollapsed(!accordionCollapsed)}/>*/}

            {/*// это для контролируемого компонента*/}
            {/*<Rating ratingValue={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating ratingValue={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating ratingValue={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating ratingValue={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating ratingValue={ratingValue} onClick={setRatingValue}/>*/}

            {/*// это для НЕконтролируемого компонента*/}
            {/*<RatingUncontrolled value={1}/>*/}
            {/*<RatingUncontrolled value={2}/>*/}
            {/*<RatingUncontrolled value={3}/>*/}
            {/*<RatingUncontrolled value={4}/>*/}
            {/*<RatingUncontrolled value={5}/>*/}

            {/*это для контролируемого компонента*/}
            {/*<OnOff_controlled on={swintchOn} onChange={setSwitchOn}/>*/}

            {/*<hr/>*/}

            {/*это для НЕконтролируемого компонента*/}
            {/*<OnOff onChange={setSwitchOn}/>*/}
            {/*//синхронизация*/}
            {/*{swintchOn.toString()}*/}

            {/*<OnOff/>*/}
            {/*<OnOff/>*/}

            {/*// это для НЕконтролируемого компонента*/}
            {/*<AccordionUncontrolled titleValue={"Menu"}/>*/}
            {/*<AccordionUncontrolled titleValue={"Users"}/>*/}

            <AccordionUncontrolled titleValue={"blabla"}/>
        </div>)
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>{props.title}</h1>)
}


export default App;
