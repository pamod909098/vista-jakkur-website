/*
 * Vista Spaces Blog Page — Verdant Modernism
 * Blog listing with article cards and detail view
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowLeft, User, X } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/section-heading";
import { BLOG_POSTS } from "@/lib/siteData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] as any } }),
};

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const post = BLOG_POSTS.find((p) => p.id === selectedPost);

  return (
    <div>
      <PageHero
        title="Blog & Insights"
        subtitle="Expert perspectives on real estate trends, sustainable development, investment strategies, and the future of urban living."
        bgImage="/images/vj-commercial.webp"
      />

      {/* Blog Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((blogPost, i) => (
              <motion.article
                key={blogPost.id}
                id={blogPost.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(blogPost.id)}
              >
                <div className="overflow-hidden rounded-lg h-[220px] mb-5">
                  <img
                    src={blogPost.image}
                    alt={blogPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider font-body">{blogPost.category}</span>
                <h3 className="font-display text-lg font-semibold text-charcoal-900 mt-2 group-hover:text-emerald-700 transition-colors leading-snug">
                  {blogPost.title}
                </h3>
                <p className="text-sm text-charcoal-500 mt-2 font-body line-clamp-3">{blogPost.excerpt}</p>
                <div className="flex items-center gap-3 mt-4 text-xs text-charcoal-400 font-body">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blogPost.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blogPost.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {post && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-900/60 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto pt-20"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="bg-white rounded-lg max-w-3xl w-full my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-[300px] object-cover" />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-charcoal-700" />
                </button>
              </div>
              <div className="p-8 md:p-10">
                <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider font-body">{post.category}</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal-900 mt-3 leading-snug">{post.title}</h2>
                <div className="flex items-center gap-4 mt-4 text-sm text-charcoal-400 font-body">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {post.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                </div>
                <div className="mt-6 space-y-4 text-sm text-charcoal-600 leading-relaxed font-body">
                  {post.content.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
