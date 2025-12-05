export interface MenuItem {
  id: string;
  label: string;
//   icon: string;
//   path: string;
  isActive?: boolean;
//   badge?: number;
}

export type MenuItemType = 'default' | 'header' | 'divider';