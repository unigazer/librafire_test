/* eslint-disable import/prefer-default-export */

// Mock
export const getData = async () => {
  try {
    const res = await fetch('/api/getHouses');
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
