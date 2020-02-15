import React,{useState,useEffect} from 'react';
import './App.scss'
import './theme/light.scss';
import './theme/dark.scss';

function App() {
  const getLocalThemeFromStorage = () => {
    const themeSelected = JSON.parse(localStorage.getItem('dark'))
    return themeSelected || false
  }
  
  const [darkTheme, setDarkTheme] = useState(getLocalThemeFromStorage())


  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkTheme))
  }, [darkTheme])


  



  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <nav>
        <div className="button-container">
          <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}>Toggle Theme</button>
        </div>
      </nav>
      <div className="content">
      <h1>{darkTheme ? 'Dark Mode' : 'Light Mode'}</h1>
      </div>
    </div>
  );
}

export default App;
