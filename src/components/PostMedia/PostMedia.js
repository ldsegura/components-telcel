import ContentPostMediaVideos from "./components/ContentPostMediaVideos";
import DescriptionPostMedia from "./components/DescriptionPostMedia";
import HeaderPostMedia from "./components/HeaderPostMedia";
import SharedPostMedia from "./components/SharedPostMedia";
import "./components/style.scss";

const PostMedia = (props) => {
    const { item } = props;

    const onClickLike = () => {

    }
    const onClickComment = () => {

    }
    const onClickConcierge = () => {

    }

    return (<div className="post-media-content">
        <HeaderPostMedia item={item} hasButtonReturn onClickReturn={()=> console.log("cerrar modal")} onClick={()=> console.log("abrir perfil/grupo")} />
        <DescriptionPostMedia item={item} isLineal onClick={()=> console.log("abrir modal")} />
        <ContentPostMediaVideos item={item} onClick={()=> console.log("abrir modal")} />
        <SharedPostMedia item={item} onClickLike={onClickLike} onClickComment={onClickComment} onClickConcierge={onClickConcierge} />
    </div>);
}

export default PostMedia;