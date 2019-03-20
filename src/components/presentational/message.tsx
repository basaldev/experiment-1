import React from 'react';
import { Grid } from '@material-ui/core';
import { Speaker } from 'components/presentational/speaker';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Category from '@material-ui/icons/Category';
import { css } from 'emotion';

export function Message(direction: any, showSpeaker: boolean, content: any, speaker: string) {
  let icon;
  if (speaker === 'BOT') {
    icon = <Category />;
  } else {
    icon = <AccountCircle />;
  }
  return (
    <Grid
      container
      key={content + Math.random()}
      spacing={16}
      direction={direction}
      wrap="nowrap"
      className={css`
        max-width: 100%;
      `}
    >
      <Grid item>{Speaker(showSpeaker, icon)}</Grid>
      <Grid item>{content}</Grid>
    </Grid>
  );
}
