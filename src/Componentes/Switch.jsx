import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Switch.css'; // Archivo CSS para estilos
import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"
function SwitchExample() {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [ThemeG, setThemeG] = useState(false);

  const handleSwitchChange = () => {
      setIsSwitchOn(!isSwitchOn);
      localStorage.setItem("theme", isSwitchOn)
  };

  return (
    <div className={isSwitchOn ? 'switch-on' : 'switch-off'}>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Check this switch"
          onChange={handleSwitchChange}
        />
      </Form>
    </div>
  );
}

export default SwitchExample;
