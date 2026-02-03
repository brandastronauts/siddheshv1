import { motion } from 'framer-motion';

const HeroBackground = () => {
  // Generate floating orbs with different properties
  const orbs = [
    { size: 400, x: '10%', y: '20%', delay: 0, duration: 20, color: 'cyan' },
    { size: 300, x: '80%', y: '60%', delay: 2, duration: 25, color: 'navy' },
    { size: 200, x: '60%', y: '10%', delay: 4, duration: 18, color: 'cyan' },
    { size: 350, x: '30%', y: '70%', delay: 1, duration: 22, color: 'navy' },
    { size: 150, x: '90%', y: '30%', delay: 3, duration: 15, color: 'cyan' },
  ];

  // Generate small floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
  }));

  // Generate connection lines
  const lines = [
    { x1: '20%', y1: '30%', x2: '40%', y2: '50%', delay: 0 },
    { x1: '60%', y1: '20%', x2: '80%', y2: '40%', delay: 1 },
    { x1: '30%', y1: '60%', x2: '50%', y2: '80%', delay: 2 },
    { x1: '70%', y1: '50%', x2: '90%', y2: '70%', delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color === 'cyan' 
              ? 'radial-gradient(circle, hsl(195 100% 46% / 0.08) 0%, transparent 70%)'
              : 'radial-gradient(circle, hsl(240 93% 25% / 0.06) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* SVG layer for lines and nodes */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(195 100% 46% / 0.2)" />
            <stop offset="100%" stopColor="hsl(240 93% 25% / 0.1)" />
          </linearGradient>
        </defs>

        {/* Animated connection lines */}
        {lines.map((line, index) => (
          <motion.line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.4, 0.4, 0],
            }}
            transition={{
              duration: 8,
              delay: line.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Node points at line intersections */}
        {lines.map((line, index) => (
          <g key={`nodes-${index}`}>
            <motion.circle
              cx={line.x1}
              cy={line.y1}
              r="3"
              fill="hsl(195 100% 46% / 0.3)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 1, 0],
                opacity: [0, 0.6, 0.6, 0],
              }}
              transition={{
                duration: 8,
                delay: line.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.circle
              cx={line.x2}
              cy={line.y2}
              r="3"
              fill="hsl(240 93% 25% / 0.3)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 1, 0],
                opacity: [0, 0.6, 0.6, 0],
              }}
              transition={{
                duration: 8,
                delay: line.delay + 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </g>
        ))}
      </svg>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent-cyan/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Geometric accent shapes */}
      <motion.div
        className="absolute top-1/4 right-[15%] w-32 h-32 border border-accent-cyan/10 rounded-2xl"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-[10%] w-24 h-24 border border-primary-navy/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/3 left-[25%] w-16 h-16 border border-accent-cyan/10"
        style={{ transform: 'rotate(45deg)' }}
        animate={{
          rotate: [45, 135, 225, 315, 405],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Data visualization dots grid */}
      <div className="absolute right-[5%] top-[20%] opacity-30">
        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-primary-navy/40"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* Subtle mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, hsl(195 100% 46% / 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, hsl(240 93% 25% / 0.05) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
};

export default HeroBackground;
