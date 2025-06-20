
import { GraduationCap, User, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <User className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Who I Am</h3>
                <p className="text-slate-300 leading-relaxed">
                  I'm Muhammad Rehan Saeed, a passionate computer science graduate with a strong 
                  foundation in software development and a specialization in Flutter mobile app development. 
                  I believe in creating solutions that make a real difference in people's lives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <GraduationCap className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <p className="text-slate-300 leading-relaxed">
                  Bachelor's in Computer Science with a focus on software engineering principles, 
                  data structures, algorithms, and mobile application development. 
                  Graduated with strong academic performance and practical project experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Award className="text-green-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Achievements</h3>
                <p className="text-slate-300 leading-relaxed">
                  Successfully completed my Final Year Project (FYP) - the UAAR Employee Healthcare System, 
                  demonstrating my ability to work on complex, real-world applications that address 
                  important organizational needs.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-2xl backdrop-blur-sm border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Degree</span>
                  <span className="text-white font-semibold">BS Computer Science</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Specialization</span>
                  <span className="text-white font-semibold">Flutter Development</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Major Project</span>
                  <span className="text-white font-semibold">Healthcare System</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Status</span>
                  <span className="text-green-400 font-semibold">Available for Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
