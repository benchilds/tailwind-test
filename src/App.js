import logo from './logo.svg';
import './App.css';
// import NavBar from './components/tw-navbar-simple-dark';
import Banner from './components/tw-header-banner';
import Hero from './components/tw-hero-angled-img-right';
import CTA from './components/tw-cta-simple-justified';
import RecentSavingsTable from './components/tw-table-recent-savings';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Hero/>
      <CTA/>
      <div class="container mx-auto mt-8 mb-8">
        <RecentSavingsTable/>
      </div>
    </div>
  );
}

export default App;
