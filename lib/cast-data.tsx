export interface CastData{
    name: string
    status: 'alive' | 'dead' | 'unknown' | 'missing' | 'ascended'
    description: string
    alias?: string[]
    image?: string | React.ReactNode
    group: number
    subgroup?: number
}

export function castData() : CastData[] {
  return [
    {name:'Rose'   ,status:'dead'   ,description:'Dead',group:0},
    {name:'Phyllo' ,status:'unknown',description:'Goddess',group:0},

    {name:'Roisin' ,status:'dead'    ,description:'Waif',group:1,subgroup:0},
    {name:'Jasmin' ,status:'ascended',description:'Princess',group:1,subgroup:0},
    {name:'Vaelis' ,status:'dead'    ,description:'Loon',group:1,subgroup:0},
    {name:'Salora' ,status:'unknown' ,description:'Goddess',group:1,subgroup:0},

    {name:'Nyxara' ,status:'alive'   ,description:'Baker',group:1,subgroup:1},
    {name:'Micah'  ,status:'alive'   ,description:'Fighter',group:1,subgroup:1},
    {name:'Deona'  ,status:'unknown' ,description:'Goddess',group:1,subgroup:1},
    {name:'Eliana' ,status:'alive'   ,description:'Scholar',group:1,subgroup:1},
    {name:'Tareth' ,status:'alive'   ,description:'Nice guy',group:1,subgroup:1},

    {name:'Delia'  ,status:'missing' ,description:'Sister',group:1,subgroup:2},
    {name:'Kovar'  ,status:'alive'   ,description:'Mentor',group:1,subgroup:2},
    {name:'Fernico',status:'alive'   ,description:'Friend',group:1,subgroup:2},
    {name:'Davian' ,status:'missing' ,description:'Sister',group:1,subgroup:2},
    {name:'Asha'   ,status:'missing' ,description:'Sister',group:1,subgroup:2},
    {name:'Sage'   ,status:'missing' ,description:'Sister',group:1,subgroup:2},
  ];
}
