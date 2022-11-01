import React from "react";
import "./style.css";

export default function Unit (Unit){
    return (
        <div className="unit-card">
            <table className="unit-table">
                <tbody>
                    <tr><td colSpan={4}><h1>{Unit.props.name} - {Unit.props.tier}</h1></td></tr>
                    <tr><td colSpan={2}>Units/Command:</td><td colSpan={2}>{Unit.props.stats.per_command}</td></tr>
                    <tr><td colSpan={2}>Attack Type:</td><td colSpan={2}>{Unit.props.attack_type}</td></tr>
                    <tr><td>Damage:</td><td>{Unit.props.stats.damage}</td><td>Speed:</td><td>{Unit.props.stats.speed}</td></tr>
                    <tr><td>HP:</td><td>{Unit.props.stats.hp}</td><td>Siege:</td><td>{Unit.props.stats.siege}</td></tr>
                    <tr><td>Defence:</td><td>{Unit.props.stats.defence}</td></tr>
                    {/* <tr><td colSpan={4}>
                            <div>
                                Conscription cost per Command:<br/>
                                Wood:{Unit.props.stats.conscription_per_command.wood} - 
                                Ore: {Unit.props.stats.conscription_per_command.ore} - 
                                Grain: {Unit.props.stats.conscription_per_command.grain}<br/>
                                Build time: {Unit.props.stats.conscription_per_command.build_time_in_min} minutes.
                            </div>
                        </td>
                    </tr> */}
                </tbody>
            </table>
            
        </div>
    )
}