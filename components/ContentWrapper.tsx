import * as React from "react";
import {DefaultProps} from "devso-nextjs-library";

const ContentWrapper : React.FC<DefaultProps> = (props) => {
    return (
        <div className='w-3/4 mx-auto !bg-white'>
            {props.children}
        </div>
    )
}

export default ContentWrapper;