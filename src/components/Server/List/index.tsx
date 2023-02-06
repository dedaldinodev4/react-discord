import React from 'react';

import { ServerButton } from '../Button';

import { Container, Separator } from './styles';

import { servers } from './data';

export const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      
      <Separator />
      {
        servers.map((server) => (
          <ServerButton
            title={server.title} 
            avatar={server.avatar} 
            hasNotifications = {server.hasNotifications} 
            mentions={server.mentions}
            selected={server.selected}
            key={server.title}
          />
        ))
      }
    </Container>
  )
};
