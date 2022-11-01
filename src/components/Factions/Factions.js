import React, { useEffect, useState} from "react";
import UnitList from './unitlist';
//import Buildinglist from "./buildinglist";
import Commanderlist from "./commanderlist";
//import Buildings from "./Buildings/Buildings";
import Units from "./Units/Units";
import Commanders from "./Commanders/Commanders"
import './style.css';
import UnitCompCard from "../UnitComposition/UnitCompCard";

export default function Factions () {
    const [unitCommander, setUnitCommander] = useState([[]]);
    const [html, setHtml ] = useState([]);
    var dataIsLoaded = false;
    var tempUnitList = UnitList();
    var tempCommanderList = Commanderlist();
    const goodFactionList = ["Good","Lothlorien","Arnor","Erebor","Lindon","Rohan","Gondor"];
    const evilFactionList = ["Evil","Mordo","Rhun","Angmar"];
    var unitComp = [];
    var officialUnitCommanderList= [[],[],[],[]];
    //const [building, seBuilding] = useState([]);

    /**
     * This useEffect loads all units and commander data for use in the app.
     */
    useEffect(() => {
        if (!dataIsLoaded) {
            //Commander loading Good and then Evil
            for (let i = 0; i < tempCommanderList.length; i++) {
                const element = tempCommanderList[i];
                for (let j = 0; j < goodFactionList.length; j++) {
                    if (element.faction === goodFactionList[j]) {
                        officialUnitCommanderList[0].push(element);
                    }
                }
                for (let j = 0; j < evilFactionList.length; j++) {
                    if (element.faction === evilFactionList[j]) {
                        officialUnitCommanderList[2].push(element);
                    }
                }
            }
            
            //Unit loading Good and then Evil
            for (let i = 0; i < tempUnitList.length; i++) {
                const element = tempUnitList[i];
                for (let j = 0; j < goodFactionList.length; j++) {
                    if (element.faction === goodFactionList[j]) {
                        officialUnitCommanderList[1].push(element);
                    }
                }
                for (let j = 0; j < evilFactionList.length; j++) {
                    if (element.faction === evilFactionList[j]) {
                        officialUnitCommanderList[3].push(element);
                    }
                }
            }
            dataIsLoaded = true;
        }
    }, [])


    function onClickFaction(affiliation){
        if (affiliation) {
            setHtml(
                <ul>
                    <h2>Pick a Commander</h2>
                    {officialUnitCommanderList[0].map( commander => (
                        <li key={commander.id} onClick={function (e){onClickCommander(commander);}}>{commander.name}</li>
                    ))}
                </ul>
            );
        } else {
            console.log(officialUnitCommanderList[1]);
            console.log(officialUnitCommanderList[3]);
        }
        
    }

    function onClickCommander(commander){
        unitComp.push(commander);
        console.log(unitComp[0]);
        setHtml(
            <ul>
                <h2>Pick up to 3 units</h2>
                {officialUnitCommanderList[1].map( unit => (
                        <li key={unit.id} onClick={function (e){onClickUnit(unit)}}>{unit.name}</li>
                    ))}
            </ul>
        )
    }

    function onClickUnit(unit){
        unitComp.push(unit);
        if (unitComp.length === 4){
           setHtml (
                <UnitCompCard props={unitComp} />
            )
        }
    }
    return (
            <div className="factions-selector-card">
                <table className="table-selector-card">
                    <tbody>
                        <tr>
                            <td><div onClick={function (e){onClickFaction(true)}} className="faction-lothlorien"><img alt="" id="faction-image-lothlorien"/><h2>Good</h2></div></td>
                            <td><div onClick={function (e){onClickFaction(false)}} className="faction-mordor"><img alt="" id="faction-image-mordor"/><h2>Evil</h2></div></td>
                        </tr>
                    </tbody>
                </table>
                <div className="content">
                    {/* <Buildings props={Buildinglist()}/> */}
                    {/* <Units props={unit}/> */}
                    {html}
                </div>
            </div>
    )
}