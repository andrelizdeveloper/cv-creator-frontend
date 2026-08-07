// Modules
import { useForm } from 'react-hook-form';

// Interfaces
import {
    UseHandleCvFormReturn,
    UseHandleCvFormInitialValues,
} from './use-handle-cv-form.interfaces';

const initialStateWithSelfInformation: UseHandleCvFormInitialValues = {
    userInformation: {
        userName: 'Andre Lizarán',
        userEmail: 'andrelizdeveloper@gmail.com',
        userPhone: '2293460202',
        userLocation: 'CDMX, México',
        userDescription:
            'My name is André Lizarán, and I am a Fullstack Developer with four years of professional experience. I have collaborated on projects for companies and independent clients, including consultancy work, delivering high-quality solutions tailored to diverse needs. Based in Veracruz, México, I bring a strong passion for technology and problem-solving to every project I undertake. In my free time, I enjoy playing video games, volleyball, and spending time with friends.',
    },
    educationInformation: [
        {
            schoolName: 'Instituto Tecnológico de Veracruz',
            schoolDegree: 'Computer Systems Engineering',
            schoolStartDate: 'August 2018',
            schoolEndDate: 'August 2023',
        },
    ],
    jobExperienceInformation: [
        {
            jobCompany: 'Oliver Wyman',
            jobPosition: 'Fullstack Developer - Hybrid',
            jobStartDate: 'March 2026',
            jobEndDate: 'Present',
            jobDescription:
                '- Development and maintenance of web applications using React, implementing dynamic user interfaces, optimizing performance, and ensuring cross-browser compatibility.\n- Development and maintenance of backend services using Node.js, designing RESTful APIs, managing databases, and ensuring secure data handling and storage.\n- Collaboration with cross-functional teams to gather requirements, define project scope, and deliver high-quality software solutions that meet client needs.\n- Implementation of automated testing frameworks to ensure code quality, reduce bugs, and maintain a reliable software development lifecycle.',
        },
        {
            jobCompany: 'Blau Corp',
            jobPosition: 'Fullstack Developer - Home Office',
            jobStartDate: 'January 2021',
            jobEndDate: 'February 2026',
            jobDescription:
                '- Development and maintenance of web platforms using React, implementing modular components, enhancing UI/UX behavior, and ensuring optimal performance across different devices and browsers.\n- Development and maintenance of backend services using Node.js, designing scalable APIs, integrating third-party services, and applying best practices for security, performance, and data management.\n- Development and maintenance of mobile applications using Kotlin, building robust features, improving app stability, and ensuring seamless interaction with backend services and device capabilities.\n- Creation of a shared library for resource distribution across different web platforms using React and MUI, standardizing components, styles, and utilities to improve consistency, reduce duplication, and accelerate development across multiple projects.\n- Testing and validation of web components with Jest and Vitest, ensuring reliability, preventing regressions, and maintaining high-quality standards through automated unit and integration tests.\n- Organization and management of tasks for the software engineering team, coordinating priorities, defining workflows, and ensuring timely delivery of new features and improvements.\n- Troubleshooting technical issues and providing customer support, diagnosing problems, proposing effective solutions, and ensuring a smooth experience for users and clients.\n- Managing the onboarding process for new clients, guiding them through platform configuration, providing training when needed, and ensuring a clear understanding of available features and workflows.',
        },
        {
            jobCompany: 'Circulo de Expertos',
            jobPosition: 'Fullstack Developer - Home Office',
            jobStartDate: 'November 2023',
            jobEndDate: 'January 2025',
            jobDescription:
                '- Development and maintenance of a web platform using React, implementing reusable components, optimizing performance, and ensuring a responsive and user-friendly interface.\n- Development and maintenance of a backend system using Node.js, including the creation of RESTful APIs, integration with databases, and implementation of secure and scalable server-side logic.\n- Generation of QR codes for access control, enabling streamlined user entry, improving event flow, and enhancing security through unique code validation.\n- Creation of data-driven charts for event analytics, transforming raw event information into meaningful visual insights to support decision-making and improve operational efficiency.',
        },
    ],
    toolsInformation: {
        toolName:
            'Javascript, TypeScript, React, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, HTML5, CSS3, SASS, Material-UI (MUI), Git, GitHub, GitLab, Docker, Jest, Vitest, Kotlin, Android, Figma, Firebase',
    },
};

const initialState: UseHandleCvFormInitialValues = {
    userInformation: {
        userName: '',
        userEmail: '',
        userPhone: '',
        userLocation: '',
        userDescription: '',
    },
    educationInformation: [
        {
            schoolName: '',
            schoolDegree: '',
            schoolStartDate: '',
            schoolEndDate: '',
        },
    ],
    jobExperienceInformation: [
        {
            jobCompany: '',
            jobPosition: '',
            jobStartDate: '',
            jobEndDate: '',
            jobDescription: '',
        },
    ],
    toolsInformation: {
        toolName: '',
    },
};

