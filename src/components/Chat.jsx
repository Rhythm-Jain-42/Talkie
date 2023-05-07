import React, {useState, useEffect, useRef} from "react";
import Message from "./Message";
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import SendMessage from "./SendMessage";

const style = {
  main: `bg-[#262626] flex flex-col p-[10px] overflow-y-scroll`,
};

const Chat = () => {

    const [Messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'Messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let Messages = [];
          querySnapshot.forEach((doc) => {
            Messages.push({ ...doc.data(), id: doc.id });
          });
          setMessages(Messages);
        });
        return () => unsubscribe();
      }, []);

  return (
    <>
      <main className={style.main}>
      {Messages &&
          Messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      {/* send msg component */}
      <SendMessage scroll={scroll}/>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;