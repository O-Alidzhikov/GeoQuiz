import React from 'react';
import "./errorRibbon.css"

export default function ErrorRibbon({ error }) {
  if (!error) return null;

  return (
    <div className="error-ribbon">
      {error}
    </div>
  );
}
