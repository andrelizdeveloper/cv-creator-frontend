// Modules
import { Typography } from '@mui/material';

// Configs
import { AppColorsConfig, AppTextStyles } from '../../../../configs';

// Interfaces
import { SxObject } from '../../../interfaces';

interface TitleContentProps {
    title: string;
    shouldAddBorderBottom?: boolean;
    textAlign?: 'left' | 'center' | 'right';
}

export function TitleSection({
    title,
    shouldAddBorderBottom = true,
    textAlign = 'center',
}: TitleContentProps) {
    const titleTypographySx: SxObject = {
        ...AppTextStyles.title1,
        textAlign: textAlign,
        borderBottom: shouldAddBorderBottom ? `1px solid ${AppColorsConfig.gray[200]}` : 'none',
    };
    return <Typography sx={titleTypographySx}>{title}</Typography>;
}
