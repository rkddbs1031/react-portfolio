import { ProjectTextSvg, AboutTextSvg } from 'assets/svgs'
import ProfileLeftImg from 'assets/img/profile_left.png'
import ProfileRightImg from 'assets/img/profile_right.png'

const MAIN_ITEM = [
  {
    id: 1,
    item: 'left',
    href: 'projects',
    img: ProfileLeftImg,
    svg: ProjectTextSvg,
  },
  {
    id: 2,
    item: 'right',
    href: 'about',
    img: ProfileRightImg,
    svg: AboutTextSvg,
  },
]
export { MAIN_ITEM }
