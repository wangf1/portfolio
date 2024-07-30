import { Short } from "@/common/types/short/shortTypes";
import { MarkdownRenderer } from "@/frontend/common/MarkdownRender";
import { useAppDispatch, useAppSelector } from "@/frontend/lib/hooks";
import { updateThumbs } from "@/frontend/lib/redux/short/shortsSlice";
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import { useEffect, useState } from "react";

interface ShortCardProps {
  short: Short;
}

export default function ShortCard({ short }: ShortCardProps) {
  const status = useAppSelector((state) => state.shorts.status);
  const dispatch = useAppDispatch();

  const [thumbUpDisabled, setThumbUpDisabled] = useState(false);
  const [thumbDownDisabled, setThumbDownDisabled] = useState(false);
  const [showThumbUpTooltip, setShowThumbUpTooltip] = useState(false);
  const [showThumbDownTooltip, setShowThumbDownTooltip] = useState(false);

  useEffect(() => {
    if (status !== "loading") {
      setThumbUpDisabled(false);
      setThumbDownDisabled(false);
    }
    const thumbUps = short.thumbUps ?? 0;
    const thumbDowns = short.thumbDowns ?? 0;
    if (thumbUps >= 50) {
      setThumbUpDisabled(true);
      setShowThumbUpTooltip(true);
    }
    if (thumbDowns >= 20) {
      setThumbDownDisabled(true);
      setShowThumbDownTooltip(true);
    }
  }, [short.thumbUps, short.thumbDowns, status]);

  const handleThumbUpOrDown = (isThumbUp: boolean) => {
    if (isThumbUp) {
      setThumbUpDisabled(true);
    } else {
      setThumbDownDisabled(true);
    }
    dispatch(
      updateThumbs({
        shortId: short._id,
        isThumbUp,
      })
    );
  };

  return (
    <Card
      sx={{
        marginBottom: 2,
        borderRadius: 2,
        backgroundColor: "transparent",
      }}
    >
      <CardContent>
        <Box>
          {short.isPinned && "📌"}
          {short.date && (
            <Typography variant="caption" color="text.secondary">
              {format(new Date(short.date), "MMM d'th', yyyy, h:mm:ss a")}
            </Typography>
          )}
        </Box>
        {Array.isArray(short.tags) && short.tags.length > 0 && (
          <div style={{ marginTop: 10 }}>
            {short.tags.map((tag) => (
              <Chip key={tag} label={tag} style={{ margin: 2 }} />
            ))}
          </div>
        )}
        <Typography variant="body2" color="text.secondary" paragraph>
          <MarkdownRenderer content={short.content} />
        </Typography>
      </CardContent>

      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Tooltip
            title={
              <div className="text-lg">
                {showThumbUpTooltip
                  ? "Thumb Up limit reached! Time for a break! 🥳"
                  : ""}
              </div>
            }
          >
            <span>
              <IconButton
                color="success"
                onClick={() => handleThumbUpOrDown(true)}
                disabled={thumbUpDisabled}
              >
                <ThumbUp />
              </IconButton>
            </span>
          </Tooltip>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ marginLeft: 0.5 }}
          >
            {short.thumbUps || 0}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Tooltip
            title={
              <div className="text-lg">
                {showThumbDownTooltip
                  ? "Thumb Down limit reached! That's enough! 😅"
                  : ""}
              </div>
            }
          >
            <span>
              <IconButton
                color="warning"
                onClick={() => handleThumbUpOrDown(false)}
                disabled={thumbDownDisabled}
              >
                <ThumbDown />
              </IconButton>
            </span>
          </Tooltip>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ marginLeft: 0.5 }}
          >
            {short.thumbDowns || 0}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
