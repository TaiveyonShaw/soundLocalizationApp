"use client";
import React, { useState, useEffect } from "react";

interface Data {
  [key: string]: any;
}

const LoadData: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        const jsonData: Data = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>{`${key}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LoadData;
