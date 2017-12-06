export const CONST_HEADER = () => ({
    userKey: localStorage.getItem('userKey') || '',
    version: '1.0.0',
    signature: 'rayvision2017',
    platform: localStorage.getItem('platform') || 2,
    channel: 1,
    languageFlag: localStorage.getItem('languageFlag') || 0,
});


export const CONST_WHITE_LISTS = ['login', 'register', 'forgetpassword'];
export const CONST_API_WHITE_LISTS = [
    '/rendering/socket/authSocketConnection',
    '/rendering/task/transfer/getTransferServerMsg',
    '/rendering/task/common/queryPlatforms'
];
