import { axiosConfig } from './axios';

const get = async (url:string, params = {}) => {
    // let deviceType = 'web';


    const config = {
        url,
        baseURL: '/',

        method: 'get', // default
        // headers: {
        //     Authorization: `Bearer ${'token'}`,
        //     'Content-Type': 'application/json;charset=utf-8',
        // },
        params,
        timeout: 50000, // default is `0` (no timeout)
        withCredentials: false, // default
        responseEncoding: 'utf8', // default
        maxRedirects: 2, // default
    };
    return axiosConfig(config);
};

// const post = async (url:string, body:any) => {
//     const token = GetCookiesValue('jwtToken', false);
//     let deviceType = GetCookiesValue('device-type', true) || 'web';

//     if (url === '/api/v3/singleapp/mwAuthToken') {
//         deviceType = 'sapp';
//         SetCookiesValue('device-type', deviceType, 1, true);
//     }

//     if (token && !GetCookiesValue('device-type', true)) {
//         const decode:jwtTokenType = jwt_decode(token);
//         deviceType = decode.instance === 'singleapp' ? 'sapp' : 'web';
//         SetCookiesValue('device-type', deviceType, 1, true);
//     }

//     const config = {
//         url,
//         baseURL: await baseURL(),
//         // baseURL: base_url,

//         method: 'post',
//         headers: {
//             Authorization: token ? `Bearer ${token}` : '',
//             'Device-Type': deviceType,
//             'Content-Type': 'application/json',
//         },
//         data: JSON.stringify(body),
//         timeout: 50000,
//         withCredentials: false,
//         responseEncoding: 'utf8',
//         maxRedirects: 2,
//     };
//     return axiosConfig(config);
// };

// const put = async (url:string, body:any, formData:any) => {
//     const token = GetCookiesValue('jwtToken', false);
//     let deviceType = GetCookiesValue('device-type', true) || 'web';

//     if (token && !GetCookiesValue('device-type', true)) {
//         const decode:any = jwt_decode(token);
//         deviceType = decode.instance === 'singleapp' ? 'sapp' : 'web';
//         SetCookiesValue('device-type', deviceType, 1, true);
//     }

//     if (token) {
//         const config = {
//             url,
//             baseURL: await baseURL(),

//             method: 'put',
//             headers: {
//                 Authorization: token ? `Bearer ${token}` : '',
//                 'Device-Type': deviceType,
//                 'Content-Type': formData
//                     ? // eslint-disable-next-line no-underscore-dangle
//                       `multipart/form-data; boundary=${body._boundary}`
//                     : 'application/json',
//                 Accept: 'application/json',
//                 // "Content-Type": "application/x-www-form-urlencoded",
//             },
//             cache: false,
//             data: formData ? body : JSON.stringify(body),
//             timeout: 50000,
//             withCredentials: false,
//             responseEncoding: 'utf8',
//             maxRedirects: 2,
//             processData: false,
//         };
//         return axiosConfig(config);
//     }
//     return { error: 'No token found' };
// };

// const deleteMethod = async (url:string, body:any) => {
//     const token = GetCookiesValue('jwtToken', false);
//     let deviceType = GetCookiesValue('device-type', true) || 'web';

//     if (token && !GetCookiesValue('device-type', true)) {
//         const decode:any = jwt_decode(token);
//         deviceType = decode.instance === 'singleapp' ? 'sapp' : 'web';
//         SetCookiesValue('device-type', deviceType, 1, true);
//     }

//     if (token) {
//         const config = {
//             url,
//             baseURL: await baseURL(),

//             method: 'delete',
//             headers: {
//                 Authorization: token ? `Bearer ${token}` : '',
//                 'Device-Type': deviceType,
//                 'Content-Type': 'application/json',
//             },
//             data: JSON.stringify(body),
//             timeout: 50000,
//             withCredentials: false,
//             responseEncoding: 'utf8',
//             maxRedirects: 2,
//         };
//         return axiosConfig(config);
//     }
//     return { error: 'No token found' };
// };

const RequestMethod = {
    get,
    // post,
    // put,
    // deleteMethod,
};

export default RequestMethod;
