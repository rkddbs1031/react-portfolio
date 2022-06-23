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

const getFooterTop = (path: string) => {
  const NEW_LIST = FOOTER_TOP.filter((item) => {
    return item.key === path
  })
  return NEW_LIST[0].items
}
export { FOOTER_TOP, FOOTER_INFO, getFooterTop }
