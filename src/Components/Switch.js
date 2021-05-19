import React, {useState} from "react";
import Hourly from "./Hourly";
import Daily from "./Daily";

const Switch = ({hourTemps, hourMains, dayTemps, dayMains}) =>{

    const [name, setName] = useState("Hourly");
    const [isHourly, setIsHourly] = useState(false);

    const onClick = (e) => {
        if(name==="Daily"){
            setName("Hourly");
            setIsHourly(true);
        }
        else{
            setName("Daily");
            setIsHourly(false);
        }
    }

    return (
      <div className="Switch">
        <div>
          <button onClick={onClick}>Switch Hourly/Daily</button>
        </div>
        <div>
          {isHourly ? (
            <Hourly temps={hourTemps} mains={hourMains} />
          ) : (
            <Daily temps={dayTemps} mains={dayMains} />
          )}
        </div>
      </div>
    );
};

export default Switch;