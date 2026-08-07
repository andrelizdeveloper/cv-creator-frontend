interface UserInformationSection {
    userName: string;
    userEmail: string;
    userPhone: string;
    userLocation: string;
    userDescription: string;
}

interface EducationInformationSection {
    schoolName: string;
    schoolDegree: string;
    schoolStartDate: string;
    schoolEndDate: string;
}

interface JobInformationSection {
    jobCompany: string;
    jobPosition: string;
    jobStartDate: string;
    jobEndDate: string;
    jobDescription: string;
}

interface ToolsInformationSection {
    toolName: string;
}

export interface UseHandleCvFormInitialValues {
    userInformation: UserInformationSection;
    educationInformation: EducationInformationSection[];
    jobExperienceInformation: JobInformationSection[];
    toolsInformation: ToolsInformationSection;
}

export interface UseHandleCvFormReturn {
    userInformation: {
        userName: {
            value: string;
            onChange: (value: string) => void;
        };
        userEmail: {
            value: string;
            onChange: (value: string) => void;
        };
        userPhone: {
            value: string;
            onChange: (value: string) => void;
        };
        userLocation: {
            value: string;
            onChange: (value: string) => void;
        };
        userDescription: {
            value: string;
            onChange: (value: string) => void;
        };
    };
    educationInformation: {
        schoolName: {
            value: string;
            onChange: (value: string) => void;
        };
        schoolDegree: {
            value: string;
            onChange: (value: string) => void;
        };
        schoolStartDate: {
            value: string;
            onChange: (value: string) => void;
        };
        schoolEndDate: {
            value: string;
            onChange: (value: string) => void;
        };
    }[];
    jobExperienceInformation: {
        jobCompany: {
            value: string;
            onChange: (value: string) => void;
        };
        jobPosition: {
            value: string;
            onChange: (value: string) => void;
        };
        jobStartDate: {
            value: string;
            onChange: (value: string) => void;
        };
        jobEndDate: {
            value: string;
            onChange: (value: string) => void;
        };
        jobDescription: {
            value: string;
            onChange: (value: string) => void;
        };
    }[];
    toolsInformation: {
        toolName: {
            value: string;
            onChange: (value: string) => void;
        };
    };
    addEducationInformation: () => void;
    removeEducationInformation: (index: number) => void;
    addJobExperienceInformation: () => void;
    removeJobExperienceInformation: (index: number) => void;
    resetForm: () => void;
}
