import React from "react";

const BotaoCta = ({ texto = "Clique aqui", cor = "#007BFF", className = "", onClick }) => {
  const estilo = {
    backgroundColor: cor,
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  };

  return (
    <button style={estilo} className={className} onClick={onClick}>
      {texto}
    </button>
  );
};

export default BotaoCta;
