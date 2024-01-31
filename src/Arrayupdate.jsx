//Debugged by Sudhanshu dai @Infodevelopers
//Google jasto feature, array ma search bar ma lekhda lekhdai component re-render garayera results dekhairakhne
import { useState } from "react";
import "./styletodo.css";

export default function Arrayupdate() {
  const [name, setName] = useState("");
  const [people, updateArr] = useState([]);
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState("");
  const [editingItem, setEditingItem] = useState("");
  //const [searchArr, updateSearchArr]=useState([]);
  function handleClick(e) {
    e.preventDefault(); // Prevent form submission because natra page reloads immediately
    if (!people.map((person) => person.name).includes(name)) {
      const newarr = [...people, { name, checked: false }];
      // {name}, esari eta yo garnu ko tatparya is, aba j names add gariracham ni browser bata, tyo chai, newarr bhane naya array ma "name" object bhitra sabai names basiracha
      //check google for more precise understanding
      //tara hamile names lai simply array ma store garna ni miltyho
      //testo garna const newarr=[...people, name]; esto gare hunthyo, aba yo newarr chai eutaaa array of strings ho ani names thapidai jancha array ma simply
      updateArr(newarr);

      //const allArr=[...people];
      setName(""); // Clear the input field after adding to array
    } else {
      window.alert("Bro repeat bhayo!");
    }
  }

  console.log(people, "people");

  // function handleSearch(e){
  //     e.preventDefault(); // Prevent form submission because natra page reloads immediately
  //     updateArr(
  //       people.filter(a => a === search)
  //     );
  //     // const newsearcharr=[...searchArr,
  //     //     {search}];
  //     //     updateSearchArr(newsearcharr);
  //         setSearch("");

  // }
  let original = people;
  // function handleSearch(e) {

  //   setSearch(e.target.value);

  //   //const searchValue = search.toLowerCase(); // Convert to lowercase for case-insensitive comparison

  //   // Filter people based on the search value
  //   const filteredPeople = people.filter(person =>
  //     person.name.includes(search)
  //   );

  //   updateArr(filteredPeople);

  //   if(search === ""){
  //     updateArr(original)
  //   }

  // }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleSearchClick(e) {
    e.preventDefault();
  }
  function handleCheck(nameToCheck) {
    const updatedPeople = people.map((person) =>
      person.name === nameToCheck
        ? { ...person, checked: !person.checked }
        : person
    );
    updateArr(updatedPeople);
  }

  function clickEdit(nameToCheck) {
    setEdit(nameToCheck);
    setEditingItem(nameToCheck);
  }

  function handleEditChange(e) {
    setEdit(e.target.value);
  }
  function handleUpdate() {
    if (editingItem !== null) {
      const updatedPeople = people.map((person) =>
        person.name === editingItem ? { ...person, name: edit } : person
      );
      updateArr(updatedPeople);
      setEditingItem(null);
      setEdit("");
    }
  }
  function handleDelete(para) {
    updateArr(people.filter((p) => para !== p.name));
  }

  // function handleCheck(para){
  //   const newarr=[...update];
  //   newarr.checked=!newarr.checked;
  // }
  // function handleSearchChange(e){
  //     setSearch(e.target.value);
  // }
  // const sResults = searchArr.filter((w) =>
  // w.search===search);
  // console.log(sResults,'test')
  console.log(people, "agt");
  const update = people.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="container">
        <h1 id="title"> TO DO LIST</h1>
        <div className="inside">
          <form>
            <label htmlFor="name">Enter your name</label>
            <input
              style={{ border: "1px solid black" }}
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            <br />
            <button
              className="buttoncss"
              onClick={handleClick}
              disabled={name === "" ? "disabled" : ""}
            >
              Add name to list
            </button>
          </form>
          <br />
          <br />
          <label htmlFor="search">Search bar</label>
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <br />
          <button className="buttoncss" onClick={handleSearchClick}>
            Search
          </button>
          <br />
          <br />
          <br />
          <p>The list of items</p>
          {update.map((person) => (
            <>
              {editingItem === person.name ? (
                <>
                  <input type="text" value={edit} onChange={handleEditChange} />
                  <br />
                  <button onClick={handleUpdate} className="buttoncss">
                    Update
                  </button>
                  <br />
                </>
              ) : (
                <>
                  {person.checked ? (
                    <span id="listitems">
                      <del>
                        <em>{person.name}</em>
                      </del>
                    </span>
                  ) : (
                    <span id="listitems">
                      <em>{person.name}</em>
                    </span>
                  )}

                  <button
                    className="buttoncss"
                    id="options"
                    onClick={() => handleDelete(person.name)}
                  >
                    Delete
                  </button>
                  <button
                    className="buttoncss"
                    id="options"
                    onClick={() => handleCheck(person.name)}
                  >
                    Check
                  </button>
                  <button
                    className="buttoncss"
                    id="options"
                    onClick={() => clickEdit(person.name)}
                  >
                    Edit
                  </button>
                  <br />
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}
{
  /* {people.map(person => (
          <h4>{person.name}</h4>
        ))}
        <br /> */
}
{
  /* {searchArr.map(s => (
          <h4>{s.search}</h4>
        ))}
        <br />
        <br /> */
}

// setArtists(
//   artists.filter(a => a.id !== artist.id)
