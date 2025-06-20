
import { ChevronDown, Code, Smartphone } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Muhammad Rehan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Saeed
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-xl md:text-2xl text-slate-300">
              <Code className="text-blue-400" />
              <span>Computer Science Graduate</span>
            </div>
            <div className="hidden md:block w-1 h-8 bg-slate-600"></div>
            <div className="flex items-center gap-2 text-xl md:text-2xl text-slate-300">
              <Smartphone className="text-purple-400" />
              <span>Flutter Developer</span>
            </div>
          </div>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative mobile solutions and healthcare systems. 
            Ready to bring creative ideas to life through code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="text-slate-400 hover:text-white transition-colors" size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
