const serverAdress = "https://www.doorhopper.in/"
const ClientStore = {

    getStoreCatalogueData: () => {

        var url = `${serverAdress}/api/storeCatalogue`;

        var regId = new Date().getTime();

        return fetch(url, {
            method: "POST",
            accept: "application/json",
            body: JSON.stringify({
                phone: '',
                token: '',
                regId: regId,
                appType: "U",
                storeId: ""
            }),
            headers: {
                "Content-Type": 'application/json'
            }
        }).then((res) => (res.json()))
    },
    
    getRequestCreditData: () => {

        var url = `${serverAdress}/api/requestCredit`;

        var regId = new Date().getTime();

        return fetch(url, {
            method: "POST",
            accept: "application/json",
            body: JSON.stringify({
                phone: '',
                token: '',
                regId: regId,
                appType: "U",
                storeId: "",
                rating:"",
                review:"INPUT"
            }),
            headers: {
                "Content-Type": 'application/json'
            }
        }).then((res) => (res.json()))
    },

    getStoreReviewData: () => {

        var url = `${serverAdress}/api/storeReview`;

        var regId = new Date().getTime();

        return fetch(url, {
            method: "POST",
            accept: "application/json",
            body: JSON.stringify({
                phone: '',
                token: '',
                regId: regId,
                appType: "U",
                storeId: ""
            }),
            headers: {
                "Content-Type": 'application/json'
            }
        }).then((res) => (res.json()))
    }
}
export default ClientStore;