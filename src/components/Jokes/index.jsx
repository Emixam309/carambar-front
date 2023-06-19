import { useEffect, useState } from 'react'
import { fetchApi } from '../../utils/fetchUtils'
import "./styles.css"

const Index = () => {
  const [joke, setJoke] = useState({})

  useEffect(() => {
    getJoke()
  }, [])

  const getJoke = () => {
    fetchApi('/api/jokes/random')
      .then(data => setJoke(data))
  }

  return (
    <>
      <h2>Voici une blague :</h2>
      <div className="joke">
        <p>{joke?.joke}</p>
        <p>{joke?.answer}</p>
      </div>
      <button className="joke button" onClick={getJoke}>Afficher une nouvelle blague</button>
    </>
  )
}

export default Index