
type IChannel = {
  name: string;
  selected?: true;
}

export const channels: IChannel[] = [
  {
    name: 'features',
  },
  {
    name: 'chat-livre',
    selected: true
  },
  {
    name: 'react',
  },
  {
    name: 'clean-code',
  },
  {
    name: 'react-native',
  },
]