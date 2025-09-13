'use client';

import type { CVData } from '@/lib/types';
import { Mail, Phone, MapPin } from 'lucide-react';

export function MinimalistTemplate({ cvData }: { cvData: CVData }) {
  const { personalInfo, summary, experience, education, skills } = cvData;
  const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

  return (
    <div className="p-8 font-body text-[10px] leading-relaxed bg-white text-gray-800 h-full overflow-y-auto">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold font-headline text-gray-900">{personalInfo.name || "Your Name"}</h1>
        <p className="text-base text-gray-600 mt-1">{personalInfo.title || "Professional Title"}</p>
        <div className="flex justify-center items-center gap-x-4 gap-y-1 mt-2 text-gray-500 text-[9px]">
          {personalInfo.email && <div className="flex items-center gap-1.5"><Mail size={10} />{personalInfo.email}</div>}
          {personalInfo.phone && <div className="flex items-center gap-1.5"><Phone size={10} />{personalInfo.phone}</div>}
          {personalInfo.address && <div className="flex items-center gap-1.5"><MapPin size={10} />{personalInfo.address}</div>}
        </div>
      </header>

      <main>
        {summary && (
          <section className="mb-5">
            <h2 className="section-title">Summary</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mb-5">
            <h2 className="section-title">Experience</h2>
            <div className="space-y-3">
              {experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-[11px]">{exp.role || "Role"}</h3>
                    <p className="text-gray-500 text-[9px]">{exp.startDate} - {exp.endDate}</p>
                  </div>
                  <h4 className="font-semibold text-gray-600">{exp.company || "Company"}</h4>
                   <ul className="mt-1 list-disc list-inside text-gray-600 whitespace-pre-wrap text-[9.5px]">
                      {exp.description.split('\n').map((line, i) => (
                          <li key={i} className="pl-1">{line.replace(/•\s*/, '')}</li>
                      ))}
                    </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section className="mb-5">
            <h2 className="section-title">Education</h2>
            <div className="space-y-3">
              {education.map(edu => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-[11px]">{edu.degree || "Degree"}</h3>
                     <p className="text-gray-500 text-[9px]">{edu.startDate} - {edu.endDate}</p>
                  </div>
                  <h4 className="font-semibold text-gray-600">{edu.institution || "Institution"}</h4>
                  <p className="mt-0.5 text-gray-600 whitespace-pre-wrap text-[9.5px]">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {skillsArray.length > 0 && (
            <section>
              <h2 className="section-title">Skills</h2>
              <p className="text-gray-700">{skills}</p>
            </section>
          )}
      </main>
        <style jsx>{`
        .section-title {
          @apply font-headline text-sm font-semibold text-gray-800 border-b border-gray-300 pb-1 mb-2;
        }
      `}</style>
    </div>
  );
}
