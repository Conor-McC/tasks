import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is my header!</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Conor McCloskey
            </p>
            <p> Hello World
            </p>
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third Item</li>
            </ul>
        </div>
    );
}

export default App;
