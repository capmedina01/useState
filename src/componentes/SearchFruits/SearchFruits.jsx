import React,{ useState } from 'react'



export const SearchFruits = () => {

   const fruits = ['pera', 'limon', 'manzana', 'banano']   
   const [response, setResponse] = useState('')
   const [word, setWord] = useState('')

   const handleSearch = (event) => setWord(event.target.value)

   const hanledFind = () => {

    let fruit = fruits.find(fr => word.trim().toLowerCase() === fr.trim().toLowerCase())

    if(fruit){
      setResponse(fruit)
    }
    else{
      setResponse('No hemos encontrado la fruta')
    }
   }
   
  return (
    <div className='container-search'>
      <h1>Buscador</h1>
      <input onChange={handleSearch} type='text' placeholder='¿Que fruta buscas?'/>
      <hr/>
      <button onClick={hanledFind}>Buscar</button>
      <p className='p-border'>{response}</p>
    </div>
  )
}
