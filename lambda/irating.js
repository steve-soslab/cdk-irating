const axios = require('axios')

const futureEventsURL = "https://dw.betia.co/api/future_events/" 
const iRatingURL = "https://dw.betia.co/api/events/irating/"  

/*
*   This lambda returns an array of future events of no parameter is passed
*   If an event_id is passed, it returns the irating of that event
*/

// @ts-ignore
exports.handler = async function(event, context) {
    if(event['event_id'] == undefined) {
        try{
            const futureEvents = await axios.get(futureEventsURL)
            return {
                statusCode: 200,
                body: futureEvents.data
            }
        } catch (err) {
            return {
                statusCode: 500,
                body: JSON.stringify(err)
            }
        }
    }else{
        let eventId=event['event_id']        
        try{
            const market = await axios.get(`${iRatingURL}${eventId}`)
            return {
                statusCode: 200,
                body: market.data
            }
        } catch (err) {
            return {
                statusCode: 500,
                body: JSON.stringify(err)
            }
        }
    }
}