import { TabNav } from "@radix-ui/themes";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <TabNav.Root>
      <TabNav.Link asChild>
        <Link to="/rentals">Rentals</Link>
      </TabNav.Link>
      <TabNav.Link asChild>
        <Link to="/movies">Movies</Link>
      </TabNav.Link>
      <TabNav.Link asChild>
        <Link to="/genres">Genres</Link>
      </TabNav.Link>
      <TabNav.Link asChild>
        <Link to="/customers">Customers</Link>
      </TabNav.Link>
      <TabNav.Link asChild>
        <Link to="/users">Users</Link>
      </TabNav.Link>
    </TabNav.Root>
  );
};

export default NavBar;
