const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			agenda: ["annie"],
			contacts: [ ],
			currentContact: {},
		},
		actions: {
			assignContact: (item) => {setStore ({currentContact:item})},
			
			getContacts: async () => {
				const url = "https://playground.4geeks.com/apis/fake/contact/agenda/annie";
				const options = {
					method: "GET"
				}
				const response = await fetch (url, options);
				if (!response.ok){
					console.log('Error:', response.status, response.statusText)
					return response.status
				}
				const data = await response.json()
				
				setStore({contacts:data})
			},
			
			deleteContacts : async (id) => {
				const url = "https://playground.4geeks.com/apis/fake/contact/" + id;
				const options = {
					method: "DELETE"
				};
		
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('Error: ', response.status, response.statusText)
					return
				}
				const data = await response.json();
				console.log(data)
				getActions().getContacts();
			},
			createContacts : async (dataToSend) => {
				const url = "https://playground.4geeks.com/apis/fake/contact/"
				const options = {
					method: "POST",
					body: JSON.stringify(dataToSend),
					headers: {
						"Content-Type": "application/json"
					}
				};
		
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('Error:', response.status, response.statusText)
					return response.status
				}
				const data = await response.json();
				console.log(data)
				getActions().getContacts()
			},
			updateContact: async (id, dataToSend) => {
       			const url = "https://playground.4geeks.com/apis/fake/contact/" + id;
        		const options = {
           			 	method: "PUT",
            			body: JSON.stringify(dataToSend),
            			headers: {
                			"Content-type": "application/json"
            				} }									
        		const response = await fetch(url, options);
       			 if (!response.ok) {
            		console.log('Error: ', response.status, response.statusText)
            		return response.status
       				 }
        		const data = await response.json();
        		console.log(data);
        		getActions().getContacts();
			},
			getContactInfo: async (id) => {
				const url = "https://playground.4geeks.com/apis/fake/contact/"+ id;
				const options = {
					method: "GET"
				}
				const response = await fetch (url, options);
				if (!response.ok){
					console.log('Error:', response.status, response.statusText)
					return response.status
				}
				const data = await response.json()
				console.log(data)
				setStore({currentContact:data})
				return data
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
