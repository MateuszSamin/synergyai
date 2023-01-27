import React from 'react'
import Container from './Container'
import { TiTick } from 'react-icons/ti'

const Milestone = ({ milestoneTasks, ...props }: any) => {


    return (
        <div className='min-w-[20rem] h-[30rem] bg-gradient-to-b from-black to-transparent rounded-3xl flex-col px-6 py-6'>
            <hr className='mr-auto border-t-2 w-[2rem] rounded-3xl border-green mt-4 ' />
            <p className='mt-4 text-2xl'>Milestone {props.index} </p>
            <div className='space-y-4 mt-6'>
                {milestoneTasks.map((task: any, i: number) => {
                    return (
                        <div key={i} className="space-x-4 flex flex-row items-center">
                            <div className={`rounded-full w-6 h-6 ${task.done === true ? 'border-green' : 'border-gray-400'} flex items-center justify-center border-[1px] `}>
                                {task.done === true ? (<TiTick color={"#01C38E"}/>) : (<></>)}
                            </div>
                            <p>{task.name}</p>
                        </div>
                    );
                })}
            </div>

        </div>


    )
}

export default Milestone