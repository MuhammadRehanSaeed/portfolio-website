
import { ExternalLink, Github, Smartphone, Users, Shield, ShoppingBag, Sparkles } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* UAAR Healthcare System */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Shield className="text-blue-400" size={24} />
                  </div>
                  <span className="text-blue-400 font-semibold">Final Year Project</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  UAAR Employee Healthcare System
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  A comprehensive healthcare management system designed specifically for UAAR employees. 
                  This system streamlines healthcare processes, manages employee health records, 
                  and provides an intuitive interface for both employees and healthcare administrators.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Users className="text-green-400" size={18} />
                    <span className="text-slate-300">Employee health record management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Smartphone className="text-purple-400" size={18} />
                    <span className="text-slate-300">Built with Flutter for cross-platform support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="text-blue-400" size={18} />
                    <span className="text-slate-300">Secure data handling and privacy protection</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Flutter</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Dart</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Firebase</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">Healthcare</span>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-all duration-300">
                    <Github size={16} />
                    Source Code
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-slate-700">
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded opacity-80"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-slate-600 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-600 rounded w-1/2"></div>
                      <div className="h-3 bg-slate-600 rounded w-2/3"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="h-16 bg-slate-700 rounded flex items-center justify-center">
                        <Users className="text-slate-400" size={20} />
                      </div>
                      <div className="h-16 bg-slate-700 rounded flex items-center justify-center">
                        <Shield className="text-slate-400" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Shoe Website */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-8 rounded-xl border border-slate-700">
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded opacity-80"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-slate-600 rounded w-2/3"></div>
                        <div className="h-3 bg-slate-600 rounded w-3/4"></div>
                        <div className="h-3 bg-slate-600 rounded w-1/2"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 mt-6">
                        <div className="h-12 bg-slate-700 rounded flex items-center justify-center">
                          <ShoppingBag className="text-slate-400" size={16} />
                        </div>
                        <div className="h-12 bg-slate-700 rounded flex items-center justify-center">
                          <Users className="text-slate-400" size={16} />
                        </div>
                        <div className="h-12 bg-slate-700 rounded flex items-center justify-center">
                          <Smartphone className="text-slate-400" size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-red-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <ShoppingBag className="text-orange-400" size={24} />
                  </div>
                  <span className="text-orange-400 font-semibold">E-Commerce Project</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  StepStyle Shoe Store
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  A modern e-commerce platform specializing in premium footwear. Features include 
                  product catalog, shopping cart, user authentication, and seamless checkout process. 
                  Built with responsive design for optimal shopping experience across all devices.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="text-orange-400" size={18} />
                    <span className="text-slate-300">Complete shopping cart functionality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-green-400" size={18} />
                    <span className="text-slate-300">User authentication and profiles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Smartphone className="text-purple-400" size={18} />
                    <span className="text-slate-300">Responsive design for mobile and desktop</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">Flutter</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Firebase</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">E-Commerce</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Payment Integration</span>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-all duration-300">
                    <Github size={16} />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Fashion Website */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-500/20 rounded-lg">
                    <Sparkles className="text-pink-400" size={24} />
                  </div>
                  <span className="text-pink-400 font-semibold">Fashion Platform</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  TrendVogue Fashion Hub
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  An elegant fashion e-commerce platform featuring the latest trends and styles. 
                  Includes advanced filtering, wishlist functionality, size guides, and a sophisticated 
                  UI design that reflects the premium nature of fashion retail.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-pink-400" size={18} />
                    <span className="text-slate-300">Curated fashion collections</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="text-purple-400" size={18} />
                    <span className="text-slate-300">Advanced product filtering and search</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-green-400" size={18} />
                    <span className="text-slate-300">Personal styling recommendations</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">Flutter</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">UI/UX Design</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">Fashion Tech</span>
                  <span className="px-3 py-1 bg-rose-500/20 text-rose-400 rounded-full text-sm">Responsive</span>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105">
                    <ExternalLink size={16} />
                    Explore Site
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-all duration-300">
                    <Github size={16} />
                    Source Code
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-8 rounded-xl border border-slate-700">
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded opacity-80"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-slate-600 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-600 rounded w-1/2"></div>
                      <div className="h-3 bg-slate-600 rounded w-5/6"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="h-16 bg-slate-700 rounded flex items-center justify-center">
                        <Sparkles className="text-slate-400" size={20} />
                      </div>
                      <div className="h-16 bg-slate-700 rounded flex items-center justify-center">
                        <ShoppingBag className="text-slate-400" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
