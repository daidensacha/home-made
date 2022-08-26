import { useState, useEffect } from 'react';

import { client } from './Client.js';

const AuthorData = () => {
  const [authors, setAuthors] = useState();

  useEffect(() => {
    client
      .getEntries()
      .then(entries => {
        // log all items that have a title
        const postAuthors = entries.items.filter(entry => entry.fields.authorName);

        const cleanedData = postAuthors?.map(author => {
          const { fields } = author;
          const { authorName } = fields;
          const  authorBio  = fields.authorBio.content[0].content[0].value;

          const updatedData = {
            authorName,
            authorBio,
          };
          return updatedData;
        })
        setAuthors(cleanedData);
      })
      .catch(err => console.log(err));
  }, []);
  console.log('authors', authors);
}

export default AuthorData;