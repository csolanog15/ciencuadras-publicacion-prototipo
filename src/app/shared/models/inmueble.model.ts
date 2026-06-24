export interface CreatePropertyRequest {
  propertyTypeId: number;
  transactionTypeId: number;
  cityId: number;
  neighborhoodId: number;
  address: string;
  latitude: string;
  longitude: string;
  sellingPrice?: number;
  rentalPrice?: number;
  roomsNumber: number;
  bathroomsNumber: number;
  parkingSpaceNumber: number;
  builtArea: string;
  stratum: string;
  description: string;
  antiquity?: number;
  features: PropertyFeatures;
  interestNearbySites: InterestNearbySites;
}

export interface PropertyFeatures {
  hasElevator: boolean;
  hasPool: boolean;
  hasGym: boolean;
  hasBBQ: boolean;
  hasSocialRoom: boolean;
  hasPlayground: boolean;
  hasSecurity: boolean;
  hasParking: boolean;
  hasGarden: boolean;
  hasBalcony: boolean;
  hasCloset: boolean;
  hasLaundryRoom: boolean;
}

export interface InterestNearbySites {
  nearSchools: boolean;
  nearHospitals: boolean;
  nearParks: boolean;
  nearMalls: boolean;
  nearTransport: boolean;
  nearSupermarkets: boolean;
}

export interface ContactInfo {
  name: string;
  phone: string;
  email: string;
  whatsapp?: string;
}

export enum PropertyType {
  APARTAMENTO = 1,
  CASA = 2,
  OFICINA = 3,
  LOCAL = 4,
  LOTE = 5,
  FINCA = 6,
  BODEGA = 7
}

export enum TransactionType {
  VENTA = 1,
  ARRIENDO = 2,
  AMBOS = 3
}

export enum PublicationStep {
  DATOS_BASICOS = 1,
  DETALLES = 2,
  PUBLICAR = 3
}
