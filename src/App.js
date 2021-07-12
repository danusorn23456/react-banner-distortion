import './App.css';

import HeaderCarousel from './components/HeaderCarousel';
import MainAppBar from './components/MainAppBar';
import Category from './components/Category';
import RecommendedProducts from './components/RecommendedProducts';
import WaterEffect from './components/WaterEffect';

function App() {
  return (
    <div className="App">
      <MainAppBar/>
      <HeaderCarousel/>
      <Category/>
      <RecommendedProducts/>
    </div>
  );
}

export default App;
