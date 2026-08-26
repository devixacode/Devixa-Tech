import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_PROJECTS, CASE_STUDIES_DATA } from '../data/websiteData';
import { ProjectItem, CaseStudy } from '../types';
import { SectionHeading } from './AnimatedText';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, CheckCircle, Sparkles, Layers } from 'lucide-react';

interface PortfolioSectionProps {
  onStartProject: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onStartProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const filterCategories = ['All', 'Finance & Fintech', 'E-commerce & Retail', 'Healthcare', 'Business & Corporate', 'Real Estate'];

  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.industry.includes(activeFilter));

  const handleOpenCaseStudy = (project: ProjectItem) => {
    if (project.caseStudyId && CASE_STUDIES_DATA[project.caseStudyId]) {
      setSelectedCaseStudy(CASE_STUDIES_DATA[project.caseStudyId]);
    } else {
      // Fallback structured case study based on project data
      setSelectedCaseStudy({
        id: project.id,
        title: project.name,
        client: project.client,
        industry: project.industry,
        timeline: '6 - 10 Weeks',
        challenge: `${project.client} needed an enterprise-grade digital solution to overcome manual operational constraints and scale user engagement securely.`,
        ourApproach: `Devixa Tech analyzed their workflow, mapped core system requirements, and architected a custom ${project.servicesProvided.join(', ')} solution.`,
        solution: project.shortDescription,
        technology: project.technologies,
        implementation: [
          'Requirements analysis & UX wireframing',
          'Production-ready frontend & backend development',
          'Rigorous QA and performance optimization',
          'Secure deployment and system integration'
        ],
        result: {
          highlight: project.keyResult,
          metrics: [
            { label: 'Performance', value: '99.9%' },
            { label: 'Efficiency', value: 'High' }
          ],
          summary: 'Delivered measurable business improvements and sustainable technology infrastructure.'
        }
      });
    }
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Selected Work"
          title="Our Work & Case Studies"
          highlightText="Our Work"
          description="A curated look at digital platforms, custom software solutions, and high-performance web systems we've engineered for ambitious businesses."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/[0.07] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-2xl glass-card border border-white/5 hover:border-blue-500/40 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/10"
            >
              {/* Image Preview with Overlay */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-black/30" />
                
                {/* Industry Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B0C10]/80 text-blue-400 border border-white/10 backdrop-blur-md">
                    {project.industry}
                  </span>
                </div>

                {/* Client Label */}
                <div className="absolute bottom-3 left-3.5 right-3.5 text-xs font-mono text-gray-300 font-medium truncate">
                  {project.client}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Outcome Highlight Box */}
                  <div className="p-3 rounded-xl bg-blue-500/[0.04] border border-blue-500/15 mb-5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>Key Outcome</span>
                    </div>
                    <p className="text-xs font-medium text-gray-200">
                      {project.keyResult}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-[11px] text-gray-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenCaseStudy(project)}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors py-1 group/btn"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <span className="text-[11px] text-gray-500">
                    Production Proven
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Full Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartSimilarProject={(title) => {
          onStartProject();
        }}
      />
    </section>
  );
};
