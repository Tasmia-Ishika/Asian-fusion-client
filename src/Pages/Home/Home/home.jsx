import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import Featured from "../featured/Featured";

const home = () => {
    return (
        <div>
          <Helmet>
        <title>Asian Bistro | Home</title>
          </Helmet>
          <Banner></Banner>
          <Category></Category> 
          <PopularMenu></PopularMenu>
          <Featured></Featured> 
          <Testimonial></Testimonial>
        </div>
    );
};

export default home;