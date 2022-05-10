
import axios from "axios"

axios.defaults.baseURL = "http://localhost:3000"
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