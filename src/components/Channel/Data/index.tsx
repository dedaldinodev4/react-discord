import React from 'react';

import { ChannelMessage, Mention } from '../Message';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

export const ChannelData: React.FC = () => {

  return (
  <Container>
    <Messages>
      {
        Array.from(Array(15).keys()).map((n) => 
        (
          <ChannelMessage 
          author="Rodrigo Gonçalves"
          date="26/06/2020"
          content="Falaaa galera. Esse projeto é para treinar layout com Grid e Flexbox, além de utilizar TypeScript"
          />
        ))
      }

      <ChannelMessage 
        hasMention
        isBot
        author="Fulano"
        date="26/06/2020"
        content={
          <>
          <Mention>@Rodrigo </Mention>, "Muito bom!"
          </>
        }
      />


    </Messages>

    <InputWrapper>
      <Input type="text" placeholder="Conversar em #chat-livre" />
      <InputIcon />
    </InputWrapper>
  </Container>
  )
}