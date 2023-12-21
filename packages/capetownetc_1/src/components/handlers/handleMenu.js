import { fetch } from "frontity";

const fetchMenu = () => {
  return {
    _0000_: {
      id: "3",
      title: "Home",
      url: "/",
      type: "page",
      children: [],
    },
    _20074_: {
      id: "3",
      title: "News",
      url: "/news/",
      type: "category",
      children: [
        {
          id: "10375",
          title: "Western Cape",
          url: "/news/western-cape/",
          type: "category",
        },
        {
          id: "10376",
          title: "South Africa",
          url: "/news/south-africa/",
          type: "category",
        },
        {
          id: "7747",
          title: "World",
          url: "/news/world/",
          type: "category",
        },
        {
          id: "10378",
          title: "Opinion",
          url: "/news/opinion/",
          type: "category",
        },
        {
          id: "10379",
          title: "Good News",
          url: "/news/good-news/",
          type: "category",
        },
        {
          id: "10380",
          title: "Business",
          url: "/news/business/",
          type: "category",
        },
        {
          id: "10381",
          title: "Sport",
          url: "/news/sport/",
          type: "category",
        },
      ],
    },
    _212963_: {
      id: "10366",
      title: "Things To Do",
      url: "/things-to-do/",
      type: "category",
      children: [
        {
          id: "13",
          title: "Food & Drink",
          url: "/things-to-do/food-and-drink/",
          type: "category",
        },
        {
          id: "10368",
          title: "Adventure",
          url: "/things-to-do/adventure/",
          type: "category",
        },
        {
          id: "7165",
          title: "Arts & Culture",
          url: "/things-to-do/culture/",
          type: "category",
        },
        {
          id: "17",
          title: "Family",
          url: "/things-to-do/family/",
          type: "category",
        },
        {
          id: "495",
          title: "Travel & Stay",
          url: "/things-to-do/travel/",
          type: "category",
        },
        {
          id: "16",
          title: "Events & Entertainment",
          url: "/things-to-do/entertainment/",
          type: "category",
        },
        {
          id: "10373",
          title: "Top Guides",
          url: "/things-to-do/things-to-do-top-guides/",
          type: "category",
        },
      ],
    },
    _213003_: {
      id: "10387",
      title: "Win",
      url: "/win/",
      type: "category",
      children: [
        {
          id: "10",
          title: "Competitions",
          url: "/win/competitions/",
          type: "category",
        },
        // {
        //   id: "10382",
        //   title: "Photo Of The Month",
        //   url: "/win/photo-of-the-month/",
        //   type: "category",
        // },
        // {
        //   id: "10383",
        //   title: "Video Of The Month",
        //   url: "/win/video-of-the-month/",
        //   type: "category",
        // },
      ],
    },
    _212964_: {
      id: "10384",
      title: "Vouchers",
      url: "/vouchers/",
      type: "category",
      children: [],
    },
    _107472_: {
      id: "182",
      title: "Videos",
      url: "/videos/",
      type: "category",
      children: [
        {
          id: "10364",
          title: "News",
          url: "/videos/news-videos/",
          type: "category",
        },
        {
          id: "10365",
          title: "Things To Do",
          url: "/videos/things-to-do-video/",
          type: "category",
        },
      ],
    },
    _212990_: {
      id: "11294",
      title: "Subscribe",
      url: "/subscribe-capetownetc-magazine/",
      type: "page",
      children: [],
    },
    _213007_: {
      id: "213005",
      title: "Advertise",
      url: "/advertise/",
      type: "page",
      children: [
        {
          id: "7263",
          title: "Contact",
          url: "/advertise/contact/",
          type: "page",
        },
        {
          id: "68166",
          title: "Rate Card",
          url: "#download-rate-card",
          type: "page",
        },
      ],
    },
  };
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const fetchMenu = async (state) => {
//   const response = await fetch(
//     `${state.source.url}/api/menus/get_menus/?id=secondary` // Replace with your menu slug
//   );
//   let menuJSON = await response.json();
//   const menuData = menuJSON.menus[0].items;
//   const data = {};

//   for (let i = 0; i < menuData.length; i++) {
//     const url = menuData[i].url.substring(state.source.url.length);
//     const menu_title = menuData[i].title;
//     const menu_item_parent_id = menuData[i].menu_item_parent;
//     const id = menuData[i].ID;
//     const categoryID = menuData[i].object_id;
//     const type = menuData[i].object;

//     if (menu_item_parent_id.toString() !== "0" && url !== "/") {
//       data["_" + menu_item_parent_id + "_"].children.push({
//         id: categoryID,
//         title: menu_title,
//         url: url,
//         type: type,
//       });
//     } else {
//       data["_" + id.toString() + "_"] = {
//         id: categoryID,
//         title: menu_title,
//         url: url,
//         type: type,
//         children: [],
//       };
//     }
//   }

//   return data;
// };

export default fetchMenu;
