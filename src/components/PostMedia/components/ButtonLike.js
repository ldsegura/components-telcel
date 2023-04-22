import { useState } from "react";
import svgLike from "./images/thumb_up_FILL0_wght200_GRAD0_opsz24.svg";

const ButtonLike = (props) => {
    const [like, setLike] = useState(0);
    const onClickLike = () => {
        const {onClick} = props;
        setLike(like === 0 ? 1 : 0)
        onClick && onClick();
    }
    return (<div onClick={onClickLike} className={`btn-shared-like ${like === 0 ? '' : 'like'}`}>
        <img src={svgLike} />
        Me gusta
    </div>);
}

export default ButtonLike;