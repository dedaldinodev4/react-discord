import React from 'react';

import { Container, Title, HasTagIcon, Separator, Description } from './styles'; 

export const ChannelInfo: React.FC = () => {
  return (
  <Container>    
    <HasTagIcon />

    <Title>chat-livre</Title>

    <Separator />

    <Description>Canal aberto para conversas</Description>
  </Container>
  )
}