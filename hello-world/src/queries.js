export default {
  afrikaQuery: `
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX edm: <http://www.europeana.eu/schemas/edm/>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>

    SELECT ?cho ?title ?typeLabel ?img ?year ?placeName
    WHERE {
      <https://hdl.handle.net/20.500.11840/termmaster1248> skos:narrower* ?type .
      <https://hdl.handle.net/20.500.11840/termmaster3> skos:narrower* ?place .

      ?type skos:prefLabel ?typeLabel .
      ?cho edm:object ?type .
      ?cho dc:title ?title .
      ?cho edm:isShownBy ?img .
      OPTIONAL {?cho dct:created ?year } .
      ?cho dct:spatial ?place .
      ?place skos:prefLabel ?placeName .

      FILTER langMatches(lang(?title), "ned")
    }
  `,
  azieQuery: `
  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX dc: <http://purl.org/dc/elements/1.1/>
  PREFIX dct: <http://purl.org/dc/terms/>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  PREFIX edm: <http://www.europeana.eu/schemas/edm/>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>

  SELECT ?cho ?title ?typeLabel ?img ?year ?placeName
  WHERE {
    <https://hdl.handle.net/20.500.11840/termmaster1248> skos:narrower* ?type .
    <https://hdl.handle.net/20.500.11840/termmaster8401> skos:narrower* ?place .

    ?type skos:prefLabel ?typeLabel .
    ?cho edm:object ?type .
    ?cho dc:title ?title .
    ?cho edm:isShownBy ?img .
    OPTIONAL {?cho dct:created ?year } .
    ?cho dct:spatial ?place .
    ?place skos:prefLabel ?placeName .

    FILTER langMatches(lang(?title), "ned")
  }
  `,
  oceanieQuery: `
  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX dc: <http://purl.org/dc/elements/1.1/>
  PREFIX dct: <http://purl.org/dc/terms/>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  PREFIX edm: <http://www.europeana.eu/schemas/edm/>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>

  SELECT ?cho ?title ?typeLabel ?img ?year ?placeName
  WHERE {
    <https://hdl.handle.net/20.500.11840/termmaster1248> skos:narrower* ?type .
    <https://hdl.handle.net/20.500.11840/termmaster6813> skos:narrower* ?place .

    ?type skos:prefLabel ?typeLabel .
    ?cho edm:object ?type .
    ?cho dc:title ?title .
    ?cho edm:isShownBy ?img .
    OPTIONAL {?cho dct:created ?year } .
    ?cho dct:spatial ?place .
    ?place skos:prefLabel ?placeName .

    FILTER langMatches(lang(?title), "ned")
  }
  `,
  amerikaQuery: `
  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX dc: <http://purl.org/dc/elements/1.1/>
  PREFIX dct: <http://purl.org/dc/terms/>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  PREFIX edm: <http://www.europeana.eu/schemas/edm/>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>

  SELECT ?cho ?title ?typeLabel ?img ?year ?placeName
  WHERE {
    <https://hdl.handle.net/20.500.11840/termmaster1248> skos:narrower* ?type .
    <https://hdl.handle.net/20.500.11840/termmaster6782> skos:narrower* ?place .

    ?type skos:prefLabel ?typeLabel .
    ?cho edm:object ?type .
    ?cho dc:title ?title .
    ?cho edm:isShownBy ?img .
    OPTIONAL {?cho dct:created ?year } .
    ?cho dct:spatial ?place .
    ?place skos:prefLabel ?placeName .

    FILTER langMatches(lang(?title), "ned")
  }
  `,
}
