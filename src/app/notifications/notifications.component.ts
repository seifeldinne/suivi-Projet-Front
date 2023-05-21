import {Component, OnInit} from '@angular/core';
import {CalendarModule} from "angular-calendar";
import {DateAdapter} from "@angular/material/core";
import {adapterFactory} from "angular-calendar/date-adapters/moment";

CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory,
})
const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};


@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css'],

})
export class NotificationsComponent implements OnInit {

    ngOnInit(): void {
    }

}
