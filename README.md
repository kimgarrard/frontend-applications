# Muziekinstrumenten door de jaren heen

Ik ga een webapp maken over muziekinstrumenten, dit is een website bedoeld voor echte muziekliefhebbers die geïnteresseerd zijn in de muziekgeschiedenis. Je kunt de instrumenten zien per cultuurgebied en gesorteerd op tijd, zo kun je als het ware ‘door de tijd heen klikken’. Naast de instrumenten bekijken en filteren kun je ook nog horen wat voor geluid het instrument maakt. 

*Screenshot Webapp*

## Installatie Vue

Met deze opdracht heb ik gebruik gemaakt van het framework Vue, de installatie hiervan heb ik gedaan aan de hand van [deze link](https://medium.com/js-dojo/getting-started-with-vuejs-for-web-and-native-285dc64f0f0d). 

Wanneer je node hebt, kun je Vue-Cli downloaden met 

```bash
npm install -g @vue/cli
```

Na de installatie herstart je de terminal en check je of vue-cli werkt met

```bash
vue –version
```

### Project aanmaken

```bash
vue create hello-world

cd hello-world

npm run serve

```

## SPARQL

Naast Vue heb ik ook gebruik gemaakt van SPARQL, dit is mijn code

```bash
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?cho ?title ?typeLabel ?img ?year ?placeName WHERE {

  <https://hdl.handle.net/20.500.11840/termmaster1248> skos:narrower* ?type .
  ?type skos:prefLabel ?typeLabel .
  ?place skos:prefLabel ?placeName .

  ?cho edm:object ?type .
  ?cho dc:title ?title .
  ?cho edm:isShownBy ?img .
  ?cho dct:created ?year .
  ?cho dct:spatial ?place .
  
  FILTER langMatches(lang(?title), "ned")
  FILTER(xsd:integer(?year) >= 0 && xsd:integer(?year) <= 2000)
}
```

