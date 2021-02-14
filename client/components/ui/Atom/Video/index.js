import React from 'react'
import PropTypes from 'prop-types'

const VIDEO_TYPES = {
  MP4: 'video/mp4'
}

// @todo: lazy load the video
export default function Video({width = 320, height = 240, src}) {
  return (
    <video controls>
      <source src={src} type={src.type}/>

      <style jsx>{`
        video {
          width: 100%;
          max-width: 100%;
          border-radius: 10px;
          box-shadow: 0 15px 17px -5px rgb(1,1,1,0.8);
          border: 5px solid var(--c-accent);
          border-radius: 10px;
        } 

        @media screen and (min-width: 767px) {
          video {
            border: 10px solid var(--c-accent);
          }
        }
      `}</style>
    </video>
  )
}


Video.propTypes = {
  media: PropTypes.shape({
    src: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(VIDEO_TYPES)).isRequired
  }).isRequired
}