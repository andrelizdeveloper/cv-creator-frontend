// Components
import { TitleSection } from '../../../../components';

interface TitleContentProps {
    title: string;
    fontFamily?: string;
}

export function TitleContent({ title, fontFamily }: TitleContentProps) {
    return (
        <TitleSection
            title={title}
            shouldAddBorderBottom={false}
            textAlign="left"
            fontFamily={fontFamily}
        />
    );
}
