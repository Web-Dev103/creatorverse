import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router'
import { supabase } from './client'
import { Link } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importing pages
import AddCreator from './pages/AddCreator'
import ShowCreators from './pages/showCreators'

function App() {
  // declare useStates
  const [creators, setCreators] = useState([])

  // set up routes
  let creatorElements = useRoutes([
    {path:"/", element: <ShowCreators data={creators} />},
    {path: "/new", element: <AddCreator />}
  ]);

  useEffect
  useEffect (() => {
    fetchCreators();
    // console.log(creators)
  }, []);

  const fetchCreators = async () => {
    let { data: creator, error } = await supabase
    .from('creator')
    .select('*');
    setCreators(creator);
  }


  return (
    <>
      <Link to="/">
        <button>
          View Creators
        </button>
      </Link>
      <Link to='/new'>
        <button>
          Add New Creator
        </button>
      </Link>
      {creatorElements}
      
    </>
  )
}

export default App
