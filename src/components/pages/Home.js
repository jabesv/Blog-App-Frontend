import NavBar from "../../layout/NavBar";
import CreateBlog from "../forms/CreateBlog";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'




const Home = (props) => {
    const [blogs, setBlogs] = useState(null)
    const history = useHistory()


useEffect(() => {
    axios
      .get('http://localhost:5002/blogs', {
        headers: {
            'x-auth-token': localStorage.getItem('userToken'),
        }
      })
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err))
}, [])

const handleDelete = (blog) => {
    axios
      .delete(`http://localhost:5002/blogs/${blog._id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setBlogs([...blogs.filter((t) => t._id !== blog._id)]);
      })
      .catch((err) => console.error(err));
  };

  const handleUpdate = (blog) => {
    history.push(`/update/${blog._id}`)
  }

  return (
    <div>
      <NavBar user={props.user} />
      <h1>Home Page</h1>

      <CreateBlog setBlogs={setBlogs} blogs={blogs} />

      {blogs &&
        blogs.map((blog) => (
          <div key={blog._id}>
            <h6>{blog.title}</h6>
            <h6>
              {blog.details}{" "}

              {blog.user === props.user._id && (
                <span
                  className="btn btn-danger"
                  style={{marginRight: '5px'}}
                  onClick={() => handleDelete(blog)}
                >
                  x
                </span>
               )}

              {blog.user === props.user._id && (
                <span
                  className="btn btn-info"
                  onClick={() => handleUpdate(blog)}
                >
                  Update
                </span>
              )}
            </h6>
          </div>
        ))}
    </div>
  );
};

export default Home;