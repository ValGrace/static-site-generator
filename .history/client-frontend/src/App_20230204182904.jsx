import AuthProvider from './Context/UserContext'
import './App.css'
import PageRouter from './Routing/PageRouter'

function App() {


  return (
    <div className="App">
     <AuthProvider>
      <PageRouter />
      </AuthProvider>
    </div>
  )
}

export default App
