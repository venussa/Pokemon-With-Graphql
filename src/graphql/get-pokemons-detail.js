import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
    query pokemon($id: String) {
        pokemon(id: $id) { 
            id
    		number
    		name
				weight{
          minimum
          maximum
        }
    		height {
          minimum
          maximum
        }
    		classification
    		types
    		resistant
    		attacks {
          fast{
            name
            type
            damage
          }
          special{
            name
            type
            damage
          }
        }
    		weaknesses
    		fleeRate
    		maxCP
        evolutionRequirements{
          amount
          name
        }
        maxCP
        maxHP
    	image
        evolutions{
            id
            name
          }
        }
    }
`