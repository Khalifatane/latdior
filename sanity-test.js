const {createClient} = require("next-sanity");
const client = createClient({
  projectId: "o85ja9mx",
  dataset: "production",
  apiVersion: "2024-02-01",
  useCdn: true,
});
client.fetch("*[_type==\"product\"]{title, image{asset->{url}}}[0...10]")
  .then((r) => { console.log(JSON.stringify(r, null, 2)); })
  .catch((e) => { console.error(e); process.exit(1); });
