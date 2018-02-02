const serverAdress = "https://www.doorhopper.in/"
const Client = {

        userAppData: () =>{

            var url =  `${serverAdress}/api/userAppData`; 
            var url = 'https://www.doorhopper.in/api/userAppData';

            return fetch(url, {
                method: 'GET',
                accept: 'application/json'
            }).then((res)=>(res.json()))
        },
        
        getProductCategoryData: (category, categoryId, city)=>{

            var url = `${serverAdress}/api/user/localMarket`;

            var regId = new Date().getTime();

            return fetch(url,{
                method: "POST",
                accept: "application/json",
                body: JSON.stringify({
                    phone: '',
                    latitude: '',
                    longitude: '',
                    regId: regId,
                    city: city,
                    category: category,
                    categoryId: categoryId,
                    limit: 15
                }),
                headers: {
                    "Content-Type": 'application/json'
                }
            }).then((res)=>(res.json()))
        },
        
        getServicesCategoryData:(category, categoryId, city)=>{
            
            var url = `${serverAdress}/api/user/localServiceProviders`

            var regId = new Date().getTime();

            return fetch(url,{
                method: "POST",
                accept: "application/json",
                body: JSON.stringify({
                    phone: "",
                    latitude: "",
                    longitutde:"",
                    regId: regId,
                    city: city,
                    category: category,
                    categoryId: categoryId,
                    appType: "U",
                    page: "0"
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then((res)=>(res.json()))

        },
        setReviewData:(storeId, token, rating, review)=>{
            var url = `${serverAdress}/api/user/storeReview`

            var regId = new Date().getTime();

            return fetch(url,{
                method: "POST",
                accept: "application/json",
                body: JSON.stringify({
                    phone: "0000000000",
                    token:"XYZABCgshshcsdvsbsercgmhhiug148s5ecrc2s6x2g",
                    regId: "store123abc",
                    storeId: storeId,
                    appType: "U",
                    rating: rating,
                    review: review
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then((res)=>(res.json()))
        },
        getStoreCatalogueData:(storeId)=>{
            var url = `${serverAdress}/api/storeCatalogue`

            var regId = new Date().getTime();

            return fetch(url,{
                method: "POST",
                accept: "application/json",
                body: JSON.stringify({
                    phone: "0000000000",
                    regId: regId,
                    storeId: storeId,
                    appType: "U"
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then((res)=>(res.json()))
        }
}


export default Client;