import { Box } from "@mui/material";

export const ModalBase = (props) => {
  const { onClose, isOpen, children, title } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>{title}</DialogTitle>

      <Box>{children}</Box>
    </Dialog>
  );
};
