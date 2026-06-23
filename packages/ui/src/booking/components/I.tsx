import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CircleCheck,
  Clock,
  CreditCard,
  Hourglass,
  Info,
  Lock,
  LogOut,
  MessageCircleQuestion,
  Minus,
  PersonStanding,
  Plus,
  Settings,
  SquareCheck,
  SquarePen,
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
  "circle-check": CircleCheck,
  "circle-info": Info,
  clock: Clock,
  "credit-card": CreditCard,
  gear: Settings,
  hourglass: Hourglass,
  "lock-keyhole": Lock,
  "message-question": MessageCircleQuestion,
  minus: Minus,
  "pen-to-square": SquarePen,
  "person-skiing": PersonStanding,
  plus: Plus,
  "right-from-bracket": LogOut,
  "square-check-solid": SquareCheck,
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
