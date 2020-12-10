export const filterByInput = (users, inputText) => users.filter((user) => {
    const inputUppercase = inputText.toUpperCase();
    const emailUppercase = user.email.toUpperCase();
    const phoneUppercase = user.phone.toUpperCase();
    return emailUppercase.includes(inputUppercase) || phoneUppercase.includes(inputUppercase);
});

export default filterByInput;