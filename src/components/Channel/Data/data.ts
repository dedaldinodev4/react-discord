
type IMessage = {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
  avatar?: string;
  mention?: string;
}

export const messages: IMessage[] = [
  {
    author:"Dedaldino Daniel",
    date:"20/01/2023",
    content:"Olá Pessoal sejam todos bem vindos ao servidor!",
    avatar: 'https://github.com/dedaldinodev4.png'
  },
  
  {
    author:"carlosmanuel",
    date:"20/01/2023",
    content:"Muito obrigado!",
    hasMention: true,
    mention: 'Dedaldino',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60.png'
  },
  {
    author:"stackbot",
    date:"20/01/2023",
    content:"Muito obrigado!",
    hasMention: true,
    mention: 'Dedaldino',
    isBot: true
  },
  {
    author:"Leobarros987",
    date:"20/01/2023",
    content:"Olá gente...!!",
    avatar: 'https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60.png'
  },
  {
    author:"Gabriel Junior",
    date:"20/01/2023",
    content:"Obrigado",
    avatar:'https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHx1c2VyJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60.png'
  },
  {
    author:"omnidev",
    date:"20/01/2023",
    content:"Olá Pessoal!",
    isBot: true
  },
  {
    author:"mrdarkness",
    date:"20/01/2023",
    content:"Muito obrigado!",
    hasMention: true,
    mention: 'Dedaldino',
    avatar: 'https://plus.unsplash.com/premium_photo-1673862039864-c7bed108966c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60.png'
  },
  {
    author:"Jessica Lorena",
    date:"20/01/2023",
    content:"Hello Guys",
    avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60.png'
  },
  {
    author:"Adão Gaspar",
    date:"20/01/2023",
    content:"Falaa galera...",
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80.png'
  },
  {
    author:"Dedaldino Daniel",
    date:"21/01/2023",
    avatar: 'https://github.com/dedaldinodev4.png',
    content:"De nada parceiro.",
    hasMention: true,
    mention: 'mrdarkness',
  },
  {
    author:"Dedaldino Daniel",
    date:"21/01/2023",
    avatar: 'https://github.com/dedaldinodev4.png',
    content:"De nada cara!!",
    hasMention: true,
    mention: 'carlosmanuel',
  },
  
]