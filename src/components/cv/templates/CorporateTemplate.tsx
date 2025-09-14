'use client';

import type { CVData } from '@/lib/types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Star, User } from 'lucide-react';
import Image from 'next/image';

export function CorporateTemplate({ cvData }: { cvData: CVData }) {
  const { personalInfo, summary, experience, education, skills } = cvData;
  const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

  return (
    <div className="p-8 font-body bg-white text-gray-800 text-[10px] leading-relaxed">
      <header className="flex items-center mb-8 border-b-4 border-primary pb-6">
        {personalInfo.photo && (
          <div className="mr-6">
            <Image
              src={personalInfo.photo}
              alt={personalInfo.name}
              width={100}
              height={100}
              className="rounded-md object-cover"
            />
          </div>
        )}
        <div>
          <h1 className="text-4xl font-bold font-headline text-primary break-words">{personalInfo.name || "Your Name"}</h1>
          <p className="text-lg text-gray-700 mt-1 break-words">{personalInfo.title || "Professional Title"}</p>
        </div>
        <div className="ml-auto text-right text-[9px] space-y-1">
          {personalInfo.email && <div className="flex items-center justify-end gap-1.5 break-all"><span className="truncate">{personalInfo.email}</span><Mail size={11} className="text-primary"/></div>}
          {personalInfo.phone && <div className="flex items-center justify-end gap-1.5 break-all"><span className="truncate">{personalInfo.phone}</span><Phone size={11} className="text-primary"/></div>}
          {personalInfo.address && <div className="flex items-center justify-end gap-1.5 break-words"><span className="truncate">{personalInfo.address}</span><MapPin size={11} className="text-primary"/></div>}
        </div>
      </header>
      
      <main>
        {summary && (
          <section className="mb-6">
            <h2 className="section-title"><User size={14}/> Professional Profile</h2>
            <p className="text-gray-700 whitespace-pre-wrap text-justify">{summary}</p>
          </section>
        )}

        <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
                {experience.length > 0 && (
                <section className="mb-6">
                    <h2 className="section-title"><Briefcase size={14}/> Professional Experience</h2>
                    <div className="space-y-5">
                    {experience.map(exp => (
                        <div key={exp.id}>
                        <div className="flex justify-between items-baseline">
                            <h3 className="font-bold text-[11px] break-words">{exp.role || "Role"} at <span className="text-primary font-semibold">{exp.company || "Company"}</span></h3>
                            <p className="text-gray-500 text-[9px] whitespace-nowrap">{exp.startDate} - {exp.endDate}</p>
                        </div>
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
            </div>
            <div className="col-span-1">
                {education.length > 0 && (
                <section className="mb-6">
                    <h2 className="section-title"><GraduationCap size={14}/> Education</h2>
                    <div className="space-y-4">
                    {education.map(edu => (
                        <div key={edu.id}>
                            <h3 className="font-bold text-[11px] break-words">{edu.degree || "Degree"}</h3>
                            <h4 className="font-semibold text-gray-600 break-words">{edu.institution || "Institution"}</h4>
                            <p className="text-gray-500 text-[9px] whitespace-nowrap">{edu.startDate} - {edu.endDate}</p>
                        </div>
                    ))}
                    </div>
                </section>
                )}
                
                {skillsArray.length > 0 && (
                    <section>
                    <h2 className="section-title"><Star size={14}/> Key Skills</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {skillsArray.map(skill => <li key={skill}>{skill}</li>)}
                    </ul>
                    </section>
                )}
            </div>
        </div>
      </main>
      <style jsx>{`
        .section-title {
          @apply font-headline text-base font-semibold text-primary/80 border-b border-gray-300 pb-1 mb-3 flex items-center gap-2;
        }
      `}</style>
    </div>
  );
}
