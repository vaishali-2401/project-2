import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/configure";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;
    
    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);
    
    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                // Removed the file deletion since we're not using images
                navigate("/");
            }
        });
    };
    
    return post ? (
        <div className="py-8">
            <Container>
                {/* Header with title and edit/delete buttons */}
                <div className="w-full flex justify-between items-start mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
                    {isAuthor && (
                        <div className="flex gap-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                
                {/* Post content */}
                <div className="w-full">
                    <div className="prose prose-lg max-w-none browser-css">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
