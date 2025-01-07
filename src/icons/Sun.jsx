export const Sun = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={176}
      height={176}
      fill="none"
    >
      <circle cx={88} cy={88} r={88} fill="#FF8E27" />
      <circle
        cx={88}
        cy={88}
        r={88}
        fill="url(#a)"
        fillOpacity={0.35}
        style={{
          mixBlendMode: "overlay",
        }}
      />
      <defs>
        <radialGradient
          id="a"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 88 -88 0 88 88)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
};
