"use client";
import { batchSize } from "@/common/types/short/shortTypes";
import ShortCard from "@/frontend/feature/short/ShortCard";
import { useAppDispatch, useAppSelector } from "@/frontend/lib/hooks";
import { fetchShorts } from "@/frontend/lib/redux/short/shortsSlice";
import { useCallback, useEffect, useState } from "react";

export default function ShortList() {
  const shorts = useAppSelector((state) => state.shorts.shorts);
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

  return (
    <div className="flex flex-col items-center animate-focusIn my-8">
      {shorts.map((short) => (
        <ShortCard key={short._id} short={short} />
      ))}
    </div>
  );
}
