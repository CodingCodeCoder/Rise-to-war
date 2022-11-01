import React from "react";
import Unit from './Unit/Unit';

export default function Units(Units){
    
    return(
        <div className="unit-list">
                {Units.props.map(unit => ( 
                    <Unit key={unit.id} props={unit}/>

                        // <tr className="unit-row"  key={unit.id}>
                        //     <td>{unit.id}</td>
                        //     <td>{unit.name}</td>
                        //     <td>{unit.race}</td>
                        //     <td>{unit.tier}</td>
                        //     <td>{unit.unlocked}</td>
                        //     <td>{unit.faction}</td>
                        // </tr>
                    ))}
        </div>
    )
}