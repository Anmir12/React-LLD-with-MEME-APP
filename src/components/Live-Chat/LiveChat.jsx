import React from 'react'
import VideoPlayer from './VideoPlayer'
import LiveComments from './LiveComments'

const LiveChat = () => {
  return (
    <div className='flex h-[600px]'>
    <VideoPlayer/>
    <LiveComments/>
    </div>
  )
}

export default LiveChat