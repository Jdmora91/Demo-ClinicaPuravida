export default function WaveDivider({ direction = "down", color = "white", opacity = 1 }) {
  const rotate = direction === "up" ? "rotate-180" : "";
  return (
    <div className={`w-full overflow-hidden leading-[0] ${rotate}`}>
      <svg
        className="relative block w-full h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ opacity, background: "transparent" }}
      >
        <path
          d="M321.39,56.44C196.9,65.22,70.09,83.14,0,100V0H1200V27.35C1044.28,53.8,895.5,72.89,745.42,77.35,
          601.55,81.64,456.73,75.86,321.39,56.44Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
