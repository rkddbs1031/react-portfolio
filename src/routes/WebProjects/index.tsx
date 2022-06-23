import { useState, useMount } from 'hooks'

import { ISpan, ITitle, IDescription, IProject } from 'types/projects'
import { getAniInfo, getTitleInfo, getDescriptionInfo, getProjectInfo } from 'utils/projects'

import ProjectTitle from 'routes/_components/Contents/ProjectTitle'
import ProjectContents from 'routes/_components/Contents/ProjectContents'
import Footer from 'routes/_components/Footer'

const WebProjects = () => {
  const [aniInfo, setAniInfo] = useState<ISpan[]>([])
  const [titleInfo, setTitleInfo] = useState<ITitle[]>([])
  const [description, setDescription] = useState<IDescription>()
  const [projectInfo, setProjectInfo] = useState<IProject[]>([])

  useMount(() => {
    setAniInfo(getAniInfo('web'))
    setTitleInfo(getTitleInfo('web'))
    setDescription(getDescriptionInfo('web'))
    setProjectInfo(getProjectInfo('web'))
  })

  return (
    <>
      <ProjectTitle ANI_INFO={aniInfo} TITLE_INFO={titleInfo} DESCRIPTION={description} />
      <ProjectContents PROJECT_INFO={projectInfo} />
      <Footer path='web' />
    </>
  )
}
export default WebProjects
