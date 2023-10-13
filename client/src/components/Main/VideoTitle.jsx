import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

export default function VideoTitle(video) {
  return (
    <OverlayTrigger
      placement='bottom-end'
      overlay={
        <Tooltip>
          {video.title}
        </Tooltip>
      }
    >
      <h1 className="title"> {video.title}</h1>
    </OverlayTrigger>

  )
}
