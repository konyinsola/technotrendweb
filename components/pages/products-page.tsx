import Navbar from "@/components/Navbar"
import ProductsHero from "@/components/Productshero"
import IndustryProducts from "@/components/Industryproducts"
import ProductService from "@/components/ProductService"
import Footer from "@/components/Footer"    



export default function ProductsPage() {
    return(
        <>
        <Navbar />
        <ProductsHero />
        <IndustryProducts />
        <ProductService />
        <Footer />
        </>
    )
}