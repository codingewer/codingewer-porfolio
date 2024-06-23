import Home from "@/components/Home";
import Projects from "@/components/Projects";
import TopBar from "@/components/TopBar";
function index() {
  return (
    <div>
      <TopBar />
      <Home />
      <div id="projects" >
      <Projects/>
      </div>
    </div>
  );
}

export default index;
