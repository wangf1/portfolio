import { Blog } from "@/src/blog/blogTypes";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import * as React from "react";

const bull = (
  <Box
    component="span"
    // sx={{
    //   display: "inline-block",
    //   mx: "2px",
    //   transform: "scale(0.8)",
    //   color: "red",
    // }}
    className="inline-block mx-0.5 transform scale-75 text-red-500"
  >
    •
  </Box>
);

const createCard = (blog: Blog) => (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {format(blog.date, "MMM. d, yyyy HH:mm:ss")}
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export function BlogSummaryCard({ blog }: Readonly<{ blog: Blog }>) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{createCard(blog)}</Card>
    </Box>
  );
}
