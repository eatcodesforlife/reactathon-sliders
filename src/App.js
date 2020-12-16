import React, { useState, useEffect } from 'react';
import { useFetch } from './utils/useFetch'
import Loading from './components/Loading'
import Reviews from './components/Reviews'
import { FaQuoteLeft } from 'react-icons/fa'

const url = 'https://my-react-projects-fake-api.herokuapp.com/users'

function App() {

  const { data, isLoading } = useFetch(url)
  const [ users, setUsers] = useState(data)
  
  useEffect(() =>{
    setUsers(data)
  }, [data])
  
  
  return (
    <section className='section'>
      <div className="title">
        <h2>
          <span><FaQuoteLeft className='icon'/></span>Reviews
        </h2>
      </div>
      { isLoading && <Loading /> }
      <Reviews users={users}/>
    </section>
  );
}

export default App;
