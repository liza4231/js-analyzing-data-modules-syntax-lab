require('datejs');

function combineUsers(...args) {
  const combinedObject = {
        users: []
    };

    for (let arr of args) {
      combinedObject.users = [...combinedObject.users, ...arr];
    }

    const today = new Date().toString("M/d/yyyy");
    combinedObject.merge_date = today;

    return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};