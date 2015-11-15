// --- Action types

export const ADD_THING = 'ADD_THING';

// --- Action creators

export function addThing(name) {
  return {
    type: ADD_THING,
    name,
  };
}
