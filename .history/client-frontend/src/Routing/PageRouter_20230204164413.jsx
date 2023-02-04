import {Route, Routes} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Homepage from '../Pages/Homepage'
function PageRouter() {
    return (
        <div>
         <Route>
            <Routes path="/" element={<Dashboard />} />
            <Routes path="/home" element={<Homepage />} />
         </Route>
        </div>
    )
}

export default PageRouter