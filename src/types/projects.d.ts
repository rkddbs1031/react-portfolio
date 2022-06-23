export interface IContentList {
  id: number
  item: string
}

export interface IFotoerTop {
  id: number
  text: string
  href: string
}

export interface ISpan {
  span: string
}

export interface ITitle {
  id: number
  text: string
}

export interface IDescription {
  text: string
}

export interface IUrl {
  id: number
  href: string
  btn: string
}

export interface IAnimation {
  id: number
  num: string
  desc: string
  title: string
}

export interface IProject {
  id: number
  num: string
  desc: string
  h2: {
    text1: string
    text2: string
  }
  urls: IUrl[]
  img: {
    src: string
    alt: string
  }
}
