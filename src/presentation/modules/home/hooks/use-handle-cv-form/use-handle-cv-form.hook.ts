// Modules
import { useForm } from 'react-hook-form';

// Interfaces
import {
    UseHandleCvFormReturn,
    UseHandleCvFormInitialValues,
} from './use-handle-cv-form.interfaces';

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
