import Home from "./pages/home";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Container>
                <Home />
            </Container>
            <Footer />
        </>
    );
}

export default App;
