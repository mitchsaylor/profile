import type { StoryBlokImage, StoryBlokLink, RichText } from '$lib/types';

export type Blok =
	| Hero
	| TextContent
	| Footer
	| ServiceList
	| ServiceCard
	| LogoCloud
	| ContactForm;
type BaseBlok = {
	_uid: string;
};
interface Hero extends BaseBlok {
	component: 'hero';
	heading: string;
	paragraph: {
		type: 'doc';
		content: RichText[];
	};
	profileImage: StoryBlokImage;
	fullName?: string;
	location?: string;
	githubUsername?: string;
	foregroundImage: StoryBlokImage;
	backgroundImage: StoryBlokImage;
}
interface TextContent extends BaseBlok {
	component: 'textContent';
	darkBackground: boolean;
	twoColumns: boolean;
	stylizeFirstLine: boolean;
	body: {
		type: 'doc';
		content: RichText[];
	};
}
interface Footer extends BaseBlok {
	component: 'footer';
	heading: string;
}
interface ServiceList extends BaseBlok {
	component: 'serviceList';
	body: ServiceCard[];
}
interface ServiceCard extends BaseBlok {
	component: 'serviceCard';
	subHeading: string;
	heading: string;
	balloonText: string;
	serviceLink: StoryBlokLink;
	paragraph: {
		type: 'doc';
		content: RichText[];
	};
	primaryLinkText: string;
	primaryLink: StoryBlokLink;
	secondaryLinkText: string;
	secondaryLink: StoryBlokLink;
}
interface LogoCloud extends BaseBlok {
	component: 'logoCloud';
	heading: string;
	logos: LogoCloudLogo[];
	backgroundImage: StoryBlokImage;
}
interface LogoCloudLogo extends BaseBlok {
	component: 'logoCloudLogo';
	link: StoryBlokLink;
	name: string;
	image: string;
}
interface ContactForm extends BaseBlok {
	component: 'contactForm';
	heading: string;
	description: {
		type: 'doc';
		content: RichText[];
	};
	submitText: string;
}
