import profile from "../../assets/images/profile.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 pt-8 pb-6">
      <h2 className="text-3xl font-bold">Knowledge Cafe</h2>
      <img className="w-14" src={profile} alt="profile" />
    </div>
  );
};

export default Navbar;
