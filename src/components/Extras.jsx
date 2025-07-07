import React, { useEffect, useState } from 'react';

function Extras() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <button
      className="darkmode-toggle"
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label="Toggle dark/light mode"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}

export default Extras; 