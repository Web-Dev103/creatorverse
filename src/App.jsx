import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importing pages
import AddCreator from './pages/AddCreator'
import ShowCreators from './pages/showCreators'

function App() {
  // declare useStates
  const [creators, setCreators] = useState(0)

  // set up routes
  let creatorElements = useRoutes([
    {path:"/", element: <ShowCreators data={creators} />},
    {path: "new", element: <AddCreator />}
  ]);

  // useEffect
  useEffect (() => {
    fetchCreators();
  }, []);

  const fetchCreators = async () => {
    let { data: creator, error } = await supabase
    .from('creator')
    .select('*')

    setCreators(creator);
  }

  return (
    <>
      
    </>
  )
}

export default App
