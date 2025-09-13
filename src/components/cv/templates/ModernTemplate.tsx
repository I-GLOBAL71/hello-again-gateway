'use client';

import type { CVData } from '@/lib/types';
import { Briefcase, GraduationCap, Star, Mail, Phone, MapPin, User, PencilRuler } from 'lucide-react';
import Image from 'next/image';

export function ModernTemplate({ cvData }: { cvData: CVData }) {
    const { personalInfo, summary, experience, education, skills } = cvData;
    const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

    return (
        <div className="bg-white text-gray-800 h-full flex font-body text-[10px] leading-snug overflow-y-auto">
            <aside className="w-1/3 bg-gray-100 p-6 flex flex-col text-gray-700">
                {personalInfo.photo && (
                    <div className="flex justify-center mb-6">
                        <Image
                            src={personalInfo.photo}
                            alt={personalInfo.name}
                            width={120}
                            height={120}
                            className="rounded-full object-cover border-4 border-white shadow-md"
                        />
                    </div>
                )}
                <div className="text-center mb-8">
                    <h1 className="font-headline text-2xl font-bold text-gray-900 break-words">{personalInfo.name || "Your Name"}</h1>
                    <p className="text-base text-primary mt-1 break-words">{personalInfo.title || "Professional Title"}</p>
                </div>

                <div className="space-y-4 text-xs">
                    <h2 className="sidebar-title">Contact</h2>
                    {personalInfo.email && <div className="flex items-start gap-2 break-all"><Mail size={12} className="mt-0.5 shrink-0" /><span>{personalInfo.email}</span></div>}
                    {personalInfo.phone && <div className="flex items-start gap-2 break-all"><Phone size={12} className="mt-0.5 shrink-0" /><span>{personalInfo.phone}</span></div>}
                    {personalInfo.address && <div className="flex items-start gap-2 break-words"><MapPin size={12} className="mt-0.5 shrink-0" /><span>{personalInfo.address}</span></div>}
                </div>

                <div className="space-y-4 mt-8">
                    <h2 className="sidebar-title">Skills</h2>
                    <div className="flex flex-wrap gap-1.5">
                        {skillsArray.map(skill => (
                            <span key={skill} className="bg-gray-300 text-gray-800 text-[9px] font-medium px-2 py-1 rounded">{skill}</span>
                        ))}
                    </div>
                </div>
                 <div className="space-y-4 mt-8">
                    <h2 className="sidebar-title">Education</h2>
                     {education.map(edu => (
                        <div key={edu.id} className="text-xs">
                           <h3 className="font-bold break-words">{edu.degree || "Degree"}</h3>
                           <p className="text-gray-600 break-words">{edu.institution || "Institution"}</p>
                           <p className="text-gray-500 text-[9px] whitespace-nowrap">{edu.startDate} - {edu.endDate}</p>
                        </div>
                    ))}
                </div>

                 <style jsx>{`
                    .sidebar-title {
                        @apply font-headline text-sm font-semibold text-gray-800 border-b border-gray-300 pb-1 mb-2;
                    }
                `}</style>
            </aside>
            <main className="w-2/3 p-8">
                 {summary && (
                    <section className="mb-8">
                        <h2 className="section-title"><User size={16} /> Summary</h2>
                        <p className="text-gray-600 whitespace-pre-wrap">{summary}</p>
                    </section>
                )}
                
                {experience.length > 0 && (
                    <section>
                        <h2 className="section-title"><Briefcase size={16} /> Work Experience</h2>
                        <div className="space-y-5">
                            {experience.map(exp => (
                                <div key={exp.id} className="relative pl-4">
                                    <div className="absolute left-0 h-full w-0.5 bg-gray-200"></div>
                                    <div className="absolute left-[-5.5px] top-1 h-3 w-3 rounded-full bg-primary"></div>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="font-bold text-sm break-words">{exp.role || "Role"}</h3>
                                        <p className="text-gray-500 text-[9px] whitespace-nowrap">{exp.startDate} - {exp.endDate}</p>
                                    </div>
                                    <h4 className="font-semibold text-gray-600 break-words">{exp.company || "Company"}</h4>
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

                 <style jsx>{`
                    .section-title {
                       @apply font-headline text-lg font-bold text-primary pb-2 mb-4 flex items-center gap-2;
                    }
                `}</style>
            </main>
        </div>
    );
}
