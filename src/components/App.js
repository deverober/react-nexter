import '../scss/main.scss'
import Sidebar from './Sidebar';
import Header from './Header';
import Realtors from './Realtors';
import Features from './Features';
import Story from './Story';
import Homes from './Homes';
import Gallery from './Gallery';
import Footer from './Footer';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
