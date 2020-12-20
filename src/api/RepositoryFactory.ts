import PropertiesRepository from './propertiesRepository';

interface Properties {
  get: Function;
  getProperty: Function;
}
interface Repository {
  properties: Properties;
}

const repositories: Repository = {
  properties: PropertiesRepository,
  // other repositories
};

const RepositoryFactory = {
  get: (name: keyof Repository) => repositories[name],
};

export default RepositoryFactory;
