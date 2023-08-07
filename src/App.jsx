import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router'
import { supabase } from './client'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Container, Row } from 'react-bootstrap'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cozyDesk from "./assets/cozydesk.jpg"

// importing pages
import AddCreator from './pages/AddCreator'
import ShowCreators from './pages/showCreators'
import ViewCreator from './pages/viewCreator'
import EditCreator from './pages/EditCreator'


function App() {
  // declare useStates
  const [creators, setCreators] = useState([])

  // set up routes
  let creatorElements = useRoutes([
    {path:"/", element: <ShowCreators data={creators} />},
    {path: "/new", element: <AddCreator />},
    {path: "viewCreator/:id/*", element: <ViewCreator />},
    {path: "editCreator/:id", element: <EditCreator />}
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

  const bannerButtons = {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderColor: '#ffecb3',
    color: '#ffffff',
    fontWeight: 'bold',
    textShadow: '0px 2px 10px rgba(0, 0, 0, 0.8)',
  }

  return (
    <Container className='image-cont'>
      <img className='banner' src={cozyDesk}/>
      <div className="button-container">
          <Link to="/" className='overlay-button '>
            <Button style={bannerButtons}>
              View Creators
            </Button>
          </Link>

          <Link to='/new' className='overlay-button'>
            <Button style={bannerButtons}>
              Add Creator
            </Button>
          </Link>
      </div>

      <Row>
        <Col xs={12} lg={12} className="d-flex justify-content-center">
          {creatorElements}
        </Col>
      </Row>
    </Container>
  )
}

export default App
