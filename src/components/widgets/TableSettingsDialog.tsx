interface TableSettingsDialogProps {
  children: React.ReactNode;
}

const TableSettingsDialog: React.FC<TableSettingsDialogProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default TableSettingsDialog;
