import { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { socket } from '../../shared/constants';

const Player = ({youtube_url = 'https://www.youtube.com/watch?v=pKO9UjSeLew'}) => {

    const ref = useRef(null)
    const [data, setData] = useState({play: false, time: 0, received: false})

    useEffect(() => {
      socket.on('video', (data) => {
        data = {...data, received: true}
        setData(data)
      })
    }, [])

    const setPlay = () => {
      setData({...data, play: true})
      data.received ? setData({...data, received: false}) : socket.emit('video', {play: true, time: ref.current.getCurrentTime()})
    }

    const setPause = () => {
      setData({...data, play: false})
      data.received ? setData({...data, received: false}) : socket.emit('video', {play: false, time: ref.current.getCurrentTime()})
    }

    return(
        <div className='player-wrapper'>
          <ReactPlayer
            ref={ref}
            className='react-player'
            controls={true}
            url={ youtube_url + '?t=' + parseInt(data.time)}
            width='100%'
            height='100%'
            onPlay={setPlay}
            onPause={setPause}
            playing={data.play}
            muted={true}
          />
        </div>
    )
}

export default Player