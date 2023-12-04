// import logo from './logo.svg';
import './App.css';
import GetWatchlist from './crud Components/GetWatchlist';
import UpdateWatchlist from './crud Components/UpdateWatchlist';
import PostForm from './crud Components/PostWatchlist';
import DeleteEntry from './crud Components/DeleteEntry';
import Header from './pageStructure/Header';
import Footer from './pageStructure/Footer';
// import './App.css';
// import './Styles.css';


function App() {
  return (
    <>
      <Header />
      <GetWatchlist />
      <PostForm />
      <UpdateWatchlist />
      <DeleteEntry />
      <Footer />
    </>
  );

}

export default App;
