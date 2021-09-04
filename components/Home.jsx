import Header from "./Header";
import Banner from "./Banner";
import ProductsFeed from "./ProductsFeed";

const Home = ({products}) => {
    return (
        <div className={"bg-gray-100"}>
            <Header />

            <main className={"max-w-screen-xl mx-auto"}>
               <Banner />
            </main>

            <ProductsFeed products={products} />
        </div>
    );
};

export default Home;