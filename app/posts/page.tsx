import SearchBlog from "../../components/SearchBlog";
import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

const BlogPage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      <div className=""><SearchBlog /></div>
      <div className="grid grid-cols-1 max-w-[40rem]  mx-auto  gap-4">{postPreviews}</div>
    </div>
    
  );
};

export default BlogPage;
