import React from 'react';

import { ServerButton } from '../Button';

import { Container, Separator } from './styles';

export const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      
      <Separator />

      <ServerButton avatar='https://github.com/reactjs' />
      <ServerButton hasNotifications/>
      <ServerButton avatar='https://github.com/vercel' mentions={3}/>
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton avatar='https://github.com/vuejs' mentions={72}/>
      <ServerButton />
      <ServerButton />
    </Container>
  )
};
