import ArrowLeft from "./images/arrow_back_ios_FILL0_wght200_GRAD0_opsz24.svg";

const HeaderPostMedia = (props) => {
    const { item, hasButtonReturn } = props;

    const onClickReturn = () => {
        const { onClickReturn } = props;
        onClickReturn && onClickReturn();
    }
    const onClick = () => {
        const { onClick } = props;
        onClick && onClick();
    }

    return (<div className="post-media-content-header">
        {hasButtonReturn && (
            <div className="post-media-content-header-prev">
                <button onClick={onClickReturn}>
                    <img src={ArrowLeft} />
                </button>
            </div>
        )}
        <div className="post-media-content-header-avatar" onClick={onClick}>
            <img src={item.picture} />
        </div>
        <div className="post-media-content-header-content" onClick={onClick}>
            <p className="post-media-content-header-title">{item.name}</p>
            {item.hasPremium && <p className="post-media-content-header-publish">Premium</p>}
        </div>
    </div>);
}

export default HeaderPostMedia;