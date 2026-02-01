'use client'

import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaMedium, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations';
import { personal } from '@/contents/personal';

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

export default function Blogs() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@iamlasantha');
        const data = await response.json();

        if (data.status === 'ok') {
          // Filter out comments or other non-story items if necessary, 
          // though Medium feed usually just has stories. 
          // We take the first 3 for the home page.
          setPosts(data.items.slice(0, 3));
        } else {
          setError('Failed to fetch posts');
        }
      } catch (err) {
        setError('Error connecting to Medium');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Helper to extract image from description if thumbnail is missing
  const getThumbnail = (post: MediumPost) => {
    if (post.thumbnail && post.thumbnail.match(/^https?:\/\/.+/)) return post.thumbnail;

    // Try to extract from description
    const doc = new DOMParser().parseFromString(post.description, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.src : null; // or return a default placeholder
  };

  // Helper to strip HTML tags for excerpt
  const getExcerpt = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    // Remove images from excerpt calculation
    doc.querySelectorAll('img').forEach(img => img.remove());
    return doc.body.textContent?.slice(0, 100) + '...' || '';
  };

  if (error) return null; // Or return a fallback UI

  return (
    <section className="py-16 md:py-20 bg-transparent scroll-mt-20" id="blogs">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4">Latest Writings</h2>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {posts.map((post) => (
              <motion.article
                key={post.link}
                className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden flex flex-col h-full border border-white/5 hover:border-primary/30 group"
                variants={fadeInUp}
                {...cardHoverSmall}
              >
                <div className="relative h-48 w-full overflow-hidden bg-black/20">
                  {getThumbnail(post) ? (
                    <div className="relative w-full h-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getThumbnail(post)!}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <FaMedium className="text-4xl opacity-20" />
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-gray-400 mb-3 space-x-2">
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {new Date(post.pubDate).toLocaleDateString()}
                    </span>
                    {post.categories.length > 0 && (
                      <span className="px-2 py-1 bg-primary/10 rounded-full text-primary border border-primary/20">
                        {post.categories[0]}
                      </span>
                    )}
                  </div>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </a>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                    {getExcerpt(post.description)}
                  </p>

                  <div className="pt-4 mt-auto border-t border-white/5">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Read on Medium <FaExternalLinkAlt className="ml-2 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={personal.socials.medium} // Ensure this is added to personal.ts
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/5 hover:border-primary/50 transition-all font-medium"
            >
              <FaMedium className="mr-2" /> View All Posts
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 