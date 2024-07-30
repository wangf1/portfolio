"use client";
import { batchSize } from "@/common/types/short/shortTypes";
import ShortCard from "@/frontend/feature/short/ShortCard";
import { useAppDispatch, useAppSelector } from "@/frontend/lib/hooks";
import { fetchShorts } from "@/frontend/lib/redux/short/shortsSlice";
import { Skeleton } from "@mui/material";
import { nanoid } from "nanoid";
import { useCallback, useEffect, useState } from "react";

export default function ShortList() {
  const shorts = useAppSelector((state) => state.shorts.shorts);
  const status = useAppSelector((state) => state.shorts.status);
  const dispatch = useAppDispatch();
  const [currentBatch, setCurrentBatch] = useState(1);

  useEffect(() => {
    dispatch(
      fetchShorts({ skip: (currentBatch - 1) * batchSize, take: batchSize })
    );
  }, [currentBatch]);

  // handle scroll event
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if the user has scrolled to the bottom
    if (scrollTop + windowHeight >= documentHeight - 200) {
      setCurrentBatch((prevBatch) => prevBatch + 1);
    }
  }, []);

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  //Only show loading indicator for initial fetch, if show loading indicator
  // page will be refreshed for scroll event triggered fetching.
  if (status === "fetching_shorts" && currentBatch === 1) {
    return (
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap gap-4 justify-center w-full max-w-6xl">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={nanoid()}
              className="w-full w-1/1 lg:w-1/2 2xl:w-1/3 p-2 mx-4 
                max-w-[600px] animate-focusIn"
            >
              <Skeleton
                key={nanoid()}
                variant="rounded"
                width={490}
                height={170}
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
