import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    
                    <h3 className="uppercase ">Grab Authentic asian cuisine.</h3>
                    <p>Craving for some asian food? Order now from us. After placing order, we make sure delivering food within 30 minutes. Great deals are going on throughout entire website!! What are you waiting for?</p>
                    <button className="btn btn-outline border-b-4 bg-slate-100 border-0 border-orange-400 mt-4">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;