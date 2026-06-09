"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { Button } from "../button";
import { Card } from "../card";
import {
  FilterCheckboxGroup,
  type FilterCheckboxGroupItem,
} from "../filter-checkbox-group";
import { Flag } from "../flag";
import { Icon } from "../icon/icon";
import { Check, ChevronDown, Filter, Search, ThumbsUp } from "../icons";
import { Rating } from "../rating";
import { Sheet } from "../sheet";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type {
  BaseSectionReviewsProps,
  SectionReviewsLabels,
  SectionReviewsReview,
  SectionReviewsSort,
} from "./section-reviews.types";

export type SectionReviewsProps = BaseSectionReviewsProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;

const ratings = [5, 4, 3, 2, 1];
const participantOrder = ["single", "group", "couple"];
const loadMoreIncrement = 4;

const sortOptions: {
  labelKey: keyof Pick<
    SectionReviewsLabels,
    "sortDateAsc" | "sortDateDesc" | "sortRatingAsc" | "sortRatingDesc"
  >;
  value: SectionReviewsSort;
}[] = [
  { value: "dateDesc", labelKey: "sortDateDesc" },
  { value: "dateAsc", labelKey: "sortDateAsc" },
  { value: "ratingDesc", labelKey: "sortRatingDesc" },
  { value: "ratingAsc", labelKey: "sortRatingAsc" },
];

function includesSearch(review: SectionReviewsReview, query: string) {
  const value = query.trim().toLowerCase();

  if (!value) {
    return true;
  }

  return [
    review.text,
    review.author,
    review.category,
    ...(review.searchTerms ?? []),
  ].some((item) => item?.toLowerCase().includes(value));
}

