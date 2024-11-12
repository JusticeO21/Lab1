function fullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

function isAdult(person) {
  return person.age >= 18;
}

function filterByAge(people, minAge) {
  return people.filter(people => people.age >= minAge);
}
