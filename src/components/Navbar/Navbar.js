import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between gap-2 border-b-2 border-b-slate-400 px-8 py-4 sm:flex-row sm:items-center">
      <div className="flex flex-col gap-[10px]">
        <div className="text-[32px] font-bold text-white">Pokedex</div>
      </div>
      <div className="ml-auto flex items-center gap-[26px]"></div>
    </div>
  )
}

export default Navbar
