// Interfaces
import { SxObject } from '../../presentation/interfaces';
import { AppColorsConfig } from '../app-colors/app-colors.config';

export class AppTextStyles {
    static title1: SxObject = {
        fontSize: '22px',
        fontWeight: 500,
        fontFamily: 'Bebas Neue, sans-serif',
    };

    static title2: SxObject = {
        fontSize: '20px',
        fontWeight: 500,
        fontFamily: 'Bebas Neue, sans-serif',
    };

    static title3: SxObject = {
        fontSize: '18px',
        fontWeight: 500,
        fontFamily: 'Bebas Neue, sans-serif',
    };

    static subtitle1: SxObject = {
        fontSize: 18,
        fontWeight: 100,
        fontFamily: 'Bebas Neue, sans-serif',
    };

    static caption1: SxObject = {
        fontSize: 14,
        color: AppColorsConfig.gray[600],
    };
}
