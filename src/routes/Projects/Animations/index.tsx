import { useState, useMount } from 'hooks'
import { useLoad } from 'hooks/useLoad'
import { ISpan, ITitle, IDescription } from 'types/projects'
import { getAniInfo, getTitleInfo, getDescriptionInfo, ANIMATAION_INFO } from 'utils/projects'

import Loading from 'routes/_components/Loading'
import Header from 'routes/_components/Header'
import ProjectTitle from 'routes/_components/Contents/ProjectTitle'
import ProjectContents from 'routes/_components/Contents/ProjectContents/AnimationContents'
import Footer from 'routes/_components/Footer'

const AnimationProjects = () => {
  const [aniInfo, setAniInfo] = useState<ISpan[]>([])
  const [titleInfo, setTitleInfo] = useState<ITitle[]>([])
  const [description, setDescription] = useState<IDescription>()
  const { isLoading } = useLoad()

  useMount(() => {
    setAniInfo(getAniInfo('animation'))
    setTitleInfo(getTitleInfo('animation'))
    setDescription(getDescriptionInfo('animation'))
  })

  if (isLoading) return <Loading />
  return (
    <>
      <Header />
      <ProjectTitle ANI_INFO={aniInfo} TITLE_INFO={titleInfo} DESCRIPTION={description} />
      <ProjectContents PROJECT_INFO={ANIMATAION_INFO} />
      <Footer path='animation' />
    </>
  )
}
export default AnimationProjects
