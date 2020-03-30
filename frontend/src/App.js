import React from 'react';

import './global.css';

import Routes from './routes';

function App(){
    return (
        <Routes />
    );
}
export default App;

/*toda vez que for preciso mudar o valor do contador(counter), eu vou chamar a funcção setCounter
    const [counter, setCounter] = useState(0);
    //Quando usamos o metodo useState, ele retorna como uma array, onde 1°pos é o valor e 2° é a func de att... ex: Array[valor, funcDeAtt]
    function increment(){
        setCounter(counter + 1);
    }*/
   
        /*<div>
                 toda vez que for utilizar uma var dentro do html, use chaves {} 
            <Header>Contador: {counter} </Header>
            <button onClick={increment}>Incrementar</button>
        </div>*/