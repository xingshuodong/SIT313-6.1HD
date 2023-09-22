import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

// Instead of ReactDOM.render, use createRoot from "react-dom/client"
ReactDOM.createRoot(root).render(<App />);
