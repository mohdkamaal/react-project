import React from 'react';



export const Person = (props) => {
    return <div>
        {
            props.data.map((person)=>{
                return (<div><p> i'm  {person.name} and i'm {person.age} year old. </p><p>asdfjlj</p></div>);
            })
        }


    </div>
}

// export default Person;