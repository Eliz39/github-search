import React from 'react'

export const Button = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-black/90 px-6 py-2 text-white transition hover:bg-black/80 focus:outline-none"
    >
      Search
    </button>
  )
}
