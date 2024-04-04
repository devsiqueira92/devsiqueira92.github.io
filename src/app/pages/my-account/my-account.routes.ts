import { Routes } from '@angular/router';
import { MyAccountComponent } from './my-account.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactResolver } from './resolvers/contact.resolver';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { AddressComponent } from './components/address/address.component';
import { AddressResolver } from './resolvers/address.resolver';

export const MY_ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    component: MyAccountComponent,
    children: [
      {
        path: 'contact/create',
        component: ContactComponent,
        resolve: { formData: ContactResolver },
        data: { mode: DataMode.create },
      },
      {
        path: 'contact/edit/:id',
        component: ContactComponent,
        resolve: { formData: ContactResolver },
        data: { mode: DataMode.edit },
      },

      {
        path: 'address/create',
        component: AddressComponent,
        resolve: { formData: AddressResolver },
        data: { mode: DataMode.create },
      },
      {
        path: 'address/edit/:id',
        component: AddressComponent,
        resolve: { formData: AddressResolver },
        data: { mode: DataMode.edit },
      },
    ],
  },
];
