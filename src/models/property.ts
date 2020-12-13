interface Property {
  bathrooms: number;
  bedrooms: number;
  description: string;
  halfBathrooms: number;
  id: number;
  maintenance: number;
  metersBuilt: number;
  parkingLots: number;
  price: number;
  title: string;
  totalMeters: number;
  categoryId: number;
  locationId: number;
}

interface PropertyDTO{
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

export default Property;
