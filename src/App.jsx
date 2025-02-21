import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Promotion from './components/Promotion/Promotion';
import Restaurants from './components/Restaurants/Restaurants';
import Dishes from './components/Dishes/Dishes';
import Purchases from './components/Purchases/Purchases';
import Feedback from './components/Feedback/Feedback';

function App() {
  return (
    <div className="app">
      <Header />
      <Features />
      <Promotion />
      <Restaurants />
      <Dishes />
      <Purchases />
      <Feedback />
    </div>
  )
}

export default App
