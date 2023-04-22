import { useEffect, useState } from "react";
import ButtonLike from "./ButtonLike";
import sendIcon from "./images/arrow_forward_ios_FILL0_wght200_GRAD0_opsz24.svg";
const CommentsPostMedia = (props) => {
    const { comments, maxShowComment, activeInput } = props;
    const [newList, setNewList] = useState([])
    const [commentCreated, setCommentCreated] = useState([]);
    const [numberId, setNumberId] = useState(`in-coments-${Math.floor(Math.random() * 100)}`)
    useEffect(() => {
        if (comments.length > 0 && comments.length >= maxShowComment) {
            setNewList(comments.slice(0, maxShowComment))
        }
    }, [])

    const onClickMoreComment = () => {
        setNewList([...comments.concat(commentCreated)])
    }

    const onChangeInput = () => {

    }

    useEffect(() => {
        if (activeInput) {
            const {returnActiveInput} = props;
            document.getElementById(numberId).focus();
            returnActiveInput && returnActiveInput();
        }
    }, [activeInput]);

    const submitComments = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.target.elements["comments"].value.trim() !== "") {
            const comment = {
                "picture": "https://social-network.sicssa-lab.com/assets/images/avatars/5556512.png",
                "comment": e.target.elements["comments"].value.trim(),
                "createDate": "2022-06-13 05:49:36"
            }
            setCommentCreated([...commentCreated, comment]);
            setNewList([...newList, comment])
            e.target.elements["comments"].value = "";
        }
    }

    return (<div className="post-media-content-comments">
        {newList && newList.map((item, index) => {
            return (
                <div key={index} className="bfc-content-box">
                    <div className="bfc-content-avatar">
                        <img src={item.picture} />
                    </div>
                    <div className="bfc-content">
                        <div>{item.comment}</div>
                        <div>
                            <ButtonLike />
                        </div>
                    </div>
                </div>
            )
        })}
        {newList.length < comments.length && (
            <div onClick={onClickMoreComment}>{`ver ${comments.length - newList.length} comentarios más`}</div>
        )}
        <div className="post-media-content-comments-box-content">
            <form className="content-input-comments" onSubmit={submitComments}>
                <input name="comments" id={numberId} />
                <button type="submit"> <img src={sendIcon} /></button>
            </form>
        </div>
    </div>);
}
CommentsPostMedia.defaultProps = {
    maxShowComment: 2,
}
export default CommentsPostMedia;