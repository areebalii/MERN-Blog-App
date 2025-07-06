import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { RouteIndex, RouteSignIn, RouteSignUp } from './helpers/routeName'
import Index from './Pages/Index'
import Layout from './layout/Layout'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index />} />
        </Route>

        {/* Authentication Routes */}
        <Route path={RouteSignIn} element={<SignIn />} />
        <Route path={RouteSignUp} element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
