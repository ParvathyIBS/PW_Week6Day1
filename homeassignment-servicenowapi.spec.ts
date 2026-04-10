/* Things to remember during a POSTMAN request :


1. endpoint
2. CRUD - POST, GET, PATCH, DELETE
3. Authorization : basic auth for service
username and password
4. Headers :
 content-type : application/json
5. Body : raw-> json
{
    "short_description":"Laptop not working created using POSTMAN"
} */



/* What page fixture does in UI testing is done by request fixture in API testing
1. Page fixture -> Creates Isolated Context--> Page
 
2. Request fixture -> Creates an isolated APIConext */



import { test } from "@playwright/test";


let id : any // GLobal declaration


test.describe.serial(`Test executed in serial mode`,async () => {


test(`Creating an incident in Service Now`, async ({ request }) => {


    // await page.goto(``)


    const response = await request.post(`https://dev231458.service-now.com/api/now/table/change_request`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic YWRtaW46WjkqTGUwd0VMLWFo" //YWRtaW46WjkqTGUwd0VMLWFo --> btoa JS library
            },
            data: {
                "short_description": "Laptop not working created using Playwright API"
            }
        }
    )


    const reponseBody = await response.json()
    console.log(reponseBody); // Convert the object to JSON structure to be printed in the terminal +> deserialization
    
    id = reponseBody.result.sys_id // Retreiving the sys_id from nested JSON // Local declaration




})



test(`Fetch the incident in Service Now`, async ({ request }) => {


    // await page.goto(``)


    const response = await request.get(`https://dev231458.service-now.com/api/now/table/change_request/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic YWRtaW46WjkqTGUwd0VMLWFo" //YWRtaW46WjkqTGUwd0VMLWFo --> btoa JS library
            }
        }
    )


    console.log(await response.json()); // Convert the object to JSON structure to be printed in the terminal +> deserialization
    




})

test(`update the incident in Service Now`, async ({ request }) => {


    // await page.goto(``)


    const response = await request.patch(`https://dev231458.service-now.com/api/now/table/change_request/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic YWRtaW46WjkqTGUwd0VMLWFo" //YWRtaW46WjkqTGUwd0VMLWFo --> btoa JS library
            },
            data: {
                "short_description": "Updated request : Laptop not working - updated using Playwright API"
            }
        }
    )


    console.log(await response.json()); // Convert the object to JSON structure to be printed in the terminal +> deserialization
    




})
test(`delete the incident in Service Now`, async ({ request }) => {


    // await page.goto(``)


    const response = await request.delete(`https://dev231458.service-now.com/api/now/table/change_request/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic YWRtaW46WjkqTGUwd0VMLWFo" //YWRtaW46WjkqTGUwd0VMLWFo --> btoa JS library
            }
            
        }
    )


    
console.log(await response.status());// Convert the object to JSON structure to be printed in the terminal +> deserialization



})
})