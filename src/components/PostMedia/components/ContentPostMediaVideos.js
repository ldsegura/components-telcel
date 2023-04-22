const ContentPostMediaVideos = (props) => {
    const {item} = props;
    const onClick = () => {
        const {onClick} = props;

        onClick && onClick();
    }

    return (<div className="post-media-content-videos" onClick={onClick}>
        {item.videos && item.videos.map((itm,index) => {
            return (<div key={index}>
                <video src={itm} autoPlay={false} controls></video>
            </div>)
        })}
    </div>);
}

export default ContentPostMediaVideos;