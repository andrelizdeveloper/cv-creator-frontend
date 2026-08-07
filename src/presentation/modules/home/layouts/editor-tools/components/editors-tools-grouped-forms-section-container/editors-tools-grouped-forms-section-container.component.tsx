// Modules
import { Stack } from '@mui/material';

// Components
import { PossibleForms } from '../../../../../../components';
import { EditorsToolsGroupedFormItemContainer } from '../editors-tools-grouped-form-item-container/editors-tools-grouped-form-item-container.component';
import { EditorsToolsSectionContainer } from '../editors-tools-section-container/editors-tools-section-container.component';

interface EditorsToolsGroupedFormsSectionContainerProps {
    sectionTitle: string;
    groupTitlePrefix: string;
    groups: PossibleForms[][];
    onAddClick: () => void;
    onRemoveClick: (index: number) => void;
}

export function EditorsToolsGroupedFormsSectionContainer({
    sectionTitle,
    groupTitlePrefix,
    groups,
    onAddClick,
    onRemoveClick,
}: EditorsToolsGroupedFormsSectionContainerProps) {
    return (
        <EditorsToolsSectionContainer
            title={sectionTitle}
            shouldHaveAddButton
            onAddClick={onAddClick}
        >
            <Stack sx={{ gap: 2 }}>
                {groups.map((groupFormList, index) => (
                    <EditorsToolsGroupedFormItemContainer
                        key={index}
                        title={`${groupTitlePrefix} ${index + 1}`}
                        formList={groupFormList}
                        onRemoveClick={() => onRemoveClick(index)}
                        shouldDisableRemove={groups.length === 1}
                    />
                ))}
            </Stack>
        </EditorsToolsSectionContainer>
    );
}
