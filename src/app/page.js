import Home from "@/components/Home";
import Products from "@/components/Products";
import TopBar from "@/components/TopBar";
function index() {
  return (
    <div>
      <TopBar />
      <Home />
      <Products id={"projects"}/>
    </div>
  );
}

export default index;
