import { ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  desc: string;
  tags: string[];
  link?: string;
  icon: React.ElementType;
  gradient: string;
  border: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      className={`glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500 group h-full flex flex-col ${project.border}`}
    >
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <project.icon size={20} className="text-[#E17A93]" />
      </div>
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#E17A93] transition-colors leading-snug">{project.title}</h3>
        {project.link && <ExternalLink size={14} className="text-slate-500 group-hover:text-[#E17A93] transition-colors flex-shrink-0" />}
      </div>
      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 flex-grow">{project.desc}</p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-[#F4B6BE]/60">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#FFDDE1]/60 text-slate-600 rounded-md text-[10px] sm:text-xs font-mono border border-[#FBD0D5]/70">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
