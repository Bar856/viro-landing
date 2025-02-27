import { image } from "framer-motion/client";

export const siteDetails = {
    siteName: 'VIRO - ייעוץ משכנתאות ופיננסים',
    siteUrl: 'https://finwise-omega.vercel.app/',
    metadata: {
        title: 'מחוב לחופש כלכלי - הכנס',
        description: 'כנס "מחוב לחופש" – האירוע הכלכלי שישנה את חייכם! הצטרפו להרצאות מעוררות השראה שילמדו אתכם כיצד לצאת מחובות, לנהל תקציב נכון, וליצור חוסן פיננסי. אל תחמיצו את ההזדמנות לשינוי כלכלי אמיתי!',
    },
    language: 'he-IL',
    locale: 'he-IL',
    siteLogo: `${process.env.BASE_PATH || ''}/images/VIRO.png`, // or use a string for the logo e.g. "TechStartup"
    googleAnalyticsId: '',
}