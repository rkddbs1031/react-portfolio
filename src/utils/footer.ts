import { GithubIcon, VelogIcon, NotionIcon } from 'assets/svgs'

const FOOTER_TOP = [
  {
    id: 1,
    key: 'projects',
    items: [
      {
        id: 11,
        text: 'Home',
        href: '/',
      },
      {
        id: 12,
        text: 'About',
        href: '/about',
      },
    ],
  },
  {
    id: 2,
    key: 'about',
    items: [
      {
        id: 21,
        text: 'Projects',
        href: '/projects',
      },
      {
        id: 22,
        text: 'Contact',
        href: '/contact',
      },
    ],
  },
  {
    id: 3,
    key: 'react',
    items: [
      {
        id: 31,
        text: 'Projects',
        href: '/projects',
      },
      {
        id: 32,
        text: 'Web',
        href: '/projects/web',
      },
    ],
  },
  {
    id: 4,
    key: 'web',
    items: [
      {
        id: 41,
        text: 'React & Vue',
        href: '/projects/react',
      },
      {
        id: 42,
        text: 'Script',
        href: '/projects/script',
      },
    ],
  },
  {
    id: 5,
    key: 'script',
    items: [
      {
        id: 51,
        text: 'Web',
        href: '/projects/web',
      },
      {
        id: 52,
        text: 'Animation',
        href: '/projects/animation',
      },
    ],
  },
  {
    id: 6,
    key: 'animation',
    items: [
      {
        id: 61,
        text: 'Script',
        href: '/projects/script',
      },
      {
        id: 62,
        text: 'About',
        href: '/about',
      },
    ],
  },
  {
    id: 7,
    key: 'contact',
    items: [
      {
        id: 71,
        text: 'Home',
        href: '/',
      },
      {
        id: 72,
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
]

const FOOTER_INFO = [
  {
    id: 1,
    text: 'Front-end Developer : LEE KANG YOON',
  },
  {
    id: 2,
    text: 'PHONE : 010.9198.4389',
  },
  {
    id: 3,
    text: 'E-MAIL : rkddbs1031@gmail.com',
  },
]

const FOOTER_SOCIAL = [
  {
    id: 1,
    svg: GithubIcon,
    href: 'https://github.com/rkddbs1031',
  },
  {
    id: 2,
    svg: VelogIcon,
    href: 'https://velog.io/@kxun_ii',
  },
  {
    id: 3,
    svg: NotionIcon,
    href: 'https://www.notion.so/4db4a75b05c34c628d6aac418a922554',
  },
]

const INFO = [
  {
    id: 1,
    em: 'Front-end Developer',
  },
  {
    id: 2,
    em: 'ⓒ Yoon’s Portfolio 2022',
  },
]

const SOCIAL_INFO = [
  {
    id: 1,
    href: 'https://github.com/rkddbs1031',
    text: 'Git',
  },
  {
    id: 2,
    href: 'https://velog.io/@kxun_ii',
    text: 'Velog',
  },
  {
    id: 3,
    href: 'https://www.notion.so/4db4a75b05c34c628d6aac418a922554',
    text: 'Notion',
  },
]

const getFooterTop = (path: string) => {
  const NEW_LIST = FOOTER_TOP.filter((item) => {
    return item.key === path
  })
  return NEW_LIST[0].items
}

export { FOOTER_TOP, FOOTER_INFO, FOOTER_SOCIAL, getFooterTop, INFO, SOCIAL_INFO }
