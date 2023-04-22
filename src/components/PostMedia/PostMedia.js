import { useState } from "react";
import ContentPostMediaVideos from "./components/ContentPostMediaVideos";
import DescriptionPostMedia from "./components/DescriptionPostMedia";
import HeaderPostMedia from "./components/HeaderPostMedia";
import ModalPostMedia from "./components/ModalPostMedia";
import SharedPostMedia from "./components/SharedPostMedia";
import "./components/style.scss";
import CommentsPostMedia from "./components/CommentsPostMedia";

const PostMedia = (props) => {
    const { item, hasButtonAction } = props;
    const [showModal, setShowModal] = useState(false);
    const [activeInput, setActiveInput] = useState(false);

    const onClickLike = () => {

    }

    const onClickComment = () => {
        setActiveInput(!activeInput);
    }
    const onClickConcierge = () => {
        console.log("action de llamar a concierge")
    }
    const onModal = () => {
        setShowModal(!showModal);
    }
    
    const onClickMoreContent = () => {
        setShowModal(!showModal);
        console.log("abrir el panel de contenido del perfol o grupo o x")
    }

    return (<div className="post-media-content">
        <HeaderPostMedia item={item} onClick={()=> console.log("abrir perfil/grupo")} />
        {(item.description && (item.videos && item.videos.length > 0)) && <DescriptionPostMedia item={item} isLineal onClick={onModal} />}
        {(item.description && ((item.videos === undefined || item.videos === null || (item.videos && item.videos?.length <= 0)))) && <DescriptionPostMedia item={item} onClick={onModal} />}
        <ContentPostMediaVideos item={item} onClick={onModal} />
        <SharedPostMedia item={item} onClickLike={onClickLike} onClickComment={onClickComment} onClickConcierge={onClickConcierge} />
        <CommentsPostMedia comments={item.comments} maxShowComment={2} activeInput={activeInput} returnActiveInput={onClickComment} />
        {showModal && <ModalPostMedia item={item} onClickReturn={onModal} onClickConcierge={onClickConcierge} onClickMoreContent={onClickMoreContent} hasButtonAction={hasButtonAction} />}
    </div>);
}
PostMedia.defaultProps = {
    hasButtonAction: false,
}
export default PostMedia;