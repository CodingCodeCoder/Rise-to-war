import React from "react";
import "./style.css";


export default function Commander (Commander){
    return ( 
        <div className="commander-card" >
            <table>
                <tbody>
                    <tr>
                        <td colSpan={6}>
                            <h2>{Commander.props.name}</h2>
                        </td>
                    </tr>
                    <tr className="stats-tr">
                        <td colSpan={4}>
                            Type<br/>
                            {Commander.props.stats.type}
                        </td>
                    </tr>
                    <tr>
                        <td className="stats" colSpan={4}>
                            <div className="one-third" >
                                Might <br/>{Commander.props.stats.might}
                                </div><div className="one-third" >
                                Focus <br/>{Commander.props.stats.focus}
                                </div><div className="one-third" >
                                Speed <br/>{Commander.props.stats.speed}
                            </div>
                        </td>
                    </tr>
                    <tr><td colSpan={6}>Skills</td></tr>
                    {/* {Commander.props.skills.map(skill => (
                    <tr key={skill.id}>
                        <td colSpan={6}>
                            <h4>{skill.name}:</h4>
                            <div className="skill">
                                <p><em>{skill.requires}</em></p>
                                <p>{skill.description}</p>
                            </div>
                        </td>
                    </tr>

                    ))} */}
                </tbody>
            </table>
            
        </div>
    )
}