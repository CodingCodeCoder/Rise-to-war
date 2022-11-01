import React from "react";
import Commander from "../Factions/Commanders/Commander/Commander";
import Unit from "../Factions/Units/Unit/Unit";

import './style.css';

export default function UnitCompCard (unitComp ){
    return (
        <div className="unit-comp-card">
            <div>
                <Commander props={unitComp.props[0]} />
            </div>
            <div>
                <Unit props={unitComp.props[1]} />
            </div>
            <div>
                <Unit props={unitComp.props[2]} />
            </div>
            <div>
                <Unit props={unitComp.props[3]} />
            </div>
            <div>
                
            </div>
        </div>
    )
}