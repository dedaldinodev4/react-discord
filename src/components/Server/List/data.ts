

type IServer = {
  title: string;
  avatar?: string;
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}


export const servers: IServer[] = [
  {
    title: 'Golang',
    avatar: 'https://github.com/golang'
  },
  {
    title: 'Reactjs',
    avatar: 'https://github.com/reactjs',
    hasNotifications: true,
    selected: true,
    mentions: 7
  },
  {
    title: 'Vercel',
    avatar: 'https://github.com/vercel',
    mentions: 39
  },
  {
    title: 'Sveltejs',
    avatar: 'https://github.com/sveltejs',
    mentions: 21
  },
  {
    title: 'Ruby Rails',
    avatar: 'https://github.com/ruby'
  },
  {
    title: 'Vuejs',
    avatar: 'https://github.com/vuejs',
    mentions: 72
  },
  {
    title: 'Flutter Mobile',
    avatar: 'https://github.com/flutter',
    mentions: 72
  },
  {
    title: 'Angular',
    avatar: 'https://github.com/angular',
    mentions: 281
  },
];