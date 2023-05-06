import React from "react";
import {auth} from '../firebase'

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full `,
  name: ` mt-[-4rem] text-[#f3f4f6] text-xs `,
  sent: `bg-[#fb923c] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#fde68a] text-black float-left rounded-br-full`,
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;
  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
