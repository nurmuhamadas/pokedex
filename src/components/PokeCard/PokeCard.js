import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { Image } from 'antd'

export const PokeCard = ({ id, species, image, color }) => {
  return (
    <Link
      to={`/pokemon-detail/${id}`}
      key={id}
      className={cn(
        'w-full max-w-xs cursor-pointer rounded-3xl p-6 transition-all duration-75 ease-in-out hover:scale-105 hover:text-white',
        {
          'bg-poke-grass': ['Green', 'White'].includes(color),
          'bg-poke-water': ['Blue', 'Purple', 'Gray'].includes(color),
          'bg-poke-fire': ['Red', 'Brown'].includes(color),
          'bg-poke-lighting': ['Yellow', 'Black'].includes(color),
        },
      )}
    >
      <div className="block h-40 w-full rounded-3xl">
        <Image
          src={image}
          alt={species}
          width="100%"
          height={160}
          preview={false}
          className="h-full w-full object-contain"
          fallback="/images/fallback-pokemon.png"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <span className="text-center text-lg font-bold">{species}</span>
      </div>
    </Link>
  )
}
