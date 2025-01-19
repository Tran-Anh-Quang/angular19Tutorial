import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { PostApiComponent } from './components/post-api/post-api.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';

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
    },
    {
        path: 'reactive-form',
        component: ReactiveFormComponent,
    },
    {
        path: 'get-api',
        component: GetApiComponent,
    },
    {
        path: 'post-api',
        component: PostApiComponent,
    },
    {
        path: 'resource-api',
        component: ResourceApiComponent,
    }
];
