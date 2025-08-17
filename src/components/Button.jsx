import React, { useContext } from "react";
import { expressionContext } from "../App";

function Button({ name }) {
  const { expression, setExpression } = useContext(expressionContext);

  const handleClick = () => {
    if (expression === 'Invalid Operation') setExpression('');
    if (name === "DEL") {
      setExpression("");
    } else if (name === "=") {
      try {
        if (!expression || /[\+\-\*\/]$/.test(expression)) {
          setExpression("Invalid Operation");
        } else {
          setExpression(eval(expression).toString());
        }
      } catch (error) {
        setExpression("Invalid Operation");
      }
    } else {
      setExpression((prev) => prev + name);
    }
  };

  const isOperator = ['+', '-', '*', '/', '='].includes(name);
  const isAction = ['DEL'].includes(name);

  return (
    <button
      onClick={handleClick}
      className={`
        text-white text-2xl font-semibold rounded-full w-16 h-16 flex items-center justify-center
        transition-transform transform active:scale-95 shadow-md cursor-pointer
        ${isOperator ? 'bg-orange-500 hover:bg-orange-600' :
          isAction ? 'bg-red-500 hover:bg-red-600' :
          'bg-gray-700 hover:bg-gray-600'}
      `}
    >
      {name}
    </button>
  );
}

export default Button;
