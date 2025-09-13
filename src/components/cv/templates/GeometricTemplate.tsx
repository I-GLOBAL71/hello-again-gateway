'use client';

import type { CVData } from '@/lib/types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Star, User } from 'lucide-react';
import Image from 'next/image';

export function GeometricTemplate({ cvData }: { cvData: CVData }) {
    const { personalInfo, summary, experience, education, skills } = cvData;
    const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

    return (
        <div className="font-body text-[10px] leading-snug bg-white h-full overflow-y-auto relative">
            <div className="absolute top-0 right-0 h-full w-1/3 bg-gray-100 -z-1"></div>
            <header className="p-10 pb-6 flex items-start justify-between">
                <div>
                    <h1 className="font-headline text-4xl font-bold text-primary break-words">{personalInfo.name || "Your Name"}</h1>
                    <p className="text-lg font-light text-gray-600 mt-1 break-words">{personalInfo.title || "Professional Title"}</p>
                </div>
                {personalInfo.photo && (
                    <div className="w-28 h-28 shrink-0">
                         <Image
                            src={personalInfo.photo}
                            alt={personalInfo.name}
                            width={112}
                            height={112}
                            className="object-cover w-full h-full"
                            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}
                        />
                    </div>
                )}
            </header>

            <main className="grid grid-cols-3 gap-8 px-10 pb-10">
                <div className="col-span-2">
                    {summary && (
                        <section className="mb-6">
                            <h2 className="section-title">About Me</h2>
                            <p className="text-gray-600 whitespace-pre-wrap">{summary}</p>
                        </section>
                    )}

                    {experience.length > 0 && (
                        <section>
                            <h2 className="section-title">Experience</h2>
                            <div className="space-y-4">
                                {experience.map(exp => (
                                <div key={exp.id}>
                                    <h3 className="font-bold text-sm break-words">{exp.role || "Role"}</h3>
                                    <div className="flex justify-between items-baseline">
                                        <h4 className="font-semibold text-accent break-words">{exp.company || "Company"}</h4>
                                        <p className="text-muted-foreground text-[9px] whitespace-nowrap">{exp.startDate} - {exp.endDate}</p>
                                    </div>
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
                    <section className="mb-6">
                        <h2 className="section-title">Contact</h2>
                        <div className="space-y-2 text-xs">
                            {personalInfo.email && <div className="flex items-center gap-2 break-all"><Mail size={12} className="text-primary"/>{personalInfo.email}</div>}
                            {personalInfo.phone && <div className="flex items-center gap-2 break-all"><Phone size={12} className="text-primary"/>{personalInfo.phone}</div>}
                            {personalInfo.address && <div className="flex items-center gap-2 break-words"><MapPin size={12} className="text-primary"/>{personalInfo.address}</div>}
                        </div>
                    </section>

                     {education.length > 0 && (
                        <section className="mb-6">
                            <h2 className="section-title">Education</h2>
                            <div className="space-y-3">
                                {education.map(edu => (
                                <div key={edu.id}>
                                    <h3 className="font-bold text-sm break-words">{edu.degree || "Degree"}</h3>
                                    <h4 className="text-xs text-gray-600 break-words">{edu.institution || "Institution"}</h4>
                                    <p className="text-muted-foreground text-[9px] whitespace-nowrap">{edu.startDate} - {edu.endDate}</p>
                                </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {skillsArray.length > 0 && (
                        <section>
                            <h2 className="section-title">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {skillsArray.map(skill => (
                                    <span key={skill} className="bg-primary/10 text-primary font-medium text-[9px] px-2 py-1 rounded">{skill}</span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>

            <style jsx>{`
                .section-title {
                    @apply font-headline text-base font-bold text-primary mb-3;
                }
                .section-title::after {
                    content: '';
                    display: block;
                    width: 30px;
                    height: 2px;
                    background-color: hsl(var(--primary));
                    margin-top: 4px;
                }
            `}</style>
        </div>
    );
}
