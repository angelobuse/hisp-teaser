const tableDiv = document.querySelector("div.teaser") //Find teaser  div in our html

const createTable = () => {
    let jsonInput = prompt('Insert the json input') //Prompt to get the json input 
    let data = JSON.parse(jsonInput); //Convert the json object

    let tableOneHeaders = [`${data.headers[1].name} VS ${data.headers[0].name}`, `${data.metaData.names.R7TPl8q81Ft}`, `${data.metaData.names.xGojHNSrFAj}`]

    let tableTwoHeaders = []

    console.log(data)

    while(tableDiv.firstChild) tableDiv.removeChild(tableDiv.firstChild)  //Remove all children from table div if any

    let table = document.createElement('table') //Create the table itself

    let tableHead = document.createElement('thead') //Create the table header group element

    let tableHeaderRow = document.createElement('th') //Create the row that will contain the headers

    //Iterate over all the strings in tableHeaders array and append the table header cells to the tabkle header row
    for (let i = 0; i < tableOneHeaders.length; i++) {
        const element = tableOneHeaders[i];
        console.log(element);
        let headerElement = document.createElement('th') //Create a current header cell during a specific iteration
        headerElement.innerText = element
        tableHeaderRow.append(headerElement) //Append the current header cell to the header row  
    }

    tableHead.append(tableHeaderRow) // Append the header row to the table header group element
    table.append(tableHead)

    let tableBody = document.createElement('tbody') //Create the table header group element
    table.append(tableBody) //Append the table head group element to the table

    tableDiv.append(table) //Append the table to the teaser div  


}
