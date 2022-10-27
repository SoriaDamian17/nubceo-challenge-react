
import BreadcrumbsMT from '@mui/material/Breadcrumbs';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../atoms/Button';
import Typography from '../../atoms/Typography';

export default function Breadcrumbs({
    name
}: {
    name: string
}) {
  const navigate = useNavigate()
  function handleClick() {
        navigate('/Home')
  }
  return (
    <BreadcrumbsMT aria-label="breadcrumb" sx={{
        margin: '1rem 0'
    }}>
        <Button
            variant="contained"
            color='primary'
            background='secondary'
            onClick={() => handleClick()}
        >
            List
        </Button>
        <Typography
            variant="h1"
            color="secondary"
        >
            {name}
        </Typography>
    </BreadcrumbsMT>
  );
}
