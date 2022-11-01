
export default function unitlist(){
    const commanderList = [
        {
            id:1,
            name:"Agzok",
            faction:"Evil",
            stats:{
                type:"Warrior",
                
                might:91,
                focus: 44,
                speed:51
            },
            food:"Decorative Beast Bone and Roast Warg Meat",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Pursuer",
                    max_effect:"Damage bonus effects are modified by Speed",
                    description:"Commander Damage dealt +1.3%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Deepen Wounds",
                            effect: "Against 1 Enemy Target(s) Deals 42.8% Physical Damage and next damage received +3% (effect modified by Might stat.)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Overwhelm",
                            effect: "Against Unit with the Lowest Defence Deals 28.5% Physical Damage and an additional 42.8% Physical Damage after 1 round",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Black Numenorean",
                    max_effect:"Evil HP +2",
                    description:"Commander Normal attacks inflict an additional 10% Focus Damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Dark Mantle",
                            effect: "Against All Enemies Physical Damage received +2%",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Black Ares",
                            effect: "Against 2 Enemy Targets deals 22.2% Focus Damage (effect modified by Focus stat), cannot recover HP for 1 round(s)",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Shadow of the Mist",
                    max_effect:"Duration extended to 3 rounds",
                    description:"Rush Against 1 Enemy Unit(s) Each round deals 12% Physical Damage(continuous) once for 2 rounds.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Laceration",
                            effect: "Against 12 Target Inflicts Bleed and deals 10% damage for 3 rounds.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Weapon Expertise",
                            effect: "Commander 50% chance of gaining Damage +7.1%",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Mountain Warrior",
                    max_effect:"Speed +15",
                    description:"Agzok Against ranged units damage dealt +2%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Seeker",
                            effect: "Commander Damage against ranged units +3.5%",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Heart Seeker",
                            effect: "Against Enemy target with the lowest HP deals 35.7% Physical Damage once",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:2,
            name:"Maltok",
            faction:"Evil",
            stats:{
                type:"Leader",
                
                might:65,
                focus: 71,
                speed:92
            },
            food:"Decorative Beast Bone and Kire Horn",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Pursuer",
                    max_effect:"Damage bonus effects are modified by Speed",
                    description:"Commander Damage dealt +1.3%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Deepen Wounds",
                            effect: "Against 1 Enemy Target(s) Deals 42.8% Physical Damage and next damage received +3% (effect modified by Might stat.)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Overwhelm",
                            effect: "Against Unit with the Lowest Defence Deals 28.5% Physical Damage and an additional 42.8% Physical Damage after 1 round",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Easterling",
                    max_effect:"Might +15",
                    description:"Commander Normal attacks cause enemy stats -1.3% for 1 round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Evil Alliance",
                            effect: "Evil and Orcs damage received -2%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Iron Guard",
                            effect: "50% change of reducing physical damage received by 4.2%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Interrogator",
                    max_effect:"Damage bonus effects are modified by speed.",
                    description:"Enemies Stunned or subject to madness damage received +6.6% for 1 round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Laceration",
                            effect: "Against 12 Target Inflicts Bleed and deals 10% damage for 3 rounds.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Restrain",
                            effect: "Against 2 Enemy Units 14.3% chance to inflict Stun for 1 round.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Warg Trainer",
                    max_effect:"Wargs Immune to madness",
                    description:"Allies with Wargs Damage dealt +2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Warg Healing",
                            effect: "Round 5 Allied Units with Wargs Recover 22.8% HP (effect modified by Focus stat.)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Beast Taming",
                            effect: "Units with wargs defence +5.7",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:3,
            name:"Khaldoon",
            faction:"Evil",
            stats:{
                type:"Leader",
                
                might:82,
                focus: 61,
                speed:78
            },
            food:"Decorative Beast Bone and Kire Horn",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Experienced Warrior",
                    max_effect:"Self Damage against Melee units +10%",
                    description:"Commander Normal Attack Damage +4%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Hunt Down",
                            effect: "After the Commander Attacks against enemy target damage dealt +1.6% (effect modificer by Might stat) for 2 rounds, up to 2 stacks.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Collaboration",
                            effect: "Commander Normal attacks cause an additional 17.8% Physical Damage.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Easterling",
                    max_effect:"Might +15",
                    description:"Commander Normal attacks cause enemy stats -1.3% for 1 round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Evil Alliance",
                            effect: "Evil and Orcs damage received -2%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Iron Guard",
                            effect: "50% change of reducing physical damage received by 4.2%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Speardancer",
                    max_effect:"Poison effect extends by 1 round.",
                    description:"Against 1 Enemy Target deals 10% physical damage, then inflicst 10% poison damage (countinous) every round for 1 round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Envenom",
                            effect: "Commander Normal attacks cause an additional 10.7% poison damage..",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Brawler",
                            effect: "Commander damage agains melee units +3.5%.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Marshal of the East-Mark",
                    max_effect:"Focus +15",
                    description:"Melee units 50% chance of reducins damage received by 2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Tribal Tactics",
                            effect: "Eveil Men 3.6% chance to gain Follow Up.)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Quick Sand",
                            effect: "Against 2 enemy units Damage received +2.8%, 10% chance to inflict Stun each round.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:4,
            name:"Sharky",
            faction:"Evil",
            stats:{
                type:"Strategist",
                
                might:57,
                focus: 87,
                speed:88
            },
            food:"Decorative Beast Bone and Dark Lord's Emblem",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Arsonist",
                    max_effect:"Normal attacks inflict brn damage twice, dealing less damage with each succesive hit.",
                    description:"Commander normal attacks inflickt 106.6% burn damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Arson",
                            effect: "Against 2 enemy Targets deals 18.5% burn Damage twice. Each seperate attack chooses a different target.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Fuel Oil",
                            effect: "Against  All enemies burn damage received +2.8%.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Warband Leader",
                    max_effect:"Acts as 2 commanders when completing tips.",
                    description:"Army march speed +1%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Logistics",
                            effect: "Army Siege +1.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Collector",
                            effect: "Resources gathered +3%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Conspirator",
                    max_effect:"Commander physical damage cannot be decreased further.",
                    description:"Commander poison and burn damage +2.3%, physical damage -1.3%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Treason",
                            effect: "First 4 rounds agains 2 enemy units 14.3% chance of succumbing to Madness each round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Trickery",
                            effect: "Against 1 enemy unit deals 60% physical damage once. 50% chance to inflict Madness for 1 round.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Warg Trainer",
                    max_effect:"Wargs Immune to madness",
                    description:"Allies with Wargs Damage dealt +2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Warg Healing",
                            effect: "Round 5 Allied Units with Wargs Recover 22.8% HP (effect modified by Focus stat.)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Beast Taming",
                            effect: "Units with wargs defence +5.7",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:5,
            name:"Grima",
            faction:"Evil",
            stats:{
                type:"Support",
                
                might:30,
                focus: 87,
                speed:85
            },
            food:"Decorative Beast Bone and Dark Lord's Emblem",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Wormtongue",
                    max_effect:"Target's Migth -50.",
                    description:"Enemy Commander inflict Madness, Focus -3.3 for 1 round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Master of Mischief",
                            effect: "Against 2 Enemy units inflict Madnes, Defense -5 for 1 round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Enfeeble",
                            effect: "Against Enemies Subject to Madness Damage received +5.7%.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Second-in-Command",
                    max_effect:"Focus +15.",
                    description:"Commander Focus +1 Allied Melee Units damage dealt +1% during combat.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Discipline",
                            effect: "Army Defence +5.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Anticipation",
                            effect: "Allied Unit with the lowest defense 10.7% chance to evade all damage from the next 4 attacks.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Survivor",
                    max_effect:"Takes effect in round 4.",
                    description:"Round 5 Onwards allied units damage received -2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Deftness",
                            effect: "Commander Focus and Speed +1%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Prudence",
                            effect: "First 2 rounds all allied units 7.1% chance to evade damage, damage -30%.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Wizard's Assistant",
                    max_effect:"Focus +15.",
                    description:"Commander Normal attacks have a 50% chance of dealing an additional 18.6% poison damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Outflank",
                            effect: "Against Enemy Ranged Units damage dealt +2%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Lower Defences",
                            effect: "On hit against enemy army 50% chance to receive an additional 4.2% damage.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:6,
            name:"Yusraa",
            faction:"Evil",
            stats:{
                type:"Warrior",
                
                might:76,
                focus: 87,
                speed:70
            },
            food:"Decorative Beast Bone and Kine Horn",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Experienced Warrior",
                    max_effect:"Self Damage against Melee units +10%",
                    description:"Commander Normal Attack Damage +4%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Hunt Down",
                            effect: "After the Commander Attacks against enemy target damage dealt +1.6% (effect modificer by Might stat) for 2 rounds, up to 2 stacks.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Collaboration",
                            effect: "Commander Normal attacks cause an additional 17.8% Physical Damage.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Warband Leader",
                    max_effect:"Acts as 2 commanders when completing tips.",
                    description:"Army march speed +1%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Logistics",
                            effect: "Army Siege +1.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Coollector",
                            effect: "Resources gathered +3%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Easterling",
                    max_effect:"Might +15",
                    description:"Commander Normal attacks cause enemy stats -1.3% for 1 round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Evil Alliance",
                            effect: "Evil and Orcs damage received -2%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Iron Guard",
                            effect: "50% change of reducing physical damage received by 4.2%.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Interrogator",
                    max_effect:"Damage bonus effects are modified by speed.",
                    description:"Enemies Stunned or subject to madness damage received +6.6% for 1 round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Laceration",
                            effect: "Against 12 Target Inflicts Bleed and deals 10% damage for 3 rounds.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Restrain",
                            effect: "Against 2 Enemy Units 14.3% chance to inflict Stun for 1 round.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:7,
            name:"Ugthak",
            faction:"Evil",
            stats:{
                type:"Warrior",
                
                might:94,
                focus: 41,
                speed:45
            },
            food:"Decorative Beast Bone and Dark Lord's Emblem",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Pursuer",
                    max_effect:"Damage bonus effects are modified by Speed",
                    description:"Commander Damage dealt +1.3%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Deepen Wounds",
                            effect: "Against 1 Enemy Target(s) Deals 42.8% Physical Damage and next damage received +3% (effect modified by Might stat.)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Overwhelm",
                            effect: "Against Unit with the Lowest Defence Deals 28.5% Physical Damage and an additional 42.8% Physical Damage after 1 round",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Searing Axe",
                    max_effect:"Increases the chance of triggering burn damage by 5%.",
                    description:"Ugthak Normal attacks have a 30% chance of dealing additional 13.3% burn damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Scorch",
                            effect: "Against 2 enemy targets deals 30% burn damage (continuous) every round and damage received +3.5%",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Brawler",
                            effect: "Commander damage agains melee units +3.5%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Uruk-hai Elite",
                    max_effect:"Speed +15",
                    description:"Commander Might +0.8% allied Uruk-hai and Orcs defense +2 in combat.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Uruk-hai Captain",
                            effect: "Uruk-hai 35% chance of recovering 14.2% HP after dealing damage.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Dangerous Trade",
                            effect: "Allied units damage receiver + 5%, damage dealt +4%.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Warlord",
                    max_effect:"Might +15.",
                    description:"Uruk-hai and Orcs Damage + 2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Battering Ram",
                            effect: "Army Siege +2.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Orcish Warlord",
                            effect: "Orcs Speed +2 and damage received -2%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:8,
            name:"Gorbag",
            faction:"Evil",
            stats:{
                type:"Leader",
                
                might:85,
                focus:62,
                speed:74
            },
            food:"Decorative Beast Bone and Roast Warg Meat",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Interrogator",
                    max_effect:"Damage bonus effects are modified by speed.",
                    description:"Enemies Stunned or subject to madness damage received +6.6% for 1 round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Laceration",
                            effect: "Against 12 Target Inflicts Bleed and deals 10% damage for 3 rounds.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Restrain",
                            effect: "Against 2 Enemy Units 14.3% chance to inflict Stun for 1 round.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Old Orc",
                    max_effect:"Focus +15.",
                    description:"Commander Focus +2 and Might -1.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Clear-headed",
                            effect: "Time needed to complete tips -3%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Dress Wounds",
                            effect: "1 Allied units recover 57.1%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Grey Leader",
                    max_effect:"Orcs HP +1.",
                    description:"Orcs Damage received -1%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:2,
                            type:"Skill",
                            name:"Orcish Warlord",
                            effect: "Orcs Speed +2 and damage received -2%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"March",
                            effect: "Army March Speed +3%.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Watchman of Cirith Ungol",
                    max_effect:"Orcs Immune to Madness.",
                    description:"Orcs Damage +2%, has a 30% chance of succumbin to madness.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Enrage",
                            effect: "All Allied units 30% chance of succumbin to Madness, damage +8.5% for 1 round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Corrupting Curse",
                            effect: "Each Round agains 1 enemy unit deals 38% poison damage (continuous) once for 2 rounds. 30% chance to inflict madness.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:9,
            name:"Shagrat",
            faction:"Evil",
            stats:{
                type:"Support",
                
                might:91,
                focus:37,
                speed:35
            },
            food:"Decorative Beast Bone and Roast Warg Meat",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"The Reckless",
                    max_effect:"Might +15.",
                    description:"Each round commander damage dealth +2%, 10% change of succumbing to Madness.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Break Defences",
                            effect: "Against 1 enemy targets deals 37.1% physical damage, defence - 4.2% for 1 round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Topple",
                            effect: "Against 1 Enemy Units deals physical damage once. 50% chance to stun for 1 round.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Captor",
                    max_effect:"Effect extended to 2 rounds.",
                    description:"Against 1 enemy unit inflicts stun, damage received -54.1% for 1 round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Heavily Wounded",
                            effect: "Against 1 Enemy Targets deals 70% physical Damage, cannot recover HP for 2 rounds.",
                            max_level:7
                        },{
                            id:1,
                            type:"Skill",
                            name:"Laceration",
                            effect: "Against 12 Target Inflicts Bleed and deals 10% damage for 3 rounds.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Watchman of Cirith Ungol",
                    max_effect:"Orcs Immune to Madness.",
                    description:"Orcs Damage +2%, has a 30% chance of succumbin to madness.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Enrage",
                            effect: "All Allied units 30% chance of succumbin to Madness, damage +8.5% for 1 round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Corrupting Curse",
                            effect: "Each Round agains 1 enemy unit deals 38% poison damage (continuous) once for 2 rounds. 30% chance to inflict madness.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Cirith Ungol Garrison",
                    max_effect:"Focus +15.",
                    description:"Orcs Damage +2%, has a 30% chance of succumbin to madness.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Uruk-hai Captain",
                            effect: "Uruk-hai 35% chance of recovering 14.2% HP after dealing damage.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Discipline",
                            effect: "Army Defence +5..",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:10,
            name:"Khamul",
            faction:"Evil",
            stats:{
                type:"Strategist",
                
                might:97,
                focus:92,
                speed:95
            },
            food:"Shadowy Substance",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Shadow of the East",
                    max_effect:"Prioritise enemy unit with the highest defence",
                    description:"Against 1 Enemy Target deals 20% Focus Damage once.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Poison Damage",
                            effect: "Rush against 1 Enemy units causes the target to suffer 21.4% poison damage (continuous) once each round. This damage carries the pursuit effect.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Dreadful Presence",
                            effect: "Against 3 Enemy Target Deals 13.7% focus damage (effect is modified by Focus stat) and can only cause minimum damage for the next 1 round(s).",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Second-in-Command",
                    max_effect:"Focus +15.",
                    description:"Commander Focus +1 Allied Melee Units damage dealt +1% during combat.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Discipline",
                            effect: "Army Defence +5.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Anticipation",
                            effect: "Allied Unit with the lowest defense 10.7% chance to evade all damage from the next 4 attacks.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Ringwraith",
                    max_effect:"Focus +15.",
                    description:"Against All Enemies Burn, Poison and Focus Damage received +2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Morgul Poison",
                            effect: "Each round normal attacks inflict 10% poison damage (continuous) for 2 rounds.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Nazgul Screech",
                            effect: "Round 1 agains 2 enemy units 14.3% chance of inflicting stun and inflicts 23.4% Focus damage (continuous) once after the stun effect ends (Effect modified by Focus stat).",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"The Black Easterling",
                    max_effect:"Might +15.",
                    description:"Against 2 Enemy Targets defence and speed -2 and 2 allied units defence and speed +2 for 1 round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Hamstring",
                            effect: "Against 2 Enemy Targets Defence and Speed -1% every round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Black Rider",
                            effect: "Mounted Units Immune to Madness, Physical damage 0.9% upon inflicting physical damage(canstack up to 3 times).",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:11,
            name:"The Shadow",
            faction:"Evil",
            stats:{
                type:"Strategist",
                
                might:97,
                focus:89,
                speed:78
            },
            food:"Shadowy Substance",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Undertaker",
                    max_effect:"Commander Normal attacks inflict Poison Damage.",
                    description:"Normal Attacks deal 40% damage to all enemies..",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Delayed Plague",
                            effect: "Against 2 Enemy Targets Deals 114.2% Poison Damage on Round 6. This effect is modified by Focus stat and can't be cured or avoided.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Plague",
                            effect: "Agains 2 enemy tagets deals 37.1% Poison damage, cannot recover HP for 2 rounds",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Black Numenorean",
                    max_effect:"Evil HP +2",
                    description:"Commander Normal attacks inflict an additional 10% Focus Damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Dark Mantle",
                            effect: "Against All Enemies Physical Damage received +2%",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Black Ares",
                            effect: "Against 2 Enemy Targets deals 22.2% Focus Damage (effect modified by Focus stat), cannot recover HP for 1 round(s)",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Ringwraith",
                    max_effect:"Focus +15.",
                    description:"Against All Enemies Burn, Poison and Focus Damage received +2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Morgul Poison",
                            effect: "Each round normal attacks inflict 10% poison damage (continuous) for 2 rounds.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Nazgul Screech",
                            effect: "Round 1 agains 2 enemy units 14.3% chance of inflicting stun and inflicts 23.4% Focus damage (continuous) once after the stun effect ends (Effect modified by Focus stat).",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Shape of the Void",
                    max_effect:"Might +15.",
                    description:"First 4 rounds commander each round 6% chance of gaining Follow Up.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Detect Weakness",
                            effect: "Commander 25% chance of gaining damage +14.2%",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Lower Defences",
                            effect: "On Hit Against Enemy Army 50% chance to receive an additional 4.2% damage.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:12,
            name:"Lurtz",
            faction:"Evil",
            stats:{
                type:"Warrior",
                
                might:104,
                focus:31,
                speed:75
            },
            food:"Unstable Oil",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Pursuer",
                    max_effect:"Damage bonus effects are modified by Speed",
                    description:"Commander Damage dealt +1.3%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Deepen Wounds",
                            effect: "Against 1 Enemy Target(s) Deals 42.8% Physical Damage and next damage received +3% (effect modified by Might stat.)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Overwhelm",
                            effect: "Against Unit with the Lowest Defence Deals 28.5% Physical Damage and an additional 42.8% Physical Damage after 1 round",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Uruk-hai Elite",
                    max_effect:"Speed +15",
                    description:"Commander Might +0.8% allied Uruk-hai and Orcs defense +2 in combat.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Uruk-hai Captain",
                            effect: "Uruk-hai 35% chance of recovering 14.2% HP after dealing damage.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Dangerous Trade",
                            effect: "Allied units damage receiver + 5%, damage dealt +4%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Uruk-hai First-born",
                    max_effect:"Damage increases with each attack.",
                    description:"Deals 12% Physical Damage three times. Each Separate attack chooses a different target and causes slightly more damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Raid",
                            effect: "Rush against 1 Enemy Units deals 34.2% physical damage once. 50% chance to deal an additional 34.2% damage.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Rush",
                            effect: "Rush agains 1 Enemy unit deals 34.2% physical damage once.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"The White Hand",
                    max_effect:"Speed +15.",
                    description:"While attacking allied Uruk-hai each round physical damage + 0.3%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Untiring",
                            effect: "Uruk-hai damage received -3% gain Stun immunity.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Survival Barrier",
                            effect: "Round 6 Uruk-hai units recover 64.2% HP, but cannot recover HP again afterwards.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:13,
            name:"Ugluk",
            faction:"Evil",
            stats:{
                type:"Warrior",
                
                might: 93,
                focus:32,
                speed:45
            },
            food:"Orcish Tincture",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Pursuer",
                    max_effect:"Damage bonus effects are modified by Speed",
                    description:"Commander Damage dealt +1.3%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Deepen Wounds",
                            effect: "Against 1 Enemy Target(s) Deals 42.8% Physical Damage and next damage received +3% (effect modified by Might stat.)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Overwhelm",
                            effect: "Against Unit with the Lowest Defence Deals 28.5% Physical Damage and an additional 42.8% Physical Damage after 1 round",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Uruk-hai Elite",
                    max_effect:"Speed +15",
                    description:"Commander Might +0.8% allied Uruk-hai and Orcs defense +2 in combat.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Uruk-hai Captain",
                            effect: "Uruk-hai 35% chance of recovering 14.2% HP after dealing damage.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Dangerous Trade",
                            effect: "Allied units damage receiver + 5%, damage dealt +4%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Outlaw",
                    max_effect:"Might +15..",
                    description:"Allied Melee Units Damage +1.4%, but damage received +5%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Brawler",
                            effect: "Commander damage agains melee units +3.5%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Cripple",
                            effect: "Against 1 Enemy Target deals 39.2% physical damage and greatly reduces speed for 2 rounds.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"The White Hand",
                    max_effect:"Speed +15.",
                    description:"While attacking allied Uruk-hai each round physical damage + 0.3%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Untiring",
                            effect: "Uruk-hai damage received -3% gain Stun immunity.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Survival Barrier",
                            effect: "Round 6 Uruk-hai units recover 64.2% HP, but cannot recover HP again afterwards.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:14,
            name:"Grishnakh",
            faction:"Evil",
            stats:{
                type:"Support",
                
                might: 45,
                focus:88,
                speed:83
            },
            food:"Orc Officer Medal",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Assassin",
                    max_effect:"Physical Damage cannot be decreased further.",
                    description:"Commander Poison Damage + 2%, Physical Damage -1.3%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Plague",
                            effect: "Agains 2 enemy tagets deals 37.1% Poison damage, cannot recover HP for 2 rounds",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Corrupting Curse",
                            effect: "Each round against 1 enemy units Deals 38% poison damage (continuous) once for 2 rounds. 30% chance to inflict Madness.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Warband Leader",
                    max_effect:"Acts as 2 commanders when completing tips.",
                    description:"Army march speed +1%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Logistics",
                            effect: "Army Siege +1.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Coollector",
                            effect: "Resources gathered +3%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Survivor",
                    max_effect:"Takes effect in round 4.",
                    description:"Round 5 Onwards allied units damage received -2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Deftness",
                            effect: "Commander Focus and Speed +1%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Prudence",
                            effect: "First 2 rounds all allied units 7.1% chance to evade damage, damage -30%.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Interrogator",
                    max_effect:"Damage bonus effects are modified by speed.",
                    description:"Enemies Stunned or subject to madness damage received +6.6% for 1 round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Laceration",
                            effect: "Against 12 Target Inflicts Bleed and deals 10% damage for 3 rounds.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Restrain",
                            effect: "Against 2 Enemy Units 14.3% chance to inflict Stun for 1 round.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:15,
            name:"Mouth of Sauron",
            faction:"Evil",
            stats:{
                type:"Balanced",
                
                might:38,
                focus:100,
                speed:81
            },
            food:"Black Numenorean Tincture",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Black Numenorean",
                    max_effect:"Evil HP +2",
                    description:"Commander Normal attacks inflict an additional 10% Focus Damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Dark Mantle",
                            effect: "Against All Enemies Physical Damage received +2%",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Black Ares",
                            effect: "Against 2 Enemy Targets deals 22.2% Focus Damage (effect modified by Focus stat), cannot recover HP for 1 round(s)",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Harbringer of Darkness",
                    max_effect:"Effect extended to 3 rounds.",
                    description:"First 2 Rounds Allied and Enemy Units Damage +5%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Master of Mischief",
                            effect: "Against 2 enemy units inflicts madness, defense -5 for 1 round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Enfeeble",
                            effect: "Against Enemies Subject to Madness Damage received +5.7%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Messenger",
                    max_effect:"Damage effect persists for entire battle.",
                    description:"First 5 rounds agains enemy commander normal attack damage -6%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Shutdown",
                            effect: "Enemy Commander Might and Focus -4.2 during combat.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Disruption",
                            effect: "Against Enemy Commander 10.7% chance to inflict Silence for 1 round.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Lieutenant of Barad-dur",
                    max_effect:"Might +15.",
                    description:"Orcs and Trolls Damage dealt +1.6%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Orcish Warlord",
                            effect: "Orcs Speed +2 and damage received -2%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Dishearten",
                            effect: "Enemy Units Damage -3%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:16,
            name:"Gothmog",
            faction:"Evil",
            stats:{
                type:"Balanced",
                
                might:78,
                focus:93,
                speed:51
            },
            food:"Orc Officer Medal",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Overlord",
                    max_effect:"Focus +15.",
                    description:"1 Allied target deal one instance of physical damage 30%. Targets' next instance of damage +2.6%(modified by focus).",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Phalanx",
                            effect: "Melee Units physical damage received -2%",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Fortify",
                            effect: "While Defending Allied Units Physical Damage received -2.5%",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Second-in-Command",
                    max_effect:"Focus +15.",
                    description:"Commander Focus +1 Allied Melee Units damage dealt +1% during combat.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Discipline",
                            effect: "Army Defence +5.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Anticipation",
                            effect: "Allied Unit with the lowest defense 10.7% chance to evade all damage from the next 4 attacks.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"The Crippled",
                    max_effect:"Reduces Debuff Effects.",
                    description:"All allied units each attack has a 4% chance to cause maximum damage, commander normal attack damage -6%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Heavily Wounded",
                            effect: "Against 1 Enemy Targets deals 70% physical damage, cannot recover HP for 2 rounds.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Resupply",
                            effect: "2 Allied Units Recover 4% HP each round (effect modified by Focus stat).",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Morgul Lieutenant",
                    max_effect:"Effect extends by 1 round.",
                    description:"First 3 rounds Orcs and Trolls Damage dealt +4%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Grond",
                            effect: "Army Siege +4.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Orcish Warlord",
                            effect: "Orcs Speed +2 and damage received -2%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:17,
            name:"Azru-Khor",
            faction:"Evil",
            stats:{
                type:"Support",
                
                might:82,
                focus:82,
                speed:82
            },
            food:"Black Numenorean Tincture",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Raider",
                    max_effect:"Might +15.",
                    description:"Ranged units 2.3% chance of dealing an addition al 2.6% burn damage after dealing physical damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Powder Keg",
                            effect: "Against 2 enemy target deals an additional 42.8% Burn damage when targets sustain burn damage.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Fuel Oil",
                            effect: "Against  All enemies burn damage received +2.8%.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Warship Captain",
                    max_effect:"Focus +15.",
                    description:"Commander Focus +1 Allied Melee Units damage dealt +1% during combat.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Discipline",
                            effect: "Army Defence +5.",
                            max_level:7
                        },{
                            id:1,
                            type:"Skill",
                            name:"Clear-headed",
                            effect: "Time needed to complete tips -3%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Conspirator",
                    max_effect:"Commander physical damage cannot be decreased further.",
                    description:"Commander poison and burn damage +2.3%, physical damage -1.3%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Treason",
                            effect: "First 4 rounds agains 2 enemy units 14.3% chance of succumbing to Madness each round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Trickery",
                            effect: "Against 1 enemy unit deals 60% physical damage once. 50% chance to inflict Madness for 1 round.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Corsair of Umbar",
                    max_effect:"Focus +15.",
                    description:"Each round Allied ranged units 3.3% chance to gain Follow Up but only deals minimum damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Logistics",
                            effect: "Army Siege +1.",
                            max_level:7
                        },{
                            id:1,
                            type:"Skill",
                            name:"Evil Alliance",
                            effect: "Evil and Orcs damage received -2%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:18,
            name:"Qurwan",
            faction:"Evil",
            stats:{
                type:"Support",
                
                might:89,
                focus:88,
                speed:45
            },
            food:"Desert Sand",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Catastrophe of Elves",
                    max_effect:"Enemy Elves Cannot recover HP.",
                    description:"Enemy Elves Damage received + 1.6% (affected by Might).",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Nimbleness",
                            effect: "Allied Units Damage received from enemy Ranged units -4%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Everlasting Torture",
                            effect: "Enemy Units Damage dealt -1% every round. Can Stack each round.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Catastrophe of Dwarves",
                    max_effect:"Enemy Dwarves Cannot recover HP.",
                    description:"Enemy Dwarves Damage received +1.6% (affected by might).",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Armour of Corrosion",
                            effect: "Allied units damage ignores 5% of target's Defence.",
                            max_level:7
                        },{
                            id:1,
                            type:"Skill",
                            name:"Consequence of Greed",
                            effect: "First 1 round against enemy units 14.3% chance to inflict madness.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Ringwraith",
                    max_effect:"Focus +15.",
                    description:"Against All Enemies Burn, Poison and Focus Damage received +2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Morgul Poison",
                            effect: "Each round normal attacks inflict 10% poison damage (continuous) for 2 rounds.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Nazgul Screech",
                            effect: "Round 1 agains 2 enemy units 14.3% chance of inflicting stun and inflicts 23.4% Focus damage (continuous) once after the stun effect ends (Effect modified by Focus stat).",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Catastrophe of Men",
                    max_effect:"Men Cannot Recover HP.",
                    description:"Enemy Men Damage Received + 1.6% (affected by might).",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Intimidation",
                            effect: "Against Enemy Commander Might -4 each round, 2.1% chance to inflict stun.",
                            max_level:7
                        },{
                            id:1,
                            type:"Skill",
                            name:"Feint",
                            effect: "Commander For each 5 instances of damage dealt, all units' next damage +5%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:19,
            name:"The Undying",
            faction:"Evil",
            stats:{
                type:"Support",
                
                might:100,
                focus:65,
                speed:58
            },
            food:"Unsettling Rein",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Undertaker",
                    max_effect:"Commander Normal attacks inflict Poison Damage.",
                    description:"Normal Attacks deal 40% damage to all enemies..",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Delayed Plague",
                            effect: "Against 2 Enemy Targets Deals 114.2% Poison Damage on Round 6. This effect is modified by Focus stat and can't be cured or avoided.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Plague",
                            effect: "Agains 2 enemy tagets deals 37.1% Poison damage, cannot recover HP for 2 rounds",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Undead Commander",
                    max_effect:"Speed +15.",
                    description:"Allied Units 4% chance to evade all physical damage from the first 4 hits sustained.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Nimbleness",
                            effect: "Allied Units Damage received from enemy Ranged units -4%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Dishearten",
                            effect: "Enemy units Damage -3%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Ringwraith",
                    max_effect:"Focus +15.",
                    description:"Against All Enemies Burn, Poison and Focus Damage received +2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Morgul Poison",
                            effect: "Each round normal attacks inflict 10% poison damage (continuous) for 2 rounds.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Nazgul Screech",
                            effect: "Round 1 agains 2 enemy units 14.3% chance of inflicting stun and inflicts 23.4% Focus damage (continuous) once after the stun effect ends (Effect modified by Focus stat).",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Second Wind",
                    max_effect:"Enemy Units Cannot Recover HP.",
                    description:"Round 4 All allied units recover 30% HP, but cannot recover HP afterwards. This effect can't be cured.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Chilling Edge",
                            effect: "Drains 20 Focus from the enemy Commander. This effect decays each round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Fanaticism",
                            effect: "All Melee Units Damage +0.7% each round.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:20,
            name:"Sauron",
            faction:"Evil",
            stats:{
                type:"Support",
                
                might:75,
                focus:115,
                speed:61
            },
            food:"Flames of Mount Doom",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"The Deceiver",
                    max_effect:"Focus +20.",
                    description:"Enemy units damage received +0.8% (effect modified by Focus Stat).",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Enfeeble",
                            effect: "Against Enemies Subject to Madness Damage received +5.7%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Ring of Terror",
                            effect: "First 2 Rounds Against Enemy Commander and Units 10% chance to inflict Madness each round.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Lord of Gifts",
                    max_effect:"Focus +20.",
                    description:"Base stats from equipment +2%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Trembling Strike",
                            effect: "Against 2 enemy Targets deals 12.4% Focus Damage(effect modified by Focus stat).",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Black Arts",
                            effect: "Against 2 Enemy  Targets deals 22.2% Focus Damage (effect if modifier by Focus stat), cannot recover HP for 1 round.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Gorthaur",
                    max_effect:"Focus +20.",
                    description:"All Enemies Focus Damage received +1.6%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Soul Siphon",
                            effect: "Against 2 enemy units deals 8.5% Focus Damage (Effect modified by Focus stat) 2 allied unit recover 8.5% HP (effect modified by Focus Stat).",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Overload",
                            effect: "Against 3 Enemy units damage dealt +5%, but receives 4.8% Focus Damage (continuous) once each round (Effect modified by Focus stat) this damage carries the Pursuit effect.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"The Enemy",
                    max_effect:"Self Stun Immune.",
                    description:"Against Enemy Commander Might, Focus and Speed -2%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Dazzle",
                            effect: "Against Enemy Commander 14.3% chance to inflict stun for 2 rounds.",
                            max_level:7
                        },{
                            id:1,
                            type:"Skill",
                            name:"Confusion",
                            effect: "Against Enemy Commander Focus -4 each round, 4.3% chance to inflict Silence.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:21,
            name:"Saruman",
            faction:"Evil",
            stats:{
                type:"Balanced",
                
                might:75,
                focus:108,
                speed:45
            },
            food:"Torn Uruk-hai Scribblings",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Of Many Colours",
                    max_effect:"Focus +15.",
                    description:"Deals 6.5% Focus Damage(effect modified by Focus Stat), 6.5% Burn Damage (effect modified by Focus Stat). The target of each instance of damage is chosen randomly.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Focus Discharge",
                            effect: "Against 3 Enemy Target deals 36% Focus Damage (effect modified by Focus Stat) Against enemy commander and their units greatly readuces damage for 1 round.",
                            max_level:7
                        },{
                            id:1,
                            type:"Skill",
                            name:"Trembling Strike",
                            effect: "Against 2 enemy Targets deals 12.4% Focus Damage(effect modified by Focus stat).",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Palanthir Scryer",
                    max_effect:"Chance of succumbing to madness reduced to 15%.",
                    description:"Self 25% chance of succumbing to Madness for 2 rounds, 2 allied units damage received -1.8% for the next 2 hits (effect modified by Focus stat).",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Wild Magic",
                            effect: "Against 1 Enemy Targets Deals 54.8% Focus Damage (effect modified by Focus stat), 1 allied unit inflicts an additional 22.8% Focus Damage(effect modified by Focus stat).",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Fanaticism",
                            effect: "All Melee Units Damage +0.7% each round.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Voice of Saruman",
                    max_effect:"Affects all enmemy units.",
                    description:"Each round against 2 enemy units 2% chance of sucummbing to Madness.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Astonish",
                            effect: "Against enemy commander 7.1% chance to inflict Stun for 1 round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Soul Siphon",
                            effect: "Against 2 enemy units deals 8.5% Focus Damage (Effect modified by Focus stat) 2 allied unit recover 8.5% HP (effect modified by Focus Stat).",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Sharkey",
                    max_effect:"Focus +15.",
                    description:"Orcs, Uruk-hai and Evil",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Uruk-hai Captain",
                            effect: "Uruk-hai 35% chance of recovering 14.2% HP after dealing damage.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Morgul Commander",
                            effect: "Orcs and Uruk-hai damage received -2%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:22,
            name:"Kirun",
            faction:"Evil",
            stats:{
                type:"Leader",
                
                might:91,
                focus:85,
                speed:57
            },
            food:"Golden Totem",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Lord of the Sand",
                    max_effect:"Affects all enemy units.",
                    description:"Each round against 2 enemy Unit 1.3% chance to inflict Stun.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Sand Soldier",
                            effect: "1 Allied Units recover 11.4% HP upon dealing damage.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Frontline Rescue",
                            effect: "Round 3 Allied Melee Units Recover 42.8% HP.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Easterling",
                    max_effect:"Might +15",
                    description:"Commander Normal attacks cause enemy stats -1.3% for 1 round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Evil Alliance",
                            effect: "Evil and Orcs damage received -2%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Iron Guard",
                            effect: "50% change of reducing physical damage received by 4.2%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Golden Visage",
                    max_effect:"Enemy Ranged Units Damage Dealt -5%.",
                    description:"Each round all enemies 5% chance of dealing minimum damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Phalanx",
                            effect: "Melee Units physical damage received -2%",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Sandstorm",
                            effect: "against 2 enemy units randomly apply one of the following debuffs: Damage-7.1% / Inflict Madness for 1 round.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Master of the War Chariot",
                    max_effect:"Evil Attack +2.",
                    description:"War Chariot Scythes Damage +4%, Dragoon Against Large Unit damage +2%, Halberdier Damage received from Mounted Units -2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Absolute Leader",
                            effect: "All allies physical damage dealt +1.4% for each allied Evil Unit present.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Tribal Tactics",
                            effect: "Eveil Men 3.6% chance to gain Follow Up.)",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:23,
            name:"Black Serpent",
            faction:"Evil",
            stats:{
                type:"Strategist",
                
                might:85,
                focus:91,
                speed:86
            },
            food:"Dead Marshes' Miasma",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Fire Dancer",
                    max_effect:"Commander Normal attacks inflict Burn damage.",
                    description:"Commander Burn Damage +2.3%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Arson",
                            effect: "Against 2 enemy Targets deals 18.5% burn Damage twice. Each seperate attack chooses a different target.",
                            max_level:7
                        },{
                            id:1,
                            type:"Skill",
                            name:"Powder Keg",
                            effect: "Against 2 enemy target deals an additional 42.8% Burn damage when targets sustain burn damage.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Horn of Harad",
                    max_effect:"Extended to 4 rounds",
                    description:"Army damage dealt +4% effect's initial value gradually decreased over 3 rounds.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"High Alert",
                            effect: "Allied units Focus, Burn and Poison damage received -7.1%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Haven",
                            effect: "Allied units physical damage received -2%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Haradrim",
                    max_effect:"Might +15.",
                    description:"Commander Might +1 during combat, Evil damage received -1%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Tribal Tactics",
                            effect: "Evil 3.6% chance to gain Follow Up.)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Evil Alliance",
                            effect: "Evil and Orcs damage received -2%.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Lord Mumakil",
                    max_effect:"Mumakil No longer attack allies.",
                    description:"Allied mumakil Speed +1%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Wild Magic",
                            effect: "Against 1 Enemy Targets Deals 54.8% Focus Damage (effect modified by Focus stat), 1 allied unit inflicts an additional 22.8% Focus Damage(effect modified by Focus stat).",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Resupply",
                            effect: "2 Allied Units Recover 4% HP each round (effect modified by Focus stat).",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:24,
            name:"Merry & Pippin",
            faction:"Good",
            stats:{
                type:"Strategist",
                
                might:32,
                focus:85,
                speed:85
            },
            food:"Ale and Pipe-weed",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"War Chant",
                    max_effect:"Effect reduces by 1/4 every round",
                    description:"All aliied units damage +2% Each round effect reduces by 1/3.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Relief",
                            effect: "Allied Units with the highest defence recover 32.5% HP (effect modified by Focus stat)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Level-Headed",
                            effect: "Allied Units removes one random debuff, and recovers 17.1% HP.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Harfoots",
                    max_effect:"Acts as 2 commanders when completing tips",
                    description:"Time needed to complete tips -2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Pipe-weed Connoisseur",
                            effect: "Commander Focus +2%, Might -1%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Inquisitive",
                            effect: "Experience gained from tips +5%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Hobbit Adventurer",
                    max_effect:"Hobbits HP +5.",
                    description:"Hobbits and Men damage received -1%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Ent-friend",
                            effect: "Army Speed Ents +5",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Giant Slayer",
                            effect: "Commander Damage against Large Unit +7.1%.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Palanthir Scryer",
                    max_effect:"Chance of succumbing to madness reduced to 15%.",
                    description:"Self 25% chance of succumbing to Madness for 2 rounds, 2 allied units damage received -1.8% for the next 2 hits (effect modified by Focus stat).",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Wild Magic",
                            effect: "Against 1 Enemy Targets Deals 54.8% Focus Damage (effect modified by Focus stat), 1 allied unit inflicts an additional 22.8% Focus Damage(effect modified by Focus stat).",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Fanaticism",
                            effect: "All Melee Units Damage +0.7% each round.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:25,
            name:"Ori",
            faction:"Good",
            stats:{
                type:"Balanced",
                
                might:82,
                focus:79,
                speed:55
            },
            food:"Ale and Pipe-weed",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Clerk",
                    max_effect:"Focus +15.",
                    description:"Commander Focus +1%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Clear-headed",
                            effect: "Time needed to complete tips -3%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Inquisitive",
                            effect: "Experience gained from tips +5%.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Musician",
                    max_effect:"Army Attack +3",
                    description:"Army Speed and Defence +1%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Relief",
                            effect: "Allied Units with the highest defence recover 32.5% HP (effect modified by Focus stat)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Level-Headed",
                            effect: "Allied Units removes one random debuff, and recovers 17.1% HP.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Durin's Blood",
                    max_effect:"Might +15.",
                    description:"Commander Skill Damage +2.3% during combat.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Whirlwind",
                            effect: "Against 2 Enemy targets Deals 42.8% physical damage(prioritises melee units)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"All-in",
                            effect: "Against 1 enemy targets deals 107.1% physical damage once self reduces the damage once self reduces the next damage dealt by 7.1%.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Warrior of the Lonely Mountain",
                    max_effect:"Army Burn Damage received -50%.",
                    description:"Army Physical Damage received-1%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Longbeard",
                            effect: "Commanfer Physical damage ignores 7.1% of target's defence.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Giant Slayer",
                            effect: "Commander Damage against Large Unit +7.1%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:26,
            name:"Haldir",
            faction:"Good",
            stats:{
                type:"Balanced",
                
                might:89,
                focus:65,
                speed:77
            },
            food:"Ale and Lembas",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Marchwarden of Lorien",
                    max_effect:"Focus +15.",
                    description:"Against 1 Enemy Unit deals 16% physical damage once 1 allied unit evade next damage received.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Cull the Weak",
                            effect: "Against Enemy Target with the Lowest Defence deals 30% physical damage.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Elite",
                            effect: "Commander Might and Focus + 1%.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Guide",
                    max_effect:"While damage is increased, the army gains stun immunity.",
                    description:"First 2 rounds all allied units physical damage +3%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Armed Escort",
                            effect: "Against 1 enemy target deals 20% Physical damage 1 allied unit recover 12.8% HP (effect modified by Focus Stat)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Foresight",
                            effect: "First 4 rounds all allied units 10% chance to gain pursuit each round.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Silvan Elf",
                    max_effect:"Poison Damage lasts 2 rounds.",
                    description:"Commander Normal attacks deal an additional 4.6% physical damage as well as 4.6% poison damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Beast Training",
                            effect: "Beasts each round recovers 14.2%",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Forest Agility",
                            effect: "Allied Ranged units 2.9% chance to gain Follow Up each round.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Galadhrim",
                    max_effect:"Might +15.",
                    description:"Allied Ranged Units physical damage +1.2% (effect modified by Speed stat).",
                    max_level:15,
                    sub_skills:[
                        {
                            id:2,
                            type:"Skill",
                            name:"Fortify",
                            effect: "While Defending Allied Units Physical Damage received -2.5%",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"shield Training",
                            effect: "Ranged Units damage received -2%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:27,
            name:"Dwalin",
            faction:"Good",
            stats:{
                type:"Warrior",
                
                might:91,
                focus:49,
                speed:58
            },
            food:"Ale and Pipe-weed",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Experienced Warrior",
                    max_effect:"Self Damage against Melee units +10%",
                    description:"Commander Normal Attack Damage +4%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Hunt Down",
                            effect: "After the Commander Attacks against enemy target damage dealt +1.6% (effect modificer by Might stat) for 2 rounds, up to 2 stacks.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Collaboration",
                            effect: "Commander Normal attacks cause an additional 17.8% Physical Damage.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Musician",
                    max_effect:"Army Attack +3",
                    description:"Army Speed and Defence +1%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Relief",
                            effect: "Allied Units with the highest defence recover 32.5% HP (effect modified by Focus stat)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Level-Headed",
                            effect: "Allied Units removes one random debuff, and recovers 17.1% HP.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Durin's Blood",
                    max_effect:"Might +15.",
                    description:"Commander Skill Damage +2.3% during combat.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Whirlwind",
                            effect: "Against 2 Enemy targets Deals 42.8% physical damage(prioritises melee units)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"All-in",
                            effect: "Against 1 enemy targets deals 107.1% physical damage once self reduces the damage once self reduces the next damage dealt by 7.1%.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Warrior of the Lonely Mountain",
                    max_effect:"Army Burn Damage received -50%.",
                    description:"Army Physical Damage received-1%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Longbeard",
                            effect: "Commanfer Physical damage ignores 7.1% of target's defence.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Giant Slayer",
                            effect: "Commander Damage against Large Unit +7.1%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:28,
            name:"Éowyn",
            faction:"Good",
            stats:{
                type:"Balanced",
                
                might:80,
                focus:71,
                speed:107
            },
            food:"Ale and Superior Horse Armour",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Shieldmaiden",
                    max_effect:"Focus +15.",
                    description:"Melee Units 40% chance of reducing physical damage by 2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Attack Vitals",
                            effect: "Against 1 Enemy target deals 28.5% physical damage and 50% chance of dealing an additional 28.5% physical damage.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Defensive Stance",
                            effect: "Against 1 Enemy target deals 40% physical damage 1 allied melee units next damage received -2% (effect modified by Might stat).",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Rohirrim",
                    max_effect:"Might +15.",
                    description:"Mounted Units Damage +0.6% upon inflicting damage (Effect modified by Speed stat)(Up to 3 stacks)",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Cleave",
                            effect: "Against 1 enemy target deals 48% physical damage (effect modified by Speed stat)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Riding Excellence",
                            effect: "Mounted Units Damage received -2%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Dernhelm",
                    max_effect:"Normal attack damage +20%.",
                    description:"Éowyn damage dealt +1.3%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Cripple",
                            effect: "Against 1 Enemy Target deals 39.2% physical damage and greatly reduces speed for 2 rounds.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Giant Slayer",
                            effect: "Commander Damage against Large Unit +7.1%.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"White Lady of Rohan",
                    max_effect:"Mounted Units gain Stun Immunity.",
                    description:"Each round all mounted Units Recover 2% HP",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Frontline Rescue",
                            effect: "Round 3 Allied Melee Units Recover 42.8% HP.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Nobility",
                            effect: "Men Damage dealt +3%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:29,
            name:"Boromir",
            faction:"Good",
            stats:{
                type:"Leader",
                
                might:93,
                focus:58,
                speed:65
            },
            food:"Ale and Lembas",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"High Warden of the  White Tower",
                    max_effect:"Increases the damage caused by this skill, and prioritises melee targets.",
                    description:"Against 2 Enemy targets deals 11.6% physical damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Disarm",
                            effect: "Against 1 enemy target deals 31.4% physical damage and target's next attack deals much less physical damage.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Swing",
                            effect: "Against 2 Enemy targets deals 22.8% physical damage.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Heir",
                    max_effect:"Focus +15.",
                    description:"Every round Allied Units defence +0.4, stacks once per round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Gallant",
                            effect: "Commander Might and Speed +1%",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Nobility",
                            effect: "Men Damage dealt +3%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Warden",
                    max_effect:"Melee Units HP +2.",
                    description:"Allied Units 6.7% chance to Evade 1 instance of damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Collaboration",
                            effect: "Commander Normal attacks cause an additional 17.8% physical damage",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Defensive Stance",
                            effect: "Against 1 Enemy target deals 40% physical damage 1 allied melee units next damage received -2% (effect modified by Might stat).",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Horn of Gondor",
                    max_effect:"Might +15.",
                    description:"First 3 rounds Commander and Allied Units Damage +1.3%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:2,
                            type:"Skill",
                            name:"Well-prepared",
                            effect: "Melee Units When hit by enemies' normal attacks within range perfom a Counterattack that deals 3% damage",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Lower Defences",
                            effect: "On hit against enemy army 50% chance to receive an additional 4.2% damage.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:30,
            name:"Faramir",
            faction:"Good",
            stats:{
                type:"Balanced",
                
                might:76,
                focus:95,
                speed:73
            },
            food:"Ale and Superior Horse Armour",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Rangers of Ithilien",
                    max_effect:"Might +15.",
                    description:"Rush agains 1 enemy unit deals 22% physical damage once, next round all allied units gain Initiative.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Flanking",
                            effect: "Against 1 enemy target deals 68.5% physical damage (prioritises ranged units).",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Rush",
                            effect: "Rush agains 1 Enemy unit deals 34.2% physical damage once.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Last Steward",
                    max_effect:"Acts as 2 commanders when completing tips.",
                    description:"Time needed to complete tips -2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Inquisitive",
                            effect: "Experience gained from tips +5%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Leader",
                            effect: "Experience gained from battles +3%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Guide",
                    max_effect:"While damage is increased, the army gains stun immunity.",
                    description:"First 2 rounds all allied units physical damage +3%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Armed Escort",
                            effect: "Against 1 enemy target deals 20% Physical damage 1 allied unit recover 12.8% HP (effect modified by Focus Stat)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Foresight",
                            effect: "First 4 rounds all allied units 10% chance to gain pursuit each round.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Heir",
                    max_effect:"Focus +15.",
                    description:"Every round Allied Units defence +0.4, stacks once per round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Gallant",
                            effect: "Commander Might and Speed +1%",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Nobility",
                            effect: "Men Damage dealt +3%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:31,
            name:"Hirgon",
            faction:"Good",
            stats:{
                type:"Warrior",
                
                might:81,
                focus:77,
                speed:100
            },
            food:"Ale and Superior Horse Armour",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Devotion",
                    max_effect:"Might +15.",
                    description:"Against 2 enemy targets deals 18.3% physical damage, but commander's Might -30 for 1 round.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Cleave",
                            effect: "Against 1 enemy target deals 48% physical damage (effect modified by Speed stat)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Gallant",
                            effect: "Commander Might and Speed +1%",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Herald",
                    max_effect:"Speed +15.",
                    description:"Time needed to complete tips -2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Logistics",
                            effect: "Army Siege +1.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"March",
                            effect: "Army March Speed +3%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Red Arrow",
                    max_effect:"Focus +15.",
                    description:"2 allied units recover 2.4% HP, and the next damage dealt +0.9% (effects modified by Speed stat)",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Reinforcement",
                            effect: "Round 7 Onwards 2 allied units recover 17.1% HP each round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Phalanx",
                            effect: "Melee Units physical damage received -2%",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Warden",
                    max_effect:"Melee Units HP +2.",
                    description:"Allied Units 6.7% chance to Evade 1 instance of damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Collaboration",
                            effect: "Commander Normal attacks cause an additional 17.8% physical damage",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Defensive Stance",
                            effect: "Against 1 Enemy target deals 40% physical damage 1 allied melee units next damage received -2% (effect modified by Might stat).",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:32,
            name:"Frodo & Sam",
            faction:"Good",
            stats:{
                type:"Support",
                
                might:32,
                focus:85,
                speed:66
            },
            food:"Bamfurlong Mushroom",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Master of  the Bag End",
                    max_effect:"Hobbit units defence +20",
                    description:"Base Stats from equipement +2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Starlight",
                            effect: "Against enemy Orcs, Uruk-hai, Trolls damage received +2%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Prudence",
                            effect: "First 2 rounds all allied units 7.1% chance to evade damage, damage -30%.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Harfoots",
                    max_effect:"Acts as 2 commanders when completing tips",
                    description:"Time needed to complete tips -2%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Pipe-weed Connoisseur",
                            effect: "Commander Focus +2%, Might -1%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Inquisitive",
                            effect: "Experience gained from tips +5%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Hobbit Adventurer",
                    max_effect:"Hobbits HP +5.",
                    description:"Hobbits and Men damage received -1%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Ent-friend",
                            effect: "Army Speed Ents +5",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Giant Slayer",
                            effect: "Commander Damage against Large Unit +7.1%.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Ringbearers",
                    max_effect:"Focus +15.",
                    description:"All allies 1.3% chance to evade physical damage each round, commander 25% chance of succumbing to Madness.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Ring of Terror",
                            effect: "First 2 rounds agains enemy commander and units 10% chance to inflict Madness each round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Elven Rope",
                            effect: "Each round against 1 enemy units 12.9% chance to inflict Stun for 3 rounds.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:33,
            name:"Aragorn II",
            faction:"Good",
            stats:{
                type:"Balanced",
                
                might:96,
                focus:70,
                speed:89
            },
            food:"Athelas",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Anduril",
                    max_effect:"Might +15.",
                    description:"Against 2 Enemy Targets deals 20% Physical Damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Cull the Weak",
                            effect: "Against Enemy Target with the Lowest Defence deals 30% physical damage.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Weapon Expertise",
                            effect: "Commander 50% chance of gaining Damage +7.1%",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Dunedain Chieftain",
                    max_effect:"HP +2.",
                    description:"Army defence +2.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Brawling Training",
                            effect: "Against enemy melee unit damage dealt +3%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Well-prepared",
                            effect: "Melee Units When hit by enemies' normal attacks within range perfom a Counterattack that deals 3% damage",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Strider",
                    max_effect:"Ignores the race restrictions of all equipment",
                    description:"Base stats from equipment +2%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Precision Blow",
                            effect: "Against 1 Enemy Unit deals 40% physical damage once. This damage carries the pursuit effect.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Raid",
                            effect: "Rush against 1 Enemy Units deals 34.2% physical damage once. 50% chance to deal an additional 34.2% damage.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Hidden Heir",
                    max_effect:"Speed +20",
                    description:"Aragorn skill damage +1.3% and gain Initiative during combat.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Sun and Moon's Splendour",
                            effect: "Men gain stun immunity against Orcs and Uruk-hai normal attack damage -3%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Nobility",
                            effect: "Men Damage dealt +3%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:34,
            name:"Gandalf the Grey",
            faction:"Good",
            stats:{
                type:"Support",
                
                might:80,
                focus:101,
                speed:45
            },
            food:"Old winyards",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"The Grey",
                    max_effect:"Focus +15.",
                    description:"After the commander deals damage 1 allied unit 50% chance of recovering 6.6% HP.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Fleeting Movements",
                            effect: "2 Allied Units 10.7% chance to Evade the next instance of damage.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Blindside",
                            effect: "Against 1 Enemy Unit deals 16.2% Focus damage once (Effect modified by Focus stat) and inflicts Stun for 1 rounds",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Mithrandir",
                    max_effect:"3 Allied units avoid the first instance of damage in battle.",
                    description:"Army defence +2.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Free Peoples",
                            effect: "Men, Elves, Dwarves and Hobbits damage received -2%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Convener",
                            effect: "First 2 rounds all allied units gain Initiative. 10.7% chance to gain Follow Up each round.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Wizard",
                    max_effect:"Focus +15.",
                    description:"Round 1  against 2 enemy units inflict stun, defense -3.3 for 3 rounds.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Pipe-weed Connoisseur",
                            effect: "Commander Focus +2%, Might -1%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Surge",
                            effect: "Deals 21.4% Focus Damage twice(effect modified by Focus stat). Each separate attack chooses a different target.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"White Council",
                    max_effect:"Damage reduction effect triggers an addictional time.",
                    description:"All allied units first 3 instances of damage received -1.2% (effect modified by Focus Stat).",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"High Alert",
                            effect: "Allied units Focus, Burn and Poison damage received -7.1%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Champion of the Light",
                            effect: "All allied damage against Orcs, Uruk-hai and Trolls +4%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:35,
            name:"Arwen",
            faction:"Good",
            stats:{
                type:"Support",
                
                might:48,
                focus:91,
                speed:92
            },
            food:"Mallorn Leaf",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Lady of Rivendell",
                    max_effect:"Focus +15.",
                    description:"Arwen Focus damage + 3%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"River's Wrath",
                            effect: "Against All Enemies deals 15.1% Focus Damage once (effect modified by Focus stat) and imposes a 57.1% chance to inflictstun for 1 round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Surge",
                            effect: "Deals 21.4% Focus Damage twice(effect modified by Focus stat). Each separate attack chooses a different target.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Undomiel",
                    max_effect:"Chance to recover HP when damage is sustained.",
                    description:"2 allied units 35% chance of recovering 3.2% HP when physical damage is sustained.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Cleansing Touch",
                            effect: "2 allied targets recover 11.7% HP (effect modified by Focus stat) and randomly remove 1 debuff.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Elven Blessing",
                            effect: "2 allied unit recover 8.5% HP(effect modified by Focus stat) and gain a 50% chance of reactivating effect once.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Half-elven",
                    max_effect:"Might and Focus +10.",
                    description:"All allies defense and Speed +0.6 for each allied Men present, All allies damage dealth +0.6% for each allied Elves unit type present.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Boon",
                            effect: "All allied units randomly receive one of the following buffs in battle: physical damage received -2.8% / physical damage +2.8%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Coalition",
                            effect: "Men 10.7% chance to deal highest damage, Elves 10.7% chance to gain Initiative.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Queen of the Reunited Kingdom",
                    max_effect:"Effect's initial value only decreases by 1/5 each time",
                    description:"All allied units damage received -6% during combat. Effect's initial value decreases by 1/4 eachtime damageis sustained.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Nobility",
                            effect: "Men damage dealth +3%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Parting Gift",
                            effect: "Round 8 all allied units recover 54% HP (effect modified by Focus stat).",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:36,
            name:"Elrohir",
            faction:"Good",
            stats:{
                type:"Balanced",
                
                might:86,
                focus:85,
                speed:71
            },
            food:"Strong Rope",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Grey Company",
                    max_effect:"Minimum damage increased to 150% of base.",
                    description:"2 targets deal 6.6%-23.3% physical damage",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Reinforcement",
                            effect: "Round 7 Onwards 2 allied units recover 17.1% HP each round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Flanking",
                            effect: "Against 1 enemy target deals 68.5% physical damage (prioritises ranged units).",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"War Chant",
                    max_effect:"Effect reduces by 1/4 every round",
                    description:"All aliied units damage +2% Each round effect reduces by 1/3.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Relief",
                            effect: "Allied Units with the highest defence recover 32.5% HP (effect modified by Focus stat)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Level-Headed",
                            effect: "Allied Units removes one random debuff, and recovers 17.1% HP.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Half-elven",
                    max_effect:"Might and Focus +10.",
                    description:"All allies defense and Speed +0.6 for each allied Men present, All allies damage dealth +0.6% for each allied Elves unit type present.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Boon",
                            effect: "All allied units randomly receive one of the following buffs in battle: physical damage received -2.8% / physical damage +2.8%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Coalition",
                            effect: "Men 10.7% chance to deal highest damage, Elves 10.7% chance to gain Initiative.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Loyal Followers",
                    max_effect:"Might +15",
                    description:"Allied units damage dealt +1%. All allied units deal an additional 0.3% damage for each allied Men, Elves or Dwarves unit type present.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Controlled Madness",
                            effect: "Allied Units Subject to Madness Damage received -5.7%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"shield Training",
                            effect: "Ranged Units damage received -2%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:37,
            name:"Legolas",
            faction:"Good",
            stats:{
                type:"Warrior",
                
                might:90,
                focus:77,
                speed:82
            },
            food:"Mallorn Leaf",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Greenleaf",
                    max_effect:"Target next damage dealt -50%.",
                    description:"Against enemy unit with the lowest defence deals 32% physical damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Attack Vitals",
                            effect: "Against 1 Enemy target deals 28.5% physical damage and 50% chance of dealing an additional 28.5% physical damage.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Mirkwood Ambush",
                            effect: "Rush against 1 enemy unit deals 50% physical damage once or poison damage once.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Grey Elf",
                    max_effect:"Speed +15.",
                    description:"Allied Elves 1% chance to Evade damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"shield Training",
                            effect: "Ranged Units damage received -2%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Deadeye",
                            effect: "Ranged units damage +3%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Elven Prince",
                    max_effect:"Might +15.",
                    description:"Normal attacks have a 50% chance of dealing an additional 20% physical damage",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Heart Seeker",
                            effect: "Against Enemy target with the lowest HP deals 35.7% Physical Damage once",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Dual Blows",
                            effect: "Self 10% chance to gain Follow Up each round.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Dwarf-Friend",
                    max_effect:"Damage bonus takes effects in round 4",
                    description:"Round 5 onwards allied melee units damage +4%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Friendly Relations",
                            effect: "Elves and Dwarves damage received -2%.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Protect Elves",
                            effect: "Dwarves unit with the highest defence protects all Elves, and Defense +4.2%.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:38,
            name:"Gimli",
            faction:"Good",
            stats:{
                type:"Warrior",
                
                might:100,
                focus:54,
                speed:35
            },
            food:"Torn Pages from Mazarbul's Tome",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Experienced Warrior",
                    max_effect:"Self Damage against Melee units +10%",
                    description:"Commander Normal Attack Damage +4%",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Hunt Down",
                            effect: "After the Commander Attacks against enemy target damage dealt +1.6% (effect modificer by Might stat) for 2 rounds, up to 2 stacks.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Collaboration",
                            effect: "Commander Normal attacks cause an additional 17.8% Physical Damage.",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Lockbearer",
                    max_effect:"HP recovery is modified by Focus stat.",
                    description:"2 allied units 30% chance of recovering 3.3% HP when damage is sustained.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Hunt Down",
                            effect: "After the Commander Attacks against enemy target damage dealt +1.6% (effect modificer by Might stat) for 2 rounds, up to 2 stacks.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Protect Elves",
                            effect: "Dwarves unit with the highest defence protects all Elves, and Defense +4.2%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Durin's Blood",
                    max_effect:"Might +15.",
                    description:"Commander Skill Damage +2.3% during combat.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Whirlwind",
                            effect: "Against 2 Enemy targets Deals 42.8% physical damage(prioritises melee units)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"All-in",
                            effect: "Against 1 enemy targets deals 107.1% physical damage once self reduces the damage once self reduces the next damage dealt by 7.1%.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Lord of the Glittering Caves",
                    max_effect:"Army damage from melee units -5%.",
                    description:"Against Enemy Melee units damage dealt +1.6%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Break Defences",
                            effect: "Against 1 enemy targets deals 37.1% physical damage, defence - 4.2% for 1 round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Heavily Wounded",
                            effect: "Against 1 Enemy Targets deals 70% physical Damage, cannot recover HP for 2 rounds.",
                            max_level:7
                        }
                    ]
                }
            ]
        },{
            id:39,
            name:"Balin",
            faction:"Good",
            stats:{
                type:"Warrior",
                
                might:99,
                focus:89,
                speed:62
            },
            food:"Torn Pages from Mazarbul's Tome",
            skills:[
                {
                    id:1,
                    type: "Title",
                    requires:"",
                    name:"Revivalist",
                    max_effect:"2 Allied targets Recover HP.",
                    description:"Rush against 1 Enemy unit deals 13.3% physical damage 1 allied unit recover 6.6% HP.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Frightened",
                            effect: "first 4 rounds against 2 enemy units 7.1% chance to inflict Stun each round.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Inspiration",
                            effect: "First 3 rounds all allied units damage dealt +3.2% (effect modified by Focus stat).",
                            max_level:7
                        }
                    ]
                },{
                    id:2,
                    type: "Title",
                    requires:"",
                    name:"Lord of Moria",
                    max_effect:"Chance of taking effect +5%.",
                    description:"Dwarves 1 allied unit 30% chance of recovering 10% HP after dealing physical damage.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Hunt Down",
                            effect: "After the Commander Attacks against enemy target damage dealt +1.6% (effect modificer by Might stat) for 2 rounds, up to 2 stacks.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Protect Elves",
                            effect: "Dwarves unit with the highest defence protects all Elves, and Defense +4.2%.",
                            max_level:7
                        }
                    ]
                },{
                    id:3,
                    type: "Title",
                    requires:"Respect Rank 3",
                    name:"Durin's Blood",
                    max_effect:"Might +15.",
                    description:"Commander Skill Damage +2.3% during combat.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Whirlwind",
                            effect: "Against 2 Enemy targets Deals 42.8% physical damage(prioritises melee units)",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"All-in",
                            effect: "Against 1 enemy targets deals 107.1% physical damage once self reduces the damage once self reduces the next damage dealt by 7.1%.",
                            max_level:7
                        }
                    ]
                },{
                    id:4,
                    type: "Title",
                    requires:"Respect Rank 5",
                    name:"Warrior of the Lonely Mountain",
                    max_effect:"Army Burn Damage received -50%.",
                    description:"Army Physical Damage received-1%.",
                    max_level:15,
                    sub_skills:[
                        {
                            id:1,
                            type:"Skill",
                            name:"Longbeard",
                            effect: "Commanfer Physical damage ignores 7.1% of target's defence.",
                            max_level:7
                        },{
                            id:2,
                            type:"Skill",
                            name:"Giant Slayer",
                            effect: "Commander Damage against Large Unit +7.1%.",
                            max_level:7
                        }
                    ]
                }
            ]
        }
    ]
        return commanderList;
}