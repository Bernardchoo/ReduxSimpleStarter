//plain functional component
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
            onVideoSelect = {props.onVideoSelect} // pass over as props to videolistitem
            key={video.etag} 
            video={video}
            />
        )
    });

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;