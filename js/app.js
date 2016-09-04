var contentful = require('contentful');

var contentfulClient = contentful.createClient({
  space: '2ruup0nq2lop',
  accessToken: '08b7657027d7112687a4107e44cdb9b552ff2ff834504ac91f943b41f1ed105f'
})

contentfulClient.getEntries({
  include: 1,
  content_type: 'project'
}).then(function(response) {
  response.items.forEach(function(project) {
    console.log('Project:', project.fields.title);
  });
});
