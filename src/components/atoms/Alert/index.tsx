import { Button } from '@mui/material';
import MUIAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { FC, useState } from 'react';

interface IAlert {
    type: "success" | "warning" | "info" | "error";
    label: string | undefined;
    width?: string,
    buttonText?: string,
    onClick?: (event: any) => void
}

const Alert:FC<IAlert> = ({
    type,
    label,
    width,
    buttonText,
    onClick
}) => {
  const [show, setShow] = useState(true)

  if (!show) return <div></div>;

  return (
    <Stack sx={{ width: width ?? '100%', marginBottom: 2 }} spacing={2}>
      <MUIAlert severity={type} onClose={() => setShow(false)}>
          <span>{label}</span>
          {
            buttonText &&
            <Button
              variant="contained"
              onClick={onClick}>
                {buttonText}
            </Button>
          }
      </MUIAlert>
    </Stack>
  );
}

export default Alert;