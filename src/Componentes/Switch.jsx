import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Switch.css'; // Archivo CSS para estilos
import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"
function SwitchExample() {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const {ThemeG, setThemeG} = useContext(ThemeContext)

    const handleSwitchChange = () => {
        console.log("11111", ThemeG)
        console.log("222222",localStorage.getItem("Theme"))
      setIsSwitchOn(!isSwitchOn);
      localStorage.setItem("Theme", !isSwitchOn)
      setThemeG(!isSwitchOn)
  };

  return (
    <div className={ThemeG ? 'switch-on' : 'switch-off'}>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Cambiar el color"
          onChange={handleSwitchChange}
          checked={ThemeG}
        />
      </Form>
    </div>
  );
}

export default SwitchExample;
