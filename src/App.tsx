import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.tsx';
import Feature from './components/Features.tsx';
import MainLayout from './layouts/MainLayout.tsx';
import Dashbord from './pages/Dashbord.tsx'; 
import SidebarLayout from './layouts/SidebarLayout.tsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <MainLayout>
              <Hero />
              <Feature />
            </MainLayout>
          }
        />

        <Route path="/dashboard" element={
            <SidebarLayout>
              <Dashbord />
            </SidebarLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
