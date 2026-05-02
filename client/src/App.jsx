import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext.jsx';
import routes from './routes/routeConfig.jsx';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>

    </AuthProvider>
  );
}
export default App;