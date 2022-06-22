import { useState, useMount } from 'hooks'

import { ISpan, ITitle, IDescription } from 'types/projects'
import { getAniInfo, getTitleInfo, getDescriptionInfo } from 'utils/projects'

import ProjectTitle from 'routes/_components/Contents/ProjectTitle'
import Footer from 'routes/_components/Footer'

const ReactProjects = () => {
  const [aniInfo, setAniInfo] = useState<ISpan[]>([])
  const [titleInfo, setTitleInfo] = useState<ITitle[]>([])
  const [description, setDescription] = useState<IDescription>()

  useMount(() => {
    setAniInfo(getAniInfo('react'))
    setTitleInfo(getTitleInfo('react'))
    setDescription(getDescriptionInfo('react'))
  })

  return (
    <>
      <ProjectTitle ANI_INFO={aniInfo} TITLE_INFO={titleInfo} DESCRIPTION={description} />
      <Footer path='react' />
    </>
  )
}

export default ReactProjects
