export type BreadcrumbsItem = {
  label: string;
  href: string;
  onClick?: () => void;
};

export type BaseBreadcrumbsProps = {
  items: BreadcrumbsItem[];
  white?: boolean;
  ignoreLast?: boolean;
  gradient?: "white" | "gray" | false;
  className?: string;
};
