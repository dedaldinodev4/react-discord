import React from 'react';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  avatar?: string;
}


export const ServerButton: React.FC<Props> = ({ 
  selected, 
  isHome, 
  hasNotifications, 
  mentions, 
  avatar
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src="https://github.com/discord.png" alt="Foto" />}
      {!isHome && avatar && <img src={avatar +`.png`} alt="Foto" />}
    </Button>
  )
}
