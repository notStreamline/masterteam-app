export interface PropertyDTO{
  bathrooms: number;
  bedrooms: number;
  category: {
    groupName: string;
    id: number;
    name: string;
  };
  description: string;
  halfBathrooms: number;
  id: number;
  location: {
    childLocations: [
      null
    ];
    id: number;
    name: string;
    parentLocationId: number;
    parentLocationName: string;
    parentType: {
      id: number;
      name: string;
    };
    type: {
      id: number;
      name: string;
    };
  };
  maintenance: number;
  metersBuilt: number;
  parkingLots: number;
  price: number;
  title: string;
  totalMeters: number;
}

export interface Location {
  id: number;
  name: string;
  extentId: number;
  extentName: string;
  parent?: Location;
}

interface PropertyType {
  groupName: string;
  id: number;
  name: string;
}

export default interface Property {
  id: number;
  title: string;
  description: string;
  propertyType: PropertyType;
  price: number;
  maintenance: number;
  address: {
    id: number;
    name: string;
    location: Location;
  };
  features: Array<string>;
}
