export function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max - min + 1))
}
  
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const validateEmail = (mail) => 
    (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))