import * as React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FolderShared from '@material-ui/icons/FolderShared';
import Assignment from '@material-ui/icons/Assignment';
import AssignmentLate from '@material-ui/icons/AssignmentLate';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteIcon from '@material-ui/icons/AssignmentLate';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { css } from 'emotion';
export function Navbar(props: any) {
  return (
    <BottomNavigation value={props.value} showLabels color="primary">
      <BottomNavigationAction onClick={props.routes[0]} label="Assistant" icon={<ChatIcon />} />
      <BottomNavigationAction onClick={props.routes[1]} label="Upload Documents" icon={<Assignment />} />
      <BottomNavigationAction onClick={props.routes[2]} label="Clinics" icon={<AssignmentInd />} />
    </BottomNavigation>
  );
}
