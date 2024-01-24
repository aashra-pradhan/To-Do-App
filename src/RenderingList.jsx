export default function RenderingList(){
    const arr1=[
        {
            id:"1",
            fullname:"Hari",
            gender:"male"
        },
        {
            id:"2",
            fullname:"Ram",
            gender:"male"
        },
        {
            id:"3",
            fullname:"Sita",
            gender:"female"
        },
        {
            id:"4",
            fullname:"Anna",
            gender:"female"
        }
    ];

    const arr2=arr1.filter(a1 => a1.gender==="female");
    const arr3=arr2.map(a2 => <li key={a2.id}>{a2.fullname}</li>);

    const arr4=arr1.filter(a3 => a3.gender==="male");
    const arr5=arr4.map(a4 => <li key={a4.id}>{a4.fullname}</li>);

    return(
        <>
        <h1>Male</h1>
        <ul>{arr5}</ul>
        <h1>Female</h1>
        <ul>{arr3}</ul>
        </>
    );
}