import { ShoppingCart } from "lucide-react";
import logo from "../../assets/images/logo.svg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Separator } from "../ui/separator";
import { useContext } from "react";
import { usercontext } from "@/lib/userstate/usercontext";
import { signUserOut } from "@/firebase/auth";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const user = useContext(usercontext);
  const navigate = useNavigate();
  return (
    <div className="py-3 px-7  bg-white w-full mx-auto">
      <nav className="flex items-center max-w-7xl justify-between">
        <div className="logo flex  items-center ">
          <img className="w-10" src={logo} />
          <span className="font-light capitalize text-sm md:text-md text-gray-600">
            smithluxury
          </span>
        </div>
        <div className="navitems flex items-center justify-between gap-3">
          <div className="cart-icon">
            <ShoppingCart fontStyle={"light"} size={25} color="black" />
          </div>
          <div className="profile">
            <HoverCard>
              <HoverCardTrigger className="border rounded-full px-3 cursor-pointer py-2 ">
                {user.user.email.split("")[0].toUpperCase()}
              </HoverCardTrigger>
              <HoverCardContent className=" flex justify-center flex-col gap-3">
                <p className="text-sm font-light">
                  Signin As: {user?.user?.email}
                </p>
                <Separator />
                <p className=" cursor-pointer text-sm font-light">Profile</p>
                <p
                  onClick={async () => {
                    await signUserOut();
                    navigate("/login");
                  }}
                  className=" cursor-pointer text-sm font-light"
                >
                  SignOut
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
