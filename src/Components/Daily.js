import React from "react";

const Daily = ({temps, mains}) => {

    return (
    <div style={{ textAlign: "center", color: "green" }}>
    <div className = "Daily">
    <u1>
        {temps.map((value,index)=>{

           return <div>Day: {index+1} -- Weather Forecast: {mains[index]} -- Temperature: {value}</div>
        })}
        </u1>
    </div>
    </div>
    );
}

export default Daily;