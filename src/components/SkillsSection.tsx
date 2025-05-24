import React, { useEffect, useRef } from 'react';

interface SkillsSectionProps {
  isDarkMode: boolean;
}

// Skill categories and their items
const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'GraphQL', level: 65 },
    ],
  },
  {
    name: 'Design',
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'UI/UX', level: 85 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Animation', level: 70 },
      { name: 'Design Systems', level: 75 },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 65 },
      { name: 'VS Code', level: 90 },
      { name: 'Jira', level: 75 },
    ],
  },
];

const SkillsSection: React.FC<SkillsSectionProps> = ({ isDarkMode }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section-visible');
          
          // Animate skill bars when section becomes visible
          skillRefs.current.forEach((skillBar, index) => {
            if (skillBar) {
              setTimeout(() => {
                skillBar.style.width = `${skillBar.dataset.level}%`;
                skillBar.style.opacity = '1';
              }, 100 + index * 50);
            }
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Reset refs array when skill categories change
  useEffect(() => {
    skillRefs.current = skillRefs.current.slice(0, skillCategories.reduce((acc, category) => acc + category.skills.length, 0));
  }, []);

  let skillIndex = 0;

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`py-20 fade-in-section ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className={`h-1 w-20 mx-auto ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
            <p className={`mt-4 max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I've developed a diverse set of skills throughout my career. Here's a glimpse of my technical expertise and proficiency levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className={`p-6 rounded-xl ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50 shadow'
                }`}
              >
                <h3 className="text-xl font-bold mb-6">{category.name}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => {
                    const currentIndex = skillIndex++;
                    return (
                      <div key={skillIdx}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className={`w-full h-2 rounded-full ${
                          isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                        }`}>
                          <div 
                            ref={el => skillRefs.current[currentIndex] = el}
                            className={`h-full rounded-full transition-all duration-1000 ease-out opacity-0`}
                            style={{ width: '0%' }}
                            data-level={skill.level}
                            css={{
                              backgroundColor: getSkillColor(skill.level, isDarkMode)
                            }}
                            className={
                              skill.level > 85
                                ? `${isDarkMode ? 'bg-green-500' : 'bg-green-600'}`
                                : skill.level > 70
                                ? `${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`
                                : `${isDarkMode ? 'bg-amber-500' : 'bg-amber-600'}`
                            }
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to get color based on skill level
function getSkillColor(level: number, isDarkMode: boolean): string {
  if (level > 85) {
    return isDarkMode ? '#10B981' : '#059669'; // green
  } else if (level > 70) {
    return isDarkMode ? '#3B82F6' : '#2563EB'; // blue
  } else {
    return isDarkMode ? '#F59E0B' : '#D97706'; // amber
  }
}

export default SkillsSection;