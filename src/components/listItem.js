import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
    const image = video.snippet.thumbnails.default;
    
    return (
        <li onClick={() => onVideoSelect(video) } className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={ image.url }
                    width={ image.width}
                    height={ image.heigth} />       
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        { video.snippet.title }
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;