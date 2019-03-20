import * as React from 'react';
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
import { css } from 'emotion';
import { DoctorCard } from 'components/presentational/doctor-card';
export function ActionsView(props: any) {
  return (
    <Grid
      container
      direction="column"
      className={css`
        padding: 16px;
      `}
    >
      {props.doctors.map(tile => DoctorCard(tile, true))}
    </Grid>
  );
}
