import {Route, Routes} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Homepage from '../Pages/Homepage'
function PageRouter() {
    return (
       
         <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Homepage />} />
         </Routes>
       
    )
}

export default PageRouter