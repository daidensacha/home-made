import * as contentful from 'contentful';

export const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
// export const client = contentful.createClient({
//   space: 'z4ggx0aeo25u',
//   accessToken: 'pCXBDU3g5cluUGpuXDLRXdsLsOFeBScnE_DcxOqAanI',
// });
