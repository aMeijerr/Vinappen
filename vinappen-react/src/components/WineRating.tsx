import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { postRating } from '../api'

interface RatingProps {
  wineId: string
}

export default function WineRating({wineId}: RatingProps) {
  const [rating, setRating] = useState(0)
  const handleRating = async (rate: number) => {
    setRating(rate)
    await postRating(wineId, rate)
    console.log(rate)
  }

  const renderStarRating = () => {
    if (rating === 0) {
      return <div className='App'>
      <Rating 
      onClick={handleRating}
      ratingValue={rating} 
      fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}
      />
    </div>
    } else {
      return <h3>Thank you for voting!</h3>;
    }
  }
//add onClick show/hide rating/text
  return (
    <>
    {renderStarRating()}
    </>
    // <div className='App'>
    //   <Rating 
    //   onClick={handleRating}
    //   ratingValue={rating} 
    //   fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}
    //   />
    // </div>
  )
}