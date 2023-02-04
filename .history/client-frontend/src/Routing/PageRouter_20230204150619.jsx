import {Route, Routes} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
function PageRouter() {
    return (
        <div>
         <Route>
            <Routes path="/" element={<Dashboard />} />
            <Routes path="/" element={} />
         </Route>
        </div>
    )
}