import React from "react";
import Container from "./Container";
import { TiTick } from "react-icons/ti";

const Milestone = ({ milestoneTasks, milestoneTitle, ...props }: any) => {
  return (
    <div className="min-w-[25rem] h-[40rem] bg-gradient-to-b from-black to-transparent rounded-3xl flex-col px-6 py-6">
      <hr className="mr-auto border-t-2 w-[2rem] rounded-3xl border-green mt-4 " />
      <p className="mt-4 text-2xl h-20">
        STAGE - {props.index} <br /> {milestoneTitle}{" "}
      </p>
      <div className="space-y-3 mt-6">
        {milestoneTasks.map((task: any, i: number) => {
          return (
            <div key={i} className="space-x-4 flex lex-row items-center">
              <div
                className={`rounded-full min-w-8 w-8 h-8 ${
                  task.done === true ? "border-green" : "border-gray-400"
                } flex items-center justify-center border-[1px] `}
              >
                {task.done === true ? <TiTick color={"#01C38E"} size={20} /> : <></>}
              </div>
              <div className="w-72">{task.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Milestone;
