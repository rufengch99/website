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
				main_state: 'dashboard',
				state: 'default',
				short_label: 'H',
				name: 'Dashboard',
				type: 'link',
				icon: 'icon-home',
				children: []
			}
		]
	},
	{
		label: 'SYSTEM',
		main: [
			{
				main_state: 'school',
				state: 'infrastructure',
				short_label: 'S',
				name: 'School',
				type: 'link',
				icon: 'icon-gallery',
				children: []
			},
			{
				main_state: 'device',
				state: 'management',
				short_label: 'D',
				name: 'Device',
				type: 'link',
				icon: 'icon-harddrives'
			}
		]
	},
	{
		label: 'TASK',
		main: [
			{
				state: 'task',
				short_label: 'S',
				name: 'Task Table',
				type: 'sub',
				icon: 'icon-tablet',
				children: [
					{
						state: 'building',
						name: 'Building'
					}
				]
			}
		]
	},
	{
		label: 'USER',
		main: [
			{
				state: 'user',
				short_label: 'S',
				name: 'users',
				type: 'sub',
				icon: 'icon-user',
				children: [
					{
						state: 'building',
						name: 'Building'
					}
				]
			}
		]
	}
];

@Injectable()
export class MenuItems {
	getAll(): Menu[] {
		return MENUITEMS;
	}
}
