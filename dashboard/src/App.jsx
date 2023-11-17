import './app.scss'
import Sidebar from "./components/sidebar/Sidebar"
import {Routes,Route} from 'react-router-dom'
import Reports from './pages/reports/Reports'
import ReportDetails from './pages/reportDetails/ReportDetails'

function App() {

  return (
    <>
      <div className="dashboard">
        <div className="dashboard_wrapper">
          <Sidebar/>
          <div className='dashboard_content'>
            <Routes>
              <Route path='/' element={<Reports />} />
              <Route path='/details/:id' element={<ReportDetails />} />
            </Routes>
          </div>
        </div> 
      </div>
    </>
  )
}

export default App
