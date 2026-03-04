import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Profile } from './components/profile/profile';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';

export const routes: Routes = [
    {
        path: '', // Default route : Path is empty which means we are at the top or root
        pathMatch: 'full', // Full path match is required for the default route (if you're using the just empty route,)
        // loadComponent: () => {
        //     return import('./home/home').then(m => m.Home);
        // },
        component: Home,
    },
    {
        path: 'todos',
        loadComponent: () => {
            return import('./todos/todos').then(m => m.Todos);
        },

    },
    {
        path: 'profile',
        component: Profile
    },
    {
        path: 'user/:id/:name',
        component: User
    },
    // {
    //     path: 'admin',
    //     component: Admin
    // },
    {
        path: 'admin',
        // LoadComponent is used for lazy loading
        loadComponent: () => {
            return import('./components/admin/admin').then(m => m.Admin);
        },
    },
    {
        // If i put this in first index then it will always match and the other routes will never be reached. So, it should be placed at the end of the routes array.
        path: '**', // Wildcard route : This route will match any path that is not matched by the above routes. It is used to display a 404 Not Found page or redirect to a default page.
        component: PageNotFound,
    },
];

// Note :
// loadComponent is a function that is used to load a component asynchronously. 
// It returns a promise that resolves to the component class. 
// This is useful for lazy loading components, which can improve the performance 
// of the application by loading components only when they are needed.
// Note : Also Used for Lazy Loading for route.

// component = "Here’s the component already loaded."
// loadComponent = "Go fetch the component only when needed." --> Used for lazy Loading also.
