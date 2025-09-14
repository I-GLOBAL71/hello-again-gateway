'use client';

import type { CVData } from '@/lib/types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Star, User } from 'lucide-react';
import Image from 'next/image';

export function SharpTemplate({ cvData }: { cvData: CVData }) {
    const { personalInfo, summary, experience, education, skills } = cvData;
    const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

    return (
        <div className="p-8 font-sans text-[10px] leading-relaxed bg-white text-gray-900">
            <header className="mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tighter font-headline break-words">{personalInfo.name || "Your Name"}</h1>
                    <p className="text-lg text-primary mt-1 break-words">{personalInfo.title || "Professional Title"}</p>
                </div>
                 <div className="text-right text-[9px] space-y-1 text-gray-600">
                    {personalInfo.email && <p className="break-all">{personalInfo.email}</p>}
                    {personalInfo.phone && <p className="break-all">{personalInfo.phone}</p>}
                    {personalInfo.address && <p className="break-words">{personalInfo.address}</p>}
                </div>
            </header>

            <main className="grid grid-cols-12 gap-10">
                <div className="col-span-4">
                     {personalInfo.photo && (
                        <div className="mb-6">
                            <Image
                                src={personalInfo.photo}
                                alt={personalInfo.name}
                                width={180}
                                height={220}
                                className="object-cover w-full"
                            />
                        </div>
                    )}
                     {education.length > 0 && (
                        <section className="mb-6">
                            <h2 className="section-title">Education</h2>
                            <div className="space-y-4">
                            {education.map(edu => (
                                <div key={edu.id}>
                                <h3 className="font-bold text-[11px] break-words">{edu.degree || "Degree"}</h3>
                                <h4 className="font-semibold text-gray-700 break-words">{edu.institution || "Institution"}</h4>
                                <p className="text-gray-500 text-[9px]">{edu.startDate} - {edu.endDate}</p>
                                </div>
                            ))}
                            </div>
                        </section>
                    )}
                    
                    {skillsArray.length > 0 && (
                        <section>
                            <h2 className="section-title">Skills</h2>
                            <ul className="text-gray-700 space-y-1">
                                {skillsArray.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                        </section>
                    )}
                </div>

                <div className="col-span-8">
                    {summary && (
                        <section className="mb-6">
                            <h2 className="section-title">Profile</h2>
                            <p className="text-gray-700 whitespace-pre-wrap">{summary}</p>
                        </section>
                    )}

                    {experience.length > 0 && (
                    <section>
                        <h2 className="section-title">Experience</h2>
                        <div className="space-y-5">
                        {experience.map(exp => (
                            <div key={exp.id}>
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-sm break-words">{exp.role || "Role"}</h3>
                                <p className="text-gray-500 text-[9px] whitespace-nowrap">{exp.startDate} - {exp.endDate}</p>
                            </div>
                            <h4 className="font-semibold text-primary break-words">{exp.company || "Company"}</h4>
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
            </main>
            <style jsx>{`
                .section-title {
                @apply font-headline text-sm font-bold uppercase tracking-wider text-primary border-b-2 border-primary pb-1 mb-3;
                }
            `}</style>
        </div>
    );
}
