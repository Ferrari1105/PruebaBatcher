import React, { useState, useEffect } from 'react';

const GoalInput = () => {
  const [enteredGoal, setEnteredGoal] = useState(''); 
  const [goalsList, setGoalsList] = useState([]); 

  const goalInputChangeHandler = (event) => {
    setEnteredGoal(event.target.value);
  };

  const addGoalHandler = () => {
    if (enteredGoal !== '') { 
      setGoalsList((prevGoals) => [...prevGoals, enteredGoal]); 
      setEnteredGoal(''); 
    }
  };

  useEffect(() => {

    document.title = goalsList.length === 0 ? 'Rocco Prueba' : `${goalsList.length} Meta(s)`;
  }, [goalsList]);

  return (
    <div>
      <input
        type="text"
        value={enteredGoal}
        onChange={goalInputChangeHandler}
        placeholder="Escribe tu meta"
      />
      <button onClick={addGoalHandler}>Agregar Meta</button>
      <ul>
        {goalsList.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalInput;
