import Layout from './layout/layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AuthCalllbackPage from './pages/AuthCalllbackPage'

const AppRoutes = () => {
  return (<>
    <Routes>
        <Route path='/' element={
          <Layout>
            <HomePage/>
            </Layout>}
            />
        <Route path='/auth-callback' element={<AuthCalllbackPage/>}/>    
        <Route path='/user-profile' element={<span>Profile Route</span>}/>
        <Route path='*' element={<Navigate to="/" />}/>
    </Routes>
    </>)
}

export default AppRoutes