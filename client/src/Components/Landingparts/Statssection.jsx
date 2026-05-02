import Smallcard from "./Smallcard";
function Statssection() {
  return (
       <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Smallcard value="24/7" description="Fast Outbreak Detection" />
                <Smallcard value="85%" description="Cost Reduction to Traditional Systems" />
                <Smallcard value="100+" description="Working Locations Worldwide" />
            </div>
        </div>
    </div>
  );
}

export default Statssection;