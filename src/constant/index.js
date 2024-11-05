import { RxDashboard } from "react-icons/rx";
import { IoNotificationsOutline, IoHappyOutline } from "react-icons/io5";
import { GoPeople, GoHeart, GoDotFill } from "react-icons/go";
import { MdEventAvailable, MdOutlinePhone } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { GiThirdEye } from "react-icons/gi";


export const AdminLnks = [
    {
        title: "Dashboard",
        path: "/",
        icons: RxDashboard
    },

    {
        title: "Members",
        icons: GoPeople,
        submenu: [
            {
                title: "Free Members",
                path: "/members",
                icons: GoDotFill,
            },
            {
                title: "Premium Members",
                path: "/members",
                icons: GoDotFill,
            },
            {
                title: "Program Booking ",
                path: "/members",
                icons: GoDotFill,
            },
        ]
    },

    {
        title: "Program",
        path: "/program",
        icons: MdEventAvailable
    },
    {
        title: "Happy Stories",
        path: "/happy_stories",
        icons: IoHappyOutline
    },
    {
        title: "Churay Hue Pal",
        path: "/churay_hue_pal",
        icons: GiThirdEye
    },
    {
        title: "Contact Queries",
        path: "/contact_queries",
        icons: MdOutlinePhone
    },
    {
        title: "Packages",
        path: "/packages",
        icons: FaRegMoneyBillAlt
    },
    {
        title: "Users interest's",
        path: "/interest",
        icons: GoHeart
    },
    {
        title: "Logout",
        path: "/logout",
        icons: CiLogout
    },

] 