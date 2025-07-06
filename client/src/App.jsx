import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { RouteIndex } from './helpers/routeName'
import Index from './Pages/Index'
import Layout from './layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
