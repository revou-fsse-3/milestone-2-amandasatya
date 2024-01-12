import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const TestNav = () => {
  // Dummy data for menu items
  const menuItems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Services", link: "/services" },
    { id: 4, title: "Contact", link: "/contact" },
  ];

  // Dummy data for sub-menu items
  const subMenuItems = [
    { id: 1, title: "Submenu Item 1", link: "/submenu1" },
    { id: 2, title: "Submenu Item 2", link: "/submenu2" },
    { id: 3, title: "Submenu Item 3", link: "/submenu3" },
    { id: 4, title: "Submenu Item 4", link: "/submenu4" },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Getting Started Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-2">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li className="grid col-start-2">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Main Menu Items */}
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.id}>
            <Link to={item.link}>
              <NavigationMenuLink>{item.title}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        {/* Components Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            {/* Content for the "Components" menu */}
            <ul className="grid w-[400px] p-4 md:w-[500px] md:grid-cols-2 lg:w-[200px] absolute">
              {subMenuItems.map((subItem) => (
                <NavigationMenuItem key={subItem.id}>
                  <Link to={subItem.link}>
                    <NavigationMenuLink>{subItem.title}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Documentation Menu Item */}
        <NavigationMenuItem>
          <Link to="/home">
            <NavigationMenuLink>Documentation</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default TestNav;
