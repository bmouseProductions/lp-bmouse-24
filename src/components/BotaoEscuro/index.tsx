interface BtnProps {
  text: string;
  tipo: "tipo1" | "tipo2";
}

export const BotaoEscuro = ({ text, tipo }: BtnProps) => {
  const getBackgroundColor = () => {
    if (tipo === "tipo1") {
      return "bg-[#760BFF] text-white";
    } else if (tipo === "tipo2") {
      return "bg-white text-black"; // Note que você deve fornecer uma cor válida aqui
    }
  };

  return (
    <button
      className={`h-[80px] w-full text-xl rounded-[57px] !shadow-2xl shadow-white ${getBackgroundColor()}`}
    >
      {text}
    </button>
  );
};