export function useHandleCvForm(): UseHandleCvFormReturn {
    const { watch, setValue, reset } = useForm<UseHandleCvFormInitialValues>({
        defaultValues: initialState,
    });

    const userInformation = watch('userInformation');
    const toolsInformation = watch('toolsInformation');
    const educationInformation = watch('educationInformation');
    const jobExperienceInformation = watch('jobExperienceInformation');

    return {
        userInformation: {
            userName: {
                value: userInformation.userName,
                onChange: value =>
                    setValue('userInformation.userName', value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
            userEmail: {
                value: userInformation.userEmail,
                onChange: value =>
                    setValue('userInformation.userEmail', value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
            userPhone: {
                value: userInformation.userPhone,
                onChange: value =>
                    setValue('userInformation.userPhone', value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
            userLocation: {
                value: userInformation.userLocation,
                onChange: value =>
                    setValue('userInformation.userLocation', value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
            userDescription: {
                value: userInformation.userDescription,
                onChange: value =>
                    setValue('userInformation.userDescription', value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
        },
        educationInformation: educationInformation.map((education, index) => ({
            schoolName: {
                value: education.schoolName,
                onChange: value =>
                    setValue(`educationInformation.${index}.schoolName`, value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
            schoolDegree: {
                value: education.schoolDegree,
                onChange: value =>
                    setValue(`educationInformation.${index}.schoolDegree`, value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
            schoolStartDate: {
                value: education.schoolStartDate,
                onChange: value =>
                    setValue(`educationInformation.${index}.schoolStartDate`, value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
            schoolEndDate: {
                value: education.schoolEndDate,
                onChange: value =>
                    setValue(`educationInformation.${index}.schoolEndDate`, value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
        })),
        jobExperienceInformation: jobExperienceInformation.map((job, index) => ({
            jobCompany: {
                value: job.jobCompany,
                onChange: value =>
                    setValue(`jobExperienceInformation.${index}.jobCompany`, value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
            jobPosition: {
                value: job.jobPosition,
                onChange: value =>
                    setValue(`jobExperienceInformation.${index}.jobPosition`, value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
            jobStartDate: {
                value: job.jobStartDate,
                onChange: value =>
                    setValue(`jobExperienceInformation.${index}.jobStartDate`, value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
            jobEndDate: {
                value: job.jobEndDate,
                onChange: value =>
                    setValue(`jobExperienceInformation.${index}.jobEndDate`, value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
            jobDescription: {
                value: job.jobDescription,
                onChange: value =>
                    setValue(`jobExperienceInformation.${index}.jobDescription`, value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
        })),
        toolsInformation: {
            toolName: {
                value: toolsInformation.toolName,
                onChange: value =>
                    setValue('toolsInformation.toolName', value, {
                        shouldDirty: true,
                        shouldTouch: true,
                    }),
            },
        },
        addEducationInformation: () => {
            const nextEducationInformation = [
                ...educationInformation,
                {
                    schoolName: '',
                    schoolDegree: '',
                    schoolStartDate: '',
                    schoolEndDate: '',
                },
            ];
            setValue('educationInformation', nextEducationInformation, {
                shouldDirty: true,
                shouldTouch: true,
            });
        },
        removeEducationInformation: index => {
            if (educationInformation.length <= 1) {
                return;
            }
            const nextEducationInformation = educationInformation.filter(
                (_, currentIndex) => currentIndex !== index,
            );

            setValue('educationInformation', nextEducationInformation, {
                shouldDirty: true,
                shouldTouch: true,
            });
        },
        addJobExperienceInformation: () => {
            const nextJobExperienceInformation = [
                ...jobExperienceInformation,
                {
                    jobCompany: '',
                    jobPosition: '',
                    jobStartDate: '',
                    jobEndDate: '',
                    jobDescription: '',
                },
            ];

            setValue('jobExperienceInformation', nextJobExperienceInformation, {
                shouldDirty: true,
                shouldTouch: true,
            });
        },

        removeJobExperienceInformation: index => {
            if (jobExperienceInformation.length <= 1) {
                return;
            }

            const nextJobExperienceInformation = jobExperienceInformation.filter(
                (_, currentIndex) => currentIndex !== index,
            );

            setValue('jobExperienceInformation', nextJobExperienceInformation, {
                shouldDirty: true,
                shouldTouch: true,
            });
        },
        resetForm: () => {
            reset(initialState);
        },
    };
}
