import Map from "../components/basics/map";
import Aaa from "../components/layout/aaa";
import About from "../components/layout/about";
import Contacts from "../components/layout/contacts";
import Footer from "../components/layout/footer";
import Gallery from "../components/layout/gallery";
import Header from "../components/layout/header";
import Hero from "../components/layout/hero";
import Listing from "../components/layout/listing";
import Partners from "../components/layout/partners";
import Services from "../components/layout/services";


export default function HomePage() {
    return (
        <>
        <Header />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Aaa />
        <Listing />
        <Partners />
        <Contacts />
        <Footer />
        </>

    )
}