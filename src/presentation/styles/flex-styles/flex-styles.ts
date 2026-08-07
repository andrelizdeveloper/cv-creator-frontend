// Interfaces
import { SxObject } from '../../interfaces';

export class FlexStyles {
    static HFlex: SxObject = {
        gap: 2,
        display: 'flex',
        flexDirection: 'row',
    };

    static HFlexABaseline: SxObject = {
        gap: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
    };

    static VFlex: SxObject = {
        gap: 2,
        display: 'flex',
        flexDirection: 'column',
    };

    static HFlexACenterJCenter: SxObject = {
        gap: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    };

    static HFlexACenterJStart: SxObject = {
        gap: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    };

    static HFlexACenterJEnd: SxObject = {
        gap: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    };

    static HFlexACenterJBetween: SxObject = {
        gap: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    };
}
