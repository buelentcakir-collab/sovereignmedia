import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'ttpa-impact',
    title: 'The TTPA Impact: Why Google and Meta are exiting political ads',
    excerpt: 'The Transparency and Targeting of Political Advertising regulation has triggered a seismic shift in how Big Tech platforms approach political and institutional advertising. Understanding the implications is critical for any pan-European communicator.',
    category: 'Regulation',
    author: 'SovereignMedia Research',
    date: 'January 8, 2026',
    readTime: '8 min read',
  },
  {
    id: 'digital-sovereignty',
    title: 'Building Digital Sovereignty: A guide for EU Institutions',
    excerpt: 'European institutions face a unique challenge: how to maintain effective public communication while reducing dependency on American technology platforms. This guide outlines a strategic framework for institutional digital sovereignty.',
    category: 'Strategy',
    author: 'SovereignMedia Research',
    date: 'January 3, 2026',
    readTime: '12 min read',
  },
  {
    id: 'media-inhousing',
    title: 'Media Inhousing: Why agencies need to own their tech stack in 2026',
    excerpt: 'The convergence of privacy regulation, platform restrictions, and signal loss has created an existential challenge for agencies. Those that thrive will be those that build independent capabilities now.',
    category: 'Advisory',
    author: 'SovereignMedia Research',
    date: 'December 28, 2025',
    readTime: '10 min read',
  },
];

const Insights = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-subtle">
        <div className="container-wide mx-auto px-6 md:px-12 lg:px-24">
          <ScrollAnimation animation="fade-up">
            <span className="text-cyan text-sm font-semibold uppercase tracking-wider mb-4 block">
              Insights
            </span>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-tight mb-8 max-w-3xl">
              Industry Analysis & Strategic Perspectives
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-xl text-slate max-w-2xl">
              Expert analysis on the evolving landscape of European digital media, 
              regulatory compliance, and institutional communication.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-background">
        <div className="container-wide mx-auto section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollAnimation key={post.id} animation="fade-up" delay={index * 100}>
                <article className="card-elevated h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-cyan/10 text-cyan rounded-sm">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-xl font-bold text-navy mb-4 leading-tight hover:text-cyan transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-slate leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-slate-light mb-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  {/* Read More */}
                  <button className="text-cyan font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all">
                    Read Article <ArrowRight size={18} />
                  </button>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-navy">
        <div className="container-narrow mx-auto section-padding text-center">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-slate-light mb-10 max-w-2xl mx-auto">
              Subscribe to receive our latest analysis on European digital media regulation, 
              institutional communication, and agency strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-sm bg-navy-light border border-slate/30 text-white placeholder:text-slate-light focus:outline-none focus:border-cyan"
              />
              <button className="btn-accent whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-slate-light mt-4">
              Unsubscribe anytime. No spam, just insights.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
