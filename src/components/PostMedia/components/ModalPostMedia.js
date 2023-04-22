//import CommentsPostMedia from "./CommentsPostMedia";
import { useState } from "react";
import ContentPostMediaVideos from "./ContentPostMediaVideos";
import DescriptionPostMedia from "./DescriptionPostMedia";
import HeaderPostMedia from "./HeaderPostMedia";
import SharedPostMedia from "./SharedPostMedia";

const ModalPostMedia = (props) => {
    const {item} = props;
        
    const onModal = () => {
        const {onClickReturn} = props;
        onClickReturn && onClickReturn();
    }
    const onClickComment = () => {

    }
    const onClickConcierge = () => {
        const {onClickConcierge} = props;
        onClickConcierge && onClickConcierge();
    }

    const onClickMoreContent = () => {
        const {onClickMoreContent} = props;
        onClickMoreContent && onClickMoreContent();
    }

    return ( <div className="modal-post-media">
        <HeaderPostMedia item={item} hasButtonReturn onClickReturn={onModal} onClick={()=> console.log("abrir perfil/grupo")}/>
        <div style={{marginTop: "60px"}}>
        <DescriptionPostMedia item={item} />
        </div>
        {item.videos && item.videos.map((itm, index) => {
            return (
                <div key={index} style={{marginTop: "5px"}}>
                    <ContentPostMediaVideos item={{
                        videos: [itm]
                    }}
                    autoPlay={index === 0 ? true: false}
                    controls={true}
                    />
                    <SharedPostMedia item={item} onClickComment={onClickComment} onClickConcierge={onClickConcierge} />
                </div>
            )
        })}
        <div>
            <button className="modal-post-media-btn" onClick={onClickMoreContent}>{`ver más contenido de ${item.name}`}</button>
        </div>
        {/* <CommentsPostMedia comments={item.comments} /> */}
    </div> );
}
 
export default ModalPostMedia;