"use client";

import { ClipLoader } from "react-spinners";

import { Form } from "@/components/posts/form";
import { HeaderLabel } from "@/components/home/header-label";
import { PostItem } from "@/components/posts/post-item";
import { CommentFeed } from "@/components/comments/comment-feed";

import { usePost } from "@/hooks/usePost";

const PostView = ({ params }: { params: any }) => {
  const { postId } = params;
  const { data: fetchedPost, isLoading } = usePost(postId as string);

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }
  return (
    <>
      <HeaderLabel label="Tweet" showBackArrow />
      <PostItem data={fetchedPost} />
      <Form
        postId={params.postId as string}
        isComment
        placeholder="Leave a comment"
        className="mt-5"
      />
      <CommentFeed comments={fetchedPost?.comments} />
    </>
  );
};

export default PostView;
