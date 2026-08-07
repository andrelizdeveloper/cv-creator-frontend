// Components
import { TitleSection } from '../../../../components';

interface TitleContentProps {
    title: string;
}

export function TitleContent({ title }: TitleContentProps) {
    return <TitleSection title={title} shouldAddBorderBottom={false} textAlign="left" />;
}
