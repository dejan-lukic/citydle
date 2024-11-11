import React, { useEffect, useState } from "react";
import Image from 'next/image';
import styles from "./worldle-country.module.css";

interface WorldleCountryProps {
  countryCode: string;
}

const WorldleCountry: React.FC<WorldleCountryProps> = (
  { countryCode }
) => {
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/images/countries/${countryCode}.svg`)
      .then(response => response.text())
      .then(svg => {
        svg = svg.replace(/fill="#[0-9a-f]+"/g, `fill="#fff"`);
        setSvg(svg);
      });
  }, [countryCode]);

  if (!svg) {
    return null;
  }

  return (
    <div className={styles.imageContainer}>
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
        alt="Outline of a country"
        fill
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}

export default WorldleCountry;
