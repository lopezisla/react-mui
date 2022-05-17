import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Link,
  Typography,
  Grid,
} from "@mui/material";

const News = ({ newsItem }) => {
  const { urlToImage, url, title, description, source } = newsItem;
  return (
    <Grid item md={6} lg={4}>
      <Link href={url} target="_blank" sx={{ textDecoration: "none" }}>
        <Card>
          {urlToImage && (
            <CardMedia
              component="img"
              alt={"Imagen de la noticia ${title}"}
              image={urlToImage}
              height={"250"}
            />
          )}
          <CardContent>
            <Typography variant="body1" color="error">
              {source.name}
            </Typography>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default News;
