import { Routes, Route, UrlSegment } from '@angular/router';
import { AppComponent } from './app.component';
import { AssetsComponent } from './modules/assets/assets.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

export const routes: Routes = [
    {
        // path: ':folder/:file-name-uuid-with-extention',
        matcher: (url) => {
            if (url.length === 2 && url[0].path.match(/^[\w-]+$/) && url[1].path.match(/^[\w-]+$/gm)) {
                return {
                    consumed: url,
                    posParams: {
                        folder: new UrlSegment(url[0].path, {}),
                        fileUuid: new UrlSegment(url[1].path, {}),
                    },
                };
            }
            return null
        },
        component: AssetsComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
        title: 'Your page was not found'
    },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
