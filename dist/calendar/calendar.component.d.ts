import 'hammerjs';
import 'hammer-timejs';
import 'moment/locale/vi';
import 'moment/locale/lo';
import 'moment/locale/id';
import 'moment/locale/km';
import 'moment/locale/th';
import 'moment/locale/en-gb';
import { OnInit, OnDestroy, OnChanges, EventEmitter, SimpleChange, Output, Input } from '@angular/core';
export declare class CalendarComponent implements OnChanges, OnInit, OnDestroy {
    month: Array<number>;
    current: Date;
    today: Date;
    previousDay: any;
    selectedDay: any;
    wHeads: string[];
    SWIPE_ACTION: {
        LEFT: string;
        RIGHT: string;
    };
    @Output() onSelectedDate: EventEmitter<any>;
    @Input() mod: any;
    acceptPast: boolean;
    setDay: Date;
    /**
     * Component constructor
     */
    constructor();
    /**
     *
     * @param changes
     */
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    /**
     * Implements onInit event handler.
     */
    ngOnInit(): void;
    /**
     * Render month week and day by date string value
     * @param {string} date
     */
    monthRender(date: string): void;
    /**
     * Implements ngOnDestroy event handler.
     */
    ngOnDestroy(): void;
    /**
     * Handler user swipe event
     * @param {SWIPE_ACTION} action
     */
    swipe(action?: string): void;
    /**
     * Check when the day is today
     * @param {any} day
     */
    isToday(day: any): boolean;
    /**
     * Check whether the day not in current monty
     * @param {any} day
     */
    diffMonth(day: any): boolean;
    /**
     * Render previous month from current month
     */
    previousMonth(): void;
    /**
     * Render next month from current month
     */
    nextMonth(): void;
    /**
     * Handler user select day event
     */
    selectDay(day: any): void;
    niceMonth(date: Date): string;
}
