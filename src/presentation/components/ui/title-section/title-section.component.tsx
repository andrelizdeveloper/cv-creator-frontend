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
    fontFamily?: string;
}

export function TitleSection({
    title,
    shouldAddBorderBottom = true,
    textAlign = 'center',
    fontFamily,
}: TitleContentProps) {
    const titleTypographySx: SxObject = {
        ...AppTextStyles.title1,
        textAlign: textAlign,
        borderBottom: shouldAddBorderBottom ? `1px solid ${AppColorsConfig.gray[200]}` : 'none',
        fontFamily: fontFamily ?? 'Bebas Neue',
    };
    return <Typography sx={titleTypographySx}>{title}</Typography>;
}
