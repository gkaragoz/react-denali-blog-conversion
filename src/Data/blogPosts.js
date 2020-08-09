export const blogPosts = [
  {
    id: 0,
    title:
      "Wherever far wow thus a squirrel raccoon jeez jaguar this from along",
    timeStamp: "AUGUST 7, 2020",
    category: "ART",
    imageURL:
      "https://uploads-ssl.webflow.com/5f2d76c867914d5d40e5ea3a/5f2d76c867914d41c5e5eac5_photo-1441512673622-3eaa1c39ba28.jpg",
    imageALT: "01",
    description:
      'The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind',
  },
  {
    id: 1,
    title: "Coffee sugar, chicory seasonal espresso barista americano",
    timeStamp: "AUGUST 7, 2020",
    category: "MUSIC",
    imageURL:
      "https://uploads-ssl.webflow.com/5f2d76c867914d5d40e5ea3a/5f2d76c867914dbc97e5eac3_photo-1416934625760-d56f5e79f6fe.jpg",
    imageALT: "02",
    description:
      "Arista, percolator, cream, aromatic, fair trade, breve body instant lungo blue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic. Galão robusta instant, decaffeinated, so fair trade wings.",
  },
  {
    id: 2,
    title: "According a funnily until pre-set or arrogant well cheerful",
    timeStamp: "AUGUST 7, 2020",
    category: "MUSIC",
    imageURL:
      "https://uploads-ssl.webflow.com/5f2d76c867914d5d40e5ea3a/5f2d76c867914db9ede5eac4_photo-1416949929422-a1d9c8fe84af.jpg",
    imageALT: "03",
    description:
      "Single shot cultivar beans as chicory caffeine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated.",
  },
  {
    id: 3,
    title: "Overlaid the jeepers uselessly much excluding",
    timeStamp: "AUGUST 7, 2020",
    category: "TECH",
    imageURL:
      "https://uploads-ssl.webflow.com/5f2d76c867914d5d40e5ea3a/5f2d76c867914d7e3fe5eac6_photo-1443304895043-ef30921332c5.jpg",
    imageALT: "04",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    id: 4,
    title: "Coffee variety macchiato, as organic ut variety caffeine americano",
    timeStamp: "AUGUST 7, 2020",
    category: "TRAVEL",
    imageURL:
      "https://uploads-ssl.webflow.com/5f2d76c867914d5d40e5ea3a/5f2d76c867914d6ff6e5eac7_3f4eb74a.jpg",
    imageALT: "05",
    description:
      "Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato.",
  },
];

const getFeaturedPosts = () => {
  const randomElement01 =
    blogPosts[Math.floor(Math.random() * blogPosts.length)];
  const newBlogPosts = blogPosts.filter((bp) => bp !== randomElement01);
  const randomElement02 =
    newBlogPosts[Math.floor(Math.random() * newBlogPosts.length)];
  return [randomElement01, randomElement02];
};

export const featuredPosts = getFeaturedPosts();

export const getBlogPost = (id) => {
  return blogPosts.find((blogPost) => blogPost.id === id);
};
