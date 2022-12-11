export type WebTool = {
    title: string;
    link: string;
    logo: {
        url: string;
        title: string;
    };
};

export type Service = {
    title: string
    subTitle: string
    content: string
    icon: Icon
    button: string
}

export type Icon = "Cog" | "Mobile" | "Cloud"