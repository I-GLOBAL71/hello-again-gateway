'use client';

import type { CVData } from '@/lib/types';
import { Mail, Phone, MapPin, GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react';
import Image from 'next/image';

export function AcademicTemplate({ cvData }: { cvData: CVData }) {
  const { personalInfo, summary, experience, education, skills } = cvData;
  const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

  return (
    <div className="p-8 font-serif text-[11px] leading-relaxed bg-white text-gray-800 h-full overflow-y-auto">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold font-headline text-gray-900 break-words">{personalInfo.name || "Your Name"}</h1>
        <p className="text-lg text-gray-600 mt-1 break-words">{personalInfo.title || "Academic Title"}</p>
        <div className="flex justify-center items-center gap-x-4 gap-y-1 mt-3 text-gray-600 text-[10px] flex-wrap">
          {personalInfo.email && <div className="flex items-center gap-1.5 break-all"><Mail size={12} />{personalInfo.email}</div>}
          {personalInfo.phone && <div className="flex items-center gap-1.5 break-all"><Phone size={12} />{personalInfo.phone}</div>}
          {personalInfo.address && <div className="flex items-center gap-1.5 break-words"><MapPin size={12} />{personalInfo.address}</div>}
        </div>
      </header>

      <main>
        {summary && (
          <section className="mb-6">
            <h2 className="section-title"><BookOpen size={16} /> Research Statement</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{summary}</p>
          </section>
        )}
        
        {education.length > 0 && (
          <section className="mb-6">
            <h2 className="section-title"><GraduationCap size={16} /> Education</h2>
            <div className="space-y-4">
              {education.map(edu => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-[12px] break-words">{edu.degree || "Degree"}</h3>
                    <p className="text-gray-500 text-[10px] whitespace-nowrap">{edu.startDate} - {edu.endDate}</p>
                  </div>
                  <h4 className="font-semibold text-gray-700 break-words">{edu.institution || "Institution"}</h4>
                  <p className="mt-1 text-gray-600 whitespace-pre-wrap">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mb-6">
            <h2 className="section-title"><Briefcase size={16} /> Research Experience</h2>
            <div className="space-y-4">
              {experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-[12px] break-words">{exp.role || "Role"}</h3>
                    <p className="text-gray-500 text-[10px] whitespace-nowrap">{exp.startDate} - {exp.endDate}</p>
                  </div>
                  <h4 className="font-semibold text-gray-700 break-words">{exp.company || "Institution/Lab"}</h4>
                  <ul className="mt-1 list-disc list-inside text-gray-600 whitespace-pre-wrap">
                    {exp.description.split('\n').map((line, i) => (
                      <li key={i} className="pl-1">{line.replace(/•\s*/, '')}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {skillsArray.length > 0 && (
            <section>
              <h2 className="section-title"><Award size={16} /> Skills & Expertise</h2>
              <p className="text-gray-700">{skills}</p>
            </section>
          )}
      </main>
        <style jsx>{`
        .section-title {
          @apply font-headline text-lg font-semibold text-gray-800 border-b-2 border-gray-300 pb-1 mb-3 flex items-center gap-2;
        }
      `}</style>
    </div>
  );
}
