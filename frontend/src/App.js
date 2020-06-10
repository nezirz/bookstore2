import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });

    // const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
    
  const apiUrl = `http://localhost:8000`;
   try{

    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        console.log(repos);
        setAppState({ loading: false, repos: repos });
      });
    }catch(err){
      console.log(err);
    }
  }, [setAppState]);


  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Shedrack Akintayo
        </div>
      </footer>
    </div>
  );
}

export default App;