import React, { useState } from 'react';

const SkeletonBody: React.FC = () => {
  return (
    <div className="bg-[#222327] h-screen">
      <div className="flex border-b-2 items-center gap-[59%] border-[#cbcbcb] bg-white dark:bg-[#2c2c2c] sticky top-0 z-10">
        <div className="relative flex w-52 animate-pulse gap-2 p-3 ml-5">
          <div className="h-12 w-12 rounded-full bg-slate-400"></div>
          <div className="flex-1">
            <div>
              <div className="mb-1 h-5 w-46 rounded-lg bg-slate-400 text-lg"></div>
              <div className="h-5 w-[30%] rounded-lg bg-slate-400 text-sm"></div>
            </div>
          </div>
        </div>
        <div className="w-32 h-10 rounded-lg bg-slate-400 animate-pulse"></div>
      </div>
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <div>
              <div className="flex justify-start mt-10 received ">
                <div className="bg-[#414141] ml-5 text-white rounded-lg p-3 max-w-xs relative message-arrow">
                  <div className="relative flex w-52 animate-pulse gap-2 p-3 ">
                    <div className="flex-1">
                      <div>
                        <div className="mb-1 h-5 w-46 rounded-lg bg-slate-400 text-lg"></div>
                        <div className="h-5 w-[30%] rounded-lg bg-slate-400 text-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-start mt-10 received float-right">
                <div className="bg-[#3e37bd] mr-5 text-white rounded-lg p-3 max-w-xs relative message-arrow">
                  <div className="relative flex w-52 animate-pulse gap-2 p-3 ">
                    <div className="flex-1">
                      <div>
                        <div className="mb-1 h-5 w-46 rounded-lg bg-slate-400 text-lg"></div>
                        <div className="h-5 w-[30%] rounded-lg bg-slate-400 text-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkeletonBody;
