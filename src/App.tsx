import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Contact } from './components/Contact';
import './styles/globals.css';

function App() {
  return (
    <Layout>
      <Hero />
      <Contact />
    </Layout>
  );
}

export default App;
