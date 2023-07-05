import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

interface ISocialMedia {
    id: number;
    href: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    ariaLabel: string;
}

export const SocialMedia: ISocialMedia[] = [
    {
        id: 1,
        href: "https://www.facebook.com/Coffeedoor.Kharkov",
        icon: FacebookIcon,
        ariaLabel: "Read more about Coffeedoor in Facebook",
    },
    {
        id: 2,
        href: "https://www.instagram.com/coffeedoor.kh/",
        icon: InstagramIcon,
        ariaLabel: "Read more about Coffeedoor in Instagram",
    },
    {
        id: 3,
        href: "https://t.me/Dmytro_Kotykhin",
        icon: TelegramIcon,
        ariaLabel: "Connect with Coffeedoor in Telegram",
    },
];

export const Phone = {
    phone: '+38 099 760 98 83',
    href: 'tel:80997609883'
};

export const Email = {
    email: 'coffeedoor.kh@gmail.com'    
};