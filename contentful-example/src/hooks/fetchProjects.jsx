import {useState, useEffect } from 'react';

import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try{
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });

      setProjects(projects);
      setLoading(false);
    } catch(err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    setLoading(false);
  }, []);

  return { loading, projects };
};

client.getEntries({content_type: 'projects'}).then((response) => console.log(response));