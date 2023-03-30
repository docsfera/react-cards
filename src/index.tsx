import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import reportWebVitals from './reportWebVitals'
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"
import App from "./App"

const client = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <ApolloProvider client={client}>
                  <App/>
              </ApolloProvider>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
