import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="space-y-6">
            <h3 className="text-3xl">All Categories</h3>

            {
                categories.map(category => <Link
                     key={category.id}
                     className="block ml-4 text-2xl"
                     to={`/category/${category.id}`}
                     >{category.name}</Link>)
            }
            
        </div>
    );
};

export default LeftSideNav;