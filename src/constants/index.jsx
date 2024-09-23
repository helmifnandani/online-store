import Banner1 from "../assets/images/banner-1.jpg";
import Banner2 from "../assets/images/banner-2.jpg";
import Banner3 from "../assets/images/banner-3.jpg";
import Banner4 from "../assets/images/banner-4.jpg";

export const navItems = [
  {
    label: "New Arrival",
    href: "/products/1575dcde-3eeb-4da7-a1d1-73e4dea52e4c",
    categoryid: "1575dcde-3eeb-4da7-a1d1-73e4dea52e4c",
  },
  {
    label: "Shop",
    href: "/products/all",
    hasNestedMenu: true,
  },
  {
    label: "Our Picks",
    href: "/products/fc64fa3e-cd69-438a-9201-960f0f48491f",
    categoryid: "fc64fa3e-cd69-438a-9201-960f0f48491f",
  },
  {
    label: "Best Seller",
    href: "/products/006f4a95-0653-4d38-a9e2-976f2c55c1e5",
    categoryid: "006f4a95-0653-4d38-a9e2-976f2c55c1e5",
  },
  {
    label: "Sale",
    href: "/products/44fc86f7-216a-41ff-8ec6-3623a7f15912",
    categoryid: "44fc86f7-216a-41ff-8ec6-3623a7f15912",
  },
];

export const bannerItems = [
  { src: Banner1, href: "/products/pants" },
  { src: Banner2 },
  { src: Banner3, href: "/products/shirt" },
  { src: Banner4 },
];

export const collectionItems = [
  {
    categoryname: "Tops",
    href: "/products/c3c48c69-1b94-4244-a11b-122698b9f994",
    categoryid: "c3c48c69-1b94-4244-a11b-122698b9f994",
  },
  {
    categoryname: "Bottom",
    href: "/products/51662a17-00b9-4a8f-b265-3635c348857b",
    categoryid: "51662a17-00b9-4a8f-b265-3635c348857b",
  },
  {
    categoryname: "Outer",
    href: "/products/108ff555-161d-4832-afa8-69ee9a76450d",
    categoryid: "108ff555-161d-4832-afa8-69ee9a76450d",
  },
  {
    categoryname: "Denim",
    href: "/products/5aa2bfdf-eb1c-4ff0-8c94-0e7447672c71",
    categoryid: "5aa2bfdf-eb1c-4ff0-8c94-0e7447672c71",
  },
];

export const sorts = [
  { value: "newest", text: "Newest" },
  { value: "oldest", text: "Oldest" },
  { value: "cheap", text: "Price: Low to high" },
  { value: "expensive", text: "Price: High to low" },
];

export const users = [
  { name: "Tillie Buchanan", email: "pet@pub.mu" },
  { name: "Alejandro Mitchell", email: "jawowoh@jaogoka.ws" },
  { name: "Phillip Curry", email: "email@em.id" },
];

export const announcementBarItemsArray = [
  { text: "Announcement Bar Item 1" },
  { text: "Announcement Bar Item 2" },
  { text: "Announcement Bar Item 3" },
];
