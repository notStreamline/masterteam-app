export interface Location {
  id: number;
  name: string;
  extentId: number;
  extentName: string;
  parent?: Location;
}
export interface Address {
  id?: number;
  latitude: number;
  longitude: number;
  name: string;
  location: Location;
}
export interface Feature {
  featureId: number;
  label: string;
  unit: string;
  value: number;
  featureCategoryId: number;
  featureCategoryName: string;
}

export interface FeatureDTO {
  featureId: number;
  value: number;
}
interface PropertyType {
  groupName: string;
  id: number;
  name: string;
}

export interface Price {
  amount: number;
  currencyId: number;
  expenseTypeId: number;
}
export interface PropertyDTO {
  id: number;
  title: string;
  description: string;
  propertyTypeId: number;
  prices: Array<Price>;
  addressId: number;
  address: Address;
  features: Array<FeatureDTO>;
}

interface Property {
  id: number;
  title: string;
  description: string;
  propertyTypeId: PropertyType;
  prices: Array<Price>;
  address: {
    id: number;
    name: string;
    location: Location;
  };
  features: Array<Feature>;
}

export default Property;
