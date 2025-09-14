'use client';

import type { CVData } from '@/lib/types';
import { Briefcase, GraduationCap, Star, Mail, Phone, MapPin, User } from 'lucide-react';
import Image from 'next/image';

export function ProfessionalTemplate({ cvData }: { cvData: CVData }) {
  const { personalInfo, summary, experience, education, skills } = cvData;

  const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

  return (
    <div className="p-10 font-body text-[10px] leading-snug bg-white text-foreground">
      {/* Header */}
      <header className="text-center mb-6 border-b-2 pb-5 border-primary/20">
        {personalInfo.photo && (
            <div className="flex justify-center mb-4">
                <Image 
                    src={personalInfo.photo} 
                    alt={personalInfo.name} 
                    width={90} 
                    height={90} 
                    className="rounded-full object-cover border-4 border-primary/20 p-1"
                />
            </div>
        )}
        <h1 className="font-headline text-3xl font-bold text-primary break-words">{personalInfo.name || "Your Name"}</h1>
        <p className="text-base font-semibold text-accent mt-1 break-words">{personalInfo.title || "Professional Title"}</p>
        <div className="flex justify-center items-center gap-x-4 gap-y-1 mt-3 text-muted-foreground text-[9px] flex-wrap">
          {personalInfo.email && <div className="flex items-center gap-1.5 break-all"><Mail size={10} />{personalInfo.email}</div>}
          {personalInfo.phone && <div className="flex items-center gap-1.5 break-all"><Phone size={10} />{personalInfo.phone}</div>}
          {personalInfo.address && <div className="flex items-center gap-1.5 break-words"><MapPin size={10} />{personalInfo.address}</div>}
        </div>
      </header>

      <main className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          {/* Summary */}
          {summary && (
            <section className="mb-6">
              <h2 className="section-title">
                <User size={14} className="text-primary" /> Professional Summary
              </h2>
              <p className="text-muted-foreground whitespace-pre-wrap">{summary}</p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h2 className="section-title">
                <Briefcase size={14} className="text-primary" /> Work Experience
              </h2>
              <div className="space-y-4">
                {experience.map(exp => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-sm break-words">{exp.role || "Role"}</h3>
                      <p className="text-muted-foreground text-[9px] whitespace-nowrap">{exp.startDate} - {exp.endDate}</p>
                    </div>
                    <h4 className="font-semibold text-accent break-words">{exp.company || "Company"}</h4>
                    <ul className="mt-1 list-disc list-inside text-muted-foreground whitespace-pre-wrap">
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
          {/* Skills */}
          {skillsArray.length > 0 && (
            <section className="mb-6">
              <h2 className="section-title">
                <Star size={14} className="text-primary" /> Skills
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {skillsArray.map(skill => (
                  <span key={skill} className="bg-secondary text-secondary-foreground text-[9px] font-medium px-2 py-0.5 rounded-full">{skill}</span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="section-title">
                <GraduationCap size={14} className="text-primary" /> Education
              </h2>
              <div className="space-y-4">
                {education.map(edu => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-sm break-words">{edu.degree || "Degree"}</h3>
                      <p className="text-muted-foreground text-[9px] whitespace-nowrap">{edu.startDate} - {edu.endDate}</p>
                    </div>
                    <h4 className="font-semibold text-accent break-words">{edu.institution || "Institution"}</h4>
                    <p className="mt-1 text-muted-foreground whitespace-pre-wrap">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <style jsx>{`
        .section-title {
          @apply font-headline text-base font-bold text-primary border-b border-primary/20 pb-1 mb-3 flex items-center gap-2;
        }
      `}</style>
    </div>
  );
}
