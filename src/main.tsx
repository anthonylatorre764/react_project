import React from 'react'
import ReactDOM from 'react-dom/client'
import TrafficLight from './components/TrafficLight'
import Table from './components/Table'
import Form from './components/Form'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TrafficLight/>
    <Table/>
    <Form/>
  </React.StrictMode>,
)
