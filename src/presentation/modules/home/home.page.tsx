// Modules
import { useRef, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { useReactToPrint } from 'react-to-print';

// Interfaces
import { SxObject } from '../../interfaces';

// Components
import { BuyMeACoffeeModal } from './modals';
import { EditorToolsLayout } from './layouts';
import { ConfirmModal } from '../../components';
import { JobsContent, ToolsContent, EducationContent, UserSection } from './components';

// Configs
import { AppColorsConfig } from '../../../configs';

// Hooks
import { useHandleCvForm } from './hooks';
import { useHandleOpenedModalHook } from '../../../infrastructure';

const pageContainer1Sx: SxObject = {
    backgroundColor: AppColorsConfig.gray[50],
    height: '100%',
};

const pageContainer2Sx: SxObject = {
    padding: 2,
};

const pageContentSx: SxObject = {
    backgroundColor: AppColorsConfig.white,
    padding: 2,
    borderRadius: 1,
    border: `1px solid ${AppColorsConfig.gray[200]}`,
    gap: 2,
};

interface PageContainerProps {
    editorForm: ReturnType<typeof useHandleCvForm>;
    printableContainerRef: React.RefObject<HTMLDivElement | null>;
}

function PageContainer({ editorForm, printableContainerRef }: PageContainerProps) {
    const educationInformation = editorForm.educationInformation.map(education => ({
        schoolName: education.schoolName.value,
        schoolDegree: education.schoolDegree.value,
        schoolStartDate: education.schoolStartDate.value,
        schoolEndDate: education.schoolEndDate.value,
    }));

    const jobExperienceInformation = editorForm.jobExperienceInformation.map(job => ({
        jobCompany: job.jobCompany.value,
        jobPosition: job.jobPosition.value,
        jobStartDate: job.jobStartDate.value,
        jobEndDate: job.jobEndDate.value,
        jobDescription: job.jobDescription.value,
    }));

    return (
        <Stack sx={pageContainer1Sx}>
            <Stack sx={pageContainer2Sx} ref={printableContainerRef}>
                <Stack sx={pageContentSx}>
                    <UserSection
                        username={editorForm.userInformation.userName.value}
                        email={editorForm.userInformation.userEmail.value}
                        phone={editorForm.userInformation.userPhone.value}
                        location={editorForm.userInformation.userLocation.value}
                        description={editorForm.userInformation.userDescription.value}
                    />
                    <EducationContent educationInformation={educationInformation} />
                    <JobsContent jobExperienceInformation={jobExperienceInformation} />
                    <ToolsContent toolsValue={editorForm.toolsInformation.toolName.value} />
                </Stack>
            </Stack>
        </Stack>
    );
}

export function HomePage() {
    const printableContainerRef = useRef<HTMLDivElement | null>(null);

    const handlePrintChildrenContent = useReactToPrint({
        contentRef: printableContainerRef,
        documentTitle: 'CV Print',
    });

    const editorForm = useHandleCvForm();

    const [isLeftSidebarShowing, setIsLeftSidebarShowing] = useState(true);

    const { getIsModalOpen, closeModal, setWhichModalIsOpen } = useHandleOpenedModalHook<
        'confirm-start-over' | 'buy-me-a-coffee'
    >();

    function confirmStartOver() {
        closeModal();
        editorForm.resetForm();
    }

    return (
        <>
            <EditorToolsLayout
                editorForm={editorForm}
                onPrintClick={handlePrintChildrenContent}
                openStartOverModal={() => setWhichModalIsOpen('confirm-start-over')}
                openBuyMeACoffeeModal={() => setWhichModalIsOpen('buy-me-a-coffee')}
                isLeftSidebarShowing={isLeftSidebarShowing}
                toggleLeftSidebar={() => setIsLeftSidebarShowing(prev => !prev)}
            >
                <PageContainer
                    editorForm={editorForm}
                    printableContainerRef={printableContainerRef}
                />
            </EditorToolsLayout>
            <BuyMeACoffeeModal isOpen={getIsModalOpen('buy-me-a-coffee')} onClose={closeModal} />
            <ConfirmModal
                onClose={closeModal}
                onConfirm={confirmStartOver}
                title="Confirm to start over"
                isOpen={getIsModalOpen('confirm-start-over')}
                shouldCloseOnBackdropClick={false}
                children={
                    <Typography>
                        Are you sure you want to start over? All your progress will be lost.
                    </Typography>
                }
            />
        </>
    );
}
