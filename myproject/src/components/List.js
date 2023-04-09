import React from "react";

const List = ({people}) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, description } = person;
                return (
                    <article key={id}>
                        <div>
                            <h1>{name}</h1>
                            <h2>{age}</h2>
                            <h3>{description}</h3>
                        </div>
                    </article>
                )
        })}
        </>
    );
};
export default List;