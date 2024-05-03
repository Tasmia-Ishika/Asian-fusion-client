import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16 mx-20 py-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`} className="flex flex-col items-center mb-6">
                <button className="btn btn-outline border-b-4 bg-slate-100 border-0 border-orange-400 mt-4">Order now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;