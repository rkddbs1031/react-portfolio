const TAB_ITEM = [
  {
    id: 1,
    tab: 'REACT & VUE PROJECT',
    key: 'react',
    items: [
      {
        id: 1,
        item: 'Portfolio',
      },
      {
        id: 2,
        item: 'YOON-PLAY',
      },
      {
        id: 3,
        item: 'Movie-APP',
      },
      {
        id: 4,
        item: 'YOON-Chat',
      },
      {
        id: 5,
        item: 'VUE-To do list',
      },
      {
        id: 6,
        item: 'VUE-Board',
      },
    ],
  },
  {
    id: 2,
    tab: 'WEB PROJECT',
    key: 'web',
    items: [
      {
        id: 7,
        item: 'Web Standard',
      },
      {
        id: 8,
        item: 'Responsive',
      },
      {
        id: 9,
        item: 'PHP Weebsite',
      },
      {
        id: 10,
        item: 'Megabox',
      },
      {
        id: 11,
        item: 'JAJU Renewal',
      },
    ],
  },
  {
    id: 3,
    tab: 'SCRIPT',
    key: 'javascript',
    items: [
      {
        id: 12,
        item: 'Parallax Effect',
      },
      {
        id: 13,
        item: 'Mouse Effect',
      },
      {
        id: 14,
        item: 'Slide Effect',
      },
      {
        id: 15,
        item: 'Momentum',
      },
    ],
  },
  {
    id: 4,
    tab: 'ANIMATION',
    key: 'animation',
    items: [
      {
        id: 16,
        item: 'Cube',
      },
      {
        id: 17,
        item: 'Wabe',
      },
      {
        id: 18,
        item: 'Tail',
      },
      {
        id: 19,
        item: '3D Card',
      },
      {
        id: 20,
        item: 'Loading',
      },
      {
        id: 21,
        item: 'Bar',
      },
      {
        id: 22,
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
