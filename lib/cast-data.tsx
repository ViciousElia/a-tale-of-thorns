export interface CastData{
    name: string
    status: 'alive' | 'dead' | 'unknown' | 'missing' | 'ascended'
    description: string
    alias?: string[]
    image?: string | React.ReactNode
    group: number
    subgroup?: number
}
interface GroupData{
  name: string
  id: number
  parentId?: number
}

export function castData() : CastData[] {
  return [
    {name:'Rose'   ,status:'dead'   ,description:'Dead',group:0},
    {name:'Phyllo' ,status:'unknown',description:'Goddess',group:0},

    {name:'Roisin' ,status:'dead'    ,description:'Waif',group:1,subgroup:2},
    {name:'Jasmin' ,status:'ascended',description:'Princess',group:1,subgroup:2},
    {name:'Vaelis' ,status:'dead'    ,description:'Loon',group:1,subgroup:2},
    {name:'Salora' ,status:'unknown' ,description:'Goddess',group:1,subgroup:2},

    {name:'Nyxara' ,status:'alive'   ,description:'Baker',group:1,subgroup:3},
    {name:'Micah'  ,status:'alive'   ,description:'Fighter',group:1,subgroup:3},
    {name:'Deona'  ,status:'unknown' ,description:'Goddess',group:1,subgroup:3},
    {name:'Eliana' ,status:'alive'   ,description:'Scholar',group:1,subgroup:3},
    {name:'Tareth' ,status:'alive'   ,description:'Nice guy',group:1,subgroup:3},

    {name:'Delia'  ,status:'missing' ,description:'Sister',group:1,subgroup:4},
    {name:'Kovar'  ,status:'alive'   ,description:'Mentor',group:1,subgroup:4},
    {name:'Fernico',status:'alive'   ,description:'Friend',group:1,subgroup:4},
    {name:'Davian' ,status:'missing' ,description:'Sister',group:1,subgroup:4},
    {name:'Asha'   ,status:'missing' ,description:'Sister',group:1,subgroup:4},
    {name:'Sage'   ,status:'missing' ,description:'Sister',group:1,subgroup:4},
  ];
}

export function groupData() : GroupData[]{
  return[
    {name: 'The Cycle',id: 0},
    {name: 'Of Leafs and Thorns',id: 1},
    {name: 'The Blue and Silver Rose',id: 2,parentId: 1},
    {name: 'The Tower of Snow and Wind',id: 3,parentId: 1},
    {name: 'The Heroine, Haunted and Holy',id: 4,parentId: 1},
  ]
}