export const ComplexTable: React.FC<{ children: React.ReactNode,className?:string }> & {
  // Layout
  Row: typeof ComplexTableRow;
  Column: typeof ComplexTableColumn;
  Group: typeof ComplexTableGroup;
  
  // Content
  Cell: typeof ComplexTableCell;
  Index: typeof ComplexTableIndex;
  MultiCell: typeof ComplexTableMultiCell;
  
  // Headers/Footers
  Header: typeof ComplexTableHeader;
  Footer: typeof ComplexTableFooter;
} = ({ children,className="" }) => {
  return <div className={`complex-table grid ${className}`}>{children}</div>;
};

// Define all subcomponents...
const ComplexTableRow: React.FC<{ children: React.ReactNode;className?:string }> = ({ children,className="" }) => {
  return <div className={`complex-row ${className}`}>{children}</div>;
};
const ComplexTableColumn: React.FC<{ children: React.ReactNode;className?:string }> = ({ children,className="" }) => {
  return <div className={`complex-column ${className}`}>{children}</div>;
};
const ComplexTableGroup: React.FC<{ children: React.ReactNode;className?:string }> = ({ children,className="" }) => {
  return <div className={`complex-group ${className}`}>{children}</div>;
};
const ComplexTableCell: React.FC<{ children: React.ReactNode;className?:string }> = ({ children,className="" }) => {
  return <div className={`complex-cell ${className}`}>{children}</div>;
};
const ComplexTableIndex: React.FC<{ children: React.ReactNode;className?:string }> = ({ children,className="" }) => {
  return <div className={`complex-index ${className}`}>{children}</div>;
};
const ComplexTableMultiCell: React.FC<{ colSpan?: number; rowSpan?: number; children: React.ReactNode;className?:string }> = 
  ({ colSpan, rowSpan, children,className="" }) => {
  return <div className={`complex-multicell col-span-${colSpan} row-span-${rowSpan} ${className}`}>{children}</div>;
};
const ComplexTableHeader: React.FC<{ colSpan?: number; children: React.ReactNode;className?:string }> = ({ colSpan=1, children,className="" }) => {
  return <div className={`complex-header ${colSpan} ${className}`}>{children}</div>;
};
const ComplexTableFooter: React.FC<{ colSpan?: number; children: React.ReactNode;className?:string }> = ({ colSpan=1, children,className="" }) => {
  return <div className={`complex-footer ${colSpan} ${className}`}>{children}</div>;
};

// Attach all subcomponents
ComplexTable.Row = ComplexTableRow;
ComplexTable.Column = ComplexTableColumn;
ComplexTable.Group = ComplexTableGroup;
ComplexTable.Cell = ComplexTableCell;
ComplexTable.Index = ComplexTableIndex;
ComplexTable.MultiCell = ComplexTableMultiCell;
ComplexTable.Header = ComplexTableHeader;
ComplexTable.Footer = ComplexTableFooter;