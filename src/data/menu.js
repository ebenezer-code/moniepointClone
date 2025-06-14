import { IoBusinessOutline } from "react-icons/io5";
import {
  PiHashLight,
  PiMoney,
  PiCreditCardFill,
  PiBookOpenText,
  PiNewspaper,
} from "react-icons/pi";
import { FaHandHoldingDollar, FaMobileRetro } from "react-icons/fa6";
import { HiCash } from "react-icons/hi";
import {
  MdOutlinePointOfSale,
  MdPayments,
  MdWorkHistory,
} from "react-icons/md";
import { LuFerrisWheel } from "react-icons/lu";

export const subMenu = [
  {
    name: "Products",
    icon: "",
    submenu: [
      {
        name: "Banking",
        about: "Business and personal banking accounts",
        submenu: [
          {
            name: "Business Account",
            about: "Get a free bank account to power your business",
            icon: IoBusinessOutline,
          },
          {
            name: "USSD",
            about: "Dial *5573# for easy offline banking",
            icon: PiHashLight,
          },
        ],
      },
      {
        name: "Credit",
        about: "Business and Individual loans",
        submenu: [
          {
            name: "Working capital loans",
            about: "Flexible loans that help your business grow",
            icon: FaHandHoldingDollar,
          },
          {
            name: "Overdraft",
            about: "Keep your business going even when money is low",
            icon: HiCash,
            comingSoon: true,
          },
          {
            name: "Salary advance",
            about: "Provide salary advance for employees",
            icon: PiMoney,
            comingSoon: true,
          },
        ],
      },
      {
        name: "Payments",
        about: "Accept payments from anywhere",
        submenu: [
          {
            name: "POS terminal",
            about:
              "Accept card and transfer payments with the Moniepoint POS terminal",
            icon: MdOutlinePointOfSale,
          },
          {
            name: "Web Payments(Monnify)",
            about: "Collect web payments with ease using Monnify",
            icon: MdPayments,
          },
        ],
      },
      {
        name: "Business Management",
        about: "Easy business money managements and reports",
        submenu: [
          {
            name: "Expense Cards",
            about: "Get a secure card for your business expenses",
            icon: PiCreditCardFill,
          },
          {
            name: "CAC registration",
            about:
              "Easily register your business name via our banking dashboard and get CAC-approved in just five days.",
            icon: FaMobileRetro,
          },
          {
            name: "Bookkeeping",
            about: "Manage your business finances with ease and efficiency",
            icon: PiBookOpenText,
            comingSoon: true,
          },
        ],
      },
    ],
  },
  {
    name: "Company",
    submenu: [
      { name: "culture", icon: LuFerrisWheel },
      { name: "Career", icon: MdWorkHistory },
      { name: "Press", icon: PiNewspaper },
    ],
  },
];
