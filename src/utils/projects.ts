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

const PROJECT_INFO = [
  {
    id: 1,
    key: 'react',
    items: [
      {
        id: 2,
        num: '01',
        desc: '첫번째로 만든 저의 포트폴리오입니다. React로 만든 웹사이트이며 현재 추가적인 리팩토링을 하고있습니다.',
        h2: {
          text1: 'THE FIRST',
          text2: 'PORTFOLIO',
        },
        urls: [
          {
            id: 1,
            href: 'https://yoon-play.netlify.app/',
            btn: 'view site',
          },
          {
            id: 2,
            href: 'https://github.com/rkddbs1031/react-portfolio',
            btn: 'view code',
          },
        ],
        img: {
          src: '/img/port02.png',
          alt: '프로젝트1',
        },
      },
      {
        id: 3,
        num: '02',
        desc: '그날의 분위기와 기분에 따라 음악을 추천해주는 뮤직플레이어. React-Query, Youtube-API를 이용하여 만든 개인 프로젝트입니다.',
        h2: {
          text1: 'REACT',
          text2: 'YOON-PLAY',
        },
        urls: [
          {
            id: 1,
            href: 'https://yoon-play.netlify.app/',
            btn: 'view site',
          },
          {
            id: 2,
            href: 'https://github.com/rkddbs1031/WOB-assignment',
            btn: 'view code',
          },
        ],
        img: {
          src: '/img/EX.png', // 수정해야함
          alt: '프로젝트1',
        },
      },
      {
        id: 4,
        num: '03',
        desc: '원하는 영화를 검색하고 즐겨찾기 등록 / 삭제할 수 있는 React Movie App. omdbAPI를 이용하여 만든 개인 프로젝트이며 무한 스크롤이 구현되어있습니다.',
        h2: {
          text1: 'REACT',
          text2: 'MOVIE-APP',
        },
        urls: [
          {
            id: 1,
            href: 'https://yoon-play.netlify.app/', // 수정해야함
            btn: 'view site',
          },
          {
            id: 2,
            href: 'https://github.com/rkddbs1031/WOB_Grip_Assignment',
            btn: 'view code',
          },
        ],
        img: {
          src: '/img/EX.png', // 수정해야함
          alt: '프로젝트1',
        },
      },
      {
        id: 5,
        num: '04',
        desc: '작업중으로 추후 업로드 예정입니다.',
        h2: {
          text1: 'REACT',
          text2: 'YOON-CHAT',
        },
        urls: [
          {
            id: 1,
            href: 'https://github.com/rkddbs1031', // 수정해야함
            btn: 'view code',
          },
        ],
        img: {
          src: '/img/EX.png', // 수정해야함
          alt: '프로젝트1',
        },
      },
      {
        id: 6,
        num: '05',
        desc: 'Vue로 만든 게시판입니다. Restful API를 이용하여 CRUD 게시판, 댓글이 구현되어있습니다. 현재 사이트는 확인이 불가능 합니다.',
        h2: {
          text1: 'VUE',
          text2: 'BOARD',
        },
        urls: [
          {
            id: 1,
            href: 'https://github.com/rkddbs1031/board', // 수정해야함
            btn: 'view code',
          },
        ],
        img: {
          src: '/img/EX.png', // 수정해야함
          alt: '프로젝트1',
        },
      },
      {
        id: 7,
        num: '06',
        desc: 'Vue로 만든 Todo List입니다. localStorage와 JSON파일을 이용하여 구현하였습니다.',
        h2: {
          text1: 'VUE',
          text2: 'TO DO LIST',
        },
        urls: [
          {
            id: 1,
            href: 'https://yoon-play.netlify.app/', // 수정해야함
            btn: 'view site',
          },
          {
            id: 2,
            href: 'https://github.com/rkddbs1031/vue-todolist',
            btn: 'view code',
          },
        ],
        img: {
          src: '/img/EX.png', // 수정해야함
          alt: '프로젝트1',
        },
      },
    ],
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

const getProjectInfo = (key: string) => {
  const NEW_LIST = PROJECT_INFO.filter((item) => {
    return item.key === key
  })
  return NEW_LIST[0].items
}

export { ANI_INFO, TITLE_INFO, DESCRIPTION, getAniInfo, getTitleInfo, getDescriptionInfo, getProjectInfo }
