import React, {useEffect, useRef, useState} from 'react'
import './TitleCards.css'


 

const TitleCards = ({title, category}) => {
  console.log('category:', category)
  
  const [ apiData, setApiData ] = useState([])  
  const cardsRef = useRef()

   const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODBhYjJjN2U0ZDNlMmM4MTYzODQxYjRmYWE2NTM4ZiIsIm5iZiI6MTc3NDAyMDEwOC42NTYsInN1YiI6IjY5YmQ2NjBjMzUxZjIwNzgzYzhjMjBkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Ff3WnqYKydE0eDoBpP08-iHZVE7eVTTWRzZ5NCJdfw'
    }
  }
  

  const handleWheel = (e) => {
    e.preventDefault()
    cardsRef.current.scrollLeft += e.deltaY
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${ category ? category : 'now_playing'}`, options)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setApiData(res.results)
    })
    .catch(err => console.error(err))


    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])
  
  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
