import { gql } from '@apollo/client'

export const getAllPokemon = gql`
  query GetAllPokemon($offset: Int, $limit: Int) {
    getAllPokemon(offset: $offset, take: $limit) {
      key
      backSprite
      baseStatsTotal
      color
      levellingRate
      shinyBackSprite
      shinySprite
      smogonPage
      smogonTier
      species
      sprite
    }
  }
`

export const getPokemonDetail = gql`
  query GetAllPokemon($key: PokemonEnum!) {
    getPokemon(pokemon: $key) {
      key
      backSprite
      baseForme
      baseSpecies
      baseStatsTotal
      bulbapediaPage
      color
      cosmeticFormes
      eggGroups
      evolutionLevel
      forme
      formeLetter
      height
      isEggObtainable
      levellingRate
      maximumHatchTime
      minimumHatchTime
      num
      otherFormes
      serebiiPage
      shinyBackSprite
      shinySprite
      smogonPage
      smogonTier
      species
      sprite
      weight
      abilities {
        first {
          key
          desc
          name
          shortDesc
        }
        hidden {
          key
          desc
          name
          shortDesc
        }
        second {
          key
          desc
          name
          shortDesc
        }
        special {
          key
          desc
          name
          shortDesc
        }
      }
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      evYields {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      gender {
        female
        male
      }
    }
  }
`
