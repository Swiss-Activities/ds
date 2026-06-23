import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  CircleAlert,
  CircleCheck,
  CircleMinus,
  CircleX,
  Clock,
  CreditCard,
  Globe,
  Hourglass,
  Info,
  Lock,
  LogOut,
  MailCheck,
  MapPin,
  MessageCircleQuestion,
  Minus,
  Percent,
  PersonStanding,
  Plus,
  Settings,
  ShoppingCart,
  SquareCheck,
  SquarePen,
  SquareX,
  Star,
  Tag,
  Ticket,
  Trash2,
  User,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../utils/css/cn";

const iconTypes: Record<string, LucideIcon> = {
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "calendar-days": CalendarDays,
  "cart-shopping": ShoppingCart,
  "chevron-down": ChevronDown,
  "circle-check": CircleCheck,
  "circle-exclamation": CircleAlert,
  "circle-info": Info,
  "circle-minus": CircleMinus,
  "circle-x-mark": CircleX,
  clock: Clock,
  "credit-card": CreditCard,
  "envelope-circle-check": MailCheck,
  gear: Settings,
  globe: Globe,
  hourglass: Hourglass,
  "lock-keyhole": Lock,
  "map-location-dot": MapPin,
  "message-question": MessageCircleQuestion,
  minus: Minus,
  "pen-to-square": SquarePen,
  percent: Percent,
  "person-skiing": PersonStanding,
  plus: Plus,
  "right-from-bracket": LogOut,
  "square-check-solid": SquareCheck,
  "square-exclamation-solid": CircleAlert,
  "square-x-mark-solid": SquareX,
  "star-sharp-solid": Star,
  tag: Tag,
  ticket: Ticket,
  "trash-can": Trash2,
  user: User,
  xmark: X,
};

export const I = ({
  className,
  icon,
  ...rest
}: {
  className?: string;
  icon: string;
  [key: string]: unknown;
}) => {
  const Icon = iconTypes[icon] ?? Info;

  return <Icon {...rest} className={cn("inline-flex h-[1em] w-[1em] shrink-0", className)} />;
};
