import googleAPIData from "../private/googleAPI.json"

const googleAPI = {
    get: () => {
        return googleAPIData.web
    },
    getClineID: () => {
        return googleAPIData.web.client_id
    }


}
export default googleAPI;
