


import useRequest from './hooks/useRequest';



function App() {
  
      const { data, loading, error } = useRequest();
      
      

  return (
   
    <div className="App">
      <header className="App-header">
        <h1>Data of people</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {console.log(data)}
        
        {data && data.map(person => 
        <ul>
        <h3>Person information of {person.name}</h3>
        <li key={person.id}>{person.name}</li>
        <li key={person.id}>{person.isActive ? 'YES' : 'NO'} </li>
        <li key={person.id}>{person.balance}</li>
        <li key={person.id}>{person.about}</li>
        </ul>
        
        )}
     
        
     </header>
    </div>
    
  );
}



export default App;
