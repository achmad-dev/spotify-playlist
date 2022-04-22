import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";

const UserProfilePage = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div
      style={{
        margin: "0 auto",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            width="140"
            image={
              user.images.length < 0
                ? user.images[0].url
                : "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
            }
            alt={user.display_name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.display_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              user email:{user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              user id:{user.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              user country:{user.country}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default UserProfilePage;
