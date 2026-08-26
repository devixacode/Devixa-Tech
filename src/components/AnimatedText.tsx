import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const WordReveal: React.FC<WordRevealProps> = ({
  text,
  className = '',
  delay = 0,
  highlightWords = [],
  highlightClassName = 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 font-semibold'
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 24,
        stiffness: 120
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(6px)'
    }
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');
        const isHighlighted = highlightWords.some(
          hw => hw.toLowerCase() === cleanWord.toLowerCase() || word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block ${isHighlighted ? highlightClassName : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<CounterProps> = ({
  value,
  duration = 2,
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeProgress);

      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={`tabular-nums font-heading font-bold ${className}`}>
      {count}{suffix}
    </span>
  );
};

interface SectionHeadingProps {
  tag?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  highlightText,
  description,
  align = 'center',
  className = ''
}) => {
  const alignClasses = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl mb-14 md:mb-18 ${alignClasses} ${className}`}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-400">
            {tag}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.15]"
      >
        {highlightText ? (
          <>
            {title.split(highlightText)[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
              {highlightText}
            </span>
            {title.split(highlightText)[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-400 mt-4 leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
