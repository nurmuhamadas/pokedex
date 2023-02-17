import React, { Fragment, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { PokeCard } from '../../components/PokeCard/PokeCard'
import { useQuery } from '@apollo/client'
import { getPokemonDetail } from '../../graphql/queries'
import { MyPagination } from '../../components/MyPagination/MyPagination'
import { Link, useParams } from 'react-router-dom'
import { Button, Descriptions, Image, Tabs } from 'antd'
import cn from 'classnames'

const PokemonDetailPage = () => {
  const { id } = useParams()

  const { loading, data, error } = useQuery(getPokemonDetail, {
    variables: {
      key: id,
    },
  })

  return (
    <Fragment>
      <Navbar />

      <div className="mx-auto mt-20 flex max-w-xl flex-col items-center justify-center gap-6 px-4">
        {loading && 'Loading...'}
        {error && 'Uppss.. something went wrong'}
        {!loading && data.getPokemon && (
          <Fragment>
            <div
              className={cn('flex h-40 w-full justify-end rounded-3xl', {
                'bg-poke-grass': ['Green', 'White'].includes(
                  data.getPokemon?.color,
                ),
                'bg-poke-water': ['Blue', 'Purple', 'Gray'].includes(
                  data.getPokemon?.color,
                ),
                'bg-poke-fire': ['Red', 'Brown'].includes(
                  data.getPokemon?.color,
                ),
                'bg-poke-lighting': ['Yellow', 'Black'].includes(
                  data.getPokemon?.color,
                ),
              })}
            >
              <Image
                src={data.getPokemon?.sprite}
                alt={data.getPokemon?.species}
                width="100%"
                height={160}
                preview={false}
                className="h-full w-full object-contain"
                fallback="/images/fallback-pokemon.png"
              />
            </div>

            <div className="w-full justify-start">
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="About" key="1">
                  <Descriptions layout="horizontal" column={1}>
                    <Descriptions.Item
                      label="Species"
                      labelStyle={{ opacity: 0.7 }}
                    >
                      {data.getPokemon?.species}
                    </Descriptions.Item>
                    <Descriptions.Item
                      label="Height"
                      labelStyle={{ opacity: 0.7 }}
                    >
                      {data.getPokemon?.height}
                    </Descriptions.Item>
                    <Descriptions.Item
                      label="Weight"
                      labelStyle={{ opacity: 0.7 }}
                    >
                      {data.getPokemon?.weight}
                    </Descriptions.Item>
                  </Descriptions>
                  <Descriptions
                    layout="horizontal"
                    title="Breeding"
                    column={1}
                    className="mt-4"
                  >
                    <Descriptions.Item
                      label="Gender"
                      labelStyle={{ opacity: 0.7 }}
                    >
                      Male: {data.getPokemon?.gender?.male}, Female:{' '}
                      {data.getPokemon?.gender?.female}
                    </Descriptions.Item>
                    <Descriptions.Item
                      label="Egg Groups"
                      labelStyle={{ opacity: 0.7 }}
                    >
                      {data.getPokemon?.eggGroups?.[0]}
                    </Descriptions.Item>
                  </Descriptions>
                </Tabs.TabPane>

                <Tabs.TabPane tab="Base State" key="2">
                  <Descriptions layout="horizontal" column={1}>
                    <Descriptions.Item label="HP" labelStyle={{ opacity: 0.7 }}>
                      {data.getPokemon?.baseStats?.hp}
                    </Descriptions.Item>
                    <Descriptions.Item
                      label="Speed"
                      labelStyle={{ opacity: 0.7 }}
                    >
                      {data.getPokemon?.baseStats?.speed}
                    </Descriptions.Item>
                    <Descriptions.Item
                      label="Attack"
                      labelStyle={{ opacity: 0.7 }}
                    >
                      {data.getPokemon?.baseStats?.attack}
                    </Descriptions.Item>
                    <Descriptions.Item
                      label="Special Attack"
                      labelStyle={{ opacity: 0.7 }}
                    >
                      {data.getPokemon?.baseStats?.specialattack}
                    </Descriptions.Item>
                    <Descriptions.Item
                      label="Defense"
                      labelStyle={{ opacity: 0.7 }}
                    >
                      {data.getPokemon?.baseStats?.defense}
                    </Descriptions.Item>
                    <Descriptions.Item
                      label="Special Defense"
                      labelStyle={{ opacity: 0.7 }}
                    >
                      {data.getPokemon?.baseStats?.specialdefense}
                    </Descriptions.Item>
                  </Descriptions>
                </Tabs.TabPane>
              </Tabs>
            </div>
          </Fragment>
        )}
        {!loading && (
          <div className="flex w-full">
            <Link to="/pokemon-list">
              <Button style={{ color: '#f3f3f3' }} className="btn-back">
                Back to list
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default PokemonDetailPage
