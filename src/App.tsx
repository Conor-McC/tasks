import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Me from './Me.jpg';

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is my header!</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Conor McCloskey. 
            </p>
            <p>
                Hello World
            </p>
            <p> Hello World
            </p>
            <img src={Me} alt="Pic of Me" />
            <div style={ {background: 'red'}}>

                <ul>
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third Item</li>
                </ul>
            </div>
            <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
        </div>
    );
}

export default App;
