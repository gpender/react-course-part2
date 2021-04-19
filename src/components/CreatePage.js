import React, { useEffect, useState } from 'react';

// const CreatePage =()=>(
//     <div>This is the Create Component</div>
// );

function CreatePage(){
    const [title, setTitle] = useState("How to Article");
    return <div>{title}This is the Create Component</div>
}

export default CreatePage;