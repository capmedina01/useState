import React,{ useState } from 'react'



export const SearchFruits = () => {

   const fruits = ['pera', 'limon', 'manzana', 'banano']   
   const [response, setResponse] = useState('')
   const [word, setWord] = useState('')

   const handleSearch = (event) => setWord(event.target.value)
   
  return (
    <div>
      <input onChange={handleSearch} type='text' placeholder='¿Que fruta buscas?'/>
      <hr/>
      <button>Buscar</button>
      <p>{response}</p>
    </div>
  )
}
