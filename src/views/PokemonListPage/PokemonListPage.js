import React, { Fragment, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { PokeCard } from '../../components/PokeCard/PokeCard'
import { useQuery } from '@apollo/client'
import { getAllPokemon } from '../../graphql/queries'
import { Pagination } from 'antd'
import { MyPagination } from '../../components/MyPagination/MyPagination'

const PokemonListPage = () => {
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)

  const { loading, data, error } = useQuery(getAllPokemon, {
    variables: {
      offset,
      limit,
    },
  })

  const handlePaginationChange = (limit, offset) => {
    setLimit(limit)
    setOffset(offset)
  }

  return (
    <Fragment>
      <Navbar />

      <div className="mt-20 flex flex-wrap items-center justify-center gap-6">
        {loading && 'Loading...'}
        {!loading &&
          data.getAllPokemon.map((d) => (
            <PokeCard
              key={d.key}
              id={d.key}
              image={d.sprite}
              species={d.species}
              color={d.color}
            />
          ))}
      </div>

      <div className="flex items-center justify-center py-20 ">
        <MyPagination onChange={handlePaginationChange} total={500} />
      </div>
    </Fragment>
  )
}

export default PokemonListPage
