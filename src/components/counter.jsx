import { useState, useEffect } from "react";

/* 
    useEffect( function(), [ dependency_list ]);
    function()--->what should happen when useEffect is called;
    dependency_list ----> on which rerenders should useEffect be called, we can specify an array containing 
    the state variables on which we want useEffect to depend on. 
    #if we keep the array empty [] then the useEffect will only trigger in the first render and never again.
*/

export default function Counter({ incVal = 1 }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const updateCount = () => {
    setCount((prev) => prev + incVal);
  };
  const changeName = (evt) => {
    setName(evt.target.value);
    console.dir(evt);
  };

  useEffect(
    function myEffect() {
      console.log("useEffect was called!");
    },
    [count]
  );

  const formSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
    console.log("form has been submitted!!");
  };
  return (
    <>
      <div className="w-25 justify-self-center grid grid-cols-3 m-2">
        <button
          className="bg-black col-span-2 text-white hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer
        active:scale-110"
          onClick={updateCount}
        >
          +{incVal}
        </button>
        <span className="text-center bg-green-500">{count}</span>
      </div>
      <form
        action="/"
        className="border-2 w-60 grid grid-cols-1 gap-2 p-2 bg-black text-white justify-self-center"
        onSubmit={formSubmit}
      >
        <label htmlFor="name">Enter your username</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={changeName}
          className="bg-white text-black"
        />
        <button className="bg-gray-500 w-15 justify-self-center mt-2">
          {" "}
          submit{" "}
        </button>
        <span>Your name: {name}</span>
      </form>
    </>
  );
}
