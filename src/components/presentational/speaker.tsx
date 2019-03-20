import React from 'react';
import { css } from 'emotion';
import { Avatar } from '@material-ui/core';
import { palette } from 'theme/index';
export function Speaker(show: boolean, UserIcon) {
  return (
    <Avatar className={css`
    && {
          color: #fff;
          height: 60px;
          width: 60px;
          border: 2px solid ${palette.primary.main};
          visibility: ${!show ? 'hidden' : ''};
    }
        `}>
      {UserIcon}
    </Avatar>
  )
}
