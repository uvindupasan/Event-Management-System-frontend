export type StrapiEvent = {
  id: number;
  attributes: {
    title: string;
    description: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    slug: string;
    date: string;
    location?: string;
  };
};
