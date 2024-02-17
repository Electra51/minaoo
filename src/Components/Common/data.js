import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img111 from "../../assets/1.png";
import img211 from "../../assets/2.png";
import img311 from "../../assets/3.png";
import img411 from "../../assets/4.png";
import img11 from "../../assets/camera.png";
import img12 from "../../assets/chair.png";
import img13 from "../../assets/headphone.png";
import img14 from "../../assets/watch.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
export const menuData = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Products",
    link: "/products",
    subMenu: [
      { label: "Dress", link: "/dress" },
      { label: "Digital Watch", link: "/watch" },
      { label: "Women Sharees", link: "/sharees" },
    ],
  },
  {
    label: "Categories",
    link: "/categories",
    subMenu: [
      { label: "Man's Fashion", link: "/mans" },
      { label: "Woman's Fashion", link: "/womans" },
      { label: "Kid's Fashion", link: "kids" },
    ],
  },
  {
    label: "Pages",
    link: "/pages",
    subMenu: [
      { label: "New Pages", link: "/new" },
      { label: "Grid View Page", link: "/grid" },
      { label: "Card Slider", link: "/card-slider" },
      { label: "Complete Website", link: "/complete" },
    ],
  },
  {
    label: "Campaign",
    link: "/campaign",
  },
  {
    label: "Offer",
    link: "/offer",
  },
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "Review",
    link: "/review",
  },
  {
    label: "Flash Sale",
    link: "/flash",
  },
  {
    label: "Contact Us",
    link: "/contact",
  },
];

export const bannerMenuData = [
  {
    label: "Fashion Collection",
    color: "button-first",
    subMenu: [
      { label: "Kitchen item" },
      { label: "Food" },
      { label: "Furniture" },
      { label: "Gadgets" },
    ],
  },
  {
    label: "Electronics",
    color: "button-first",
    subMenu: [
      { label: "Kitchen item" },
      { label: "Food" },
      { label: "Furniture" },
      { label: "Gadgets" },
    ],
  },
  {
    label: "Home Appliance",
    color: "menu-button--black",
    subMenu: [
      { label: "Kitchen item" },
      { label: "Food" },
      { label: "Furniture" },
      { label: "Gadgets" },
    ],
  },
  {
    label: "Kitchen item",
    color: "button-first",
    subMenu: [
      { label: "Kitchen item" },
      { label: "Food" },
      { label: "Furniture" },
      { label: "Gadgets" },
    ],
  },
  {
    label: "Food",
    color: "button-first",
    subMenu: [
      { label: "Kitchen item" },
      { label: "Food" },
      { label: "Furniture" },
      { label: "Gadgets" },
    ],
  },
  {
    label: "Furniture",
    color: "button-first",
    subMenu: [
      { label: "Kitchen item" },
      { label: "Food" },
      { label: "Furniture" },
      { label: "Gadgets" },
    ],
  },
  {
    label: "Gadgets",
    color: "button-first",
    subMenu: [
      { label: "Kitchen item" },
      { label: "Food" },
      { label: "Furniture" },
      { label: "Gadgets" },
    ],
  },
  {
    label: "Fashion Collection",
    color: "button-first",
    subMenu: [
      { label: "Kitchen item" },
      { label: "Food" },
      { label: "Furniture" },
      { label: "Gadgets" },
    ],
  },
];

export const data = [
  {
    name: "Gadget Store",
    discount: "30% Sale",
    tag: "Buy Now",
    img: img1,
    color: "blue",
  },
  {
    name: "Bundle Package",
    discount: "Save 30%",
    tag: "See All",
    img: img2,
    color: "yellow",
  },
  {
    name: "Valentines Offer",
    discount: "30% Sale",
    tag: "Buy Now",
    img: img3,
    color: "red",
  },
  {
    name: "Relax Chair",
    discount: "New Arrival",
    tag: "Buy Now",
    img: img4,
    color: "green",
  },
];

export const productBenefitData = [
  {
    id: 1,
    name: "Free Shipping",
    img: img111,
    tag: "Minimum orders $90",
  },
  {
    id: 2,
    name: "24/7 Support",
    img: img211,
    tag: "Order Us 24 hours",
  },
  {
    id: 3,
    name: "Best Prices & Offers",
    img: img311,
    tag: "Order $100 & more",
  },
  {
    id: 4,
    name: "Easy Returns",
    img: img411,
    tag: "Within 30days",
  },
];

export const slideData = [
  {
    id: 1,
    name: "Premium Quality Black Official Relax Chair",
    img: img11,
    discount: "50",
    price: "20.00",
    after_price: "40.00",
    stock: "available",
    rating: 5,
    review: 35,
  },
  {
    id: 2,
    name: "Apple 7 Pro Original Airpad Collection",
    img: img12,
    discount: "45",
    price: "22.50",
    after_price: "50.00",
    stock: "available",
    rating: 4.5,
    review: 25,
  },
  {
    id: 3,
    name: "Fujifilm fxX70 DSLR Camera Collection",
    img: img13,
    discount: "50",
    price: "40.00",
    after_price: "80.00",
    stock: "available",
    rating: 5,
    review: 65,
  },
  {
    id: 4,
    name: "Apple 5 Pro Original Smart watch Collection",
    img: img14,
    discount: "25",
    price: "10.00",
    after_price: "40.00",
    stock: "available",
    rating: 4,
    review: 20,
  },
];

export const footerData = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Our Services", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Affiliate Program", href: "#" },
    ],
  },
  {
    title: "Get Help",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Order Status", href: "#" },
      { label: "Payment Options", href: "#" },
    ],
  },
  {
    title: "Online Shop",
    links: [
      { label: "Watch", href: "#" },
      { label: "Bag", href: "#" },
      { label: "Shoes", href: "#" },
      { label: "Dress", href: "#" },
    ],
  },
  {
    title: "Follow Us",
    socialLinks: [
      { icon: <FaFacebook />, href: "#" },
      { icon: <FaTwitter />, href: "#" },
      { icon: <FaInstagram />, href: "#" },
      { icon: <FaLinkedin />, href: "#" },
    ],
  },
];
