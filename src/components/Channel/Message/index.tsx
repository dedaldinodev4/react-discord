import React from 'react';

import { Container, Avatar, Message, Header, Content  } from './styles';
export { Mention } from './styles';

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
  avatar?: string;
}

export const ChannelMessage: React.FC<Props> = ({ 
  author, 
  date, 
  content, 
  hasMention, 
  isBot, 
  avatar
}) => {
  return (
  <Container className={hasMention ? 'mention' : ''}>
    <Avatar className={isBot ? 'bot' : ''}>
      {avatar && <img src={avatar} alt="Profile" />}
    </Avatar>

    <Message>
      <Header>
        <strong>{author}</strong>
        {isBot && <span>BOT</span>}
        
        <time>{date}</time>
      </Header>
      <Content>{content}</Content>

    </Message>

 
  </Container>
  )
}