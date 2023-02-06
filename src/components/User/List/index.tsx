import React from 'react';

import { Container, Role, User, Avatar } from './styles';
import { users } from './data';

interface UserProps {
  nickname: string;
  isBot?: boolean;
  avatar?: string;
}




const UserRow: React.FC<UserProps> = ({ nickname, isBot, avatar }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}>
        {avatar && <img src={avatar} alt="Profile Photo"/>}
      </Avatar>
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  )
}

export const UserList: React.FC = () => {
  return (
  <Container>
    
    <Role>Online</Role>
    <UserRow 
      nickname="Dedadino Daniel" 
      avatar={'https://github.com/dedaldinodev4.png'} 
    />
    <UserRow 
      nickname="Gabriel Junior"
      avatar='https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHx1c2VyJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60.png' />

    <Role>Offline</Role>

    {
      users.map((user) => (
        <UserRow 
          nickname={user.nickname} 
          isBot = {user.isBot} 
          avatar={user.avatar}
          key={user.nickname}
        />
      ))
    }

  </Container>
  )
}

export default UserList;