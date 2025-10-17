import React from 'react';
import { GroupTable } from '@/components/layout/CastTable';
import Image from 'next/image';

interface GroupTableRendererProps {
  group: GroupTable;
}

const GroupTableRenderer: React.FC<GroupTableRendererProps> = ({ group }) => {
  return (
    <table className="text-mid-300 dark:text-mid-700">
      <caption>{group.name}</caption>
      {group.items.length > 0 &&
        (<thead className="bg-mid-700 dark:bg-mid-300">
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Description</th>
            <th>Alias</th>
            <th>Image</th>
          </tr>
        </thead>)}
      <tbody>
        {/* Items rows */}
        {group.items.map((item, index) => (
          <tr key={index} className="even:bg-mid-900 even:dark:bg-mid-100">
            <td>{item.name}</td>
            <td>{item.status}</td>
            <td>{item.description}</td>
            <td>
              {item.alias ? item.alias.join(', ') : 'None'}
            </td>
            <td>
              {item.image ? (
                typeof item.image === 'string' ? (
                  <Image src={item.image} alt={item.name} className="w-8 h-8 rounded" />
                ) : (
                  item.image
                )
              ) : (
                'No image'
              )}
            </td>
          </tr>
        ))}
        {/* Recursively render children */}
        <tr><td colSpan={5}>
          {group.children.map((childGroup) => (
            <GroupTableRenderer key={childGroup.id} group={childGroup} />
          ))}
        </td></tr>
      </tbody>
    </table>
  );
};

export default GroupTableRenderer;