import React, { useEffect } from 'react'
import Video, VieoPl from '../../Atom/Video'

export function PresentationVideo() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect({
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className=''></div>
  }

  return (
    <Video src="/videos/el-templo-presentation.mp4" type="video/mp4"/>
  )
}