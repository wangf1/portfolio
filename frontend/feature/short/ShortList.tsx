"use client";
import { batchSize } from "@/common/types/short/shortTypes";
import ShortCard from "@/frontend/feature/short/ShortCard";
import { useAppDispatch, useAppSelector } from "@/frontend/lib/hooks";
import {
  fetchShorts,
  fetchShortsCount,
} from "@/frontend/lib/redux/short/shortsSlice";
import { Skeleton } from "@mui/material";
import { nanoid } from "nanoid";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ShortList() {
  const shorts = useAppSelector((state) => state.shorts.shorts);
  const shortsCount = useAppSelector((state) => state.shorts.shortsCount);
  const status = useAppSelector((state) => state.shorts.status);
  const dispatch = useAppDispatch();
  const [currentBatch, setCurrentBatch] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const shortsCountRef = useRef(shortsCount);
  const currentBatchRef = useRef(currentBatch);
  const isFetchingRef = useRef(isFetching);

  useEffect(() => {
    shortsCountRef.current = shortsCount;
  }, [shortsCount]);

  useEffect(() => {
    currentBatchRef.current = currentBatch;
  }, [currentBatch]);

  useEffect(() => {
    isFetchingRef.current = isFetching;
  }, [isFetching]);

  useEffect(() => {
    if (!isFetchingRef.current) {
      setIsFetching(true);
      dispatch(
        fetchShorts({ skip: (currentBatch - 1) * batchSize, take: batchSize })
      );
      dispatch(fetchShortsCount()).finally(() => {
        return setIsFetching(false);
      });
    }
  }, [currentBatch]);

  // handle scroll event
  const increaseCurrentBatchIfNeeded = () => {
    const allBatches = Math.ceil(shortsCountRef.current / batchSize);
    const currentBatchFromRef = currentBatchRef.current;

    if (currentBatchFromRef >= allBatches || isFetchingRef.current) {
      // No more batches to fetch or currently fetching
      return;
    }

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if the user has scrolled to the bottom
    if (scrollTop + windowHeight >= documentHeight - 200) {
      const nextBatch = currentBatchFromRef + 1;
      setCurrentBatch(nextBatch);
    }
  };

  const scrollListener = useCallback(() => {
    increaseCurrentBatchIfNeeded();
  }, []);

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollListener]);

  // Only show loading indicator for initial fetch, if show loading indicator
  // page will be refreshed for scroll event triggered fetching.
  if (status === "fetching_shorts" && currentBatch === 1) {
    return (
      <div className="flex flex-col items-center w-full">
        <div className="text-center mb-4 text-gray-700 dark:text-gray-500">
          Fetching data from a{" "}
          <strong className="text-green-500">free shared</strong> MongoDB Atlas
          instance, so... 😅 ⏳🕺🎉
        </div>
        <div className="flex flex-wrap gap-4 justify-center max-w-6xl w-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={nanoid()}
              className="w-full lg:w-1/2 2xl:w-1/3 p-2 max-w-[600px] animate-focusIn"
            >
              <Skeleton
                key={nanoid()}
                variant="rounded"
                animation="wave"
                sx={{ borderRadius: "16px" }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-wrap gap-4 justify-center w-full max-w-6xl">
        {shorts.map((short) => (
          <div
            key={short._id}
            className="w-full w-1/1 lg:w-1/2 2xl:w-1/3 p-2 mx-4 
              max-w-[600px] animate-focusIn"
          >
            <ShortCard short={short} />
          </div>
        ))}
      </div>
    </div>
  );
}
