import { loading } from "../assets";

const Generating = ({ className }) => {
  const spinStyle = {
    width: "20px",
    height: "20px",
    marginRight: "16px",
    animation: "reverse-spin 2s linear infinite",
  };

  const keyframesStyle = `
    @keyframes reverse-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
  `;

  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <style>{keyframesStyle}</style>
      <img style={spinStyle} src={loading} alt="Loading" />
      HA MANH DUNG, 20 years old, Hanoi
    </div>
  );
};

export default Generating;
