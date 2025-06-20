
import { Code, Smartphone, Database, Globe, Palette, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "blue",
      skills: ["Flutter", "Dart", "Firebase", "REST APIs", "State Management"]
    },
    {
      title: "Programming",
      icon: Code,
      color: "purple",
      skills: ["Dart", "Java", "Python", "JavaScript", "C++"]
    },
    {
      title: "Database",
      icon: Database,
      color: "green",
      skills: ["Firebase", "SQLite", "MySQL", "NoSQL"]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "orange",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js"]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      color: "pink",
      skills: ["Material Design", "Responsive Design", "Figma", "Adobe XD"]
    },
    {
      title: "Tools & Others",
      icon: Zap,
      color: "cyan",
      skills: ["Git", "Android Studio", "VS Code", "Agile", "Problem Solving"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400",
      green: "from-green-500/20 to-green-600/20 border-green-500/30 text-green-400",
      orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-400",
      pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30 text-pink-400",
      cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A comprehensive skill set built through academic learning and practical project development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`p-6 rounded-xl border backdrop-blur-sm hover:scale-105 transition-all duration-300 bg-gradient-to-br ${getColorClasses(category.color)}`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={24} />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-slate-300"
                    >
                      <div className="w-2 h-2 bg-current rounded-full opacity-60"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-slate-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate</h3>
            <p className="text-slate-300 mb-6">
              I'm always excited to work on new projects and collaborate with fellow developers. 
              Let's build something amazing together!
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
