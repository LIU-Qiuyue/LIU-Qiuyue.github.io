import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-[#F4B6BE]/60">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-xs sm:text-sm">&copy; 2025 Qiuyue LIU. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/LIU-Qiuyue" className="text-slate-600 hover:text-[#EE9CA7] transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/liu-qiuyue/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-[#EE9CA7] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a href="mailto:2928780288@qq.com" className="text-slate-600 hover:text-[#EE9CA7] transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
