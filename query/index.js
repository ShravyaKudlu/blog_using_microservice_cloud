const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');


const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
//const comments = [];

// posts ==={
//     'hgyu':{
//         id: 'hgyu',
//         title: 'Post title',
//         comments: [
//             {id: 'jhg78t6', content: 'Comment!' }
//         ]
//     },
//     'hgyu':{
//         id: 'hgyu',
//         title: 'Post title',
//         comments: [
//             {id: 'jhg78t6', content: 'Comment!' }
//         ]
//     },
//     'hgyu':{
//         id: 'hgyu',
//         title: 'Post title',
//         comments: [
//             {id: 'jhg78t6', content: 'Comment!' }
//         ]
//     },

// }




const handleEvent = (type, data) => {
    if (type === 'PostCreated') {
        //console.log("I'm here Post");
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
    }
    if (type === 'CommentCreated') {
        //console.log("I'm here");
        const { id, content, postId, status } = data;
        console.log(postId);
        const post = posts[postId];
        post.comments.push({ id, content, status });
    }
    if (type === 'CommentModerated') {
        const { id, content, postId, status } = data;
        const post = posts[postId];
        const comment = post.comments.find(comment => {
            return comment.id === id;
        });
        comment.status = status;
        comment.content = content;
    }
}
app.get('/posts', (req, res) => {
    res.send(posts);

});
app.post('/events', (req, res) => {
    const { type, data } = req.body;
    handleEvent(type, data);
    res.send({});
});

app.listen(4002, async () => {
    try {
      const res = await axios.get("http://localhost:4005/events");
  
      if (!Array.isArray(res.data)) {
        console.log("Invalid response format. Expected an array.");
        return;
      }
  
      if (res.data.length === 0) {
        console.log("No events to process.");
        return;
      }
  
      console.log("Received events:", res.data);
  
      for (let event of res.data) {
        console.log("Processing event:", event.type);
  
        handleEvent(event.type, event.data);
      }
    } catch (error) {
      console.log("Error fetching or processing events:", error.message);
    }
  });
  