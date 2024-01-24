import img1 from "./assets/pic1.jpg"
function Profile() {
    return (
      <img
        src={img1}
        alt="Katherine Johnson"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <>
      
      
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
      </>
    );
  }

//   React applications are built from isolated pieces of UI called components.
//    A React component is a JavaScript function that you can sprinkle with markup. 
//    Components can be as small as a button, or as large as an entire page. Here is 
//    a Gallery component rendering three Profile components.



