import React from 'react';
import { Grid } from '@material-ui/core';
import { Speaker } from 'components/presentational/speaker';
import { css } from 'emotion';
import * as DoctorImg from 'assets/doctor.png';
import * as UserImg from 'assets/user2.png';


export function Message(direction: any, showSpeaker: boolean, content: any, speaker: string) {
  let icon;
  if(speaker === 'BOT'){
    icon = <img className={css`height: 100%;`} src={DoctorImg}></img>
  } else {
    icon = <img className={css`height: 100%;`} src={UserImg}></img>
  }
  return (
    <Grid
      container
      key={content + Math.random()}
      direction={direction}
      wrap="nowrap"
      className={css`
        max-width: 100%;
        font-weight:bold;
        padding-top: 0;

      `}
    >
      <Grid item>{Speaker(showSpeaker, icon)}</Grid>
      <Grid item className={css`
        line-height: 1.6;
      `}>{content}</Grid>
    </Grid>
  );
}
