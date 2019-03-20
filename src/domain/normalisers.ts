export function normaliseDocuments(document) {
  return {
    type: 'image',
    img:
      document.mimetype.indexOf('image') > -1
        ? document.url
        : 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/solution_photos/000/045/270/datas/xlarge.png',
    title: document.name,
    url: document.url,
    cols: 3,
  };
};