type OSFAPIResponse = {
    id: string;
    relationships: {
        files: {
            attributes: {
                name: string;
            }
            links: {
                related: {
                    href: string;
                };
            };
        };
    };
}

export default OSFAPIResponse;