type OSFStructFolder = {
    data: {
      id: string;
      attributes: {
        name: string;
      };
      links: {
        download: string
      }
    }[];
}

export default OSFStructFolder;