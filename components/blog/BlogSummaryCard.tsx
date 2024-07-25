import { Blog } from "@/src/blog/blogTypes";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import { ArrowUpToLineIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

const createCard = (blog: Blog, parentPath: string) => (
  <React.Fragment>
    <CardContent sx={{ pb: 0 }}>
      <Box className="flex items-center space-x-2 pb-3" color="text.secondary">
        <Typography sx={{ fontSize: 14 }}>
          {format(blog.date, "MMM. d, yyyy HH:mm:ss")}
        </Typography>
        {blog.isPinned && <ArrowUpToLineIcon size="16" />}
      </Box>
      <Typography variant="h5" component="div" className="pb-3">
        {blog.title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {blog.summary}
      </Typography>
    </CardContent>
    <CardActions sx={{ pt: 0 }}>
      <Link href={`${parentPath}/${blog._id}`} passHref>
        <Button size="small">See More</Button>
      </Link>
    </CardActions>
  </React.Fragment>
);

interface BlogSummaryCardProps {
  blog: Blog;
  className?: string;
  parentPath: string;
}

export function BlogSummaryCard({
  blog,
  className,
  parentPath,
}: Readonly<BlogSummaryCardProps>) {
  return (
    <Box sx={{ backgroundColor: "transparent" }} className={className}>
      <Card
        variant="elevation"
        sx={{
          backgroundColor: "transparent",
          borderBottom: "2px solid",
          borderColor: "divider",
          borderRadius: "16px",
        }}
      >
        {createCard(blog, parentPath)}
      </Card>
    </Box>
  );
}
