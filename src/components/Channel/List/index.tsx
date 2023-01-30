import React from 'react';

import { ChannelButton } from '../Button';

import { Container, Category, AddCategoryIcon   } from './styles';

export const ChannelList: React.FC = () => {
  return (
  <Container>
    <Category>
      <span>Canais de texto</span>
      <AddCategoryIcon />
    </Category>

    <ChannelButton channelName="chat-livre" />
    <ChannelButton channelName="react" />
    <ChannelButton channelName="node" />
    <ChannelButton channelName="react-native" />
    <ChannelButton channelName="clean-code" />
  </Container>
  )
}