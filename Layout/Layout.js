import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import styles from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
