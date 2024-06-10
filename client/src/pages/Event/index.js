import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_EVENT } from './queries'
import Loading from '../../components/Loading'

function Event() {

  const {id} = useParams()

  const {loading,error,data} = useQuery(GET_EVENT,{
    variables:{
      id
    }
  })

  
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{data.event.title}</h1>
      <h3><b>{data.event.date}</b></h3>
      <p>{data.event.desc}</p>
      <br/>

    </div>

  )
}

export default Event