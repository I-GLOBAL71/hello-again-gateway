'use client';

import type { CVData } from '@/lib/types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Star } from 'lucide-react';
import Image from 'next/image';

export function BoldTemplate({ cvData }: { cvData: CVData }) {
  const { personalInfo, summary, experience, education, skills } = cvData;
  const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

  return (
    <div className="bg-white text-gray-800 h-full flex font-body text-[10px] leading-snug overflow-y-auto">
      <aside className="w-1/3 bg-gray-900 text-white p-8 flex flex-col items-center text-center">
        {personalInfo.photo && (
          <div className="mb-6">
            <Image
              src={personalInfo.photo}
              alt={personalInfo.name}
              width={140}
              height={140}
              className="rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>
        )}
        <h1 className="font-headline text-3xl font-bold text-white uppercase tracking-wider break-words">{personalInfo.name || "Your Name"}</h1>
        <p className="text-base text-primary mt-2 break-words">{personalInfo.title || "Professional Title"}</p>
        
        <div className="mt-auto space-y-4 text-left self-start text-sm">
            {personalInfo.email && <div className="flex items-center gap-2 break-all"><Mail size={14} className="text-primary" /><span>{personalInfo.email}</span></div>}
            {personalInfo.phone && <div className="flex items-center gap-2 break-all"><Phone size={14} className="text-primary" /><span>{personalInfo.phone}</span></div>}
            {personalInfo.address && <div className="flex items-center gap-2 break-words"><MapPin size={14} className="text-primary" /><span>{personalInfo.address}</span></div>}
        </div>
      </aside>
      <main className="w-2/3 p-10">
        {summary && (
          <section className="mb-8">
            <h2 className="section-title">Profile</h2>
            <p className="text-gray-600 whitespace-pre-wrap text-justify">{summary}</p>
          </section>
        )}
        
        {experience.length > 0 && (
          <section className="mb-8">
            <h2 className="section-title"><Briefcase size={18} /> Experience</h2>
            <div className="space-y-6">
              {experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-lg break-words">{exp.role || "Role"}</h3>
                    <p className="text-gray-500 text-xs whitespace-nowrap font-mono">{exp.startDate} - {exp.endDate}</p>
                  </div>
                  <h4 className="font-semibold text-primary text-md break-words">{exp.company || "Company"}</h4>
                  <ul className="mt-2 list-none text-gray-600 whitespace-pre-wrap text-sm">
                    {exp.description.split('\n').map((line, i) => (
                      <li key={i} className="flex gap-2 items-start"><span className="text-primary font-bold">›</span><span>{line.replace(/•\s*/, '')}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section className="mb-8">
            <h2 className="section-title"><GraduationCap size={18} /> Education</h2>
            <div className="space-y-4">
              {education.map(edu => (
                <div key={edu.id}>
                  <h3 className="font-bold text-lg break-words">{edu.degree || "Degree"}</h3>
                  <p className="font-semibold text-primary text-md break-words">{edu.institution || "Institution"}</p>
                  <p className="text-gray-500 text-xs font-mono">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {skillsArray.length > 0 && (
            <section>
              <h2 className="section-title"><Star size={18} /> Skills</h2>
                <div className="flex flex-wrap gap-3">
                    {skillsArray.map(skill => (
                        <span key={skill} className="bg-primary text-primary-foreground font-semibold text-sm px-4 py-2 rounded-sm">{skill}</span>
                    ))}
                </div>
            </section>
          )}
        <style jsx>{`
            .section-title {
                @apply font-headline text-2xl font-bold text-gray-900 border-b-4 border-primary pb-2 mb-4 flex items-center gap-3 uppercase tracking-wider;
            }
        `}</style>
      </main>
    </div>
  );
}
