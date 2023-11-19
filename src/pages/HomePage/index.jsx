import './style.css';
import CreditCard from '../../components/CreditCard';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>Kreditní karta</h1>
      </header>
      <main>
        <CreditCard/>
      </main>
    </div>
  );
};
