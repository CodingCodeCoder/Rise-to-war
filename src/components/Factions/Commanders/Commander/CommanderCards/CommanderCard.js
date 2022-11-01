import React from "react";
import "./style.css";


export default function CommanderCard (Commander){
    return ( 
        <div className="commander-card one-fourth" >
            <table className={Commander.props.faction}>
                <tbody>
                    <tr>
                        <td colSpan={6}>
                            <h2>{Commander.props.name}</h2>
                        </td>
                    </tr>
                    <tr className="stats-tr">
                        <td colSpan={3}>
                            Type<br/>
                            {Commander.props.stats.type}
                        </td>
                        <td className="stats">
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
                    {Commander.props.skills.map(skill => (
                    <tr key={skill.id}>
                        <td colSpan={6}>
                            <h4>{skill.name}:</h4>
                            <div className="skill">
                                <p><em>{skill.requires}</em></p>
                                <p>{skill.description}</p>
                            </div>
                        </td>
                    </tr>

                    ))}
                </tbody>
            </table>
            
        </div>
    )
}