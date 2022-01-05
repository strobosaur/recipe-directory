import RecipeList from '../../components/RecipeList'
import { useFetch } from '../../hooks/useFetch'

// CSS STYLES
import './Home.css'

export default function Home() {
const { data, isPending, error } = useFetch("http://localhost:3000/recipes")

  return (
    <div className="home">
      {error && <p className="error">{ error }</p>}
      {isPending && <p className="loading">Loading recipes...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
