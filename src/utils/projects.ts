const ANI_INFO = [
  {
    id: 1,
    key: 'react',
    items: [{ span: 'Web Project' }],
  },
]

const TITLE_INFO = [
  {
    id: 1,
    key: 'react',
    items: [
      {
        id: 2,
        text: 'One-of-the-Projects',
      },
      {
        id: 3,
        text: 'is Creative React Web',
      },
    ],
  },
  {
    id: 4,
    key: 'web',
    items: [
      {
        id: 5,
        text: 'One-of-the-Projects',
      },
      {
        id: 6,
        text: 'is Creative Web Sites',
      },
    ],
  },
]

const DESCRIPTION = [
  {
    id: 1,
    key: 'react',
    items: {
      text: '저의 리액트 프로젝트입니다. 직접 기획, 디자인, 마크업을 하여 작업하였으며 다양한 기능 또한 구현하였습니다. 재밌게 봐주세요.',
    },
  },
]

const getAniInfo = (key: string) => {
  const NEW_LIST = ANI_INFO.filter((item) => {
    return item.key === key
  })
  return NEW_LIST[0].items
}

const getTitleInfo = (key: string) => {
  const NEW_LIST = TITLE_INFO.filter((item) => {
    return item.key === key
  })
  return NEW_LIST[0].items
}

const getDescriptionInfo = (key: string) => {
  const NEW_LIST = DESCRIPTION.filter((item) => {
    return item.key === key
  })
  return NEW_LIST[0].items
}

export { ANI_INFO, TITLE_INFO, DESCRIPTION, getAniInfo, getTitleInfo, getDescriptionInfo }
