export interface TProduct {
  id: number
  title: number
  category: string
  description: string
  image: string
  price: number
  rating: {
    rate: number
    count: number
  }
}