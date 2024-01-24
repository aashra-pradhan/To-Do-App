// import RenderingList from "./RenderingList";
// import Button from "./button";
// import Gallery from "./gallery";
// import List from "./list";

import Arrayupdate from "./Arrayupdate";


function App() {
  const Display = () => {
    console.log("Hello from my first function");
  }
  Display()
  // yo chai function call gareko
  return (
    <>
    
      {/* <RenderingList />
      <Gallery/> */}
      {/* <List/>
 <Button color={"yellow"} text={"WARNING"}/>
 <Button color={"red"} text={"Reject"}/>
 */}
  <Arrayupdate />

      {/* yo gallery.jsx lai ni app mai import gardeko, because
      main.jsx is the main file of react for our webste,
      ani tesma yo app bhanne component matra render garaidincham ,
      so baki, jati j components cha ni, sabai   */}
    </>
  )
}

export default App
// export garnai parcha component lai natra render hunna index file ma ani obviously website ma display hunna

