export const generateRandomNumber = (min = 1, max) => {
    return Math.floor(Math.random() * max) + min;
};