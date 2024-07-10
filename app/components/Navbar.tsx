import NavbarItem from "@/app/components/NavbarItem";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-6 p-4 bg-slate-600">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}

export default Navbar;
