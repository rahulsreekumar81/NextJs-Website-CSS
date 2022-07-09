import Navbar from "../Components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ childern }) => {
  return (
    <div>
      <Navbar />
      {childern}
      <Footer />
    </div>
  );
};
export default Layout;
