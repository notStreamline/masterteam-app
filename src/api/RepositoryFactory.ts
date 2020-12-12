import PropertiesRepository from './propertiesRepository';

interface Repository {
  properties: object;
}

const repositories: Repository = {
  properties: PropertiesRepository,
  // other repositories
};

const RepositoryFactory = {
  get: (name: keyof Repository) => repositories[name],
};

export default RepositoryFactory;
