import { Injectable } from '@angular/core';

export interface BadgeItem {
    type: string;
    value: string;
}

export interface ChildrenItems {
    state: string;
    target?: boolean;
    name: string;
    type?: string;
    children?: ChildrenItems[];
}

export interface MainMenuItems {
    state: string;
    short_label?: string;
    main_state?: string;
    target?: boolean;
    name: string;
    type: string;
    icon: string;
    badge?: BadgeItem[];
    children?: ChildrenItems[];
}

export interface Menu {
    label: string;
    main: MainMenuItems[];
}


const MENUITEMS = [
    {
        label: 'HOME',
        main: [
            {
                state: 'dashboard',
                short_label: 'D',
                name: 'Dashboard',
                type: 'sub',
                icon: 'icon-home',
                children: [
                    {
                        state: 'default',
                        name: 'Default'
                    }
                ]
            },
            {
                state: 'navigation',
                short_label: 'N',
                name: 'Navigation',
                type: 'link',
                icon: 'icon-layout-cta-right'
            },
            {
                state: 'widget',
                short_label: 'W',
                name: 'Widget',
                type: 'sub',
                icon: 'icon-view-grid',
                badge: [
                {
                    type: 'danger',
                    value: '100+'
                }
                ],
                children: [
                    {
                        state: 'statistic',
                        name: 'Statistic'
                    },
                    {
                        state: 'data',
                        name: 'Data'
                    },
                    {
                        state: 'chart',
                        name: 'Chart'
                    },
                    {
                        state: 'advanced',
                        name: 'Advance'
                    }
                ]
            }
        ]
    },
    {
        label: 'DEVICE',
        main: [

        ]
    },
    {
        label: 'TASK',
        main: [
            
        ]
    }
];

@Injectable()
export class MenuItems {
    getAll(): Menu[] {
        return MENUITEMS;
    }
}
