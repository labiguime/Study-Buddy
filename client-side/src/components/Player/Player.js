import ReactPlayer from 'react-player';

const Player = () => {
    return(
        <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                controls='true'
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                width='100%'
                height='100%'
              />
        </div>
    )
}

export default Player