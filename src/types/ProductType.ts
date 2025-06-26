export type Product = {
    title: string;
    description: string;
    price: string;
    image: string;
    slug: string;
  };
  
  export type ProductType = 'headphone' | 'speaker' | 'earphone';
  
  export const products: Product[] = [
    {
      title: "XX99 MARK II HEADPHONES",
      description: "High-fidelity headphones",
      price: "$299",
      image: "/Headphone.webp",
      slug: "xx99-mark-two"
    },
    {
      title: "ZX9 SPEAKER",
      description: "Powerful sound speaker",
      price: "$450",
      image: "/speaker.webp",
      slug: "zx9"
    },
    {
        title: "Audiophone Earphones",
        slug: "audiophone-earphones",
        image: "/Audiophone.webp",
        description: "Crisp earphones for everyday use",
        price: "1999"
      },
    
    // Add more products
  ];
  