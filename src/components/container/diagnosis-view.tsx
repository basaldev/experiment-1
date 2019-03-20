import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { css } from 'emotion';
import { DoctorCard } from 'components/presentational/doctor-card';
import { DiagnosisCard } from 'components/presentational/diagnosis-card';

function NoData(diagnosis: Array<any>) {
  if (diagnosis.length === 0) {
    return (
      <Grid item>
        <Typography gutterBottom variant="h5" component="h2">
          No Clinic Recommendations yet
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          Try asking the your <a href="/">assistant.</a>
        </Typography>
      </Grid>
    );
  }
}

export function DiagnosisView(props: any) {
  return (
    <Grid
      container
      direction="column"
      spacing={8}
      className={css`
        padding: 16px;
      `}
    >
      {NoData(props.diagnosis)}
      <Grid item>
        {props.diagnosis.map(tile => {
          return (
            <>
              {DiagnosisCard([{ Issue: tile.issue }], false)}
              {tile.issue ? DoctorCard(tile.doctor, false) : null}
            </>
          );
        })}
      </Grid>
    </Grid>
  );
}
