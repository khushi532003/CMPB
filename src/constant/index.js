import { RxDashboard } from "react-icons/rx";
import { IoHappyOutline } from "react-icons/io5";
import { GoPeople, GoDotFill } from "react-icons/go";
import { MdOutlinePhone } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { GiClover } from "react-icons/gi";
import { GrBlog } from "react-icons/gr";

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
                path: "/freemembers",
                icons: GoDotFill,
            },
            {
                title: "Premium Members",
                path: "/premiummembers",
                icons: GoDotFill,
            },
        ]
    },
    {
        title: "Happy Stories",
        path: "/happy_stories",
        icons: IoHappyOutline
    },
    {
        title: "Blogs",
        path: "/blogs",
        icons: GrBlog 
    },
    {
        title: "Churaye Hue Pal",
        path: "/churaye_hue_pal",
        icons: GiClover 
    },
    {
        title: "Contact Queries",
        path: "/contact_queries",
        icons: MdOutlinePhone
    },
    {
        title: "Packges",
        path: "/packages",
        icons: FaRegMoneyBillAlt
    },
    {
        title: "Logout",
        path: "/logout",
        icons: CiLogout
    }
] 