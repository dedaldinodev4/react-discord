import React from 'react';

import { ChannelMessage, Mention } from '../Message';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import { messages } from './data';

export const ChannelData: React.FC = () => {

  return (
  <Container>
    <Messages>
      {
       messages.map((message) => 
        (
          <ChannelMessage
            isBot = {message.isBot} 
            author={message.author}
            avatar= {message.avatar}
            date={message.date}
            key={message.author+` - ` + Date.now() + message.content}
            content= {message.hasMention ? 
              <>
                <Mention>@{message.mention} </Mention>, {message.content}
              </>
                : message.content
              }
          />
        ))
      }
    </Messages>

    <InputWrapper>
      <Input type="text" placeholder="Conversar em #chat-livre" />
      {/* <InputIcon /> */}
    </InputWrapper>
  </Container>
  )
}