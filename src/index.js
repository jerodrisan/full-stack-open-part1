
import {createRoot} from 'react-dom/client';
import App from './App';
import App1 from './Ejerc16114';
import App2 from './Ejerc112';

//import ReactDOM from "react-dom"

//ReactDOM.createRoot(document.getElementById('root')).render(<App />)
//O bien: 
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App2 />);
 

