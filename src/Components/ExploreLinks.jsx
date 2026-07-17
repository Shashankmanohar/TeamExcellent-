import { Link, useLocation } from "react-router-dom";
import { 
  GraduationCap, 
  Stethoscope, 
  BookOpen, 
  ClipboardCheck, 
  Award, 
  Send,
  ChevronRight
} from "lucide-react";

export default function ExploreLinks() {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { to: "/jee-coaching-in-patna", label: "JEE Coaching", icon: <GraduationCap className="w-4 h-4" /> },
    { to: "/neet-coaching-in-patna", label: "NEET Coaching", icon: <Stethoscope className="w-4 h-4" /> },
    { to: "/programs/class-6-to-10", label: "Class 6-10 Foundation", icon: <BookOpen className="w-4 h-4" /> },
    { to: "/admission", label: "Admission Procedure", icon: <ClipboardCheck className="w-4 h-4" /> },
    { to: "/rank-predictor", label: "JEE/NEET Rank Predictor", icon: <Award className="w-4 h-4" /> },
    { to: "/college-predictor", label: "JEE College Predictor", icon: <Award className="w-4 h-4" /> },
    { to: "/contact", label: "Contact Us", icon: <Send className="w-4 h-4" /> },
  ];

  // Filter out the current page
  const filteredLinks = links.filter((link) => link.to !== currentPath);

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 h-[250px] w-[250px] rounded-full bg-purple-100/30 blur-[80px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 -z-10 h-[250px] w-[250px] rounded-full bg-rose-100/20 blur-[80px]" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#1e1b4b] mb-2 tracking-tight">
          Explore Other Programs & Tools
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mb-8 max-w-md mx-auto">
          Navigate quickly to our specialized preparation programs and state-of-the-art predictors.
        </p>

        {/* Links Grid */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {filteredLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-purple-600/30 rounded-2xl text-[#1e1b4b] hover:text-[#5B2D7C] transition-all duration-300 font-bold text-xs sm:text-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(91,45,124,0.06)] hover:-translate-y-0.5"
            >
              <span className="text-slate-400 group-hover:text-purple-600 transition-colors duration-300">
                {link.icon}
              </span>
              <span>{link.label}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
