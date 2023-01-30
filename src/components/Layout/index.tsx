import React from 'react';

import { Grid } from './styles';

import { ServerList } from '../Server/List';
import { ServerName } from '../Server/Name';
import { ChannelInfo } from '../Channel/Info';
import { ChannelList } from '../Channel/List';
import { UserInfo } from '../User/Info';
import { UserList } from '../User/List';
import { ChannelData } from '../Channel/Data';

export const Layout: React.FC = () => {
  return (
  <Grid>
    <ServerList />
    <ServerName />
    <ChannelInfo/>
    <ChannelList/>
    <UserInfo />
    <ChannelData />
    <UserList />
  </Grid>
  )
}