import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import BusinessCard from './BusinessCard';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor:
        theme.palette.background.paper
    },
  })
);

export default function BusinessList(
  props
) {
  const classes = useStyles();
  const { businessData } = props;
  return (
    <div className={classes.root}>
      <GridList
        cellHeight={160}
        cols={6}
      >
        {businessData.map((tile) => (
            <BusinessCard data={tile}/>
        
        ))}
      </GridList>
    </div>
  );
}
