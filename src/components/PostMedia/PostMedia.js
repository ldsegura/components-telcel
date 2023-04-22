import { useState } from "react";
import ContentPostMediaVideos from "./components/ContentPostMediaVideos";
import DescriptionPostMedia from "./components/DescriptionPostMedia";
import HeaderPostMedia from "./components/HeaderPostMedia";
import ModalPostMedia from "./components/ModalPostMedia";
import SharedPostMedia from "./components/SharedPostMedia";
import "./components/style.scss";

const PostMedia = (props) => {
    const { item } = props;
    const [showModal, setShowModal] = useState(false);

    const onClickLike = () => {

    }
    const onClickComment = () => {

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
        <DescriptionPostMedia item={item} isLineal onClick={onModal} />
        <ContentPostMediaVideos item={item} onClick={onModal} />
        <SharedPostMedia item={item} onClickLike={onClickLike} onClickComment={onClickComment} onClickConcierge={onClickConcierge} />
        {showModal && <ModalPostMedia item={item} onClickReturn={onModal} onClickConcierge={onClickConcierge} onClickMoreContent={onClickMoreContent} />}
    </div>);
}

export default PostMedia;