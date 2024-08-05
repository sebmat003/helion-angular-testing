export interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    official: string;
  };
  capital: string[];
  region: string;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  population: number;
}
