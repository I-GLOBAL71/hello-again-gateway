'use client';

import type { CVData } from '@/lib/types';
import { Briefcase, GraduationCap, Star, Mail, Phone, MapPin, User } from 'lucide-react';
import Image from 'next/image';

export function CreativeTemplate({ cvData }: { cvData: CVData }) {
    const { personalInfo, summary, experience, education, skills } = cvData;
    const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

    return (
        <div className="font-body text-[10px] leading-snug bg-white">
            <header className="relative h-48 bg-accent/10">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                     {personalInfo.photo && (
                        <Image
                            src={personalInfo.photo}
                            alt={personalInfo.name}
                            width={120}
                            height={120}
                            className="rounded-full object-cover border-4 border-white shadow-xl"
                        />
                    )}
                </div>
            </header>
            <div className="p-8 pt-20 text-center">
                 <h1 className="font-headline text-3xl font-bold text-primary break-words">{personalInfo.name || "Your Name"}</h1>
                <p className="text-base font-semibold text-accent mt-1 break-words">{personalInfo.title || "Professional Title"}</p>
                 <div className="flex justify-center items-center gap-x-4 gap-y-1 mt-3 text-muted-foreground text-[9px] flex-wrap">
                    {personalInfo.email && <div className="flex items-center gap-1.5 break-all"><Mail size={10} />{personalInfo.email}</div>}
                    {personalInfo.phone && <div className="flex items-center gap-1.5 break-all"><Phone size={10} />{personalInfo.phone}</div>}
                    {personalInfo.address && <div className="flex items-center gap-1.5 break-words"><MapPin size={10} />{personalInfo.address}</div>}
                </div>
            </div>

            <main className="px-10 pb-10">
                {summary && (
                    <section className="mb-6 text-center max-w-2xl mx-auto">
                        <h2 className="section-title justify-center"><User size={14}/> About Me</h2>
                        <p className="text-muted-foreground whitespace-pre-wrap">{summary}</p>
                    </section>
                )}

                <div className="grid grid-cols-5 gap-8 mt-10">
                    <div className="col-span-3">
                        {experience.length > 0 && (
                            <section>
                                <h2 className="section-title"><Briefcase size={14} /> Experience</h2>
                                <div className="space-y-4">
                                    {experience.map(exp => (
                                    <div key={exp.id} className="p-4 rounded-lg border border-border/60">
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
                     <div className="col-span-2">
                         {education.length > 0 && (
                            <section className="mb-6">
                                <h2 className="section-title"><GraduationCap size={14} /> Education</h2>
                                <div className="space-y-4">
                                    {education.map(edu => (
                                    <div key={edu.id}>
                                        <h3 className="font-bold text-sm break-words">{edu.degree || "Degree"}</h3>
                                        <h4 className="font-semibold text-accent text-xs break-words">{edu.institution || "Institution"}</h4>
                                        <p className="text-muted-foreground text-[9px] whitespace-nowrap">{edu.startDate} - {edu.endDate}</p>
                                        <p className="mt-1 text-muted-foreground whitespace-pre-wrap">{edu.description}</p>
                                    </div>
                                    ))}
                                </div>
                            </section>
                        )}
                        {skillsArray.length > 0 && (
                            <section>
                                <h2 className="section-title"><Star size={14} /> Skills</h2>
                                <div className="flex flex-wrap gap-2">
                                    {skillsArray.map(skill => (
                                        <span key={skill} className="bg-primary/10 text-primary font-medium text-[9px] px-2 py-1 rounded-md">{skill}</span>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
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
