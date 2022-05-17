import { Grid, Typography } from "@mui/material";
import useNews from "../hooks/useNews";
import News from "./News";

const NewsList = () => {
  const { news } = useNews();
  console.log(news);
  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
      >
        Últimas noticias
      </Typography>
      <Grid
      container
      spacing={2}
      >
        {news.map((newsItem) => (
          <News 
          key={newsItem.url}
          newsItem={newsItem} 

          />
        ))}
      </Grid>
    </>
  );
};

export default NewsList;
