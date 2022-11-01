export default function unitlist(){
    const unitList = [
                {
                id:"100",
                name:"Hunter",
                faction:"Good",
                tier:"I",
                unlocked:"Hunter Range",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"swiftness",
                    effect:[{
                        level:1,
                        effect: "46% chance to Evade 1 Attack",
                        per_level:"+4%"
                    }]
                }],
                race:"Elves",
                stats:{
                    per_command:100,
                    damage:"15-16",
                    hp:18,
                    defence:5,
                    speed:86,
                    siege:7,
                    conscription_per_command:{
                        wood:2100,
                        ore:1700,
                        grain:1800,
                        build_time_in_min:12
                    }
                }
            },{
                id:"101",
                name:"Marksman",
                faction:"Good",
                tier:"II",
                unlocked:"Hunter Range",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"swiftness",
                    effect:{
                        level:1,
                        effect: "46% chance to Evade 1 Attack",
                        per_level:"+4%"
                    }
                }],
                race:"Elves",
                stats:{
                    per_command:100,
                    damage:"23-24",
                    hp:24,
                    defence:9,
                    speed:79,
                    siege:10,
                    conscription_per_command:{
                        wood:2900,
                        ore:2300,
                        grain:2300,
                        build_time_in_min:16
                    }
                }
            },{
                id:"102",
                name:"Sentinel",
                faction:"Good",
                tier:"III",
                unlocked:"Hunter Range",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"swiftness",
                    effect:{
                        level:1,
                        effect: "46% chance to Evade 1 Attack",
                        per_level:"+4%"
                    }
                }],
                race:"Elves",
                stats:{
                    per_command:100,
                    damage:"28-29",
                    hp:28,
                    defence:14,
                    speed:79,
                    siege:12,
                    conscription_per_command:{
                        wood:3900,
                        ore:3400,
                        grain:3500,
                        build_time_in_min:22
                    }
                }
            },{
                id:"103",
                name:"Horseback Archer",
                faction:"Good",
                tier:"I",
                unlocked:"Horseback Archer Stable",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "Damage received -1%",
                        per_level:"-1%"
                    }
                }],
                race:"Elves",
                stats:{
                    per_command:50,
                    damage:"21-23",
                    hp:56,
                    defence:16,
                    speed:127,
                    siege:12,
                    conscription_per_command:{
                        wood:2700,
                        ore:1500,
                        grain:3300,
                        build_time_in_min:17
                    }
                }
            },{
                id:"104",
                name:"Cavalry Archer",
                faction:"Good",
                tier:"II",
                unlocked:"Horseback Archer Stable",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "Damage received -1%",
                        per_level:"-1%"
                    }
                },{
                    id:2,
                    name:"Giant Slayer",
                    effect:{
                        level:1,
                        effect: "Against Large Unit Damage +5%",
                        per_level:"+5%"
                    }
                },],
                race:"Elves",
                stats:{
                    per_command:50,
                    damage:"32-36",
                    hp:68,
                    defence:22,
                    speed:127,
                    siege:14,
                    conscription_per_command:{
                        wood:4050,
                        ore:2600,
                        grain:4550,
                        build_time_in_min:26
                    }
                }
            },{
                id:"105",
                name:"Bow Knight",
                faction:"Good",
                tier:"III",
                unlocked:"Horseback Archer Stable",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "Damage received -1%",
                        per_level:"-1%"
                    }
                }],
                race:"Elves",
                stats:{
                    per_command:50,
                    damage:"21-23",
                    hp:56,
                    defence:16,
                    speed:127,
                    siege:16,
                    conscription_per_command:{
                        wood:2700,
                        ore:1500,
                        grain:3300,
                        build_time_in_min:17
                    }
                }
            },{
                id:"106",
                name:"Warden",
                faction:"Good",
                tier:"II",
                unlocked:"Warden Training Grounds",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Counterattack",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Elves",
                stats:{
                    per_command:100,
                    damage:"12-24",
                    hp:28,
                    defence:50,
                    speed:80,
                    siege:15,
                    conscription_per_command:{
                        wood:2300,
                        ore:2500,
                        grain:2700,
                        build_time_in_min:17
                    }
                }
            },{
                id:"107",
                name:"Herald",
                faction:"Good",
                tier:"III",
                unlocked:"Warden Training Grounds",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Counterattack",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Elves",
                stats:{
                    per_command:100,
                    damage:"15-26",
                    hp:36,
                    defence:71,
                    speed:60,
                    siege:18,
                    conscription_per_command:{
                        wood:3400,
                        ore:3400,
                        grain:4000,
                        build_time_in_min:21
                    }
                }
            },{
                id:"108",
                name:"Marchwarden",
                faction:"Lothlorien",
                tier:"IV",
                unlocked:"Marchwarden Training Grounds",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Keen Eye",
                    effect:{
                        level:1,
                        effect: "Each Round 37% chance to gain Pursuit.(Ignores the target's Evasion.)",
                        per_level:"+7%"
                    }
                },{
                    id:2,
                    name:"Indomitable",
                    effect:{
                        level:1,
                        effect: "Unaffected by Stun. Defense +2.",
                        per_level:"+2"
                    }
                }],
                race:"Elves",
                stats:{
                    per_command:50,
                    damage:"59-60",
                    hp:66,
                    defence:41,
                    speed:99,
                    siege:17,
                    conscription_per_command:{
                        wood:7500,
                        ore:6300,
                        grain:6000,
                        build_time_in_min:34
                    }
                }
            },{
                id:"109",
                name:"Light Cavalry",
                faction:"Good",
                tier:"I",
                unlocked:"Light Cavalry Stable",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:50,
                    damage:"18-25",
                    hp:62,
                    defence:15,
                    speed:139,
                    siege:15,
                    conscription_per_command:{
                        wood:1800,
                        ore:2100,
                        grain:3600,
                        build_time_in_min:17
                    }
                }
            },{
                id:"110",
                name:"Outrider",
                faction:"Good",
                tier:"II",
                unlocked:"Light Cavalry Stable",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                },{
                    id:2,
                    name:"Rohirrim Charge",
                    effect:{
                        level:1,
                        effect: "First 1 instance(s) of damage dealt in battle +5%",
                        per_level:"5%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:50,
                    damage:"26-37",
                    hp:76,
                    defence:20,
                    speed:139,
                    siege:19,
                    conscription_per_command:{
                        wood:2600,
                        ore:3400,
                        grain:5200,
                        build_time_in_min:25
                    }
                }
            },{
                id:"111",
                name:"Cavalier",
                faction:"Good",
                tier:"II",
                unlocked:"Light Cavalry Stable",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                },{
                    id:2,
                    name:"Rohirrim Charge",
                    effect:{
                        level:1,
                        effect: "First 1 instance(s) of damage dealt in battle +5%",
                        per_level:"5%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:50,
                    damage:"34-42",
                    hp:82,
                    defence:34,
                    speed:139,
                    siege:22,
                    conscription_per_command:{
                        wood:4550,
                        ore:5400,
                        grain:7300,
                        build_time_in_min:33
                    }
                }
            },{
                id:"112",
                name:"Bowman",
                faction:"Good",
                tier:"I",
                unlocked:"Bowman Range",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Ranged Advantage",
                    effect:{
                        level:1,
                        effect: "First 2 Rounds Damage dealt +4%.",
                        per_level:"+4%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:50,
                    damage:"9-15",
                    hp:20,
                    defence:9,
                    speed:80,
                    siege:6,
                    conscription_per_command:{
                        wood:2100,
                        ore:1400,
                        grain:2100,
                        build_time_in_min:12
                    }
                }
            },{
                id:"113",
                name:"Longbowman",
                faction:"Good",
                tier:"II",
                unlocked:"Bowman Range",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Ranged Advantage",
                    effect:{
                        level:1,
                        effect: "First 2 Rounds Damage dealt +4%.",
                        per_level:"+4%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:100,
                    damage:"12-20",
                    hp:26,
                    defence:13,
                    speed:72,
                    siege:9,
                    conscription_per_command:{
                        wood:2700,
                        ore:1900,
                        grain:2900,
                        build_time_in_min:17
                    }
                }
            },{
                id:"114",
                name:"Sharpshooter",
                faction:"Good",
                tier:"III",
                unlocked:"Bowman Range",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Ranged Advantage",
                    effect:{
                        level:1,
                        effect: "First 2 Rounds Damage dealt +4%.",
                        per_level:"+4%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:100,
                    damage:"18-26",
                    hp:32,
                    defence:19,
                    speed:64,
                    siege:11,
                    conscription_per_command:{
                        wood:3800,
                        ore:3000,
                        grain:4000,
                        build_time_in_min:21
                    }
                }
            },{
                id:"115",
                name:"Ranger",
                faction:"Good",
                tier:"II",
                unlocked:"Ranger Training Grounds",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Bullseye",
                    effect:{
                        level:1,
                        effect: "Against Ranged Enemy Targets Damage +3%, prioritises ranged targets.",
                        per_level:"+3%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:100,
                    damage:"14-20",
                    hp:30,
                    defence:29,
                    speed:100,
                    siege:12,
                    conscription_per_command:{
                        wood:2500,
                        ore:2900,
                        grain:4000,
                        build_time_in_min:21
                    }
                }
            },{
                id:"116",
                name:"Dunedain",
                faction:"Good",
                tier:"III",
                unlocked:"Ranger Training Grounds",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Bullseye",
                    effect:{
                        level:1,
                        effect: "Against Ranged Enemy Targets Damage +3%, prioritises ranged targets.",
                        per_level:"+3%"
                    }
                },{
                    id:2,
                    name:"Gracefulness",
                    effect:{
                        level:1,
                        effect: "Damage received from Ranged Units -3%",
                        per_level:"3%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:100,
                    damage:"15-22",
                    hp:36,
                    defence:44,
                    speed:122,
                    siege:15,
                    conscription_per_command:{
                        wood:3900,
                        ore:4200,
                        grain:4800,
                        build_time_in_min:25
                    }
                }
            },{
                id:"117",
                name:"Militia",
                faction:"Good",
                tier:"I",
                unlocked:"Militia Training Grounds",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Shielding",
                    effect:{
                        level:1,
                        effect: "50% chance for Physical Damage received -2%",
                        per_level:"+2%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:100,
                    damage:"8-13",
                    hp:24,
                    defence:24,
                    speed:89,
                    siege:16,
                    conscription_per_command:{
                        wood:1400,
                        ore:1800,
                        grain:2400,
                        build_time_in_min:13
                    }
                }
            },{
                id:"118",
                name:"Spearman",
                faction:"Good",
                tier:"II",
                unlocked:"Militia Training Grounds",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Anti-Cavalry Training",
                    effect:{
                        level:1,
                        effect: "Against Mounted Units Damage +3% and damage received -2%.",
                        per_level:"+3% and -2%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:100,
                    damage:"11-15",
                    hp:32,
                    defence:51,
                    speed:65,
                    siege:17,
                    conscription_per_command:{
                        wood:1900,
                        ore:2400,
                        grain:3200,
                        build_time_in_min:16
                    }
                }
            },{
                id:"119",
                name:"Guard of the Tower",
                faction:"Good",
                tier:"III",
                unlocked:"Militia Training Grounds",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Anti-Cavalry Training",
                    effect:{
                        level:1,
                        effect: "Against Mounted Units Damage +3% and damage received -2%.",
                        per_level:"+3% and -2%"
                    }
                },{
                    id:2,
                    name:"Shielding",
                    effect:{
                        level:1,
                        effect: "50% chance for Physical Damage received -2%",
                        per_level:"+2%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:100,
                    damage:"12-15",
                    hp:40,
                    defence:78,
                    speed:59,
                    siege:18,
                    conscription_per_command:{
                        wood:2800,
                        ore:3600,
                        grain:4400,
                        build_time_in_min:21
                    }
                }
            },{
                id:"120",
                name:"Horseman",
                faction:"Good",
                tier:"I",
                unlocked:"Horse Stable",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:50,
                    damage:"15-23",
                    hp:65,
                    defence:30,
                    speed:132,
                    siege:20,
                    conscription_per_command:{
                        wood:1400,
                        ore:2700,
                        grain:3400,
                        build_time_in_min:16
                    }
                }
            },{
                id:"121",
                name:"Knight",
                faction:"Good",
                tier:"II",
                unlocked:"Horse Stable",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                },{
                    id:2,
                    name:"Full Protection",
                    effect:{
                        level:1,
                        effect: "Damage received from enemy Melee Units -1.5%.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:50,
                    damage:"22-30",
                    hp:82,
                    defence:37,
                    speed:122,
                    siege:22,
                    conscription_per_command:{
                        wood:2050,
                        ore:4350,
                        grain:4800,
                        build_time_in_min:25
                    }
                }
            },{
                id:"122",
                name:"Cataphract",
                faction:"Good",
                tier:"III",
                unlocked:"Horse Stable",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                },{
                    id:2,
                    name:"Full Protection",
                    effect:{
                        level:1,
                        effect: "Damage received from enemy Melee Units -1.5%.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:50,
                    damage:"26-35",
                    hp:94,
                    defence:61,
                    speed:110,
                    siege:23,
                    conscription_per_command:{
                        wood:3900,
                        ore:5550,
                        grain:7800,
                        build_time_in_min:34
                    }
                }
            },{
                id:"123",
                name:"Dwarven Footman",
                faction:"Good",
                tier:"I",
                unlocked:"Dwarven Footman Training Grounds",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Laceration",
                    effect:{
                        level:1,
                        effect: "Inflicts an additional 2% Physical Damage (Continuous) for 1 round(s).",
                        per_level:"+2%"
                    }
                }],
                race:"Dwarves",
                stats:{
                    per_command:100,
                    damage:"8-11",
                    hp:26,
                    defence:18,
                    speed:86,
                    siege:18,
                    conscription_per_command:{
                        wood:1100,
                        ore:2100,
                        grain:2400,
                        build_time_in_min:12
                    }
                }
            },{
                id:"124",
                name:"Shieldbearer",
                faction:"Good",
                tier:"II",
                unlocked:"Dwarven Footman Training Grounds",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Laceration",
                    effect:{
                        level:1,
                        effect: "Inflicts an additional 2% Physical Damage (Continuous) for 1 round(s).",
                        per_level:"+2%"
                    }
                }],
                race:"Dwarves",
                stats:{
                    per_command:100,
                    damage:"6-18",
                    hp:36,
                    defence:60,
                    speed:70,
                    siege:19,
                    conscription_per_command:{
                        wood:1400,
                        ore:2900,
                        grain:3200,
                        build_time_in_min:16
                    }
                }
            },{
                id:"125",
                name:"Guardian",
                faction:"Good",
                tier:"III",
                unlocked:"Dwarven Footman Training Grounds",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Shielding",
                    effect:{
                        level:1,
                        effect: "50% chance for Physical Damage received -2%",
                        per_level:"+2%"
                    }
                },{
                    id:2,
                    name:"Laceration",
                    effect:{
                        level:1,
                        effect: "Inflicts an additional 2% Physical Damage (Continuous) for 1 round(s).",
                        per_level:"+2%"
                    }
                },{
                    id:3,
                    name:"Heatproof Skin",
                    effect:{
                        level:1,
                        effect: "Burn Damage received -2%.",
                        per_level:"+2%"
                    }
                }],
                race:"Dwarves",
                stats:{
                    per_command:100,
                    damage:"7-20",
                    hp:40,
                    defence:101,
                    speed:52,
                    siege:20,
                    conscription_per_command:{
                        wood:2800,
                        ore:4000,
                        grain:4000,
                        build_time_in_min:21
                    }
                }
            },{
                id:"126",
                name:"Axe Thrower",
                faction:"Good",
                tier:"I",
                unlocked:"Dwarven Footman Training Grounds",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Battlers' Bane",
                    effect:{
                        level:1,
                        effect: "Against Melee Units Damage +2%",
                        per_level:"+2%"
                    }
                }],
                race:"Dwarves",
                stats:{
                    per_command:100,
                    damage:"5-17",
                    hp:22,
                    defence:15,
                    speed:77,
                    siege:8,
                    conscription_per_command:{
                        wood:1700,
                        ore:1800,
                        grain:2100,
                        build_time_in_min:12
                    }
                }
            },{
                id:"127",
                name:"Heavy Axe Thrower",
                faction:"Good",
                tier:"II",
                unlocked:"Dwarven Footman Training Grounds",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Battlers' Bane",
                    effect:{
                        level:1,
                        effect: "Against Melee Units Damage +2%",
                        per_level:"+2%"
                    }
                }],
                race:"Dwarves",
                stats:{
                    per_command:100,
                    damage:"7-24",
                    hp:28,
                    defence:25,
                    speed:68,
                    siege:12,
                    conscription_per_command:{
                        wood:2300,
                        ore:2500,
                        grain:2700,
                        build_time_in_min:16
                    }
                }
            },{
                id:"128",
                name:"Master Thrower",
                faction:"Good",
                tier:"III",
                unlocked:"Dwarven Footman Training Grounds",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Battlers' Bane",
                    effect:{
                        level:1,
                        effect: "Against Melee Units Damage +2%",
                        per_level:"+2%"
                    }
                },{
                    id:2,
                    name:"Giant Slayer",
                    effect:{
                        level:1,
                        effect: "Against Large Units Damage +5%",
                        per_level:"+5%"
                    }
                }],
                race:"Dwarves",
                stats:{
                    per_command:100,
                    damage:"9-29",
                    hp:32,
                    defence:32,
                    speed:55,
                    siege:16,
                    conscription_per_command:{
                        wood:3400,
                        ore:3500,
                        grain:3900,
                        build_time_in_min:21
                    }
                }
            },{
                id:"129",
                name:"Goat Rider",
                faction:"Good",
                tier:"II",
                unlocked:"Goat Rider Stable",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Dwarves",
                stats:{
                    per_command:100,
                    damage:"24-28",
                    hp:82,
                    defence:33,
                    speed:96,
                    siege:23,
                    conscription_per_command:{
                        wood:1400,
                        ore:3100,
                        grain:4850,
                        build_time_in_min:21
                    }
                }
            },{
                id:"130",
                name:"Ram Rider",
                faction:"Good",
                tier:"III",
                unlocked:"Goat Rider Stable",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                },{
                    id:2,
                    name:"Trample",
                    effect:{
                        level:1,
                        effect: "On Hit Enemy Target Defence -5% for 1 round(s).",
                        per_level:"+5%"
                    }
                },{
                    id:3,
                    name:"Heatproof Skin",
                    effect:{
                        level:1,
                        effect: "Burn Damage received -2%.",
                        per_level:"+2%"
                    }
                }],
                race:"Dwarves",
                stats:{
                    per_command:100,
                    damage:"28-32",
                    hp:90,
                    defence:40,
                    speed:102,
                    siege:27,
                    conscription_per_command:{
                        wood:2800,
                        ore:4500,
                        grain:5650,
                        build_time_in_min:25
                    }
                }
            },{
                id:"131",
                name:"Iron Warrior",
                faction:"Erebor",
                tier:"IV",
                unlocked:"Iron Warrior Training Grounds",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Full Armor",
                    effect:{
                        level:1,
                        effect: "Physical Damage received -1.5%.",
                        per_level:"+1.5%"
                    }
                },{
                    id:2,
                    name:"Battlers' Bane",
                    effect:{
                        level:1,
                        effect: "Against Melee Units Damage +2%",
                        per_level:"+2%"
                    }
                }],
                race:"Dwarves",
                stats:{
                    per_command:50,
                    damage:"30-34",
                    hp:84,
                    defence:116,
                    speed:49,
                    siege:42,
                    conscription_per_command:{
                        wood:4300,
                        ore:7400,
                        grain:8100,
                        build_time_in_min:38
                    }
                }
            },{
                id:"132",
                name:"Marshal",
                faction:"Rohan",
                tier:"IV",
                unlocked:"Marshal Stable",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Onslaught",
                    effect:{
                        level:1,
                        effect: "Damage dealt +5.6% (effect modified by Speed stat). This effect diminishes be 1/3 with each damage dealt.",
                        per_level:"+5.6%"
                    }
                },{
                    id:2,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "Damage received -1%",
                        per_level:"1%"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:50,
                    damage:"34-40",
                    hp:90,
                    defence:43,
                    speed:23,
                    siege:25,
                    conscription_per_command:{
                        wood:8200,
                        ore:9600,
                        grain:11900,
                        build_time_in_min:60
                    }
                }
            },{
                id:"133",
                name:"Swan Knight",
                faction:"Gondor",
                tier:"IV",
                unlocked:"Swan Knight Stable",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "Damage received -1%",
                        per_level:"1%"
                    }
                },{
                    id:2,
                    name:"Protector",
                    effect:{
                        level:1,
                        effect: "First 3 rounds on Self, defence +10 and take all damage from normal attacks on behalf of allies",
                        per_level:"10"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:50,
                    damage:"27-34",
                    hp:98,
                    defence:66,
                    speed:128,
                    siege:28,
                    conscription_per_command:{
                        wood:6050,
                        ore:9900,
                        grain:13750,
                        build_time_in_min:60
                    }
                }
            },{
                id:"134",
                name:"Ranger of the North",
                faction:"Arnor",
                tier:"IV",
                unlocked:"Rangers of the North camp",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Scouting Tactics",
                    effect:{
                        level:1,
                        effect: "When battling on non-structure land damage dealt +1%, damage received -1%",
                        per_level:"1%"
                    }
                },{
                    id:2,
                    name:"Protector of  the North",
                    effect:{
                        level:1,
                        effect: "Defense +2. Absorb enemy normal attacks against allied ranged units",
                        per_level:"2"
                    }
                }],
                race:"Men",
                stats:{
                    per_command:100,
                    damage:"35-38",
                    hp:86,
                    defence:49,
                    speed:100,
                    siege:15,
                    conscription_per_command:{
                        wood:6000,
                        ore:6600,
                        grain:7200,
                        build_time_in_min:40
                    }
                }
            },{
                id:"135",
                name:"Noldor Archer",
                faction:"Lindon",
                tier:"IV",
                unlocked:"Noldor Archer Camp",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Keen Eye",
                    effect:{
                        level:1,
                        effect: "Each Round 37% chance to gain Pursuit.(Ignores the target's Evasion.)",
                        per_level:"+7%"
                    }
                },{
                    id:2,
                    name:"Volley",
                    effect:{
                        level:1,
                        effect: "Against 2 target attack for 101.3% on rounds 1,4 ,7, and 10. Normal attacks are disabled",
                        per_level:"5.5%"
                    }
                }],
                race:"Elves",
                stats:{
                    per_command:100,
                    damage:"55-56",
                    hp:60,
                    defence:35,
                    speed:69,
                    siege:16,
                    conscription_per_command:{
                        wood:7800,
                        ore:6400,
                        grain:5600,
                        build_time_in_min:40
                    }
                }
            },{
                id:"200",
                name:"Grunt",
                faction:"Evil",
                tier:"I",
                unlocked:"Grunt Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Torture",
                    effect:{
                        level:1,
                        effect: "Against Melee Units Prioritises enemies with the lowest Attack, Damage dealth +1%",
                        per_level:"+1%"
                    }
                }],
                race:"Orcs",
                stats:{
                    per_command:100,
                    damage:"5-16",
                    hp:24,
                    defence:22,
                    speed:82,
                    siege:17,
                    conscription_per_command:{
                        wood:1000,
                        ore:1200,
                        grain:1600,
                        build_time_in_min:10
                    }
                }
            },{
                id:"201",
                name:"Brute",
                faction:"Evil",
                tier:"II",
                unlocked:"Grunt Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Armor Break",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Orcs",
                stats:{
                    per_command:100,
                    damage:"10-16",
                    hp:30,
                    defence:44,
                    speed:69,
                    siege:18,
                    conscription_per_command:{
                        wood:1600,
                        ore:1800,
                        grain:2200,
                        build_time_in_min:15
                    }
                }
            },{
                id:"202",
                name:"Crusher",
                faction:"Evil",
                tier:"III",
                unlocked:"Grunt Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Torture",
                    effect:{
                        level:1,
                        effect: "Against Melee Units Prioritises enemies with the lowest Attack, Damage dealth +1%",
                        per_level:"+1%"
                    }
                },{
                    id:2,
                    name:"Armor Break",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Orcs",
                stats:{
                    per_command:100,
                    damage:"13-16",
                    hp:36,
                    defence:66,
                    speed:55,
                    siege:19,
                    conscription_per_command:{
                        wood:2400,
                        ore:3000,
                        grain:3200,
                        build_time_in_min:20
                    }
                }
            },{
                id:"203",
                name:"Scout",
                faction:"Evil",
                tier:"I",
                unlocked:"Scout Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                },],
                race:"Orcs",
                stats:{
                    per_command:50,
                    damage:"16-21",
                    hp:52,
                    defence:16,
                    speed:138,
                    siege:15,
                    conscription_per_command:{
                        wood:1200,
                        ore:1800,
                        grain:2600,
                        build_time_in_min:15
                    }
                }
            },{
                id:"204",
                name:"Tracker",
                faction:"Evil",
                tier:"II",
                unlocked:"Scout Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Torture",
                    effect:{
                        level:1,
                        effect: "Against Melee Units Prioritises enemies with the lowest Attack, Damage dealth +1%",
                        per_level:"+1%"
                    }
                },{
                    id:2,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Orcs",
                stats:{
                    per_command:50,
                    damage:"26-32",
                    hp:68,
                    defence:26,
                    speed:135,
                    siege:16,
                    conscription_per_command:{
                        wood:1750,
                        ore:3300,
                        grain:4300,
                        build_time_in_min:25
                    }
                }
            },{
                id:"205",
                name:"Raider",
                faction:"Evil",
                tier:"III",
                unlocked:"Scout Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Predator",
                    effect:{
                        level:1,
                        effect: "Against Mounted Unit Damage dealt +2%",
                        per_level:"+2%"
                    }
                },{
                    id:2,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Orcs",
                stats:{
                    per_command:50,
                    damage:"34-40",
                    hp:86,
                    defence:33,
                    speed:133,
                    siege:17,
                    conscription_per_command:{
                        wood:4000,
                        ore:6050,
                        grain:7200,
                        build_time_in_min:40
                    }
                }
            },{
                id:"206",
                name:"Cave Troll",
                faction:"Evil",
                tier:"II",
                unlocked:"Cave Troll Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Large Unit",
                    effect:{
                        level:1,
                        effect: "Against Melee Units Prioritises enemies with the lowest Attack, Damage dealth +1%",
                        per_level:"+1%"
                    }
                }],
                race:"Trolls",
                stats:{
                    per_command:4,
                    damage:"300-380",
                    hp:1000,
                    defence:56,
                    speed:49,
                    siege:450,
                    conscription_per_command:{
                        wood:1720,
                        ore:1760,
                        grain:7800,
                        build_time_in_min:30
                    }
                }
            },{
                id:"207",
                name:"Mountain Troll",
                faction:"Evil",
                tier:"III",
                unlocked:"Cave Troll Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Massive Presence",
                    effect:{
                        level:1,
                        effect: "First 3 Rounds 55% chance each round to make the enemy army's normal attacks only target this unit",
                        per_level:"+1%"
                    }
                },{
                    id:2,
                    name:"Large Unit",
                    effect:{
                        level:1,
                        effect: "Physical Damage received -1.5%",
                        per_level:"+1.5%"
                    }
                }],
                race:"Trolls",
                stats:{
                    per_command:4,
                    damage:"350-400",
                    hp:1200,
                    defence:66,
                    speed:42,
                    siege:500,
                    conscription_per_command:{
                        wood:3560,
                        ore:3520,
                        grain:10200,
                        build_time_in_min:40
                    }
                }
            },{
                id:"208",
                name:"Ravager",
                faction:"Mordor",
                tier:"VI",
                unlocked:"Ravager Den",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Large Unit",
                    effect:{
                        level:1,
                        effect: "Physical Damage received -1.5%",
                        per_level:"+1.5%"
                    }
                },{
                    id:2,
                    name:"Savagery",
                    effect:{
                        level:1,
                        effect: "23% Chance each round of attacking all enemy units",
                        per_level:"+3%"
                    }
                }],
                race:"Trolls",
                stats:{
                    per_command:4,
                    damage:"350-400",
                    hp:1300,
                    defence:76,
                    speed:40,
                    siege:620,
                    conscription_per_command:{
                        wood:6400,
                        ore:8120,
                        grain:15200,
                        build_time_in_min:60
                    }
                }
            },{
                id:"209",
                name:"Skirmisher",
                faction:"Evil",
                tier:"I",
                unlocked:"Skirmisher Yurt",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Anti-Cavalry Training",
                    effect:{
                        level:1,
                        effect: "Against Mounted Units Damage +3% and damage received -2%.",
                        per_level:"+3% and -2%"
                    }
                }],
                race:"Evil Men",
                stats:{
                    per_command:100,
                    damage:"9-12",
                    hp:24,
                    defence:19,
                    speed:85,
                    siege:15,
                    conscription_per_command:{
                        wood:1400,
                        ore:1800,
                        grain:2400,
                        build_time_in_min:15
                    }
                }
            },{
                id:"210",
                name:"Pikeman",
                faction:"Evil",
                tier:"II",
                unlocked:"Skirmisher Yurt",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Anti-Cavalry Training",
                    effect:{
                        level:1,
                        effect: "Against Mounted Units Damage +3% and damage received -2%.",
                        per_level:"+3% and -2%"
                    }
                }],
                race:"Evil Men",
                stats:{
                    per_command:100,
                    damage:"14-17",
                    hp:30,
                    defence:36,
                    speed:75,
                    siege:16,
                    conscription_per_command:{
                        wood:1800,
                        ore:2500,
                        grain:3200,
                        build_time_in_min:20
                    }
                }
            },{
                id:"211",
                name:"Halberdier",
                faction:"Evil",
                tier:"III",
                unlocked:"Skirmisher Yurt",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Anti-Cavalry Training",
                    effect:{
                        level:1,
                        effect: "Against Mounted Units Damage +3% and damage received -2%.",
                        per_level:"+3% and -2%"
                    }
                },{
                    id:2,
                    name:"Spear Wall",
                    effect:{
                        level:2,
                        effect: "When hit by enemies' normal attacks within range, perform a Counterattack that deals 1.5% damage.",
                        per_level:"+3% and -2%"
                    }
                }],
                race:"Evil Men",
                stats:{
                    per_command:100,
                    damage:"17-19",
                    hp:35,
                    defence:45,
                    speed:65,
                    siege:17,
                    conscription_per_command:{
                        wood:3300,
                        ore:3500,
                        grain:4000,
                        build_time_in_min:25
                    }
                }
            },{
                id:"212",
                name:"Mercenary",
                faction:"Evil",
                tier:"I",
                unlocked:"Mercenary Yurt",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Evil Men",
                stats:{
                    per_command:100,
                    damage:"17-24",
                    hp:63,
                    defence:17,
                    speed:138,
                    siege:19,
                    conscription_per_command:{
                        wood:700,
                        ore:2900,
                        grain:3900,
                        build_time_in_min:20
                    }
                }
            },{
                id:"213",
                name:"Marauder",
                faction:"Evil",
                tier:"II",
                unlocked:"Mercenary Yurt",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                },{
                    id:2,
                    name:"Looting",
                    effect:{
                        level:1,
                        effect: "When Destroying Field Structures Speed +2, gain resources.",
                        per_level:"+2%"
                    }
                }],
                race:"Evil Men",
                stats:{
                    per_command:50,
                    damage:"25-32",
                    hp:80,
                    defence:30,
                    speed:118,
                    siege:20,
                    conscription_per_command:{
                        wood:1050,
                        ore:4350,
                        grain:5800,
                        build_time_in_min:30
                    }
                }
            },{
                id:"214",
                name:"Dragoon",
                faction:"Evil",
                tier:"III",
                unlocked:"Mercenary Yurt",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "When hit by enemies' normal attacks within range,perform a Counterattack that deals 16,5% damage. Normal attack damage -10%.",
                        per_level:"+1.5%"
                    }
                },{
                    id:2,
                    name:"Gracefulness",
                    effect:{
                        level:1,
                        effect: "Damage received from Ranged Units -3%.",
                        per_level:"+3%"
                    }
                }],
                race:"Evil Men",
                stats:{
                    per_command:50,
                    damage:"32-38",
                    hp:88,
                    defence:52,
                    speed:122,
                    siege:21,
                    conscription_per_command:{
                        wood:3450,
                        ore:6050,
                        grain:7750,
                        build_time_in_min:40
                    }
                }
            },{
                id:"215",
                name:"Pirate",
                faction:"Evil",
                tier:"II",
                unlocked:"Pirate Yurt",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Arson",
                    effect:{
                        level:1,
                        effect: "Normal attacks deal 82% Burn Damage.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Evil Men",
                stats:{
                    per_command:100,
                    damage:"12-19",
                    hp:34,
                    defence:16,
                    speed:88,
                    siege:15,
                    conscription_per_command:{
                        wood:2900,
                        ore:2500,
                        grain:4000,
                        build_time_in_min:25
                    }
                }
            },{
                id:"216",
                name:"Corsair",
                faction:"Evil",
                tier:"III",
                unlocked:"Pirate Yurt",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Strategic Manoeuvre",
                    effect:{
                        level:1,
                        effect: "1% Chance to Evade damage",
                        per_level:"+1%"
                    }
                },{
                    id:2,
                    name:"Arson",
                    effect:{
                        level:1,
                        effect: "Normal attacks deal 82% Burn Damage.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Evil Men",
                stats:{
                    per_command:100,
                    damage:"13-24",
                    hp:36,
                    defence:31,
                    speed:88,
                    siege:21,
                    conscription_per_command:{
                        wood:4500,
                        ore:3700,
                        grain:4800,
                        build_time_in_min:30
                    }
                }
            },{
                id:"217",
                name:"War Chariot",
                faction:"Rhun",
                tier:"IV",
                unlocked:"War Chariot Yurt",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Reap",
                    effect:{
                        level:1,
                        effect: "Against Melee Units Damage +2%.",
                        per_level:"+2%"
                    }
                },{
                    id:2,
                    name:"Scythes",
                    effect:{
                        level:1,
                        effect: "Rounds 1 and 6 agains 2 enevmy unit deals 16% physical damage once and inflicts 10% bleed for 4 rounds. This damage carries the Pursuit effect.",
                        per_level:"+16%"
                    }
                },{
                    id:3,
                    name:"Large Unit",
                    effect:{
                        level:1,
                        effect: "Physical Damage received -1.5%",
                        per_level:"+1.5%"
                    }
                }],
                race:"Evil Men",
                stats:{
                    per_command:4,
                    damage:"225-300",
                    hp:1300,
                    defence:70,
                    speed:95,
                    siege:415,
                    conscription_per_command:{
                        wood:9600,
                        ore:9100,
                        grain:11000,
                        build_time_in_min:60
                    }
                }
            },{
                id:"218",
                name:"Orc Archer",
                faction:"Evil",
                tier:"I",
                unlocked:"Orc Archer Camp",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Cunning",
                    effect:{
                        level:1,
                        effect: "Attacks deal an additional 2% Poison Damage.",
                        per_level:"+2%"
                    }
                }],
                race:"Orcs",
                stats:{
                    per_command:100,
                    damage:"10-15",
                    hp:22,
                    defence:12,
                    speed:88,
                    siege:7,
                    conscription_per_command:{
                        wood:1200,
                        ore:800,
                        grain:1800,
                        build_time_in_min:10
                    }
                }
            },{
                id:"219",
                name:"Orc Crossbowman",
                faction:"Evil",
                tier:"II",
                unlocked:"Orc Archer Camp",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Dual Blows",
                    effect:{
                        level:1,
                        effect: "Each Round 63% chance to gain Follow Up.",
                        per_level:"3%"
                    }
                }],
                race:"Orcs",
                stats:{
                    per_command:100,
                    damage:"7-15",
                    hp:26,
                    defence:13,
                    speed:76,
                    siege:8,
                    conscription_per_command:{
                        wood:2200,
                        ore:1000,
                        grain:2400,
                        build_time_in_min:15
                    }
                }
            },{
                id:"220",
                name:"Morgul Arbalest",
                faction:"Evil",
                tier:"III",
                unlocked:"Orc Archer Camp",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Dual Blows",
                    effect:{
                        level:1,
                        effect: "Each Round 63% chance to gain Follow Up.",
                        per_level:"3%"
                    }
                },{
                    id:2,
                    name:"Cunning",
                    effect:{
                        level:1,
                        effect: "Attacks deal an additional 2% Poison Damage.",
                        per_level:"+2%"
                    }
                }],
                race:"Orcs",
                stats:{
                    per_command:100,
                    damage:"9-16",
                    hp:32,
                    defence:22,
                    speed:66,
                    siege:10,
                    conscription_per_command:{
                        wood:3500,
                        ore:2800,
                        grain:4500,
                        build_time_in_min:25
                    }
                }
            },{
                id:"221",
                name:"Stalker",
                faction:"Evil",
                tier:"II",
                unlocked:"Stalker Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Execution",
                    effect:{
                        level:1,
                        effect: "Round 5 Onwards Damage +7%.",
                        per_level:"5%"
                    }
                }],
                race:"Orcs",
                stats:{
                    per_command:100,
                    damage:"12-23",
                    hp:28,
                    defence:28,
                    speed:82,
                    siege:15,
                    conscription_per_command:{
                        wood:2000,
                        ore:1400,
                        grain:2200,
                        build_time_in_min:15
                    }
                }
            },{
                id:"222",
                name:"Reaper",
                faction:"Evil",
                tier:"III",
                unlocked:"Stalker Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Execution",
                    effect:{
                        level:1,
                        effect: "Round 5 Onwards Damage +7%.",
                        per_level:"5%"
                    }
                },{
                    id:2,
                    name:"Culling",
                    effect:{
                        level:1,
                        effect: "Normal attacks 98.3% prioritize enemies with the lowest Defense",
                        per_level:"2.5%"
                    }
                }],
                race:"Orcs",
                stats:{
                    per_command:100,
                    damage:"15-23",
                    hp:34,
                    defence:30,
                    speed:76,
                    siege:18,
                    conscription_per_command:{
                        wood:4500,
                        ore:2800,
                        grain:3500,
                        build_time_in_min:25
                    }
                }
            },{
                id:"223",
                name:"Bruiser",
                faction:"Evil",
                tier:"I",
                unlocked:"Bruiser Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Armor Break",
                    effect:{
                        level:1,
                        effect: "On Hit Enemy Target Defence -2% for 1 rounds.",
                        per_level:"2%"
                    }
                }],
                race:"Uruk-hai",
                stats:{
                    per_command:100,
                    damage:"10-13",
                    hp:25,
                    defence:10,
                    speed:92,
                    siege:8,
                    conscription_per_command:{
                        wood:1100,
                        ore:2100,
                        grain:2400,
                        build_time_in_min:15
                    }
                }
            },{
                id:"224",
                name:"Brawler",
                faction:"Evil",
                tier:"II",
                unlocked:"Bruiser Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Fanaticism",
                    effect:{
                        level:1,
                        effect: "Damage dealt +2%. This effect gradually decrease every round.",
                        per_level:"2%"
                    }
                }],
                race:"Uruk-hai",
                stats:{
                    per_command:100,
                    damage:"15-17",
                    hp:32,
                    defence:14,
                    speed:84,
                    siege:12,
                    conscription_per_command:{
                        wood:1600,
                        ore:2700,
                        grain:3200,
                        build_time_in_min:20
                    }
                }
            },{
                id:"225",
                name:"Berserker",
                faction:"Evil",
                tier:"III",
                unlocked:"Bruiser Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Fanaticism",
                    effect:{
                        level:1,
                        effect: "Damage dealt +2%. This effect gradually decrease every round.",
                        per_level:"2%"
                    }
                },{
                    id:2,
                    name:"Indomitable",
                    effect:{
                        level:1,
                        effect: "Unaffected by Stun. Defense +2.",
                        per_level:"2%"
                    }
                }],
                race:"Uruk-hai",
                stats:{
                    per_command:100,
                    damage:"19-23",
                    hp:40,
                    defence:18,
                    speed:75,
                    siege:16,
                    conscription_per_command:{
                        wood:3200,
                        ore:3400,
                        grain:4200,
                        build_time_in_min:25
                    }
                }
            },{
                id:"226",
                name:"Breaker",
                faction:"Evil",
                tier:"I",
                unlocked:"Breaker Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Arson",
                    effect:{
                        level:1,
                        effect: "Normal attacks deal 82% Burn Damage.",
                        per_level:"2%"
                    }
                }],
                race:"Uruk-hai",
                stats:{
                    per_command:100,
                    damage:"4-12",
                    hp:26,
                    defence:14,
                    speed:79,
                    siege:20,
                    conscription_per_command:{
                        wood:1800,
                        ore:1400,
                        grain:2400,
                        build_time_in_min:15
                    }
                }
            },{
                id:"227",
                name:"Sapper",
                faction:"Evil",
                tier:"II",
                unlocked:"Bruiser Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Arson",
                    effect:{
                        level:1,
                        effect: "Normal attacks deal 82% Burn Damage.",
                        per_level:"2%"
                    }
                }],
                race:"Uruk-hai",
                stats:{
                    per_command:100,
                    damage:"4-13",
                    hp:28,
                    defence:15,
                    speed:72,
                    siege:25,
                    conscription_per_command:{
                        wood:2400,
                        ore:1800,
                        grain:3300,
                        build_time_in_min:20
                    }
                }
            },{
                id:"228",
                name:"Alchemist",
                faction:"Evil",
                tier:"III",
                unlocked:"Bruiser Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Arson",
                    effect:{
                        level:1,
                        effect: "Normal attacks deal 82% Burn Damage.",
                        per_level:"2%"
                    }
                }],
                race:"Uruk-hai",
                stats:{
                    per_command:100,
                    damage:"4-14",
                    hp:30,
                    defence:16,
                    speed:66,
                    siege:30,
                    conscription_per_command:{
                        wood:3100,
                        ore:2800,
                        grain:4900,
                        build_time_in_min:25
                    }
                }
            },{
                id:"229",
                name:"Uruk Archer",
                faction:"Evil",
                tier:"II",
                unlocked:"Uruk Archer Camp",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Fire Arrows",
                    effect:{
                        level:1,
                        effect: "Inflicts an additional 3% Damage.",
                        per_level:"3%"
                    }
                }],
                race:"Uruk-hai",
                stats:{
                    per_command:100,
                    damage:"14-16",
                    hp:30,
                    defence:10,
                    speed:72,
                    siege:12,
                    conscription_per_command:{
                        wood:1400,
                        ore:2500,
                        grain:3600,
                        build_time_in_min:20
                    }
                }
            },{
                id:"230",
                name:"Sniper",
                faction:"Evil",
                tier:"II",
                unlocked:"Uruk Archer Camp",
                attack_type:"Ranged",
                skills:[{
                    id:1,
                    name:"Bullseye",
                    effect:{
                        level:1,
                        effect: "Against Ranged Enemy Targets Damage +3%, prioritises ranged targets.",
                        per_level:"+3%"
                    }
                },{
                    id:2,
                    name:"Full Protection",
                    effect:{
                        level:1,
                        effect: "Damage received from enemy Melee Units -1.5%.",
                        per_level:"+1.5%"
                    }
                }],
                race:"Uruk-hai",
                stats:{
                    per_command:100,
                    damage:"22-25",
                    hp:32,
                    defence:19,
                    speed:65,
                    siege:15,
                    conscription_per_command:{
                        wood:2800,
                        ore:3500,
                        grain:4500,
                        build_time_in_min:25
                    }
                }
            },{
                id:"231",
                name:"Fallen",
                faction:"Angmar",
                tier:"VI",
                unlocked:"Fallen Knight Lair",
                attack_type:"Melee",
                skills:[{
                    id:1,
                    name:"Spite",
                    effect:{
                        level:1,
                        effect: "Self damage +0.6% (up to 10 stacks) upon receiving damage",
                        per_level:"+1.5%"
                    }
                },{
                    id:2,
                    name:"Mounted",
                    effect:{
                        level:1,
                        effect: "Damage received -1%",
                        per_level:"-1%"
                    },
            }],
                race:"Evil Men",
                stats:{
                    per_command:50,
                    damage:"30-40",
                    hp:92,
                    defence:55,
                    speed:134,
                    siege:24,
                    conscription_per_command:{
                        wood:6500,
                        ore:10300,
                        grain:12900,
                        build_time_in_min:60
                    }
                }
            }]
        return unitList;
}