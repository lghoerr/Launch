import React from 'react';

const Hourly = (props) => {

return(
    <div style={{ textAlign: "center", color: "purple" }}>
    <div className = "Hourly">
        <u1>
            {props.temps.map((value,index)=>{
                return <div>Hour {index+1}: 
                -- Weather Forecast: {props.mains[index]} 
                -- Temperature: {value}</div>
            })}

        </u1>
    </div>
    </div>
);

}

export default Hourly;