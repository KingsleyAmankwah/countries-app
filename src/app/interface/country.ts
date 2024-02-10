export interface Country {
  name: {
    common: string;
  };
  capital: string;
  population: number;
  region: string;
  subregion: string;
  tld: string[];
  languages: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  borders: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
