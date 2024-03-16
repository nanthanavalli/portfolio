import Header from '../components/Header';
import styles from '../style/page/home.module.css';
import profile from '../assets/profile.jpg';

const Home = () =>{
    return(
        <div className={styles.home}>
            <Header />
            NANTHANAVALLI V
            <div >profile</div>
            <img src={profile} className={styles.profile} alt="" />
        </div>
    );
}
export default Home;