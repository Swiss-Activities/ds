export type TabsItem = {
  label: string;
  href: string;
  active?: boolean;
};

export type BaseTabsProps = {
  items: TabsItem[];
  className?: string;
};
