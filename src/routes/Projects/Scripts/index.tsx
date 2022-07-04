import { useState, useMount } from 'hooks'
import { useLoad } from 'hooks/useLoad'
import { ISpan, ITitle, IDescription, IProject } from 'types/projects'
import { getAniInfo, getTitleInfo, getDescriptionInfo, getProjectInfo } from 'utils/projects'

import Loading from 'routes/_components/Loading'
import Header from 'routes/_components/Header'
import ProjectTitle from 'routes/_components/Contents/ProjectTitle'
import ProjectContents from 'routes/_components/Contents/ProjectContents'
import Footer from 'routes/_components/Footer'

const ScriptProjects = () => {
  const [aniInfo, setAniInfo] = useState<ISpan[]>([])
  const [titleInfo, setTitleInfo] = useState<ITitle[]>([])
  const [description, setDescription] = useState<IDescription>()
  const [projectInfo, setProjectInfo] = useState<IProject[]>([])
  const { isLoading } = useLoad()

  useMount(() => {
    setAniInfo(getAniInfo('script'))
    setTitleInfo(getTitleInfo('script'))
    setDescription(getDescriptionInfo('script'))
    setProjectInfo(getProjectInfo('script'))
  })

  if (isLoading) return <Loading />
  return (
    <>
      <Header />
      <ProjectTitle ANI_INFO={aniInfo} TITLE_INFO={titleInfo} DESCRIPTION={description} />
      <ProjectContents PROJECT_INFO={projectInfo} />
      <Footer path='script' />
    </>
  )
}
export default ScriptProjects
