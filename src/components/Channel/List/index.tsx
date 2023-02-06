import React from 'react';

import { ChannelButton } from '../Button';
import { channels } from './data';

import { Container, Category, AddCategoryIcon   } from './styles';

export const ChannelList: React.FC = () => {
  return (
  <Container>
    <Category>
      <span>Canais de texto</span>
      <AddCategoryIcon />
    </Category>

    {
      channels.map((channel) => (
        <ChannelButton 
          channelName={channel.name} 
          selected={channel.selected} 
          key={channel.name} 
        />
      ))
    }

    <Category>
      <span>Devs</span>
      <AddCategoryIcon />
    </Category>
    <ChannelButton channelName="Apis" key={'apis'} />
    <ChannelButton channelName="React-hooks" key={'hooks'} />
  </Container>
  )
}