import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="w-full background h-screen flex flex-col  overflow-x-hidden ">

      <h1 className="text-white rounded-lg  text-center mt-[20px] ml-[25px] py-2 
      px-10 text-4xl font-bold hover:text-blue-900"
      >Random GIFS</h1>

       {/* <div className="flex flex-wrap mx-auto  w-full  mt-[30px] mb-[30px]">
           <Random />
           <Tag />
       </div> */}

       <div className="flex  w-full   mt-[30px] mb-[30px] justify-around">

             <Random />
             <Tag />
       </div>
    </div>
  );
}

export default App;
