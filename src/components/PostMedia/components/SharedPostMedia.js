import svgLike from "./images/thumb_up_FILL0_wght200_GRAD0_opsz24.svg";
import svgComment from "./images/chat_FILL0_wght200_GRAD0_opsz24.svg";
import svgConcierge from "./images/contact_phone_FILL0_wght200_GRAD0_opsz24.svg";
const SharedPostMedia = () => {
    return ( <div className="post-media-content-shared">
        <div className="post-media-content-shared-texts">
            <div>iconos de me gusta 309k</div>
            <div></div>
        </div>
        <div className="post-media-content-shared-icons">
            <div>
                <img src={svgLike} />
                Me gusta
            </div>
            <div>
                <img src={svgComment} />
                Comentarios
            </div>
            <div>
                <img src={svgConcierge} />
                Consierge
            </div>
        </div>
    </div> );
}
 
export default SharedPostMedia;