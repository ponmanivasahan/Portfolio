import {Routes,Route} from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail'
const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/project/:id' element={<ProjectDetail />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
