import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PublicationStep, PropertyType, TransactionType, CreatePropertyRequest, PropertyFeatures, InterestNearbySites, ContactInfo } from '../shared/models/inmueble.model';

@Component({ selector: 'app-publicacion', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './publicacion.component.html', styleUrls: ['./publicacion.component.scss'] })
export class PublicacionComponent {
  readonly currentStep = signal<PublicationStep>(PublicationStep.DATOS_BASICOS);
  readonly totalSteps = 3;
  readonly propertyType = signal<PropertyType | null>(null);
  readonly transactionType = signal<TransactionType>(TransactionType.VENTA);
  readonly price = signal<number>(0);
  readonly address = signal<string>('');
  readonly area = signal<string>('');
  readonly rooms = signal<number>(2);
  readonly bathrooms = signal<number>(1);
  readonly parking = signal<number>(1);
  readonly description = signal<string>('');
  readonly stratum = signal<string>('');
  readonly features = signal<PropertyFeatures>({ hasElevator:false, hasPool:false, hasGym:false, hasBBQ:false, hasSocialRoom:false, hasPlayground:false, hasSecurity:false, hasParking:false, hasGarden:false, hasBalcony:false, hasCloset:false, hasLaundryRoom:false });
  readonly nearbySites = signal<InterestNearbySites>({ nearSchools:false, nearHospitals:false, nearParks:false, nearMalls:false, nearTransport:false, nearSupermarkets:false });
  readonly progressPercent = computed(() => Math.round((this.currentStep() / this.totalSteps) * 100));

  nextStep(): void { const c = this.currentStep(); if (c < 3) this.currentStep.set(c + 1); }
  prevStep(): void { const c = this.currentStep(); if (c > 1) this.currentStep.set(c - 1); }
  selectPropertyType(type: PropertyType): void { this.propertyType.set(type); }
  increment(field: 'rooms'|'bathrooms'|'parking'): void { const v = this[field](); if (v < 10) this[field].set(v + 1); }
  decrement(field: 'rooms'|'bathrooms'|'parking'): void { const v = this[field](); if (v > 0) this[field].set(v - 1); }
  generateAIDescription(): void { this.description.set(`Hermoso inmueble de ${this.area()}m2 con ${this.rooms()} hab y ${this.bathrooms()} banos. Zona privilegiada con acceso a transporte.`); }
  toggleFeature(key: keyof PropertyFeatures): void { const c = this.features(); this.features.set({...c, [key]: !c[key]}); }
  toggleNearbySite(key: keyof InterestNearbySites): void { const c = this.nearbySites(); this.nearbySites.set({...c, [key]: !c[key]}); }
  buildRequest(): CreatePropertyRequest { return { propertyTypeId: this.propertyType() ?? 1, transactionTypeId: this.transactionType(), cityId: 1, neighborhoodId: 1, address: this.address(), latitude: '4.6097', longitude: '-74.0817', roomsNumber: this.rooms(), bathroomsNumber: this.bathrooms(), parkingSpaceNumber: this.parking(), builtArea: this.area(), stratum: this.stratum(), description: this.description(), features: this.features(), interestNearbySites: this.nearbySites() }; }
}
