module.exports = {
  consultList: `select * from consults order by datetime desc`,
  consultInsert: `insert into consults set ?`,
};
