// types/footer.ts
export type FooterSection = {
  title: string;
  items: {
    name: string;
    href: string;
  }[];
};

export type FooterData = {
  description: {
    heading: string;
    text: string;
  };
  sections: FooterSection[];
  copyright: {
    text: string;
    poweredBy: {
      text: string;
      href: string;
    };
  };
};
