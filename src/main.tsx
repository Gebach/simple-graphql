import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
