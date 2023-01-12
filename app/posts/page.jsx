import Search from "../../components/Search";
import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";
import { log } from "console";

const BlogPage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  //console.log(postMetadata);
  return (
    <div className="min-h-screen">
      <Search users={postMetadata} />
    </div>
  );
};

export default BlogPage;
