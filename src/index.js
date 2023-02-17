import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.css'
import './styles/global.css'
import App from './App'
import { ApolloProvider } from '@apollo/client'
import { client } from './api/ApolloClient'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
