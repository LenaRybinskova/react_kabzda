import React from "react";

export type RatingvalueType =0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {

    ratingValue: RatingvalueType
    onClick: (ratingValue: RatingvalueType)=>void
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering")

    return (
        <div>
            <Star selected={props.ratingValue > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.ratingValue > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.ratingValue > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.ratingValue > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.ratingValue > 4} onClick={props.onClick} value={5}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingvalueType) =>void
    value: RatingvalueType
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={()=>{props.onClick(props.value)}}>{props.selected ? <b>star</b> : "star "}</span>


}
