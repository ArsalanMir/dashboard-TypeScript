import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardTeacher from './pages/DashboardTeacher';
import ContentTeacher from './pages/ContentTeacher';
import Planning from './pages/Planning';
import CommandDesk from './pages/CommandDesk';
import TeachingStudio from './pages/TeachingStudio';
import Growth from './pages/Growth';

function App() {

  return (
   <>
   <Routes>
      <Route path="/" element={<DashboardTeacher />} />
      <Route path="/content" element={<ContentTeacher />} />
      <Route path="/planning" element={<Planning />} />
      <Route path="/command" element={<CommandDesk />} />
      <Route path="/studio" element={<TeachingStudio />} />
      <Route path="/growth" element={<Growth />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
   
   </>
  );
}

export default App;
