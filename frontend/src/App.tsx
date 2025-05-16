import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UploadForm from './components/UploadForm';
import Analyzer from './components/Analyzer';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UploadForm />} />
        <Route path="/analyzer" element={<Analyzer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;