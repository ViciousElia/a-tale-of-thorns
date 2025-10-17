export interface CastData {
  name: string
  status: 'alive' | 'dead' | 'unknown' | 'missing' | 'ascended'
  description: string
  alias?: string[]
  image?: string | React.ReactNode
  group: number
}
export interface GroupData {
  name: string
  id: number
  parentId?: number
}

export function castData(): CastData[] {
  return [
    { name: 'Rose', status: 'dead', description: 'Dead', group: 0 },
    { name: 'Phyllo', status: 'unknown', description: 'Goddess', group: 0 },

    { name: 'Roisin', status: 'dead', description: 'A defiant survivor of war and loss, Roisin escapes conscription only to discover her scars link her to a past – and a power – she never knew. Adopting her mother’s outlaw name, she flees with Jasmin, determined to defy the queen who stole her family.', group: 2 },
    { name: 'Salora', status: 'unknown', description: 'A watcher of fates, she observes Rose’s lives from beyond, her silver hair and cryptic warnings hinting at a role she cannot escape. Some truths, she says, are forbidden to speak.', group: 2 },
    { name: 'Jasmin', status: 'ascended', description: 'A disgraced noble branded a traitor, Jasmin sheds her title to protect Roisin, carrying the physical and emotional scars of the queen’s cruelty. Her hidden lineage and poisoned marks hint at a fate entwined with goddesses and rebellion.', group: 2 },
    { name: 'Vaelis', status: 'dead', description: 'A wandering enigma with a shattered mind, they drift between lucidity and confusion, their forgotten past flickering in cryptic phrases and sudden acts of healing. Their true nature remains a mystery, lost in Thornwood’s shadows.', group: 2 },
    { name: 'Afina', status: 'unknown', description: 'A guardian bound by duty, she has saved Roisin time and again, her silver sword and floral scent the only traces of her presence. Her sorrow lingers in every rescue, a silent plea to be remembered.', group: 2 },

    { name: 'Nyxara', status: 'alive', description: 'A baker haunted by dreams of the Aerie and its forgotten goddess, Nyxara reluctantly embarks on a journey to the mountains after supernatural signs become impossible to ignore. Carrying the legacy of Gormlaith’s lineage, she grapples with her role as the next guardian.', group: 3 },
    { name: 'Tareth', status: 'alive', description: 'Nice guy', group: 3 },
    { name: 'Eliana', status: 'alive', description: 'Scholar', group: 3 },
    { name: 'Micah', status: 'alive', description: 'Fighter', group: 3 },
    { name: 'Deona', status: 'unknown', description: 'Goddess', group: 3 },

    { name: 'Delia', status: 'missing', description: 'Sister', group: 4 },
    { name: 'Kovar', status: 'alive', description: 'Mentor', group: 4 },
    { name: 'Fernico', status: 'alive', description: 'Friend', group: 4 },
    { name: 'Davian', status: 'missing', description: 'Sister', group: 4 },
    { name: 'Asha', status: 'missing', description: 'Sister', group: 4 },
    { name: 'Sage', status: 'missing', description: 'Sister', group: 4 },
  ];
}

export function groupData(): GroupData[] {
  return [
    { name: 'The Cycle', id: 0 },
    { name: 'Of Leafs and Thorns', id: 1 },
    { name: 'The Blue and Silver Rose', id: 2, parentId: 1 },
    { name: 'The Tower of Snow and Wind', id: 3, parentId: 1 },
    { name: 'The Heroine, Haunted and Holy', id: 4, parentId: 1 },
  ]
}