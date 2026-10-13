/** Pure-CSS 3D rotating cube + glow, no libraries needed. */
export const FloatingCube = ({ size = 120 }: { size?: number }) => {
  const half = size / 2;
  const face =
    'absolute inset-0 backface-hidden border border-emerald-200/40 rounded-lg';
  const faceBg =
    'bg-gradient-to-br from-emerald-300/25 via-sky-400/15 to-emerald-300/5 backdrop-blur-sm';

  const faces = [
    { transform: `translateZ(${half}px)` },
    { transform: `rotateY(180deg) translateZ(${half}px)` },
    { transform: `rotateY(90deg) translateZ(${half}px)` },
    { transform: `rotateY(-90deg) translateZ(${half}px)` },
    { transform: `rotateX(90deg) translateZ(${half}px)` },
    { transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];

  return (
    <div className="perspective-1200">
      <div
        className="relative preserve-3d animate-spin-3d"
        style={{ width: size, height: size }}
      >
        {faces.map((f, i) => (
          <div
            key={i}
            className={`${face} ${faceBg}`}
            style={{ transform: f.transform }}
          />
        ))}
        {/* inner glow core */}
        <div
          className="absolute inset-0 preserve-3d flex items-center justify-center"
          style={{ transform: `translateZ(${half}px)` }}
        >
          <div className="size-10 rounded-full bg-emerald-300/70 blur-md" />
        </div>
      </div>
    </div>
  );
};
