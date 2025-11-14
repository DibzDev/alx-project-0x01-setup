import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p className="mt-4">This is the posts page with navigation header.</p>
      </main>
    </div>
  )
}

export default PostsPage;