import React from 'react';

import { Container, 
  Profile, Avatar, UserData, 
  Icons, MicIonc, HeadPhoneIcon, 
  SettingsIcon 
} from './styles';

export const UserInfo: React.FC = () => {
  return (
  <Container>
    <Profile>
      <Avatar>
        <img src="https://github.com/dedaldinodev4.png" alt="Profile Photo"/>
      </Avatar>
      <UserData>
        <strong>Dedaldino Daniel</strong>
        <span>#dedaldino</span>
      </UserData>
    </Profile>

    <Icons>
      <MicIonc />
      <HeadPhoneIcon />
      <SettingsIcon />
    </Icons>
   
  </Container>
  )
}
