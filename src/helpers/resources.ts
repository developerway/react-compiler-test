type Country = {
  name: string;
  cities: string[];
};

const countries: Country[] = [
  {
    name: "USA",
    cities: ["New York", "Los Angeles"],
  },
  {
    name: "Canada",
    cities: ["Toronto", "Vancouver"],
  },
  {
    name: "Australia",
    cities: ["Sydney", "Melbourne"],
  },
  {
    name: "Germany",
    cities: ["Berlin", "Munich"],
  },
  {
    name: "India",
    cities: ["Delhi", "Mumbai"],
  },
];

export const getCountries = async (): Promise<Country[]> => {
  // just a dummy return to imitate async fetch request
  return countries;
};

export const deleteCountry = async (name: string): Promise<Country[]> => {
  // just a dummy return to imitate async fetch request
  return countries;
};

export const addCountry = async (name: string): Promise<Country> => {
  // just a dummy return to imitate async fetch request
  return { name: name, cities: [] };
};
