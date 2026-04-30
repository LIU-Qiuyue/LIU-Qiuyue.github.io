import { GraduationCap, MapPin } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import RevealCard from '../RevealCard';

const Education = () => {
  return (
    <section id="education" className="pt-10 sm:pt-14 md:pt-16 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading icon={GraduationCap}>Education</SectionHeading>

        <RevealCard className="mb-6 sm:mb-8">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EE9CA7] to-[#F4B6BE] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3 sm:mb-4">
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">B.Eng. (Artificial Intelligence)</h3>
                <p className="text-[#EE9CA7] font-semibold text-base sm:text-lg leading-snug">The Hong Kong University of Science & Technology (Guangzhou)</p>
              </div>
              <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#FFDDE1]/60 text-[#EE9CA7] border border-[#F4B6BE]/50 rounded-full text-xs sm:text-sm font-medium w-fit flex-shrink-0">
                Graduation: Summer 2028
              </span>
            </div>
            <p className="text-slate-600 flex items-center gap-2 text-sm">
              <MapPin size={14} />
              Guangzhou, Guangdong, China
            </p>
            <p className="text-slate-500 text-sm mt-2">Since 2024.09</p>

            <div className="mt-5 pt-5 border-t border-[#FBD0D5]/70">
              <h4 className="text-sm font-semibold text-slate-800 mb-3">Selected Honors & Awards</h4>
              <ul className="space-y-2.5 text-sm text-slate-600 leading-snug list-disc pl-5 marker:text-[#EE9CA7]/80">
                <li>Bronze Award, The 2025 CCPC Women's Division, 2025</li>
                <li>Bronze Award, The 2025 ICPC Asia Xi'an Regional Contest, 2025</li>
                <li>Second Prize, Lanqiao Cup National Software and Information Technology Professional Talent Competition, 2025</li>
                <li>Silver Award, The 1st HKUST(GZ) Programming Contest, 2025</li>
                <li>Second Prize, HKUST (GZ) Visitor System Development Competition, 2024</li>
              </ul>
            </div>
          </div>
        </RevealCard>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <RevealCard delay={0.1}>
            <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 relative overflow-hidden group h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EE9CA7] to-[#F4B6BE] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-2xl font-bold text-slate-900 mb-2">High School</div>
              <p className="text-[#EE9CA7] font-medium mb-2 text-sm sm:text-base">Chengdu Shude High School</p>
              <p className="text-slate-600 flex items-center gap-2 text-sm">
                <MapPin size={14} />
                Chengdu, Sichuan, China
              </p>
              <p className="text-slate-500 text-sm mt-2">2021.09 - 2024.06</p>

              <div className="mt-5 pt-5 border-t border-[#FBD0D5]/70">
                <h4 className="text-sm font-semibold text-slate-800 mb-3">Selected Honors & Awards</h4>
                <ul className="space-y-2.5 text-sm text-slate-600 leading-snug list-disc pl-5 marker:text-[#EE9CA7]/80">
                  <li>Third Prize, National Olympiad in Informatics in Provinces (NOIP), 2022</li>
                  <li>Second Prize, Second Round, Senior Division, Certified Software Professional (CSP), 2022</li>
                  <li>First Prize, First Round, Senior Division, Certified Software Professional (CSP), 2022</li>
                </ul>
              </div>
            </div>
          </RevealCard>

          <RevealCard delay={0.2}>
            <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 relative overflow-hidden group h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EE9CA7] to-[#F4B6BE] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-2xl font-bold text-slate-900 mb-2">Middle School</div>
              <p className="text-[#EE9CA7] font-medium mb-2 text-sm sm:text-base">Pengzhou Jiaxiang Foreign Languages School</p>
              <p className="text-slate-600 flex items-center gap-2 text-sm">
                <MapPin size={14} />
                Pengzhou, Sichuan, China
              </p>
              <p className="text-slate-500 text-sm mt-2">2018.09 - 2021.06</p>

              <div className="mt-5 pt-5 border-t border-[#FBD0D5]/70">
                <h4 className="text-sm font-semibold text-slate-800 mb-3">Selected Honors & Awards</h4>
                <ul className="space-y-2.5 text-sm text-slate-600 leading-snug list-disc pl-5 marker:text-[#EE9CA7]/80">
                </ul>
              </div>
            </div>
          </RevealCard>
        </div>
      </div>
    </section>
  );
};

export default Education;
