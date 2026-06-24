import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreatePropertyRequest, ContactInfo } from '../models/inmueble.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PublicacionService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/v1/properties`;

  createProperty(request: CreatePropertyRequest): Observable<{ propertyId: number }> {
    return this.http.post<{ propertyId: number }>(this.baseUrl, request);
  }

  uploadMedia(propertyId: number, files: File[], mainPhotoIndex: number): Observable<{ mediaUrls: string[] }> {
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file, file.name));
    formData.append('mainPhotoIndex', mainPhotoIndex.toString());
    return this.http.post<{ mediaUrls: string[] }>(`${this.baseUrl}/${propertyId}/media`, formData);
  }

  saveContactsAndPublish(propertyId: number, contacts: ContactInfo): Observable<{ publicationUrl: string }> {
    return this.http.post<{ publicationUrl: string }>(`${this.baseUrl}/${propertyId}/publish`, { propertyId, contacts, acceptTerms: true });
  }

  generateAIDescription(params: { propertyType: string; rooms: number; bathrooms: number; area: string; neighborhood: string }): Observable<{ description: string }> {
    return this.http.post<{ description: string }>(`${this.baseUrl}/ai/description`, params);
  }
}
