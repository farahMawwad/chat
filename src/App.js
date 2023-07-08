import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState('k');
  const [keyValue, setKeyValue] = useState('');

  const fetchData = async (event) => {
    event.preventDefault();
    try {
    
      const response = await fetch(`http://127.0.0.1:8050/?key=${encodeURIComponent(keyValue)}`);
      const data = await response.text();
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  console.log(response)
  const handleInputChange = (event) => {
    setKeyValue(event.target.value);
  };

  return (
    <div>
      <div id="content">
        <p id="client">{response}</p>
        <form id="form" method="GET">
          <input type="text" id="input" name="key" onChange={handleInputChange} />
          <input type="submit" id="submit" onClick={fetchData} />
        </form>
      </div>
    </div>
  );
}

export default App;