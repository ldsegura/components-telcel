const DescriptionPostMedia = (props) => {
    const {isLineal, item} = props;
    const onClick = () => {
        const {onClick} = props;

        onClick && onClick();
    }

    const renderLine = () => {
        return (<div className="post-media-content-description inline-description" onClick={onClick}>
            <div className="pmcd-star" dangerouslySetInnerHTML={{ __html: item.description }}></div>
            <div className="pmcd-end">Ver más</div>
        </div>)
    }
    const renderDescriptionHtml = () => {
        return (<div className="post-media-content-description" onClick={onClick}>
            <div className="pmcd-star" dangerouslySetInnerHTML={{ __html: item.description }}></div>
        </div>)
    }

    return ( <div>
        {isLineal && renderLine()}
        {!isLineal && renderDescriptionHtml()}
    </div> );
}
 
export default DescriptionPostMedia;