import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Badge
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { IoCartOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";



function MyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const cartCount = useSelector(state => state.cart.length || "");
  const router = useRouter();
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList count={cartCount} />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="gradient" onClick={() => router.push("/identification")} size="sm">
            Sign In
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList count={cartCount} />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="gradient" onClick={() => router.push("/identification")} size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}




function NavList({ count }) {
  const router = useRouter();

  return (
    <List className="mt-4 mb-6 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <ListItem className="gap-2" onClick={() => router.push("/")}>Home</ListItem>
      <ListItem className="gap-2" onClick={() => router.push("/cart")}>
        <Badge content={count}>
          <IoCartOutline className="text-xl" />
        </Badge>
      </ListItem>
    </List>
  );
}

export default MyNavbar