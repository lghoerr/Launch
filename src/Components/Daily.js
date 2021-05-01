import React from "react";

const Daily = (props) => {

    return (
    <div style={{ textAlign: "center", color: "green" }}>
    <div className = "Daily">
    <u1>
        {props.temps.map((value,index)=>{

           return <div>Day: {index+1} -- Weather Forecast: {props.mains[index]} -- Temperature: {value}</div>
        })}
        </u1>
    </div>
    </div>
    );
}

export default Daily;