import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {ListProjetComponent} from '../../projet/list-projet/list-projet.component';
import {ListDomaineComponent} from '../../domaine/list-domaine/list-domaine.component';
import {ListDemandeDeploiementComponent} from '../../demande-deploiement/list-demande/list-demande-deploiement.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {EditprojetComponent} from "../../projet/editprojet/editprojet.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AddProjetComponent} from "../../projet/add-projet/add-projet.component";
import {EditDomaineComponent} from "../../domaine/edit-domaine/edit-domaine.component";
import {AddDomaineComponent} from "../../domaine/add-domaine/add-domaine.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule
        //   MatSortModule,*/
    ],
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        ListProjetComponent,
        ListDomaineComponent,
        ListDemandeDeploiementComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        EditprojetComponent,
        AddProjetComponent,
        EditDomaineComponent,
        AddDomaineComponent
    ]
})

export class AdminLayoutModule {
}
