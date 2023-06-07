import React from 'react';
import './App.css';
import Accordion1 from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log("App rendering")
    return (
        <div>
            <Accordion1 titleValue={"Menu"} collapsed={true}/>
            <Accordion1 titleValue={"Users"} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>


            <OnOff choice={false}/>
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
