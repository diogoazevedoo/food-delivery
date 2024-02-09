const MENU = [
  {
    title: "Snack of the day",
    data: [
      {
        id: "1",
        title: "X-React",
        price: 7,
        description:
          "Such a beautiful burger that made me hungry while I was designing this layout for the project...",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Brioche bun;",
          "2x smash beef patties (house blend) of 80g each;",
          "Cheddar cheese;",
          "Lettuce;",
          "Tomato;",
          "Pickles;",
          "Onion;",
          "House sauce;",
        ],
      },
    ],
  },
  {
    title: "Discounts",
    data: [
      {
        id: "2",
        title: "X-JavaScript",
        price: 6.95,
        description:
          "The ingredients of this burger change every week, so you will always have a surprise...",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Brioche bun;",
          "2x smash beef patties (house blend) of 80g each;",
          "Cheddar cheese;",
          "Lettuce;",
          "Tomato;",
          "Pickles;",
          "Onion;",
          "House sauce;",
        ],
      },
      {
        id: "3",
        title: "X-Cobol",
        price: 9.95,
        description:
          "That burger we can't take off the menu because of the oldest customers of the burger joint...",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Brioche bun;",
          "2x smash beef patties (house blend) of 80g each;",
          "Cheddar cheese;",
          "Lettuce;",
          "Tomato;",
          "Pickles;",
          "Onion;",
          "House sauce;",
        ],
      },
      {
        id: "4",
        title: "X-Tailwind",
        price: 7.95,
        description:
          "The one you don't like at first, but then you get addicted and can't quit...",
        cover: require("../../assets/products/cover/4.png"),
        thumbnail: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "Brioche bun;",
          "2x smash beef patties (house blend) of 80g each;",
          "Cheddar cheese;",
          "Lettuce;",
          "Tomato;",
          "Pickles;",
          "Onion;",
          "House sauce;",
        ],
      },
    ],
  },
  {
    title: "Desserts",
    data: [
      {
        id: "5",
        title: "Ice Cream with Brownie",
        price: 5,
        description:
          "A delicious dessert to savor. Choose the ice cream and syrup you desire...",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "1x Brownie;",
          "1x Scoop of ice cream of your choice;",
          "Choose your syrup;",
        ],
      },
      {
        id: "6",
        title: "Cupcake",
        price: 3.5,
        description:
          "A delicious Cupcake to sweeten your day. Choose the flavor you like...",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: ["Choose the flavor;", "Whipped cream;"],
      },
    ],
  },
  {
    title: "Drinks",
    data: [
      {
        id: "7",
        title: "Hmm, Coke!",
        price: 2.5,
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        cover: require("../../assets/products/cover/7.png"),
        description:
          "A super cold coke to accompany your super burger...",
        ingredients: [],
      },
    ],
  },
]

const PRODUCTS = MENU.map((item) => item.data).flat()

const CATEGORIES = MENU.map((item) => item.title)

type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES, ProductProps }
