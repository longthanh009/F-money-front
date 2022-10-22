import React, { useState } from 'react'

type Props = {
    modal: boolean
    setShowModal: any
}

const ModalCredit = (props: Props) => {
    return (
        <>
            {props.modal ? (
            <>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => props.setShowModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg px-4 mx-auto bg-white shadow-lg">
                    <div className="mt-3 sm:flex">
                        <div className="mt-2 text-center sm:ml-4 sm:text-left">
                        <h4 className="text-lg font-medium text-gray-800">
                            Delete account ?
                        </h4>
                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.
                        </p>
                        <div className="py-3 px-4 text-right border-t-[1px]">
                            <button
                            className="border-[1px] shadow cursor-pointer duration-1000 py-1 px-4 text-sm rounded-sm border-slate-400 mr-2"
                            onClick={() => props.setShowModal(false)}
                            >
                            Cancal
                            </button>
                            <button
                            className="bg-cyan-400 text-cyan-50 border-[1px] shadow cursor-pointer duration-1000 py-1 px-4 text-sm rounded-sm border-slate-400 "
                            onClick={() => props.setShowModal(false)}
                            >
                            Ok
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </>
            ) : null}
        </>
    )
}

export default ModalCredit