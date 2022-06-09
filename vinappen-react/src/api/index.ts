
import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL
export async function fetchWines(){
    try{
      const response = await axios.get('/wines')
      return response
    } catch (error: any){
      return error.response
    }
  }

export async function fetchWinesByCategory(category: any){
    try{
      const response = await axios.get(`/category/${category}`)
      return response
    } catch (error: any){
      return error.response
    }
  }
export async function fetchCategories(){
  try{
    const response = await axios.get('/category')
    return response
  } catch (error: any){
    return error.response
  }
  }

  export async function postRating(wineId: string, rating: number){
    try{
      const response = await axios.post(`/wines/${wineId}`, {ratings: rating})
      console.log(response)
      return response
    } catch (error: any){
      return error.response
    }
  }