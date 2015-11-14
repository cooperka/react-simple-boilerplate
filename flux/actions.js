// --- Action types

export const ADD_THING = 'ADD_THING';

// --- Action creators

export function addThing() {
  const seconds = (new Date()).getSeconds();
  return {
    type: ADD_THING,
    name: String(seconds),
  };
}
