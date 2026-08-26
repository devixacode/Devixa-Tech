export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  iconName: string;
  items: string[];
  deliverables: string[];
  idealFor: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  client: string;
  industry: string;
  servicesProvided: string[];
  technologies: string[];
  shortDescription: string;
  keyResult: string;
  image: string;
  caseStudyId?: string;
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  timeline: string;
  challenge: string;
  ourApproach: string;
  solution: string;
  technology: string[];
  implementation: string[];
  result: {
    highlight: string;
    metrics: { label: string; value: string }[];
    summary: string;
  };
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface TechCategory {
  category: string;
  items: {
    name: string;
    description: string;
    badge?: string;
  }[];
}

export interface IndustryItem {
  name: string;
  description: string;
  solutionFocus: string[];
  icon: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  position: string;
  company: string;
  country: string;
  testimonial: string;
  projectType: string;
  rating: number;
  isPlaceholder?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceRequired: string;
  projectBudget: string;
  projectDetails: string;
}
