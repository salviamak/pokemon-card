// import React from 'react'


export default function PokemonCard({ pokemon }) {
 
 
  // const pokemon = pokemonList[0];
  
  return (
    
    
    <figure>
      {pokemon.imgSrc != null ?(
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ):(<p>??????</p>)
     
     
    }
      <figcaption>
      
        {pokemon.name}
      </figcaption>
    </figure>
  )
}

