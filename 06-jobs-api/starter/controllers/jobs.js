const getAllJobs = (req, res) => {
  res.send(`Get all Jobs`);
};
const getJob = (req, res) => {
  res.send(`Get a Job`);
};
const createJob = (req, res) => {
  res.send(`Create a Job`);
};
const updateJob = (req, res) => {
  res.send(`Update Jobs`);
};
const deleteJob = (req, res) => {
  res.send(`Delete Jobs`);
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
