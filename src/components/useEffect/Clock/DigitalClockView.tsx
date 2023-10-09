

//утилитная функция
import React from 'react';
import {ClockViewPropsType} from './HW_WatchDimych';

const getTwoDigits = (number: number) => {
    return number < 10 ? `0${number}` : number
}


export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{getTwoDigits(date.getHours())}</span>:<span>{getTwoDigits(date.getMinutes())}</span>:<span>{getTwoDigits(date.getSeconds())}</span></>
}