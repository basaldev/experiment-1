import {
  Grid,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
  GridListTile,
  CardContent,
  Card,
  CardActions,
  Typography,
  CardActionArea,
  CardMedia,
} from '@material-ui/core';
import TickIcon from '@material-ui/icons/Check';
import { css } from 'emotion';
import React from 'react';

function expandedSection() {
  return (
    <CardContent>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Medicine A" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Medicine B" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Daily for 3 weeks" />
        </ListItem>
      </List>
    </CardContent>
  );
}

export function DoctorCard(tile: any, expanded: boolean) {
  const expandedContent = expanded ? expandedSection() : '';
  return (
    <Card key={tile.img + Math.random()}>
      <CardMedia
        className={css`
          min-height: 30vh;
        `}
        image="https://images.unsplash.com/photo-1550831106-0994fe8abcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Doctor James <Chip color="primary" label="Covered by Issurance" icon={<TickIcon />} />
        </Typography>
        <Typography component="p">
          During our last vist I prescripted Medicine A and B for your back pain, <strong>daily for 3 weeks</strong>
        </Typography>
      </CardContent>
      {expandedContent}
      <CardActions>
        <Button size="small" color="primary">
          Book an Appointment
        </Button>
        <Button size="small" color="primary">
          Call
        </Button>
      </CardActions>
    </Card>
  );
}
