import React from 'react';

const VideoDetail = (props) => {

    const video = props.video;

    if( !video ){
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url =`https://youtube.com/embed/${videoId}`;

    return (
        <div className="video-details col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
            <strong>{video.snippet.title}</strong>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;