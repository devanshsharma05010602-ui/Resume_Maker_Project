import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ResumeProvider, useResume } from './context/ResumeContext';
import Layout from './components/Layout';
import ResumeForm from './components/Editor/ResumeForm';
import ResumePreview from './components/Preview/ResumePreview';
import Auth from './components/Auth/Auth';
import LandingPage from './components/LandingPage';
import ATSScorePanel from './components/Editor/ATSScorePanel';

const ProtectedRoute = ({ children }) => {
  const { token } = useResume();
  if (!token) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};

const Editor = () => (
  <Layout>
    {/* Editor Panel - Left */}
    <div className="w-full md:w-[40%] h-full overflow-y-auto p-6 border-r border-gray-300 bg-white">
      <ResumeForm />
    </div>

    {/* Preview Panel - Center */}
    <div className="w-full md:w-[35%] h-full overflow-y-auto p-4 bg-gray-50 flex justify-center items-start border-r border-gray-300">
      <ResumePreview />
    </div>

    {/* ATS Score Panel - Right */}
    <div className="w-full md:w-[25%] h-full overflow-y-auto p-6 bg-gray-50 border-l border-gray-200">
      <ATSScorePanel />
    </div>
  </Layout>
);

function App() {
  return (
    <Router>
      <ResumeProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <Editor />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ResumeProvider>
    </Router>
  );
}

export default App;
