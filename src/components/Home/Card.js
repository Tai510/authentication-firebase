import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import { db, auth } from "../../firebase";
import firebase from "firebase/app";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
});

export default function ImgMediaCard() {
  const [message, setMessage] = useState();
  const classes = useStyles();

  const [notify, setNotify] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection(auth.currentUser.uid)
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({ id: doc.id, item: doc.data().item }))
        );
        setNotify(parseInt(data.length));
        // console.log("Length :", notify);
        notiMessage();
      });
  }, [message, notify]);

  const notiMessage = () => {
    if (notify == 0) {
      setMessage(
        "You have no Todos. Make sure to use Todo App and stay organized"
      );
    } else {
      setMessage(`You have ${notify} Incompleted Tasks. Lets get it done!!! 💯`);
    }
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://images.unsplash.com/photo-1523634921619-37ce98c1877f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9kb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            My Todo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {message}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to="/todos">Go to Todo</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
