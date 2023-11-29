const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


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
 

app.get('/posts', (req,res) => {
   res.send(posts);

});

app.post('/events', (req,res) => {
    const { type, data } = req.body;

    if(type === 'PostCreated'){
        //console.log("I'm here Post");
        const { id, title } = data;
        posts[id] = { id, title, comments: []};
    }
    if(type === 'CommentCreated'){
        //console.log("I'm here");
        const { id, content, postId } = data;
        console.log(postId);
        const post = posts[postId];
        post.comments.push({ id, content });
    }
    console.log(posts);
    res.send({});
});

app.listen(4002,() =>{
    console.log('Listening on 4002'); 
});