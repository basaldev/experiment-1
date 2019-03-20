import * as React from 'react';
import { Typography, Button, Grid, Avatar } from '@material-ui/core';
import { css } from 'emotion';
import { onChangeCurrentUser } from 'domain/middleware/user';
import { User } from 'domain/store/main';
import { gutters } from 'theme/variables';
import generate from 'string-to-color';

function SampleUser({ user }) {
  return (
  <Grid item xs={12} key={user.name}>
    <Grid container alignItems="center" className={css`margin-bottom: ${gutters.md};`}>
      <Avatar className={css`background: ${generate(user.name)};`} >{user.name[0]}</Avatar>
      <Button onClick={() => onChangeCurrentUser(user)} className={css`margin-left: ${gutters.sm} !important;`}>{user.name}</Button>
    </Grid>
  </Grid>
  );
}

export const Login = ({ sampleUsers }: { sampleUsers: Array<User> }) => {
  return (
    <Grid container justify="center" alignItems="center" alignContent="center">
      <Grid item className={css`padding-top: 20vh;`}>
        <Typography align="center" variant="body2" className={css`margin-bottom: ${gutters.xl} !important;`}>
          Select Sample User
        </Typography>
        {sampleUsers.map(user => <SampleUser user={user}/>)}
      </Grid>
    </Grid>
  );
};
