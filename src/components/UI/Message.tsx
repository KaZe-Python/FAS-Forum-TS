import React, {FC} from 'react';

interface MessageProps{
    msg: string;
    type: 'danger' | 'success';
}

const Message: FC<MessageProps> = ({msg, type}) => {
    let typeClass = '';
    switch(type){
        case 'danger':
            typeClass = 'danger';
            break
        case 'success':
            typeClass = 'success';
            break
    }

    return(
        <article className={`message ${typeClass}`}>
            <div className="message-body">{msg}</div>
        </article>
    );
}

export default Message;