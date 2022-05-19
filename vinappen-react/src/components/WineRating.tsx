import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { postRating } from '../api'

export default function WineRating() {
  const [rating, setRating] = useState(0)

  const handleRating = (rate: number) => {
    setRating(rate)
    console.log(rate)
  }

  return (
    <div className='App'>
      <Rating 
      onClick={handleRating} 
      ratingValue={rating} 
      fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}
      />
    </div>
  )
}