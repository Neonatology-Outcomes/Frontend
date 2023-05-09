export function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

export async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const validateEmail = (mail) => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(mail);

export const getVariant = (bundle) => (bundle ? 'container' : 'outlined');

export const getVariantStyle = (bundle) =>
  bundle
    ? { backgroundColor: '#ED7D31', color: '#FFFFFF' }
    : { color: '#ED7D31', borderColor: '#ED7D31' };
