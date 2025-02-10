import React from "react";

interface CardChipProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  url: string;
  pokemonId: number;
}

export default function CardChip({ url, pokemonId, ...props }: CardChipProps) {
  const outerPath = `M 0,0 H 180 V 200 H 0 V 0 Z`;
  const innerPath = `
    M 20,10 H 40
    L 50,25 L 130,25 L 140,10
    H 160 Q 170,10 170,20
    V 180 Q 170,190 160,190
    H 135
    L 125,180 L 55,180 L 45,190
    H 20 Q 10,190 10,180
    V 20 Q 10,10 20,10
    Z
  `;

  const id = `pokemon-${pokemonId}`;

  return (
    <svg
      viewBox={`0 0 180 200`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d={outerPath} fill="#131316" />
      <defs>
        <pattern
          id="complex"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <rect width="10" height="10" fill="#888" fillOpacity="0.1" />
          <circle cx="5" cy="5" r="2" fill="#888" fillOpacity="0.2" />
          <path d="M0,5 L20,5 M5,0 L5,20" stroke="#888" strokeWidth="0.3" />
        </pattern>
      </defs>
      <path d={innerPath} fill="url(#complex)" stroke="#666" strokeWidth="2" />
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width="180" height="200">
          <image href={url} width="160" height="180" x="10" y="10" />
        </pattern>
      </defs>
      <path d={innerPath} fill={`url(#${id})`} />
    </svg>
  );
}
