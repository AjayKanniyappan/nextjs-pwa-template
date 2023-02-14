declare namespace cat {
  type BottomNavigation = Array<{ id: number; label: string; href: string; icon: JSX.Element }>;
  type Breed = {
    adaptability: number;
    affection_level: number;
    alt_names: '';
    cfa_url: string;
    child_friendly: number;
    country_code: string;
    country_codes: string;
    description: string;
    dog_friendly: number;
    energy_level: number;
    experimental: number;
    grooming: number;
    hairless: number;
    health_issues: number;
    hypoallergenic: number;
    id: string;
    indoor: number;
    intelligence: number;
    lap: number;
    life_span: string;
    name: string;
    natural: number;
    origin: string;
    rare: number;
    reference_image_id: string;
    rex: number;
    shedding_level: number;
    short_legs: number;
    social_needs: number;
    stranger_friendly: number;
    suppressed_tail: number;
    temperament: string;
    vcahospitals_url: string;
    vetstreet_url: string;
    vocalisation: number;
    weight: Weight;
    wikipedia_url: string;
  };
  type Breeds = {
    adaptability: number;
    affection_level: number;
    alt_names: '';
    cfa_url: string;
    child_friendly: number;
    country_code: string;
    country_codes: string;
    description: string;
    dog_friendly: number;
    energy_level: number;
    experimental: number;
    grooming: number;
    hairless: number;
    health_issues: number;
    hypoallergenic: number;
    id: string;
    indoor: number;
    intelligence: number;
    lap: number;
    life_span: string;
    name: string;
    natural: number;
    origin: string;
    rare: number;
    reference_image_id: string;
    rex: number;
    shedding_level: number;
    short_legs: number;
    social_needs: number;
    stranger_friendly: number;
    suppressed_tail: number;
    temperament: string;
    vcahospitals_url: string;
    vetstreet_url: string;
    vocalisation: number;
    weight: Weight;
    wikipedia_url: string;
  }[];
  type Count = {
    count: string;
  };
  type Data = {
    Boom: string;
  };
  type Facts = {
    data: readonly string[];
  };
  type BreedImages = { id: string; url: string; width: number; height: number }[];
  type FactImage = { id: string; url: string; width: number; height: number };
  type Headers = Readonly<Record<string, string | boolean>>;
  type Images = { id: string; url: string; width: number; height: number }[];
  type Navbar = { id: number; label: string; href: string; external: boolean }[];
  type Url = string;
  type Weight = {
    imperial: string;
    metric: string;
  };

  interface CarouselProps {
    currentBreed: string;
  }

  interface DetailsProps {
    currentBreed: Breed;
  }

  interface PageProps {
    title: string;
    className?: string;
    children: React.ReactNode;
  }

  interface RatingsProps {
    count: number;
  }

  interface SectionProps {
    className?: string;
    children: React.ReactNode;
  }

  interface SelectProps {
    children: React.ReactNode;
    selectOnChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    selected: string;
    type: string;
  }

  interface Toaster {
    message: string;
    setToast: (toast: boolean) => void;
    toast: boolean;
    type: string;
  }

  interface Svg {
    className?: string;
  }
}