function sortReviews(
  reviews: SectionReviewsReview[],
  sort: SectionReviewsSort
) {
  return [...reviews].sort((a, b) => {
    switch (sort) {
      case "dateDesc":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "dateAsc":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "ratingDesc":
        return b.rating - a.rating;
      case "ratingAsc":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });
}

function getRatingLabel(
  labels: SectionReviewsLabels,
  rating: number
): ReactNode {
  return labels.ratingEqual?.(rating) ?? `${rating} ${labels.rating}`;
}

function getParticipantLabel(
  labels: SectionReviewsLabels,
  participant: string
) {
  return labels.participantLabels?.[participant] ?? participant;
}

function ReviewFilters({
  className,
  labels,
  onParticipantsChange,
  onRatingChange,
  onTextOnlyChange,
  ratingCounts,
  reviews,
  selectedParticipants,
  selectedRating,
  sidebar = false,
  textOnly,
}: {
  className?: string;
  labels: SectionReviewsLabels;
  onParticipantsChange: (participants: string[]) => void;
  onRatingChange: (rating: number | null) => void;
  onTextOnlyChange: (textOnly: boolean) => void;
  ratingCounts: number[];
  reviews: SectionReviewsReview[];
  selectedParticipants: string[];
  selectedRating: number | null;
  sidebar?: boolean;
  textOnly: boolean;
}) {
  const participants = participantOrder.filter((participant) =>
    reviews.some((review) => review.category === participant)
  );
  const hasReviewsWithText = reviews.some((review) => review.text);
  const ratingItems: FilterCheckboxGroupItem[] = ratings.map((rating) => ({
    count: ratingCounts[rating - 1],
    disabled: ratingCounts[rating - 1] === 0,
    id: String(rating),
    label: (
      <span className="inline-flex items-center gap-3">
        <Rating
          score={rating}
          showScore={false}
          size="default"
          className="shrink-0"
        />
        <span>{getRatingLabel(labels, rating)}</span>
      </span>
    ),
    selected: selectedRating === rating,
  }));
  const participantItems: FilterCheckboxGroupItem[] = participants.map(
    (participant) => ({
      id: participant,
      label: getParticipantLabel(labels, participant),
      selected: selectedParticipants.includes(participant),
    })
  );
  const generalItems: FilterCheckboxGroupItem[] = hasReviewsWithText
    ? [
        {
          id: "textOnly",
          label: labels.textOnly,
          selected: textOnly,
        },
      ]
    : [];
  const filterGroups = [
    {
      id: "rating",
      items: ratingItems,
      selectionMode: "single" as const,
      title: labels.rating,
      onItemToggle: (id: string, nextValue: boolean) =>
        onRatingChange(nextValue ? Number(id) : null),
    },
    participantItems.length
      ? {
          id: "participants",
          items: participantItems,
          selectionMode: "multiple" as const,
          title: labels.participants,
          onItemToggle: (id: string, nextValue: boolean) =>
            onParticipantsChange(
              nextValue
                ? [...selectedParticipants, id]
                : selectedParticipants.filter((item) => item !== id)
            ),
        }
      : null,
    generalItems.length
      ? {
          id: "general",
          items: generalItems,
          selectionMode: "multiple" as const,
          title: labels.general,
          onItemToggle: (_id: string, nextValue: boolean) =>
            onTextOnlyChange(nextValue),
        }
      : null,
  ].filter(
    (
      group
    ): group is {
      id: string;
      items: FilterCheckboxGroupItem[];
      onItemToggle: (id: string, nextValue: boolean) => void;
      selectionMode: "multiple" | "single";
      title: ReactNode;
    } => group !== null
  );

  if (!filterGroups.length) {
    return null;
  }

  if (sidebar) {
    return (
      <div
        className={cn(
          "flex h-max flex-col overflow-hidden rounded-lg border border-solid border-gray-200 bg-white shadow-sm",
          className
        )}
      >
        <Text size="md2" className="px-4 pt-4">
          {labels.filter}
        </Text>
        <div className="mt-1 divide-y divide-gray-200">
          {filterGroups.map((group) => (
            <div key={group.id} className="px-4 py-4 first:pt-3">
              <FilterCheckboxGroup
                title={group.title}
                items={group.items}
                maxVisible={8}
                selectionMode={group.selectionMode}
                onItemToggle={(id, nextValue) =>
                  group.onItemToggle(id, nextValue)
                }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "-mx-4 !border-b-0 !border-l-0 !border-r-0 border-t border-solid border-gray-200 lg:mx-0 lg:border-t-0",
        className
      )}
    >
      {filterGroups.map((group) => (
        <FilterCheckboxGroup
          key={group.id}
          title={group.title}
          items={group.items}
          type="accordion"
          inlineFrom="lg"
          maxVisible={8}
          selectionMode={group.selectionMode}
          onItemToggle={(id, nextValue) => group.onItemToggle(id, nextValue)}
        />
      ))}
    </div>
  );
}

function ReviewsSearch({
  labels,
  search,
  onSearchChange,
  className,
}: {
  className?: string;
  labels: SectionReviewsLabels;
  search: string;
  onSearchChange: (search: string) => void;
}) {
  return (
    <label className={cn("relative block", className)}>
      <span className="pointer-events-none absolute start-3 top-1/2 flex -translate-y-1/2 text-gray-400">
        <Icon icon={Search} size="sm" />
      </span>
      <input
        className="h-10 w-full rounded-full border border-solid border-gray-200 bg-white py-0 pe-4 ps-10 text-sm text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-0 lg:max-w-xs [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden"
        placeholder={labels.searchPlaceholder}
        value={search}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onSearchChange(event.currentTarget.value)
        }
        type="search"
      />
    </label>
  );
}

function ReviewsSort({
  labels,
  sort,
  onSortChange,
}: {
  labels: SectionReviewsLabels;
  sort: SectionReviewsSort;
  onSortChange: (sort: SectionReviewsSort) => void;
}) {
  return (
    <label className="relative shrink-0">
      <select
        className="h-10 cursor-pointer appearance-none rounded-full border border-solid border-gray-200 bg-white py-0 pe-9 ps-3 text-sm font-medium text-gray-700 outline-none transition hover:bg-gray-50 focus:border-primary focus:outline-none focus:ring-0"
        value={sort}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          onSortChange(event.currentTarget.value as SectionReviewsSort)
        }
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {labels[option.labelKey]}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-gray-500">
        <Icon icon={ChevronDown} size="sm" />
      </span>
    </label>
  );
}

function ReviewReply({
  label,
  lessLabel,
  reply,
}: {
  label: ReactNode;
  lessLabel: ReactNode;
  reply: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasOverflow = reply.length > 220;

  return (
    <div className="mt-4 rounded-lg border border-solid border-gray-100 bg-gray-50 p-4">
      <Text
        className={cn(
          "whitespace-pre-line text-gray-600",
          !expanded && "line-clamp-4"
        )}
      >
        {reply}
      </Text>
      {hasOverflow ? (
        <Button
          onClick={() => setExpanded(!expanded)}
          type="linkGray"
          icon={<Icon icon={ChevronDown} size="sm" />}
          className="mt-2"
          reverse
        >
          {expanded ? lessLabel : label}
        </Button>
      ) : null}
    </div>
  );
}

function ReviewListCard({
  labels,
  review,
}: {
  labels: SectionReviewsLabels;
  review: SectionReviewsReview;
}) {
  const [expanded, setExpanded] = useState(false);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const hasText = Boolean(review.text);
  const hasOverflow = (review.text?.length ?? 0) > 260;
  const text = review.text ?? "";
  const helpfulLabel = hasUpvoted
    ? labels.helpfulSelected
    : labels.helpfulQuestion;

  const handleUpvote = async () => {
    if (hasUpvoted) {
      return;
    }

    setHasUpvoted(true);
    await review.onUpvote?.();
  };

  return (
    <Card className="flex flex-col !p-0 text-xs lg:grid lg:grid-cols-[200px,1fr] lg:gap-4">
      <div className="flex flex-col p-6 lg:col-start-2 lg:row-start-1">
        <div className="flex items-center justify-between gap-4">
          <Rating score={review.rating} showScore={false} size="lg" />
          {hasText && review.onUpvote ? (
            <Button
              type="link"
              text={helpfulLabel}
              onClick={handleUpvote}
              icon={<Icon icon={hasUpvoted ? Check : ThumbsUp} size="sm" />}
              disabled={hasUpvoted}
              className={cn("text-black", {
                "!bg-transparent text-gray-500": hasUpvoted,
              })}
            />
          ) : null}
        </div>
        {hasText ? (
          <div className="relative">
            <Text black className={cn("mt-3", !expanded && "line-clamp-3")}>
              {text}
            </Text>
            {hasOverflow ? (
              <Button
                onClick={() => setExpanded(!expanded)}
                type="linkGray"
                icon={<Icon icon={ChevronDown} size="sm" />}
                className="mt-1"
                reverse
              >
                {expanded ? labels.lessFilters : labels.viewMore}
              </Button>
            ) : null}
          </div>
        ) : null}
        {review.reply ? (
          <ReviewReply
            label={labels.viewMore}
            lessLabel={labels.lessFilters}
            reply={review.reply}
          />
        ) : null}
        {review.translatedFromLabel ? (
          <Text size="xs" gray className="mt-3">
            {review.translatedFromLabel}
          </Text>
        ) : null}
      </div>
      <div className="h-px w-full bg-gray-200 lg:hidden" />
      <div className="flex items-center gap-4 px-6 py-4 lg:col-start-1 lg:row-start-1 lg:m-2 lg:flex-col lg:items-start lg:rounded-lg lg:border lg:border-solid lg:border-gray-100 lg:p-6">
        <Text black>
          {review.author}
          {review.countryCode ? (
            <Flag
              countryCode={review.countryCode}
              className="relative top-[3px] ms-2 rounded-sm"
            />
          ) : null}
        </Text>
        <Text size="xs" className="text-left text-gray-600">
          {review.date}
        </Text>
      </div>
    </Card>
  );
}

function MobileFilterSheet({
  children,
  labels,
  onReset,
  open,
  onOpenChange,
}: {
  children: ReactNode;
  labels: SectionReviewsLabels;
  onReset: () => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet.Root presented={open} onPresentedChange={onOpenChange}>
      <Sheet.Portal>
        <Sheet.View contentPlacement="bottom" className="z-[220]">
          <Sheet.Backdrop />
          <Sheet.CloseButton label={labels.close} />
          <Sheet.Content className="grid max-h-[85dvh] grid-rows-[min-content_1fr_min-content] overflow-hidden bg-white">
            <Sheet.Header className="pb-4 pt-2">
              <Sheet.Handle />
              <Sheet.Title className="mt-3 text-xl font-semibold text-gray-950">
                {labels.filter}
              </Sheet.Title>
            </Sheet.Header>
            <Sheet.ScrollRoot className="h-full min-h-0">
              <Sheet.ScrollView className="h-full min-h-0">
                <Sheet.ScrollContent className="pb-5 pt-1">
                  {children}
                </Sheet.ScrollContent>
              </Sheet.ScrollView>
            </Sheet.ScrollRoot>
            <div className="flex w-full items-center justify-between border-0 border-t border-solid border-gray-200 px-4 py-3">
              <Button
                type="tertiary"
                className="!bg-transparent"
                onClick={onReset}
              >
                {labels.reset}
              </Button>
              <Button
                text={labels.results}
                type="primary"
                onClick={() => onOpenChange(false)}
              />
            </div>
          </Sheet.Content>
        </Sheet.View>
      </Sheet.Portal>
    </Sheet.Root>
  );
}

export function SectionReviews({
  averageRating,
  className,
  labels,
  reviewCount,
  reviews,
  ...props
}: SectionReviewsProps) {
  const hasReviewsWithText = useMemo(
    () => reviews.some((review) => review.text),
    [reviews]
  );
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>(
    []
  );
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SectionReviewsSort>("dateDesc");
  const [textOnly, setTextOnly] = useState(hasReviewsWithText);
  const [visibleCount, setVisibleCount] = useState(2);
  const [filterOpen, setFilterOpen] = useState(false);
  const previousSignatureRef = useRef("");
  const ratingCounts = useMemo(() => {
    const counts = Array(5).fill(0) as number[];

    reviews.forEach((review) => {
      const index = Math.floor(review.rating) - 1;

      if (index >= 0 && index < counts.length) {
        counts[index] += 1;
      }
    });

    return counts;
  }, [reviews]);
  const ratingPercentages = ratingCounts.map((count) =>
    reviews.length ? (count / reviews.length) * 100 : 0
  );
  const activeFilterCount =
    selectedParticipants.length + (selectedRating ? 1 : 0) + (textOnly ? 1 : 0);
  const filteredReviews = useMemo(() => {
    const nextReviews = reviews.filter((review) => {
      const ratingMatch =
        selectedRating === null || Math.floor(review.rating) === selectedRating;
      const participantMatch =
        selectedParticipants.length === 0 ||
        (review.category != null &&
          selectedParticipants.includes(review.category));
      const textOnlyMatch = textOnly ? Boolean(review.text) : true;

      return (
        ratingMatch &&
        participantMatch &&
        textOnlyMatch &&
        includesSearch(review, search)
      );
    });

    return sortReviews(nextReviews, sort);
  }, [reviews, search, selectedParticipants, selectedRating, sort, textOnly]);
  const visibleReviews = filteredReviews.slice(0, visibleCount);
  const hasMoreReviews = visibleCount < filteredReviews.length;

  useEffect(() => {
    setTextOnly(hasReviewsWithText);
  }, [hasReviewsWithText]);

  useEffect(() => {
    const signature = JSON.stringify({
      search,
      selectedParticipants,
      selectedRating,
      sort,
      textOnly,
    });

    if (
      previousSignatureRef.current &&
      previousSignatureRef.current !== signature
    ) {
      setVisibleCount(2);
    }

    previousSignatureRef.current = signature;
  }, [search, selectedParticipants, selectedRating, sort, textOnly]);

  const clearFilters = () => {
    setSelectedRating(null);
    setSelectedParticipants([]);
    setSearch("");
  };
  const filters = (
    <ReviewFilters
      labels={labels}
      onParticipantsChange={setSelectedParticipants}
      onRatingChange={setSelectedRating}
      onTextOnlyChange={setTextOnly}
      ratingCounts={ratingCounts}
      reviews={reviews}
      selectedParticipants={selectedParticipants}
      selectedRating={selectedRating}
      textOnly={textOnly}
    />
  );

  if (!averageRating || !reviewCount) {
    return null;
  }

  return (
    <div className={cn(className)} {...props}>
      <div className="grid grid-cols-1 gap-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(260px,1.25fr)_minmax(0,4fr)] lg:gap-x-24 lg:gap-y-8">
          <div className="flex flex-col items-center justify-center space-y-4 rounded-l p-6 lg:p-8">
            <span className="text-6xl font-bold text-black lg:text-7xl">
              {averageRating.toFixed(1)}
            </span>
            <Rating score={averageRating} showScore={false} size="lg" />
            <Text className="text-center">
              {reviewCount}{" "}
              {reviewCount === 1 ? labels.ratingSingular : labels.reviewsPlural}
            </Text>
          </div>
          <div className="flex flex-col justify-center space-y-2">
            {ratings.map((score) => (
              <div key={score} className="flex items-center gap-4">
                <Text className="w-3">{score}</Text>
                <div className="h-3 flex-grow rounded bg-gray-200">
                  <div
                    className="h-full rounded-l bg-primary"
                    style={{
                      width: `${ratingPercentages[score - 1]}%`,
                    }}
                  />
                </div>
                <Text className="w-12">{`${ratingCounts[score - 1]}`}</Text>
              </div>
            ))}
          </div>
          <ReviewFilters
            labels={labels}
            onParticipantsChange={setSelectedParticipants}
            onRatingChange={setSelectedRating}
            onTextOnlyChange={setTextOnly}
            ratingCounts={ratingCounts}
            reviews={reviews}
            selectedParticipants={selectedParticipants}
            selectedRating={selectedRating}
            textOnly={textOnly}
            className="hidden lg:block"
            sidebar
          />
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center justify-between gap-8">
              <div className="relative lg:hidden">
                <Button
                  type="pill"
                  icon={<Icon icon={Filter} size="sm" />}
                  text={labels.filter}
                  onClick={() => setFilterOpen(true)}
                />
                {activeFilterCount ? (
                  <div className="pointer-events-none absolute -end-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-black text-white">
                    {activeFilterCount}
                  </div>
                ) : null}
              </div>
              <ReviewsSearch
                search={search}
                onSearchChange={setSearch}
                labels={labels}
                className="hidden lg:block"
              />
              <ReviewsSort labels={labels} sort={sort} onSortChange={setSort} />
            </div>
            <ReviewsSearch
              search={search}
              onSearchChange={setSearch}
              labels={labels}
              className="lg:hidden"
            />
            <div className="space-y-4">
              {visibleReviews.length ? (
                visibleReviews.map((review, index) => (
                  <ReviewListCard
                    key={review.id ? `${review.id}-${index}` : index}
                    labels={labels}
                    review={review}
                  />
                ))
              ) : (
                <div className="flex h-full flex-col items-center justify-center space-y-4">
                  <Text>{labels.noResults}</Text>
                  <Button onClick={clearFilters}>{labels.clearFilters}</Button>
                </div>
              )}
              {hasMoreReviews ? (
                <div className="flex items-center justify-center">
                  <Button
                    onClick={() =>
                      setVisibleCount((count) =>
                        Math.min(
                          count + loadMoreIncrement,
                          filteredReviews.length
                        )
                      )
                    }
                    type="linkGray"
                    size="sm"
                  >
                    {labels.viewMore}
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <MobileFilterSheet
        labels={labels}
        onReset={() => {
          setSelectedRating(null);
          setSelectedParticipants([]);
        }}
        open={filterOpen}
        onOpenChange={setFilterOpen}
      >
        {filters}
      </MobileFilterSheet>
    </div>
  );
}
