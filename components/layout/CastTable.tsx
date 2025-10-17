import { castData as getCastData, groupData as getGroupData, CastData, GroupData } from '@/lib/cast-data'
import GroupTableRenderer from '@/components/layout/GroupTableNester'

export interface GroupTable extends GroupData{
  children: GroupTable[]
  items: CastData[]
}

export default function CastTable(){
  const nestedGroups: GroupTable[] = [];

  function builder(): void {
    const castData = getCastData();
    const groupData = getGroupData();
  
    // Create lookup maps for O(1) access instead of O(n) searches
    const groupTableMap = new Map<number, GroupTable>();
    const parentIdMap = new Map<number, GroupTable[]>();
  
    // First pass: create all GroupTable objects and build lookup maps
    groupData.forEach(item => {
      const newItem: GroupTable = {
        name: item.name,
        id: item.id,
        children: [],
        items: [],
        ...(item.parentId && { parentId: item.parentId })
      };
  
      groupTableMap.set(item.id, newItem);
    
      // Build parent-child relationship map
      if (item.parentId) {
        if (!parentIdMap.has(item.parentId)) {
          parentIdMap.set(item.parentId, []);
        }
        parentIdMap.get(item.parentId)!.push(newItem);
      }
    });
  
    // Second pass: assign cast items to groups
    castData.forEach(item => {
      const group = groupTableMap.get(item.group);
      if (group) {
        group.items.push(item);
      }
    });
  
    // Third pass: build hierarchy using the parentIdMap
    const noParent: GroupTable[] = [];
  
    groupTableMap.forEach(group => {
      if (group.parentId) {
        // Find parent and add as child
        const parent = groupTableMap.get(group.parentId);
        if (parent) {
          parent.children.push(group);
        }
      } else {
        noParent.push(group);
      }
    });
  
    // Alternative approach using the pre-built parentIdMap (even more efficient):
    // parentIdMap.forEach((children, parentId) => {
    //   const parent = groupTableMap.get(parentId);
    //   if (parent) {
    //     parent.children.push(...children);
    //   }
    // });
  
    // Clear and populate nestedGroups
    nestedGroups.length = 0;
    nestedGroups.push(...noParent);
  }

  builder()
  return (
    <>
    {nestedGroups.map((group) => (
      <GroupTableRenderer key={group.id} group={group} />
    ))}
    </>
  )
}