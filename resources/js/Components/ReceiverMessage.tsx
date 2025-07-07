import React from "react";
import type { MessageComponent } from "../Types/Interfaces";

const ReceiverMessage: React.FC<MessageComponent> = ({body, sendTime}) => {
    return (
        <div className="flex justify-end">
            <div className="flex flex-col items-end max-w-[80%]">
                <div className="bg-indigo-500 text-white rounded-2xl rounded-tr-md px-4 py-3 shadow-sm">
                    <p className="text-sm leading-relaxed break-words">{body}</p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 mr-2">{sendTime}</span>
            </div>
        </div>
    );
};

export default ReceiverMessage;