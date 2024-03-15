"use client";
import { useState, useEffect } from "react";
import OSFAPIResponse from "../../types/OSF/OSFAPIResponse";
import OSFStructFolder from "../../types/OSF/OSFStructFolder";
import OSFStructFiles from "../../types/OSF/OSFStructFiles";
import OSFStructFile from "../../types/OSF/OSFStructFile";
import React from "react";

const RetrieveData = (): JSX.Element => {
  const accessToken: string | undefined = process.env.NEXT_PUBLIC_API_KEY;
  const apiUrl: string = "https://api.osf.io/v2/nodes/xnr9f/files/osfstorage";

  const [data, setData] = useState<OSFStructFile[][]>([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = (): void => {
    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        const datasetUrls: string[] = result.data.map(
          (item: OSFAPIResponse) => {
            const currentLink = item.relationships.files.links.related.href;
            // const currentFileName = item.relationships.files.attributes.name;

            return currentLink;
          }
        );

        Promise.all(
          datasetUrls.map((url) =>
            fetch(url, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }).then((response) => response.json())
          )
        ).then((datasets: OSFStructFolder[]) => {
          const newData: OSFStructFile[][] = datasets.map(
            (dataset: OSFStructFolder) =>
              dataset.data.map((item: OSFStructFiles) => ({
                id: item.id,
                name: item.attributes.name,
                download: item.links.download,
              }))
          );
          setData(newData);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Function to trigger download
  const downloadResource = (url: string) => {
    // Create a hidden anchor element
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.click();
  };

  return (
    <div>
      {data.map((dataset: OSFStructFile[], index: number) => (
        <ul key={index}>
          {dataset.map((item: OSFStructFile, subIndex: number) => (
            <li key={subIndex}>
              {item.name}
              {/* Add a download button for each item */}
              <button onClick={() => downloadResource(`${item.download}`)}>
                Download
              </button>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default RetrieveData;
