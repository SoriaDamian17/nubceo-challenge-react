import { blue } from '@mui/material/colors';
import { ICard } from './types';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardMT from '@mui/material/Card';
import { Button } from '../../atoms/Button';

export default function Card({
    genreCode,
    id,
    onClick,
    src,
    title,
}: ICard) {
  return (
    <CardMT sx={{ maxWidth: 320 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={title}
        subheader={`Genre ${genreCode}`}
      />
      <CardMedia
        component="img"
        width="320"
        image={process.env.PUBLIC_URL + src}
        alt={title}
      />
      <CardActions disableSpacing sx={{
        justifyContent: 'space-between'
      }}>
        <div>
          <Button
            variant='contained'
            color="primary"
            background='secondary'
            onClick={() => onClick(id)}
          >
            View Band
          </Button>
        </div>
      </CardActions>
    </CardMT>
  );
}