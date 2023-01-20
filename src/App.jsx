import { useClimaStore } from "./hooks/useClimaStore"
import { HomePage } from "./pages"
import { LoadingCity } from "./ui/LoadingCity"


export const App = () => {

  const { isLoading, isActive } = useClimaStore()

  return (
    <>    
      {
        isLoading
        ? <LoadingCity/>
        : <HomePage/>
      }
    </>
  )
}

