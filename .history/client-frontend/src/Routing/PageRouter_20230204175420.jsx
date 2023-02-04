import {Route, Routes} from 'react-router-dom'
import AuthProvider from '../Context/UserContext'
import Dashboard from '../Pages/Dashboard'
import Homepage from '../Pages/Homepage'

function PageRouter() {
    return (
        <AuthProvider>
         <Routes>
           
            <Route path="/" element={<Dashboard />} />
            
            <Route path="/home" element={<Homepage />} />
         </Routes>
         </AuthProvider>
      
    )
}

export default PageRouter