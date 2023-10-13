const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can choose your desired port

// Configure middleware for parsing JSON data and handling URL-encoded data:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Step 3: Define Your Blog Data Model
const blogs = [
    { id: 1, title: 'Blog 1', content: 'Content of Blog 1' },
    { id: 2, title: 'Blog 2', content: 'Content of Blog 2' },
  ];
  
  app.get('/blogs', (req, res) => {
    res.json(blogs);
  });
  
  app.get('/blogs/:id', (req, res) => {
    const blogId = parseInt(req.params.id);
    const blog = blogs.find((blog) => blog.id === blogId);
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  });

  app.post('/blogs', (req, res) => {
    const { title, content } = req.body;
    const newBlog = { id: blogs.length + 1, title, content };
    blogs.push(newBlog);
    res.status(201).json(newBlog);
  });

  app.put('/blogs/:id', (req, res) => {
    const blogId = parseInt(req.params.id);
    const { title, content } = req.body;
    const blogIndex = blogs.findIndex((blog) => blog.id === blogId);
    if (blogIndex !== -1) {
      blogs[blogIndex] = { ...blogs[blogIndex], title, content };
      res.json(blogs[blogIndex]);
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  });

  app.delete('/blogs/:id', (req, res) => {
    const blogId = parseInt(req.params.id);
    const blogIndex = blogs.findIndex((blog) => blog.id === blogId);
    if (blogIndex !== -1) {
      blogs.splice(blogIndex, 1);
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  
  
  
