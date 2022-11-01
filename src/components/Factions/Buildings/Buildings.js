import React from 'react';

export default function Buildings(buildings){
    console.log(buildings)
    return(
        <div className="building-list">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Faction</th>
                        <th>Max Level</th>
                    </tr>
                </thead>
                <tbody>

                {buildings.props.map(building => ( 
                        <tr className="unit-row"  key={building.id}>
                            <td>{building.id}</td>
                            <td>{building.name}</td>
                            <td>{building.faction}</td>
                            <td>{building.level}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}