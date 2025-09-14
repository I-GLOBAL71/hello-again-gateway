'use client';

import type { CVData } from '@/lib/types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Star, User } from 'lucide-react';
import Image from 'next/image';

export function ElegantTemplate({ cvData }: { cvData: CVData }) {
  const { personalInfo, summary, experience, education, skills } = cvData;
  const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

  return (
    <div className="p-10 font-serif text-[10px] leading-relaxed bg-white text-gray-700">
      <header className="text-center mb-8 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gray-200"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200"></div>
        <div className="py-6">
            {personalInfo.photo && (
                <div className="flex justify-center mb-4">
                    <Image
                        src={personalInfo.photo}
                        alt={personalInfo.name}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                    />
                </div>
            )}
            <h1 className="text-4xl font-normal tracking-[0.2em] uppercase font-headline text-gray-800 break-words">{personalInfo.name || "Your Name"}</h1>
            <p className="text-sm tracking-[0.1em] text-gray-500 mt-2 break-words">{personalInfo.title || "Professional Title"}</p>
        </div>
      </header>

       <div className="flex justify-center items-center gap-x-6 gap-y-1 mb-8 text-gray-500 text-[9px] flex-wrap">
          {personalInfo.email && <div className="flex items-center gap-1.5 break-all"><Mail size={10} />{personalInfo.email}</div>}
          {personalInfo.phone && <div className="flex items-center gap-1.5 break-all"><Phone size={10} />{personalInfo.phone}</div>}
          {personalInfo.address && <div className="flex items-center gap-1.5 break-words"><MapPin size={10} />{personalInfo.address}</div>}
        </div>

      <main>
        {summary && (
          <section className="mb-6 text-center max-w-2xl mx-auto">
            <p className="text-gray-600 whitespace-pre-wrap italic">{summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mb-6">
            <h2 className="section-title">Experience</h2>
            <div className="space-y-4">
              {experience.map(exp => (
                <div key={exp.id} className="grid grid-cols-4 gap-4">
                  <div className="col-span-1 text-right">
                    <p className="font-semibold text-gray-700 text-[10px] whitespace-nowrap">{exp.startDate} - {exp.endDate}</p>
                  </div>
                  <div className="col-span-3 border-l-2 border-gray-200 pl-4">
                    <h3 className="font-bold text-[11px] break-words">{exp.role || "Role"}</h3>
                    <h4 className="font-semibold text-gray-600 break-words">{exp.company || "Company"}</h4>
                    <p className="mt-1 text-gray-500 whitespace-pre-wrap text-[9.5px]">{exp.description.replace(/•\s*/g, '')}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-x-12">
            {education.length > 0 && (
            <section className="mb-6">
                <h2 className="section-title">Education</h2>
                <div className="space-y-4">
                {education.map(edu => (
                    <div key={edu.id}>
                    <h3 className="font-bold text-[11px] break-words">{edu.degree || "Degree"}</h3>
                    <h4 className="font-semibold text-gray-600 break-words">{edu.institution || "Institution"}</h4>
                    <p className="text-gray-500 text-[9px]">{edu.startDate} - {edu.endDate}</p>
                    </div>
                ))}
                </div>
            </section>
            )}
            
            {skillsArray.length > 0 && (
                <section>
                <h2 className="section-title">Skills</h2>
                <p className="text-gray-600">{skills}</p>
                </section>
            )}
        </div>
      </main>
      <style jsx>{`
        .section-title {
          @apply font-headline text-lg font-normal tracking-[0.1em] text-center text-gray-500 pb-1 mb-4;
        }
      `}</style>
    </div>
  );
}
