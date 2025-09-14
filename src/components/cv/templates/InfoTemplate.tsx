'use client';

import type { CVData } from '@/lib/types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Star, User, Circle } from 'lucide-react';
import Image from 'next/image';

export function InfoTemplate({ cvData }: { cvData: CVData }) {
    const { personalInfo, summary, experience, education, skills } = cvData;
    const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

    return (
        <div className="font-sans text-[10px] leading-snug bg-white">
            <header className="p-8 pb-4">
                <div className="flex items-center">
                    {personalInfo.photo && (
                        <div className="mr-6">
                            <Image
                                src={personalInfo.photo}
                                alt={personalInfo.name}
                                width={100}
                                height={100}
                                className="rounded-full object-cover"
                            />
                        </div>
                    )}
                    <div>
                         <h1 className="font-headline text-4xl font-bold text-primary break-words">{personalInfo.name || "Your Name"}</h1>
                        <p className="text-lg text-gray-600 mt-1 break-words">{personalInfo.title || "Professional Title"}</p>
                    </div>
                </div>
            </header>
            
            <main className="p-8 pt-4">
                <div className="grid grid-cols-12 gap-x-8">
                    <div className="col-span-4">
                        <section className="mb-6">
                            <h2 className="section-title">Details</h2>
                            <div className="space-y-2 text-xs">
                                {personalInfo.email && <div className="flex items-start gap-2 break-all"><Mail size={12} className="mt-0.5 shrink-0 text-accent"/>{personalInfo.email}</div>}
                                {personalInfo.phone && <div className="flex items-start gap-2 break-all"><Phone size={12} className="mt-0.5 shrink-0 text-accent"/>{personalInfo.phone}</div>}
                                {personalInfo.address && <div className="flex items-start gap-2 break-words"><MapPin size={12} className="mt-0.5 shrink-0 text-accent"/>{personalInfo.address}</div>}
                            </div>
                        </section>

                         {skillsArray.length > 0 && (
                            <section className="mb-6">
                                <h2 className="section-title">Skills</h2>
                                {skillsArray.map((skill, index) => (
                                    <div key={skill} className="mb-2">
                                        <p className="text-xs font-semibold">{skill}</p>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                            <div className="bg-accent h-1.5 rounded-full" style={{width: `${(100 - index * 5)}%`}}></div>
                                        </div>
                                    </div>
                                ))}
                            </section>
                        )}

                        {education.length > 0 && (
                            <section>
                                <h2 className="section-title">Education</h2>
                                <div className="space-y-3">
                                    {education.map(edu => (
                                    <div key={edu.id}>
                                        <h3 className="font-bold text-xs break-words">{edu.degree || "Degree"}</h3>
                                        <h4 className="text-xs text-gray-600 break-words">{edu.institution || "Institution"}</h4>
                                        <p className="text-muted-foreground text-[9px] whitespace-nowrap">{edu.startDate} - {edu.endDate}</p>
                                    </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                    <div className="col-span-8">
                        {summary && (
                            <section className="mb-6">
                                <h2 className="section-title"><User size={14}/> Profile</h2>
                                <p className="text-gray-600 whitespace-pre-wrap">{summary}</p>
                            </section>
                        )}

                        {experience.length > 0 && (
                            <section>
                                <h2 className="section-title"><Briefcase size={14} /> Experience</h2>
                                <div className="space-y-4">
                                    {experience.map(exp => (
                                    <div key={exp.id}>
                                        <h3 className="font-bold text-sm break-words">{exp.role || "Role"}</h3>
                                        <div className="flex justify-between items-baseline">
                                            <h4 className="font-semibold text-accent break-words">{exp.company || "Company"}</h4>
                                            <p className="text-muted-foreground text-[9px] whitespace-nowrap">{exp.startDate} - {exp.endDate}</p>
                                        </div>
                                        <p className="mt-1 text-muted-foreground whitespace-pre-wrap">{exp.description.replace(/•\s*/g, '')}</p>
                                    </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </main>

            <style jsx>{`
                .section-title {
                    @apply font-headline text-base font-bold text-primary border-b-2 border-primary/20 pb-1 mb-4 flex items-center gap-2;
                }
            `}</style>
        </div>
    );
}
