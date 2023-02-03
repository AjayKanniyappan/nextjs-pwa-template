declare namespace cat {
  type BottomNavigation = Array<{ id: number; label: string; href: string; icon: JSX.Element }>;
  type Data = {
    Boom: string;
  };
  type Navbar = { id: number; label: string; href: string }[];
  type Url = string;

  interface PageProps {
    title: string;
    children: React.ReactNode;
  }
}
