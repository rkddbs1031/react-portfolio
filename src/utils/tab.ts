const TAB_ITEM = [
  {
    id: 1,
    tab: 'REACT PROJECT',
    key: 'react',
    items: [
      {
        id: 1,
        item: 'YOON-PLAY',
      },
      {
        id: 2,
        item: 'Movie-APP',
      },
      {
        id: 3,
        item: 'Portfolio',
      },
    ],
  },
  {
    id: 2,
    tab: 'WEB PUBLISHING',
    key: 'web',
    items: [
      {
        id: 1,
        item: 'Web Standard',
      },
      {
        id: 2,
        item: 'Web Responsive',
      },
      {
        id: 3,
        item: 'Megabox',
      },
      {
        id: 4,
        item: 'Jaju Renewer',
      },
    ],
  },
  {
    id: 3,
    tab: 'JAVASCRIPT',
    key: 'javascript',
    items: [
      {
        id: 1,
        item: 'Parallax Effect',
      },
    ],
  },
  {
    id: 4,
    tab: 'ANIMATION',
    key: 'animation',
    items: [
      {
        id: 1,
        item: 'Cube',
      },
      {
        id: 2,
        item: 'Wabe',
      },
      {
        id: 3,
        item: 'Tail',
      },
      {
        id: 4,
        item: '3D Card',
      },
      {
        id: 5,
        item: 'Loading',
      },
      {
        id: 6,
        item: 'Bar',
      },
      {
        id: 7,
        item: 'SVG',
      },
    ],
  },
]
const getTabItem = () => TAB_ITEM

const getContents = (value: string) => {
  const NEW_LIST = TAB_ITEM.filter((item) => {
    return item.key === value
  })
  return NEW_LIST[0].items
}

export { TAB_ITEM, getTabItem, getContents }
