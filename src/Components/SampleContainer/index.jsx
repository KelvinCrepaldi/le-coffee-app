import { SampleContent } from "../../Styles/ComponentsStyle/SampleContainer";
import { useState } from "react";
export const SampleContainer = ({ isOpen, setIsOpen }) => {
  const handleCloseWindow = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <SampleContent>
          <h1>Solicitar amostra?</h1>
          <span>
            Você está solicitando uma amostra gratuita com o compromisso de
            adicionar uma avaliação ao produto.
          </span>
          <div className="buttons">
            <button onClick={handleCloseWindow}>OK!</button>
            <button onClick={handleCloseWindow}>Cancelar</button>
          </div>
        </SampleContent>
      )}
    </>
  );
};
