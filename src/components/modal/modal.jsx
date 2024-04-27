import React from 'react'
import ReactDom from 'react-dom'
import closeIcon from '../../assets/close-circle-icon.svg'

export default function Modal({ open, children, onClose,title }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 z-[1000]"/>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#141a28] p-4 z-[1000] rounded-lg" >
        <div className="flex justify-between items-center w-full mb-20 text-gray-500">
            <span>{title}</span>
            <button onClick={onClose} className="border-none bg-transparent cursor-pointer">
                <img alt='close' src={closeIcon} className="h-8 w-8" />
            </button>
        </div>
        
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}