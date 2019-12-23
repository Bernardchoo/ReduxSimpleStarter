import React from 'react';

const VideoListItem = (props)  => { // or {video} as props
    const video = props.video;      // remove if using {video}
    const onVideoSelect = props.onVideoSelect; // take from video list
    const imageUrl = video.snippet.thumbnails.default.url;
    const titleData = video.snippet.title;

    return (
        <li onClick = { () => 
            onVideoSelect(video) // call onVideoSelect when clicked with video
                } className = "list-group-item">
            <div className= "video-list media">

                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{titleData}</div>    
                </div>

            </div>            
        </li>
    );
};

export default VideoListItem;