import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from 'lucide-react'
import { RouteIndex } from './helpers/routeName'
import Index from './Pages/Index'

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
