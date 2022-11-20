import './App.css';
import CardBack from './components/CardBack/CardBack';
import CardFront from './components/CardFront/CardFront';
import Form from './components/Form/Form';
import { useCard } from './hooks/useCard';

function App() {
    const [credentials, changeCredentials] = useCard()

    return (
        <div className="App">
            <div className='App__left-side'>
                <div className='card-container'>
                    <CardFront credentials={credentials} />
                    <CardBack credentials={credentials} />
                </div>
            </div>
            <div className='App__right-side'>
                <Form credentials={credentials} changeCredentials={changeCredentials}/>
            </div>
        </div>
    );
}

export default App;
