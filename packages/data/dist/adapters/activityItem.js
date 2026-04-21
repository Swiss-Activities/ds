const getImageUrl = (item) => item.imageUrl ?? item.image_url;
const getReviewCount = (item) => item.reviewCount ?? item.review_count;
const getPriceFormatted = (item) => item.priceFormatted ?? item.price_formatted;
export const toActivityItem = (item, { priceLabel, fromLabel, renderImage, }) => ({
    image: getImageUrl(item) ? renderImage(item) : null,
    title: item.title,
    score: item.rating ?? 0,
    reviewCount: getReviewCount(item) ?? 0,
    priceLabel,
    price: getPriceFormatted(item) ? `${fromLabel} ${getPriceFormatted(item)}` : "",
    href: item.path,
});
