import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionComponent } from './publicacion.component';
const routes: Routes = [{ path: '', component: PublicacionComponent }];
@NgModule({ imports: [CommonModule, RouterModule.forChild(routes), PublicacionComponent] })
export class PublicacionModule {}
