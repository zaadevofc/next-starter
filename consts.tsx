import { Metadata } from "next";

export const SITE_TITLE = 'Welcome to Custom Next App';
export const SITE_NAME = 'Custom Next App - edit your code in page.tsx file';
export const SITE_TYPE = 'website';
export const SITE_CREATOR = 'zaadevofc';
export const SITE_MANIFEST = '/manifest.json';
export const SITE_KEYWORDS = [''];
export const SITE_DESCRIPTION = SITE_TITLE;
export const SITE_AUTHORS = [{ name: SITE_CREATOR, url: 'https://instagram.com/zaadevofc' }];
export const SITE_EMAIL = 'zaadevofc@gmail.com';
export const SITE_GENERATOR = 'NextJS';
export const SITE_LOCALE = ['ID', 'Indonesia'];
export const SITE_URL = 'https://...';
export const SITE_IMAGE = 'https://...';
export const SITE_ICON = 'https://...';
export const SITE_TTL = 60;

export const SITE_METADATA: Metadata = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    authors: SITE_AUTHORS,
    bookmarks: SITE_URL,
    creator: SITE_CREATOR,
    abstract: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    category: SITE_TYPE,
    generator: SITE_GENERATOR,
    icons: { icon: SITE_ICON, apple: [''] },
    keywords: SITE_KEYWORDS,
    publisher: SITE_CREATOR,
    manifest: SITE_MANIFEST,
    openGraph: {
        type: SITE_TYPE,
        title: SITE_TITLE,
        siteName: SITE_NAME,
        description: SITE_DESCRIPTION,
        emails: SITE_EMAIL,
        locale: SITE_LOCALE[0],
        countryName: SITE_LOCALE[1],
        url: SITE_URL,
        alternateLocale: SITE_LOCALE[1],
        ttl: SITE_TTL,
        images: SITE_IMAGE,
    }
};