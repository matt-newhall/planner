import React from "react"

type ButtonProps = {
  content: string
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <button
      className="my-10 cursor-pointer rounded-lg border border-solid border-transparent bg-button px-5 py-3 font-lato font-medium shadow-none outline-none transition ease-in-out hover:border-selected"
      onClick={onClick}
    >
      {content}
    </button>
  )
}
