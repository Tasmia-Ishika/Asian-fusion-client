import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import Featured from "../featured/Featured";
import Queries from "../Queries/Queries";
import Phone from "../Phone/Phone";

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
          <Phone></Phone>
          <Queries></Queries>
        </div>
    );
};

export default home;