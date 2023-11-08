import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category=== 'popular');
    
    return (
        <section className="mb-12">
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 my-16 mx-20 py-10">
               {
                popular.map(item => <MenuItem
   key = {item._id}     
   item={item}        
   ></MenuItem>)
               } 
            </div>
            <Link to="/menu" className="flex flex-col items-center mb-6">
            <button className="btn btn-outline border-b-4 bg-slate-100 border-0 border-orange-400 mt-4">View full menu</button>
            </Link>
        </section>
    );
};

export default PopularMenu;