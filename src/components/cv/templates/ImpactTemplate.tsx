'use client';

import type { CVData } from '@/lib/types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Star } from 'lucide-react';
import Image from 'next/image';

export function ImpactTemplate({ cvData }: { cvData: CVData }) {
  const { personalInfo, summary, experience, education, skills } = cvData;
  const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

  return (
    <div className="bg-gray-900 text-white font-sans text-[10px] leading-relaxed">
      <div className="grid grid-cols-12">
        <div className="col-span-4 bg-primary/80 p-8">
            {personalInfo.photo && (
            <div className="mb-6">
                <Image
                src={personalInfo.photo}
                alt={personalInfo.name}
                width={150}
                height={150}
                className="rounded-full object-cover mx-auto border-4 border-white"
                />
            </div>
            )}
            
            <div className="text-center mb-8">
                <h1 className="font-headline text-3xl font-bold break-words">{personalInfo.name || "Your Name"}</h1>
                <p className="text-base text-gray-200 mt-1 break-words">{personalInfo.title || "Professional Title"}</p>
            </div>

            <div className="space-y-3 text-xs">
                <h2 className="sidebar-title">Contact</h2>
                {personalInfo.email && <div className="flex items-center gap-2 break-all"><Mail size={12} /><span>{personalInfo.email}</span></div>}
                {personalInfo.phone && <div className="flex items-center gap-2 break-all"><Phone size={12} /><span>{personalInfo.phone}</span></div>}
                {personalInfo.address && <div className="flex items-center gap-2 break-words"><MapPin size={12} /><span>{personalInfo.address}</span></div>}
            </div>

            {skillsArray.length > 0 && (
                <div className="mt-6">
                    <h2 className="sidebar-title">Skills</h2>
                    <ul className="list-disc list-inside text-sm">
                        {skillsArray.map(skill => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

        <div className="col-span-8 p-10">
          {summary && (
            <section className="mb-8">
              <h2 className="section-title">Summary</h2>
              <p className="text-gray-300 whitespace-pre-wrap">{summary}</p>
            </section>
          )}
          
          {experience.length > 0 && (
            <section className="mb-8">
              <h2 className="section-title">Experience</h2>
              <div className="space-y-6 relative border-l-2 border-primary/50 ml-2">
                {experience.map(exp => (
                  <div key={exp.id} className="pl-6">
                     <div className="absolute left-[-6px] h-3 w-3 rounded-full bg-primary mt-1"></div>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-base break-words text-primary">{exp.role || "Role"}</h3>
                      <p className="text-gray-400 text-[9px] whitespace-nowrap">{exp.startDate} - {exp.endDate}</p>
                    </div>
                    <h4 className="font-semibold text-gray-200 break-words">{exp.company || "Company"}</h4>
                    <ul className="mt-1 list-none text-gray-400 whitespace-pre-wrap">
                        {exp.description.split('\n').map((line, i) => (
                            <li key={i}>{line.replace(/•\s*/, '')}</li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {education.length > 0 && (
            <section>
              <h2 className="section-title">Education</h2>
              <div className="space-y-4">
                {education.map(edu => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-base break-words text-primary">{edu.degree || "Degree"}</h3>
                    <p className="font-semibold text-gray-200 break-words">{edu.institution || "Institution"}</p>
                    <p className="text-gray-400 text-[9px]">{edu.startDate} - {edu.endDate}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
       <style jsx>{`
            .sidebar-title {
                @apply font-headline text-lg font-semibold text-white border-b border-gray-400/50 pb-1 mb-2;
            }
            .section-title {
                @apply font-headline text-xl font-bold text-white uppercase tracking-wider pb-2 mb-4;
            }
        `}</style>
    </div>
  );
}
