import * as React from 'react';
import {
  Grid,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Fab,
  Avatar,
  Typography,
} from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import { onClickUploadDocument, onClickShare } from 'domain/middleware/user';
import { css } from 'emotion';

export function FileCard(tile: any) {
  console.log(tile);
  return (
    <Grid item xs={6} key={tile.url}>
      <Card
        className={css`
          width: 100%;
        `}
      >
        <CardActionArea>
          <CardMedia
            className={css`
              height: 160px;
            `}
            image={tile.img}
            title={tile.title}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="h2">
              {tile.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => onClickShare(tile.url)}>
            Share with your doctor
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export function DocumentsView(props: any) {
  return (
    <Grid container justify="center">
      <Grid
        item
        xs={12}
        className={css`
          position: relative;
          padding-bottom: 32px;
          z-index: 999;
          margin-bottom: 8px !important;
          box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
            0px 2px 1px -1px rgba(0, 0, 0, 0.12);
        `}
      >
        <Avatar
          className={css`
            height: 64px !important;
            width: 64px !important;
            margin: 64px auto 12px auto;
            background-color: purple !important;
          `}
        >
          MJ
        </Avatar>
        <Typography color="textPrimary" variant="h6" align="center">
          Michael Jones
        </Typography>
        <Typography color="textSecondary" variant="body2" align="center">
          Tokyo, JP
        </Typography>
      </Grid>
      <Grid
        className={css`
          margin-bottom: 25px;
        `}
      >
        <Typography variant="h6" align="center">
          Your Medical Documents
        </Typography>
        <Typography variant="body1" color="default">
          Upload documents for a more personalised diagonsis
        </Typography>
      </Grid>
      <Grid
        container
        spacing={16}
        className={css`
          padding: 16px;
          height: 52vh;
          overflow-y: scroll;
        `}
      >
        {props.documents.map(tile => FileCard(tile))}
      </Grid>
      <Fab
        onClick={onClickUploadDocument}
        color="primary"
        className={css`
          position: absolute !important;
          bottom: 64px;
          right: 24px;
        `}
      >
        <Add />
      </Fab>
    </Grid>
  );
}
