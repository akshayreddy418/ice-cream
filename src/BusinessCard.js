import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from '@material-ui/lab/Rating';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {get} from './server';
import {reviews} from './sample';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: '8px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function BusinessCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [reviewData, setReviewData] = React.useState();
    const {data} = props;
    const {display_address} = data.location;
    debugger
    const handleExpandClick = (businessId) => {
      setExpanded(!expanded);
      get(`${businessId}/reviews`).then((rsp) => {
        const {reviews} = rsp;
        setReviewData(reviews.length ? reviews[0] : {});
      });
    };
  
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {data.name[0]}
            </Avatar>
          }
          title={data.name}
          subheader={display_address.join(' ')
        }
        />
        <CardMedia
          className={classes.media}
          image={data.image_url}
          title=""
        />
        <CardContent>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Rating
            name="simple-controlled"
            value={data.rating}
            />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={() => handleExpandClick(data.id)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {reviewData ? <>
          <Typography paragraph><b>{reviewData.user.name}</b></Typography>
          <Typography paragraph>
            {reviewData.text}
          </Typography>
          </> : ''}
        </CardContent>
      </Collapse>
      </Card>
    );
  }