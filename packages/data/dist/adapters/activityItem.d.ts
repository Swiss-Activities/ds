import type { ReactNode } from "react";
import type { TGatewayHomeItem } from "../gateway/types";
export type ActivityItemData = {
    image: ReactNode;
    title: string;
    score: number;
    reviewCount: number;
    priceLabel: string;
    price: string;
    href: string;
};
export type RenderImage = (item: TGatewayHomeItem) => ReactNode;
export declare const toActivityItem: (item: TGatewayHomeItem, { priceLabel, fromLabel, renderImage, }: {
    priceLabel: string;
    fromLabel: string;
    renderImage: RenderImage;
}) => ActivityItemData;
