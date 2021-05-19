import React from 'react';

const Hourly = ({temps, mains}) => {

return(
    <div style={{ textAlign: "center", color: "purple" }}>
    <div className = "Hourly">
        <u1>
            {temps.map((value,index)=>{
                return <div>Hour {index+1}: 
                -- Weather Forecast: {mains[index]} 
                -- Temperature: {value}</div>
            })}

        </u1>
    </div>
    </div>
);

}

export default Hourly;