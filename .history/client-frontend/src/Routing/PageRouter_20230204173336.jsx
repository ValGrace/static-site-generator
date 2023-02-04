import {Route, Routes} from 'react-router-dom'
import AuthProvider from '../Context/UserContext'
import Dashboard from '../Pages/Dashboard'
import Homepage from '../Pages/Homepage'

function PageRouter() {
    return (
       
         <Routes>
            <AuthProvider>
            <Route path="/" element={<Dashboard />} />
            </AuthProvider>
            <Route path="/home" element={<Homepage />} />
         </Routes>
      
    )
}

export default PageRouter