import React from 'react';
import { css } from 'emotion';
import { Avatar } from '@material-ui/core';

export function Speaker(show: boolean, UserIcon) {
  return (
    <Avatar
      className={css`
        margin: 10;
        color: '#fff';
        background: hotpink;
        visibility: ${!show ? 'hidden' : ''};
      `}
    >
      {UserIcon}
    </Avatar>
  );
}
