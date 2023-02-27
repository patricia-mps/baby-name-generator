import { Provider } from 'react-redux';
import { store } from './store';
import Router from './router';
import Footer from './components/footer';
import Header from './components/header';
import './index.scss';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main className="container">
        <Router />
      </main>
      <Footer />
    </Provider>
  );
}

export default App;
