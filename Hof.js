
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'srikanth' };
        callback(data);
    }, 8000);
}

function processData(fetchFunction) {
    fetchFunction((data) => {
      console.log(data);
    });
}

processData(fetchData);

