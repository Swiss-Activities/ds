export type BaseBreadcrumbsProps = {
  items: { label: string; href: string }[];
  white?: boolean;
  ignoreLast?: boolean;
  gradient?: "white" | "gray" | false;
  className?: string;
};
