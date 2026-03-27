export function Blurs() {
  const blurs = [
    { top: "14%", left: "65%", w: 250, h: 250, blur: "blur-xl", opacity: "opacity-15" },
    { top: "45%", left: "64%", w: 175, h: 175, blur: "blur-xl", opacity: "opacity-40" },
    { top: "15%", left: "15%", w: 200, h: 200, blur: "blur-2xl", opacity: "opacity-20" },
    { top: "25%", right: "64%", w: 125, h: 125, blur: "blur-md", opacity: "opacity-30" },
    { top: "42%", right: "66%", w: 250, h: 250, blur: "blur-xl", opacity: "opacity-25" },
  ];

  return blurs.map((b, i) => (
    <div
      key={i}
      className={`absolute bg-accent rounded-full transition-colors duration-300 ${b.blur} ${b.opacity}`}
      style={{
        top: b.top,
        left: b.left,
        right: b.right,
        width: `${b.w}px`,
        height: `${b.h}px`,
      }}
    />
  ));
}