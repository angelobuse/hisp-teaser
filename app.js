const tableDiv = document.querySelector("div.teaser") //Find teaser  div in our html

const createTable = () => {
    let jsonInput = prompt('Insert the json input') //Prompt to get the json input 
    let data = JSON.parse(jsonInput); //Convert the json object

    //Create headers of the first table
    let tableOneHeaders = [`${data.headers[1].name} VS ${data.headers[0].name}`, `${data.metaData.names.R7TPl8q81Ft}`, `${data.metaData.names.xGojHNSrFAj}`]

    let tableOneData =[
        [`${data.metaData.names.EzE8xZ31zfC}`, `${data.rows[0][2]}`, `${data.rows[2][2]}`],
        [`${data.metaData.names.hTUspcBc4Yn}`, `${data.rows[1][2]}`, `${data.rows[3][2]}`],
        [`${data.metaData.names.E31SemmmFGb}`, `${data.rows[0][2]}`, `${data.rows[4][2]}`]
    ] 

    

    console.log(data)

    while(tableDiv.firstChild) tableDiv.removeChild(tableDiv.firstChild)  //Remove all children from table div if any

        let table = document.createElement('table') //Create the table itself
        table.className = "table"

        let tableHead = document.createElement('thead') //Create the table header group element

        let tableHeaderRow = document.createElement('tr') //Create the row that will contain the headers
        
        //Iterate over all the strings in tableOneHeaders array and append the table header cells to the table header row
        for (let i = 0; i < tableOneHeaders.length; i++) {
            const element = tableOneHeaders[i];
            console.log(element);
            let headerElement = document.createElement('th') //Create a current header cell during a specific iteration
            headerElement.innerText = element
            tableHeaderRow.append(headerElement) //Append the current header cell to the header row  
        }      

        tableHead.append(tableHeaderRow) // Append the header row to the table header group element
        table.append(tableHead)

        tableDiv.append(table) //Append the table to the teaser div  
        
        //Iterate over all the strings in tablOneData array and append the table body cells to the table header row
        for (let i = 0; i < tableOneData.length; i++) {
        let tableBody = document.createElement('tbody') //Create the table body group element
        let tableBodyRow = document.createElement('tr') //Create the raw that will contain the cells
            var tableData = tableOneData[i]
            for (let j = 0; j < tableData.length; j++) {
                const element = tableOneData[i][j];
                console.log(element);
                let headerElement = document.createElement('td') //Create a cell during a specific iteration
                headerElement.innerText = element
                tableBodyRow.append(headerElement) //Append the current tr cell to the header row 
            }  
        tableBody.append(tableBodyRow) // Append the body row to the table body group element
        table.append(tableBody)
        tableDiv.append(table) //Append the table to the teaser div 
        }


        //Table Two
        let tableTwoHeaders = [`${data.headers[0].name} VS ${data.headers[1].name}`, `${data.metaData.names.EzE8xZ31zfC}`, `${data.metaData.names.hTUspcBc4Yn}`]

        let tableTwoData = [
            [`${data.metaData.names.R7TPl8q81Ft}`,`${data.rows[0][2]}`,`${data.rows[1][2]}`, `${data.rows[3][2]}`],
            [`${data.metaData.names.xGojHNSrFAj}`,`${data.rows[2][2]}`,`${data.rows[4][2]}`, `${data.rows[0][2]}`], 
        ]
        let tableTwo = document.createElement('table') //Create the tableTwo itself
        tableTwo.className = "table"

        let tableTwoHead = document.createElement('thead') //Create the tableTwo header group element

        let tableTwoHeaderRow = document.createElement('tr') //Create the row that will contain the headers
        
        //Iterate over all the strings in tableTwoHeaders array and append the tableTwo header cells to the tableTwo header row
        for (let i = 0; i < tableTwoHeaders.length; i++) {
            const element = tableTwoHeaders[i];
            console.log(element);
            let headerElement = document.createElement('th') //Create a current header cell during a specific iteration
            headerElement.innerText = element
            tableTwoHeaderRow.append(headerElement) //Append the current header cell to the header row  
        }      

        tableTwoHead.append(tableTwoHeaderRow) // Append the header row to the tableTwo header group element
        tableTwo.append(tableTwoHead)

        tableDiv.append(tableTwo) //Append the tableTwo to the teaser div  
        
        //Iterate over all the strings in tablOneData array and append the tableTwo body cells to the tableTwo header row
        for (let i = 0; i < tableTwoData.length; i++) {
        let tableTwoBody = document.createElement('tbody') //Create the tableTwo body group element
        let tableTwoBodyRow = document.createElement('tr') //Create the raw that will contain the cells
            var tableData = tableTwoData[i]
            for (let j = 0; j < tableData.length; j++) {
                const element = tableData[i][j];
                console.log(element);
                let headerElement = document.createElement('td') //Create a cell during a specific iteration
                headerElement.innerText = element
                tableTwoBodyRow.append(headerElement) //Append the current tr cell to the header row 
            }  
        tableTwoBody.append(tableTwoBodyRow) // Append the body row to the tableTwo body group element
        tableTwo.append(tableTwoBody)
        tableDiv.append(tableTwo) //Append the tableTwo to the teaser div 
    }   
}
