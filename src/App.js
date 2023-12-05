import './App.css';
import GetWatchlist from './pages/GetWatchlist';
import SortedWatchlist from './pages/SortedWatchlist';
import UpdateWatchlist from './pages/UpdateWatchlist';
import PostForm from './pages/PostWatchlist';
import DeleteEntry from './pages/DeleteEntry';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetWatchlist />} />
          <Route path="/sortedWatchlist" element={<SortedWatchlist />} />
          <Route path="/addEntry" element={<PostForm />} />
          <Route path="/updateEntry" element={<UpdateWatchlist />} />
          <Route path="/deleteEntry" element={<DeleteEntry />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
