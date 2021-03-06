import React, { Component } from "react";
import Nav from "../components/Nav";
import BlogBoard from "../components/BlogBoard";
import FullBlog from "../components/FullBlog";
import Footer from "../components/Footer";

class BlogPage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <BlogBoard/>
                <FullBlog/>
                <Footer />
            </div>
        )
    }
}

export default BlogPage;