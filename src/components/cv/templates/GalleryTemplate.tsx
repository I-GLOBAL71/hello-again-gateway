'use client';

import type { CVData } from '@/lib/types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Star, User } from 'lucide-react';
import Image from 'next/image';

export function GalleryTemplate({ cvData }: { cvData: CVData }) {
    const { personalInfo, summary, experience, education, skills } = cvData;
    const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

    return (
        <div className="font-body text-[10px] leading-snug bg-gray-50">
            <header className="relative h-64 bg-gray-800 flex items-center justify-center text-white">
                {personalInfo.photo ? (
                    <Image
                        src={personalInfo.photo}
                        alt={personalInfo.name}
                        fill
                        className="object-cover opacity-30"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900"></div>
                )}
                <div className="relative z-10 text-center p-8">
                    <h1 className="font-headline text-5xl font-bold break-words">{personalInfo.name || "Your Name"}</h1>
                    <p className="text-xl font-light tracking-widest mt-2 break-words uppercase">{personalInfo.title || "Professional Title"}</p>
                </div>
            </header>
            
            <main className="grid grid-cols-12 gap-8 p-10">
                <div className="col-span-4">
                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="section-title">Contact</h2>
                        <div className="space-y-3 text-xs">
                            {personalInfo.email && <div className="flex items-start gap-2 break-all"><Mail size={12} className="mt-0.5 shrink-0 text-primary" /><span>{personalInfo.email}</span></div>}
                            {personalInfo.phone && <div className="flex items-start gap-2 break-all"><Phone size={12} className="mt-0.5 shrink-0 text-primary" /><span>{personalInfo.phone}</span></div>}
                            {personalInfo.address && <div className="flex items-start gap-2 break-words"><MapPin size={12} className="mt-0.5 shrink-0 text-primary" /><span>{personalInfo.address}</span></div>}
                        </div>
                    </section>
                    
                    {skillsArray.length > 0 && (
                        <section className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h2 className="section-title">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {skillsArray.map(skill => (
                                    <span key={skill} className="bg-primary/10 text-primary font-medium text-[9px] px-2 py-1 rounded-full">{skill}</span>
                                ))}
                            </div>
                        </section>
                    )}
                    
                     {education.length > 0 && (
                        <section className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h2 className="section-title">Education</h2>
                            <div className="space-y-4">
                                {education.map(edu => (
                                <div key={edu.id}>
                                    <h3 className="font-bold text-sm break-words">{edu.degree || "Degree"}</h3>
                                    <h4 className="font-semibold text-gray-600 text-xs break-words">{edu.institution || "Institution"}</h4>
                                    <p className="text-gray-500 text-[9px] whitespace-nowrap">{edu.startDate} - {edu.endDate}</p>
                                </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                <div className="col-span-8">
                    {summary && (
                         <section className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h2 className="section-title"><User size={14}/> Profile</h2>
                            <p className="text-gray-600 whitespace-pre-wrap">{summary}</p>
                        </section>
                    )}
                    
                    {experience.length > 0 && (
                        <section className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="section-title"><Briefcase size={14} /> Experience</h2>
                            <div className="space-y-6">
                                {experience.map(exp => (
                                <div key={exp.id} className="border-l-4 border-primary pl-4">
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="font-bold text-base break-words">{exp.role || "Role"}</h3>
                                        <p className="text-gray-500 text-[9px] whitespace-nowrap">{exp.startDate} - {exp.endDate}</p>
                                    </div>
                                    <h4 className="font-semibold text-gray-700 break-words">{exp.company || "Company"}</h4>
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
                </div>
            </main>

            <style jsx>{`
                .section-title {
                    @apply font-headline text-base font-bold text-primary pb-1 mb-3 flex items-center gap-2;
                }
            `}</style>
        </div>
    );
}
