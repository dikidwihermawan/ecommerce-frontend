import { atom } from 'recoil';

const authenticated = atom({
    key: 'autenthicated',
    default: {
        check: false,
        user: [],
    },
});
export { authenticated };
