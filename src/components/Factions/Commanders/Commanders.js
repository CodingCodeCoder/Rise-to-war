import React, { useEffect , useState } from "react";
import Commander from "./Commander/Commander";


export default function Commanders(unitsCommanders ){
    console.log(unitsCommanders.props[[1]]);
    function CommanderSelected (commander) {
        //console.log(commander);

    }



    return(
        <div className="commander-list">
                <h3>Select a Commander</h3>
                {unitsCommanders.props[[1]].map(commander => (
                    <div className="commander-list-name" key={commander.id} onClick={function(e){CommanderSelected(commander)}}>
                        <h2>
                            {commander.name}
                        </h2>
                    </div>
                ))}


                {/* {Commanders.props.map(commander => ( 
                <Commander key={commander.id} props={commander} />
                ))} */}
        </div>
    )
}