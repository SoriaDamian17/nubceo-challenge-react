import { blue } from '@mui/material/colors';
import { ICard } from './types';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardMT from '@mui/material/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';


export default function Card({
    src,
    title,
    genreCode,
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </CardMT>
  );
}