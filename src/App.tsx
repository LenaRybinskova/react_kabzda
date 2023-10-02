import React, {useState} from 'react';
import './App.css';
import Accordion1 from './components/Accordion/Accordion';
import {Rating, RatingvalueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import AccordionUncontrolled from './components/AccordionUncontrolled/AccordionUncontrolled';
import {RatingUncontrolled} from './components/RatingUncontrolled/Rating';
import {OnOff_controlled} from './components/OnOff_Controlled/OnOff_controlled';

import {
    ControlledChecbox,
    ControlledInput, ControlledSelected,
    GetValueOfUncontrolledInputByButtonPress,
    TrackValueOfUncontrolledInput
} from './components/Inputs_with_useRef/InputUncontrolled';

import {log} from 'util';
import {Select_YA_Sdelela} from './components/Select/Select_YA_Sdelela';
import {SelectDimich} from './components/Select/Select_Dimich';
import AccordionUncontrolled_with_UseReducer from './components/AccordionUncontrolled/AccordionUncontrolled';
import AccordionUncontrolled_with_useReducer
    from './components/AccordionUncontrolled_with_UseReducer/AccordionUncontrolled_with_useReducer';
import Example1 from './components/ReactMemo/Example1';
import Example2 from './components/ReactMemo/Example2';

import {Example4Select} from './components/ReactMemo/Example4Select';
import LikesUseCallBack from './components/ReactMemo/LikesUseCallBack';
import UseStateWithUseMemo from './components/useState/UseStateWithUseMemo';
import UseStateWithSelfHook from './components/useState/UseStateWithSelfHook';
import UseStateFunction from './components/useState/UseStateFunction';
import {UseEffectExample1} from './components/useEffect/UseEffectExample1';
import {UseEffectExample2} from './components/useEffect/UseEffectExample2';
import {UseEffectExampleSetTimeOut} from './components/useEffect/UseEffectExampleSetTimeOut';
import {UseEffectExampleSetInterval} from './components/useEffect/UseEffectExampleSetInterval';
import HwWatchLena from './components/useEffect/HW_WatchLena';


function App() {
    console.log('App rendering')

    {/*// это для контролируемого компонента*/
    }
    // let [ratingValue, setRatingValue] =useState<RatingvalueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [swintchOn, setSwitchOn] = useState(true)

    {/*// это для контролируемого компонента Accordion1*/
    }
    const callback = (value: any) => {
        console.log('some item was clicked', value)
    }

    // для кастомного селекта  Select_YA_Sdelela
    const [value, setvalue] = useState('Выберите имя..')
    const onChangeHandler = (title: string) => setvalue(title)


    // для кастомного селекта  Dimich
    const [valueDimich, setValueDimich] = useState('2')

    return (
        <div>
            {/*// это для контролируемого компонента*/}
            {/*<Accordion1*/}
            {/*    titleValue={"Menu"}*/}
            {/*    accordionCollapsed={accordionCollapsed}*/}
            {/*    setAccordionCollapsed={()=>setAccordionCollapsed(!accordionCollapsed)}*/}
            {/*    items={[]}*/}
            {/*    onClick ={callback}*/}
            {/*/>*/}
            {/*<Accordion1*/}
            {/*    titleValue={"Users"}*/}
            {/*    accordionCollapsed={accordionCollapsed}*/}
            {/*    setAccordionCollapsed={()=>setAccordionCollapsed(!accordionCollapsed)}*/}
            {/*    items={[{title:"Lena", value:"1"},{title:"Sasha", value:"2"}]}*/}
            {/*    onClick ={callback}*/}
            {/*/>*/}


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

            {/*/!* это для НЕконтролируемого компонента*!/*/}
            {/*<AccordionUncontrolled titleValue={"Menu"}/>*/}
            {/*<AccordionUncontrolled titleValue={"Users"}/>*/}
            {/*<AccordionUncontrolled titleValue={"blabla"}/>*/}

            {/* это для НЕконтролируемого АККОРДИОНА с UseReducer*/}
            {/*            <AccordionUncontrolled_with_useReducer titleValue={'Menu'}/>*/}


            {/*// это для контролируемого инпута  с отслеживанием что ввели*/}
            {/*<TrackValueOfUncontrolledInput/>*/}
            <br/>
            {/*<GetValueOfUncontrolledInputByButtonPress/>*/}
            {/*<br/>*/}
            {/*<ControlledInput/>*/}
            {/*<br/>*/}

            {/*// это для контролируемого чекбокса*/}
            {/*<ControlledChecbox/>*/}

            <br/>
            {/*// это для контролируемого селекта*/}
            {/*<ControlledSelected/>*/}

            {/*/!* это для Селекта который делала я*!/*/}
            {/*<Select_YA_Sdelela*/}
            {/*    value={value}*/}
            {/*    items={[{title: "Sasha", value: 1}, {title: "Lena", value: 2}, {title: "Anna", value: 3}]}*/}
            {/*    onChange={onChangeHandler}*/}
            {/*/>*/}


            {/*// это для Селекта который делал Димыч*/}
            {/*            <SelectDimich
                onChange={setValueDimich}
                value={valueDimich}
                items={[
                    {value: '1', title: 'Minsk1'},
                    {value: '2', title: 'Minsk2'},
                    {value: '3', title: 'Minsk3'}]
                }/>*/}

            {/*            <Example4Select/>*/}

            {/*            это для REACT.memo*/}
            {/*            <Example1/>*/}
            {/*            <Example2/>*/}
            {/*            <HelpsToReactMemo/>*/}
            {/*<LikesUseCallBack/>*/}

            {/*            <UseStateWithUseMemo/>*/}
            {/*            <UseStateWithSelfHook/>*/}
            {/*            <UseStateFunction/>*/}

{/*            <UseEffectExample1/>*/}
{/*            <UseEffectExample2/>*/}
{/*            <UseEffectExampleSetTimeOut/>*/}

            <HwWatchLena/>
        </div>)
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return (
        <h1>{props.title}</h1>)
}


export default App;
