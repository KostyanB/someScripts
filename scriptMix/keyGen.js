const keyGen = keyLength => {
    const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let resKey = '';
    for (let i = 0, n = char.length; i < keyLength; ++i) {
        resKey += char.charAt(Math.floor(Math.random() * n));
    }
    return resKey;
};

const keyGen2 = keyLength => {
    const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return () => {
        let resKey = '';
        for (let i = 0, n = char.length; i < keyLength; ++i) {
            resKey += char.charAt(Math.floor(Math.random() * n));
        }
        return resKey;
    };
};