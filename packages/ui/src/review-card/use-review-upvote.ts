"use client";

import { useRef, useState } from "react";

type UseReviewUpvoteOptions = {
  onUpvote?: () => void | Promise<void>;
};

export function useReviewUpvote({ onUpvote }: UseReviewUpvoteOptions) {
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const hasUpvotedRef = useRef(false);

  const handleUpvote = () => {
    if (!onUpvote || hasUpvotedRef.current) {
      return;
    }

    hasUpvotedRef.current = true;
    setHasUpvoted(true);
    void onUpvote();
  };

  return {
    hasUpvoted,
    handleUpvote,
    upvoteDisabled: !onUpvote || hasUpvoted,
  };
}
