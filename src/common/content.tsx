const facts: cat.Facts = {
  data: [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    'It was popularized in the 1960s with the release of Leeriest sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Lauds PageMaker including versions of Lorem Ipsum',
  ],
};

const factImage: cat.FactImage = {
  id: '1',
  url: 'https://media.tenor.com/KEzW7ALwfUAAAAAC/cat-what.gif',
  width: 200,
  height: 200,
};

const randomBreed: cat.Breeds = [
  {
    weight: {
      imperial: '7  -  10',
      metric: '3 - 5',
    },
    id: 'abys',
    name: 'Abyssinian',
    cfa_url: 'http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx',
    vetstreet_url: 'http://www.vetstreet.com/cats/abyssinian',
    vcahospitals_url: 'https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian',
    temperament: 'Active, Energetic, Independent, Intelligent, Gentle',
    origin: 'Egypt',
    country_codes: 'EG',
    country_code: 'EG',
    description:
      'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
    life_span: '14 - 15',
    indoor: 0,
    lap: 1,
    alt_names: '',
    adaptability: 5,
    affection_level: 5,
    child_friendly: 3,
    dog_friendly: 4,
    energy_level: 5,
    grooming: 1,
    health_issues: 2,
    intelligence: 5,
    shedding_level: 2,
    social_needs: 5,
    stranger_friendly: 5,
    vocalisation: 1,
    experimental: 0,
    hairless: 0,
    natural: 1,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_(cat)',
    hypoallergenic: 0,
    reference_image_id: '0XYvRd7oD',
  },
];

export { facts, factImage, randomBreed };
