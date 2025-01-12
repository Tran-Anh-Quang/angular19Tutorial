import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'data-binding',
        pathMatch: 'full',
    },
    {
        path: 'admin',
        component: AdminComponent,
    },
    {
        path: 'data-binding',
        component: DataBindingComponent,
    },
    {
        path: 'ng-class',
        component: NgClassComponent,
    },
    {
        path: 'template-form',
        component: TemplateFormComponent,
    }
];
