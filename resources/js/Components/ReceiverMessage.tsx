import React from "react";
import { MessageComponent } from "../Types/Interfaces";

const SenderMessage: React.FC<MessageComponent> = ({body, sendTime}) => {
    return (
        <div className="flex w-full">
            <div className="flex justify-start mt-10 received ml-auto mr-5 float-right">
                <div className="bg-[#3e37bd] text-white rounded-lg p-3 max-w-xs relative message-arrow">
                    <div className="mt-1 break-words">{body}</div>
                    <div className="text-xs text-gray-400 mt-1">{sendTime}</div>
                </div>
            </div>
        </div>
    );
};

export default SenderMessage;
