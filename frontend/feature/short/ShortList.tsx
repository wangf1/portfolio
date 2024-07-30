"use client";
import { batchSize } from "@/common/types/short/shortTypes";
import ShortCard from "@/frontend/feature/short/ShortCard";
import { useAppDispatch, useAppSelector } from "@/frontend/lib/hooks";
import { fetchShorts } from "@/frontend/lib/redux/short/shortsSlice";
import { useEffect, useState } from "react";

export default function ShortList() {
  const shorts = useAppSelector((state) => state.shorts.shorts);

  const [currentBatch, setCurrentBatch] = useState(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchShorts({ skip: (currentBatch - 1) * batchSize, take: batchSize })
    );
  }, [currentBatch]);

  return (
    <div className="flex flex-col items-center animate-focusIn my-8">
      {shorts.map((short) => {
        return <ShortCard key={short._id} short={short} />;
      })}
    </div>
  );
}
