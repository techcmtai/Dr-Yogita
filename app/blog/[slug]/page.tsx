import { notFound } from "next/navigation"
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog"
import BlogPostHero from "@/components/blog/blog-post-hero"
import BlogPostContent from "@/components/blog/blog-post-content"
import BlogPostAuthor from "@/components/blog/blog-post-author"
import RelatedPosts from "@/components/blog/related-posts"
import FooterSection from "@/components/footer-section"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Dr. Yogita Physiotherapy Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-rose-50/30 pt-20">
      <BlogPostHero post={post} />
      <BlogPostContent post={post} />
      <BlogPostAuthor />
      <RelatedPosts currentSlug={params.slug} />
      <FooterSection />
    </main>
  )
}
