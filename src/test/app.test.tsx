import { act, render, renderHook, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup } from '@testing-library/react';

import { EducationContent } from '../presentation/modules/home/components/education-content/education-content.component';
import { JobsContent } from '../presentation/modules/home/components/jobs-content/jobs-section.component';
import { UserSection } from '../presentation/modules/home/components/user-section/user-section.component';
import { TitleSection } from '../presentation/components/ui/title-section/title-section.component';
import { useHandleCvForm } from '../presentation/modules/home/hooks/use-handle-cv-form/use-handle-cv-form.hook';

afterEach(() => {
    cleanup();
});

describe('CV creator core flows', () => {
    it('renders the user information section with the main personal details', () => {
        render(
            <UserSection
                username="Ana García"
                email="ana@example.com"
                phone="555-0123"
                location="Mexico City"
                description="Product designer focused on accessible interfaces."
            />,
        );

        expect(screen.getByText('Ana García')).toBeInTheDocument();
        expect(screen.getByText('ana@example.com/ 555-0123/ Mexico City')).toBeInTheDocument();
        expect(
            screen.getByText('Product designer focused on accessible interfaces.'),
        ).toBeInTheDocument();
    });

    it('renders fallback education labels when the values are empty', () => {
        render(
            <EducationContent
                educationInformation={[
                    {
                        schoolName: '',
                        schoolDegree: '',
                        schoolStartDate: '',
                        schoolEndDate: '',
                    },
                ]}
            />,
        );

        expect(screen.getByText('School - Degree')).toBeInTheDocument();
        expect(screen.getByText('Start - End')).toBeInTheDocument();
    });

    it('renders the job information and its description when it exists', () => {
        render(
            <JobsContent
                jobExperienceInformation={[
                    {
                        jobCompany: 'Acme',
                        jobPosition: 'Senior Frontend Developer',
                        jobStartDate: '2022',
                        jobEndDate: 'Present',
                        jobDescription: 'Built reusable UI systems and improved performance.',
                    },
                ]}
            />,
        );

        expect(screen.getByText('Acme - Senior Frontend Developer')).toBeInTheDocument();
        expect(screen.getByText('2022 - Present')).toBeInTheDocument();
        expect(
            screen.getByText('Built reusable UI systems and improved performance.'),
        ).toBeInTheDocument();
    });

    it('applies a custom font family to title sections', () => {
        render(<TitleSection title="Hello world" fontFamily="Poppins" />);

        expect(screen.getByText('Hello world')).toHaveStyle({ fontFamily: 'Poppins' });
    });

    it('stores the selected title font in the form state', () => {
        const { result } = renderHook(() => useHandleCvForm());

        act(() => {
            result.current.configurations.titleFontFamily.onChange('Poppins');
        });

        expect(result.current.configurations.titleFontFamily.value).toBe('Poppins');
    });

    it('updates the form state for user and tools information', () => {
        const { result } = renderHook(() => useHandleCvForm());

        act(() => {
            result.current.userInformation.userName.onChange('Maria López');
            result.current.toolsInformation.toolName.onChange('React, Vitest');
        });

        expect(result.current.userInformation.userName.value).toBe('Maria López');
        expect(result.current.toolsInformation.toolName.value).toBe('React, Vitest');
    });

    it('adds a new education block and resets the form to its initial values', () => {
        const { result } = renderHook(() => useHandleCvForm());

        act(() => {
            result.current.userInformation.userName.onChange('Carlos Ruiz');
            result.current.addEducationInformation();
        });

        expect(result.current.educationInformation).toHaveLength(2);
        expect(result.current.userInformation.userName.value).toBe('Carlos Ruiz');

        act(() => {
            result.current.resetForm();
        });

        expect(result.current.userInformation.userName.value).toBe('');
        expect(result.current.educationInformation).toHaveLength(1);
    });
});
