const ContentPostMediaVideos = (props) => {
    const {item, autoPlay, controls} = props;
    const onClick = () => {
        const {onClick} = props;

        onClick && onClick();
    }

    return (<div className="post-media-content-videos" onClick={onClick}>
        {item.videos && item.videos.map((itm,index) => {
            return (<div key={index}>
                <video src={itm} 
                autoPlay={autoPlay} 
                controls={controls} 
                />
            </div>)
        })}
    </div>);
}

ContentPostMediaVideos.defaultProps = {
    autoPlay: false,
    controls: false,
}
export default ContentPostMediaVideos;