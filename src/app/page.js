import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Products from "@/components/Products";
import TopBar from "@/components/TopBar";
function index() {
  return (
    <div>
      <TopBar />
      <Home />
      <Products id={"products"}/>
      <Contact id={"contact"}/>
    </div>
  );
}

export default index;
