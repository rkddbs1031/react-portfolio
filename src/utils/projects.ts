const ANI_INFO = [
  {
    id: 1,
    key: 'react',
    items: [{ span: 'React & Vue Project' }],
  },
  {
    id: 2,
    key: 'web',
    items: [{ span: 'Web Project' }],
  },
  {
    id: 3,
    key: 'script',
    items: [{ span: 'Script Project' }],
  },
  {
    id: 4,
    key: 'animation',
    items: [{ span: 'Animation' }],
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
  {
    id: 7,
    key: 'script',
    items: [
      {
        id: 8,
        text: 'One-of-the-Projects',
      },
      {
        id: 9,
        text: 'is Creative Scripts',
      },
    ],
  },
  {
    id: 10,
    key: 'animation',
    items: [
      {
        id: 11,
        text: 'One-of-the-Projects',
      },
      {
        id: 12,
        text: 'is Dynamic Animation',
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
  {
    id: 2,
    key: 'web',
    items: {
      text: '저의 퍼블리싱 웹 프로젝트입니다. 웹표준, 반응형을 고려하여 제작한 웹사이트와 퍼블리싱 및 기존 브랜드 웹사이트 리뉴얼을 작업하였습니다. 재밌게 봐주세요.',
    },
  },
  {
    id: 3,
    key: 'script',
    items: {
      text: '21년도 부터 작업한 스크립트 프로젝트입니다. 자바스크립트에 대해 더 열심히 공부해서 멋지고 완벽한 작업물들을 만들어내고 싶습니다!',
    },
  },
  {
    id: 4,
    key: 'animation',
    items: {
      text: 'Transform과 KEYFRAME, SVG를 이용하여 만든 애니메이션 작업물입니다. 더욱더 역동적이고 재밌는 요소가 담긴 애니메이션을 만들어내고 싶습니다!',
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
  {
    id: 8,
    key: 'web',
    items: [
      {
        id: 9,
        num: '01',
        desc: '웹표준을 준수하여 만든 사이트입니다. skip 메뉴, IR효과 등을 통해 웹접근성을 높여 사용자가 이용에 불편이 없도록 고려하였습니다. 또한, slick.js를 이용하여 이미지 슬라이드를 구현하고 Lightgallery.js를 이용하여 lightbox 모달창을 구현하였습니다.',
        h2: {
          text1: 'WEB',
          text2: 'STANDARD',
        },
        urls: [
          {
            id: 1,
            href: 'http://yoooon.dothome.co.kr/website-work/01/',
            btn: 'view site',
          },
          {
            id: 2,
            href: 'https://github.com/rkddbs1031/web_standard-2021',
            btn: 'view code',
          },
        ],
        img: {
          src: '/img/port05.png',
          alt: '프로젝트1',
        },
      },
      {
        id: 10,
        num: '02',
        desc: '미디어 쿼리를 이용하여 디바이스 종류에 따라 유연하게 보여지는 반응형 웹 사이트입니다. 웹표준과 동일하게 Slick.js 플러그인을 이용하여 슬라이드를 구현하였으며, 탭, 해상도에 따른 이미지, 동영상 기능, 다양한 이펙트 효과와 마우스 오버효과를 추가적으로 진행하였습니다.',
        h2: {
          text1: 'WEB',
          text2: 'RESPONSIVE',
        },
        urls: [
          {
            id: 1,
            href: 'http://yoooon.dothome.co.kr/website-work/02/',
            btn: 'view site',
          },
          {
            id: 2,
            href: 'https://github.com/rkddbs1031/webstandard_responsive-2021',
            btn: 'view code',
          },
        ],
        img: {
          src: '/img/port06.png',
          alt: '프로젝트2',
        },
      },
      {
        id: 11,
        num: '03',
        desc: 'PHP를 이용하여 만든 사이트입니다. DB 생성 및 관리가 가능하며, 사이트는 로그인 및 회원가입, 댓글쓰기, 게시판, 검색 기능과 같은 기능을 구현하였습니다.',
        h2: {
          text1: 'PHP',
          text2: 'WebSite',
        },
        urls: [
          {
            id: 1,
            href: 'http://kxunii.dothome.co.kr/php8/pages/main.php',
            btn: 'view site',
          },
        ],
        img: {
          src: '/img/port04.png', // 수정해야함
          alt: '프로젝트3',
        },
      },
      {
        id: 12,
        num: '04',
        desc: '메가박스 사이트를 리뉴얼하여 만든 반응형 사이트입니다. 다양한 기기의 해상도에 대응하기 위하여 해상도별 이미지를 작업하였습니다. Swiper.js 플러그인으로 상단 배너 이미지와 영화차트 슬라이드를 구현하였고 jQuery를 사용하여 공지사항과 영화차트의 탭메뉴, 헤더의 모바일 메뉴를 구현하였습니다.',
        h2: {
          text1: 'MEGABOX',
          text2: '',
        },
        urls: [
          {
            id: 1,
            href: 'http://yoooon.dothome.co.kr/website-work/03/',
            btn: 'view site',
          },
          {
            id: 2,
            href: 'https://github.com/rkddbs1031/megabox-2021',
            btn: 'view code',
          },
        ],
        img: {
          src: '/img/port07.png', // 수정해야함
          alt: '프로젝트4',
        },
      },
      {
        id: 13,
        num: '05',
        desc: 'JAJU 사이트를 리디자인 및 리뉴얼하였습니다. 미디어쿼리를 이용해 다양한 디바이스에 유연하게 보여지는 반응형 작업을 진행하였고, 각 섹션마다 스크립트로 애니메이션을 주어 화면에 보이게 하였습니다. main화면에 VIDEO autoplay기능을 넣어 구현하였고 text가 하나씩 나타날 수 있게 자바스크립트를 이용하여 구현하였습니다.',
        h2: {
          text1: 'JAJU',
          text2: 'RENEWAL',
        },
        urls: [
          {
            id: 1,
            href: 'http://yoooon.dothome.co.kr/website-work/04/index.html',
            btn: 'view site',
          },
          {
            id: 2,
            href: 'https://github.com/rkddbs1031/jaju-2021',
            btn: 'view code',
          },
        ],
        img: {
          src: '/img/port08.png',
          alt: '프로젝트5',
        },
      },
    ],
  },
  {
    id: 14,
    key: 'script',
    items: [
      {
        id: 15,
        num: '01',
        desc: '2021년도에 제이쿼리와 css를 이용하여 만든 작업물입니다. 스크롤 값에 따라 다양한 PARALLAX EFFECT를 주는 스크립트입니다.',
        h2: {
          text1: 'PARALLAX EFFECT',
          text2: '',
        },
        urls: [
          {
            id: 1,
            href: 'http://yoooon.dothome.co.kr/port_react/js-work/parallaxEffect/01',
            btn: 'more site',
          },
        ],
        img: {
          src: '/img/script01.png',
          alt: '스크립트1',
        },
      },
      {
        id: 16,
        num: '02',
        desc: '2021년도에 제이쿼리와 css를 이용하여 만든 작업물입니다. 마우스 커서의 움직임에 따라 다양한 mouse effect를 주는 스크립트입니다.',
        h2: {
          text1: 'MOUSE EFFECT',
          text2: '',
        },
        urls: [
          {
            id: 1,
            href: 'http://yoooon.dothome.co.kr/port_react/js-work/mouseEffect/01',
            btn: 'more site',
          },
        ],
        img: {
          src: '/img/script02.png',
          alt: '스크립트2',
        },
      },
      {
        id: 17,
        num: '03',
        desc: '2021년도에 제이쿼리와 css를 이용하여 만든 작업물입니다.  스크립트를 이용하여 보여주는 다양한 slide입니다.',
        h2: {
          text1: 'SLIDER EFFECT',
          text2: '',
        },
        urls: [
          {
            id: 1,
            href: 'http://yoooon.dothome.co.kr/port_react/js-work/sliderEffect/01',
            btn: 'more site',
          },
        ],
        img: {
          src: '/img/script03.png',
          alt: '스크립트3',
        },
      },
      {
        id: 18,
        num: '04',
        desc: '순수 javascript를 이용하여 chrome의 momentum앱을 clone하였습니다. TODO LIST, 랜덤 배경화면, 시계,날씨 정보를 알 수 있습니다',
        h2: {
          text1: 'MOMENTUM',
          text2: '',
        },
        urls: [
          {
            id: 1,
            href: 'http://yoooon.dothome.co.kr/port_react/js-work/momentum',
            btn: 'more site',
          },
        ],
        img: {
          src: '/img/script06.png',
          alt: '스크립트4',
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
