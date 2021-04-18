export const people = [
    {
        id: "0",
        name: "hanjy",
        age: 30,
        gender: "male"
    },
    {
        id: "1",
        name: "hancy",
        age: 29,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}