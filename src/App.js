import React, { useState, useEffect } from 'react';

function App() {
  const [techs, setTech] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...techs, newTech]);
    setNewTech('');
  }

  function handleChange(event) {
    setNewTech(event.target.value);
  }

  useEffect(() => {
    const storedTechs = JSON.parse(localStorage.getItem('techs'));

    if (storedTechs) setTech(storedTechs);
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input type="text" value={newTech} onChange={handleChange} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
